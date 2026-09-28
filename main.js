/* ============================================================
   VÉLORA MOTORS — main.js
   ============================================================ */

(function () {
  'use strict';

  const state = {
    lang: localStorage.getItem('velora-lang') || 'en',
    filter: 'all',
    currentModel: null,
    lastFocus: null
  };

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ============ LANGUAGE ============ */
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    state.lang = lang;
    localStorage.setItem('velora-lang', lang);

    const meta = LANGS[lang];
    document.documentElement.lang = meta.code;
    document.documentElement.dir  = meta.dir;

    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    $$('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (translations[lang][key]) el.setAttribute('aria-label', translations[lang][key]);
    });

    const current = $('#langCurrent');
    if (current) current.textContent = meta.label;

    $$('.mmenu__langs button').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    renderFeatured(lang);
    renderShowcase(lang, state.filter);

    if (state.currentModel) fillModal(state.currentModel, lang);
    if (window.VeloraReveal) window.VeloraReveal();
  }

  function initLanguageDropdown() {
    const wrap = $('#lang');
    const btn  = $('#langBtn');
    const menu = $('#langMenu');
    if (!wrap || !btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = wrap.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menu.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-lang]');
      if (!b) return;
      setLanguage(b.dataset.lang);
      wrap.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        wrap.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initMobileLang() {
    $$('.mmenu__langs button').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  /* ============ MOBILE MENU ============ */
  function initMobileMenu() {
    const burger = $('#burger');
    const mmenu  = $('#mmenu');
    if (!burger || !mmenu) return;

    const links = $$('.mmenu__nav a');

    function open() {
      mmenu.classList.add('is-open');
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      mmenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      mmenu.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      mmenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
      if (mmenu.classList.contains('is-open')) close();
      else open();
    });

    links.forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mmenu.classList.contains('is-open')) close();
    });
  }

  /* ============ STICKY NAV ============ */
  function initStickyNav() {
    const nav = $('#nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ============ ACTIVE NAV ============ */
  function initActiveNav() {
    const links = $$('.nav__links a');
    if (!links.length) return;

    const sections = links
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = null;
      sections.forEach(sec => { if (sec.offsetTop <= y) current = sec.id; });
      links.forEach(a => {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ============ SMOOTH SCROLL ============ */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#' || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ============ REVEAL ============ */
  let revealObserver = null;

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    observeReveals();
  }

  function observeReveals() {
    if (!revealObserver) return;
    $$('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
  }
  window.VeloraReveal = observeReveals;

  /* ============ COUNTERS ============ */
  function initCounters() {
    const counters = $$('[data-count]');
    if (!counters.length || !('IntersectionObserver' in window)) {
      counters.forEach(el => el.textContent = el.dataset.count);
      return;
    }

    const animate = (el) => {
      const target   = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const duration = 1800;
      const start    = performance.now();

      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toString();
      }
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => obs.observe(c));
  }

  /* ============ PARALLAX ============ */
  function initParallax() {
    const img = $('#expImg');
    const section = $('#experience');
    if (!img || !section) return;

    let ticking = false;

    function update() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) { ticking = false; return; }
      const progress = (vh - rect.top) / (vh + rect.height);
      const shift = (progress - 0.5) * 100;
      img.style.transform = `translate3d(0, ${shift}px, 0) scale(1.12)`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  /* ============ FILTERS ============ */
  function initFilters() {
    const tabs = $$('.tab');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.filter;
        state.filter = filter;

        tabs.forEach(t => {
          const active = t === tab;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        renderShowcase(state.lang, filter);
      });
    });
  }

  /* ============ MODAL ============ */
  function fillModal(model, lang) {
    const img    = $('#modalImg');
    const cat    = $('#modalCat');
    const title  = $('#modalTitle');
    const desc   = $('#modalDesc');
    const specs  = $('#modalSpecs');
    if (!img || !title) return;

    img.src = model.image;
    img.alt = model.name;

    cat.textContent   = translations[lang]['tab.' + model.category] || model.category;
    title.textContent = model.name;
    desc.textContent  = getText(model.desc, lang);

    specs.innerHTML = `
      <div>
        <dt>${translations[lang]['modal.engine']}</dt>
        <dd>${getText(model.engine, lang)}</dd>
      </div>
      <div>
        <dt>${translations[lang]['modal.power']}</dt>
        <dd>${model.hp} HP</dd>
      </div>
      <div>
        <dt>${translations[lang]['modal.accel']}</dt>
        <dd>${model.accel}s</dd>
      </div>
      <div>
        <dt>${translations[lang]['modal.top']}</dt>
        <dd>${model.top} km/h</dd>
      </div>
    `;
  }

  function openModal(id) {
    const modal = $('#modal');
    const model = getModelById(id);
    if (!modal || !model) return;

    state.currentModel = model;
    state.lastFocus    = document.activeElement;

    fillModal(model, state.lang);

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const closeBtn = modal.querySelector('.modal__close');
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  function closeModal() {
    const modal = $('#modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.currentModel = null;
    if (state.lastFocus && typeof state.lastFocus.focus === 'function') state.lastFocus.focus();
  }

  function initModal() {
    const modal = $('#modal');
    if (!modal) return;

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-open]');
      if (!btn) return;
      e.preventDefault();
      openModal(btn.dataset.open);
    });

    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  /* ============ INIT ============ */
  function init() {
    setLanguage(state.lang);
    initLanguageDropdown();
    initMobileLang();
    initMobileMenu();
    initStickyNav();
    initActiveNav();
    initSmoothScroll();
    initReveal();
    initCounters();
    initParallax();
    initFilters();
    initModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();