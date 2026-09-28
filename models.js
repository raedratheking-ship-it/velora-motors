/* ============================================================
   VÉLORA MOTORS — models.js
   ============================================================ */

const MODELS = [
  {
    id: 's1',
    name: 'VÉLORA S1',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    hp: '620',
    accel: '3.2',
    top: '310',
    price: { en: '$285,000', ar: '٢٨٥٬٠٠٠ $', fr: '285 000 $' },
    engine: { en: '4.0L Twin-Turbo V8', ar: 'V8 ثنائي التوربو ٤.٠ لتر', fr: 'V8 Biturbo 4.0L' },
    short: {
      en: 'A pure expression of speed and control.',
      ar: 'تعبير خالص عن السرعة والتحكم.',
      fr: 'Une expression pure de vitesse et de contrôle.'
    },
    desc: {
      en: 'The S1 is the sharpest instrument in the VÉLORA range. Every component is tuned for immediacy — from the responses of the twin-turbo V8 to the feedback of the hydraulic-assisted steering. It is a car built for the driver who reads the road.',
      ar: 'الـ S1 هي الأداة الأكثر حدة في مجموعة فيلورا. كل مكون تم ضبطه للاستجابة الفورية — من محرك V8 ثنائي التوربو إلى ردود فعل نظام التوجيه. سيارة صُممت للسائق الذي يقرأ الطريق.',
      fr: "La S1 est l'instrument le plus affûté de la gamme VÉLORA. Chaque composant est réglé pour l'immédiateté — des réponses du V8 biturbo au retour de la direction assistée. Une voiture conçue pour le conducteur qui lit la route."
    },
    featured: true
  },
  {
    id: 'gt',
    name: 'VÉLORA GT',
    category: 'gt',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
    hp: '720',
    accel: '3.0',
    top: '330',
    price: { en: '$395,000', ar: '٣٩٥٬٠٠٠ $', fr: '395 000 $' },
    engine: { en: '5.2L Twin-Turbo V10', ar: 'V10 ثنائي التوربو ٥.٢ لتر', fr: 'V10 Biturbo 5.2L' },
    short: {
      en: 'Grand touring, perfected.',
      ar: 'سيارة جراند تورر في أبهى صورها.',
      fr: 'Le grand tourisme, perfectionné.'
    },
    desc: {
      en: 'The GT was designed for distance. A continent-crossing machine that isolates its occupants from fatigue while never diluting the sensation of speed. It is the most refined VÉLORA ever built — and the most powerful.',
      ar: 'صُممت GT للمسافات الطويلة. آلة تعبر القارات وتعزل ركابها عن الإرهاق دون أن تُخفف من إحساس السرعة. إنها أكثر سيارة فيلورا تطورًا — وأقواها.',
      fr: "La GT a été conçue pour la distance. Une machine à traverser les continents qui isole ses occupants de la fatigue sans jamais diluer la sensation de vitesse. C'est la VÉLORA la plus raffinée jamais construite — et la plus puissante."
    },
    featured: true
  },
  {
    id: 'x',
    name: 'VÉLORA X',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80',
    hp: '580',
    accel: '3.8',
    top: '290',
    price: { en: '$310,000', ar: '٣١٠٬٠٠٠ $', fr: '310 000 $' },
    engine: { en: '4.0L Twin-Turbo V8', ar: 'V8 ثنائي التوربو ٤.٠ لتر', fr: 'V8 Biturbo 4.0L' },
    short: {
      en: 'Luxury SUV without compromise.',
      ar: 'سيارة دفع رباعي فاخرة بلا تنازلات.',
      fr: 'SUV de luxe sans compromis.'
    },
    desc: {
      en: 'The X brings VÉLORA dynamics to a shape that was never supposed to move like this. Elevated seating, commanding presence and a chassis that refuses to acknowledge its own weight. Practicality, without apology.',
      ar: 'تقدم X ديناميكيات فيلورا في هيكل لم يكن مُفترضًا أن يتحرك هكذا. مقاعد مرتفعة، حضور مهيب، وهيكل يرفض الاعتراف بثقله. عملية، دون اعتذار.',
      fr: "La X apporte la dynamique VÉLORA à une silhouette qui n'était pas censée bouger ainsi. Position de conduite surélevée, présence imposante et un châssis qui refuse d'admettre son propre poids. La praticité, sans excuse."
    },
    featured: true
  },
  {
    id: 's1r',
    name: 'VÉLORA S1 R',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80',
    hp: '830',
    accel: '2.7',
    top: '345',
    price: { en: '$520,000', ar: '٥٢٠٬٠٠٠ $', fr: '520 000 $' },
    engine: { en: '4.0L Twin-Turbo V8 · Track Spec', ar: 'V8 ثنائي التوربو ٤.٠ لتر · مواصفات حلبة', fr: 'V8 Biturbo 4.0L · Spec Piste' },
    short: {
      en: 'Track-bred. Road-legal.',
      ar: 'وُلدت في الحلبة. مرخّصة للطريق.',
      fr: 'Née sur piste. Homologuée route.'
    },
    desc: {
      en: 'The S1 R is the most focused machine we have ever released. Weight reduced, downforce increased, and every electronic system recalibrated around one goal: lap time. It remains, technically, a road car.',
      ar: 'الـ S1 R هي أكثر آلة مركزة أطلقناها على الإطلاق. وزن أقل، قوة ضغط أعلى، وكل نظام إلكتروني أُعيد ضبطه حول هدف واحد: زمن اللفة. وتبقى، تقنيًا، سيارة طرق.',
      fr: "La S1 R est la machine la plus affûtée que nous ayons jamais produite. Poids réduit, appui augmenté, et chaque système électronique recalibré autour d'un seul objectif : le temps au tour. Elle reste, techniquement, une voiture de route."
    }
  },
  {
    id: 'gtspyder',
    name: 'VÉLORA GT SPYDER',
    category: 'gt',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1400&q=80',
    hp: '710',
    accel: '3.1',
    top: '325',
    price: { en: '$445,000', ar: '٤٤٥٬٠٠٠ $', fr: '445 000 $' },
    engine: { en: '5.2L Twin-Turbo V10', ar: 'V10 ثنائي التوربو ٥.٢ لتر', fr: 'V10 Biturbo 5.2L' },
    short: {
      en: 'Open-air grand touring.',
      ar: 'جراند تورر مكشوفة.',
      fr: 'Grand tourisme à ciel ouvert.'
    },
    desc: {
      en: 'The GT Spyder removes the roof without removing the composure. A structural redesign keeps the chassis as rigid as the coupé, while a fully automatic soft-top disappears in under twelve seconds — at speeds up to 60 km/h.',
      ar: 'تزيل GT سبايدر السقف دون أن تمسك بالرصانة. تصميم هيكلي جديد يحافظ على صلابة الكوبيه، بينما يختفي السقف القماشي الأوتوماتيكي في أقل من اثنتي عشرة ثانية — حتى سرعة ٦٠ كم/س.',
      fr: "La GT Spyder enlève le toit sans enlever la tenue. Une refonte structurelle garde le châssis aussi rigide que le coupé, tandis qu'une capote entièrement automatique disparaît en moins de douze secondes — jusqu'à 60 km/h."
    }
  },
  {
    id: 'x7',
    name: 'VÉLORA X7',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80',
    hp: '650',
    accel: '3.6',
    top: '305',
    price: { en: '$365,000', ar: '٣٦٥٬٠٠٠ $', fr: '365 000 $' },
    engine: { en: '4.0L Twin-Turbo V8 · Hybrid Assist', ar: 'V8 ثنائي التوربو ٤.٠ لتر · دعم هجين', fr: 'V8 Biturbo 4.0L · Assistance hybride' },
    short: {
      en: 'Seven seats. Zero compromise.',
      ar: 'سبعة مقاعد. صفر تنازلات.',
      fr: 'Sept places. Zéro compromis.'
    },
    desc: {
      en: 'The X7 extends the VÉLORA philosophy to seven occupants. A hybrid-assisted powertrain delivers instant torque while a re-engineered air suspension preserves the signature VÉLORA ride — even when fully loaded.',
      ar: 'توسّع X7 فلسفة فيلورا لتشمل سبعة ركاب. نظام دفع مدعوم هجينيًا يوفر عزمًا فوريًا، بينما يحافظ نظام التعليق الهوائي المُعاد هندسته على تجربة فيلورا المميزة — حتى مع الحمولة الكاملة.',
      fr: "La X7 étend la philosophie VÉLORA à sept occupants. Un groupe motopropulseur assisté par hybridation offre un couple instantané, tandis qu'une suspension pneumatique repensée préserve le confort signature VÉLORA — même à pleine charge."
    }
  }
];

function getText(obj, lang) {
  if (!obj) return '';
  return obj[lang] || obj.en || '';
}

function renderFeatured(lang) {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featured = MODELS.filter(m => m.featured);
  grid.innerHTML = featured.map(m => `
    <article class="fcard reveal" data-model="${m.id}">
      <div class="fcard__media">
        <span class="fcard__cat">${translations[lang]['tab.' + m.category] || m.category}</span>
        <img src="${m.image}" alt="${m.name}" loading="lazy">
      </div>
      <div class="fcard__body">
        <h3 class="fcard__name">${m.name}</h3>
        <p class="fcard__info">${getText(m.short, lang)}</p>
        <button class="fcard__link" data-open="${m.id}">
          ${translations[lang]['modal.view']}
        </button>
      </div>
    </article>
  `).join('');
}

function renderShowcase(lang, filter = 'all') {
  const grid = document.getElementById('showcaseGrid');
  const empty = document.getElementById('showcaseEmpty');
  if (!grid) return;

  const list = filter === 'all'
    ? MODELS
    : MODELS.filter(m => m.category === filter);

  if (!list.length) {
    grid.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  grid.innerHTML = list.map(m => `
    <article class="scard reveal" data-model="${m.id}">
      <div class="scard__media">
        <span class="scard__cat">${translations[lang]['tab.' + m.category] || m.category}</span>
        <img src="${m.image}" alt="${m.name}" loading="lazy">
      </div>
      <div class="scard__body">
        <h3 class="scard__name">${m.name}</h3>

        <dl class="scard__specs">
          <div>
            <dt>${translations[lang]['modal.power']}</dt>
            <dd>${m.hp} HP</dd>
          </div>
          <div>
            <dt>${translations[lang]['modal.accel']}</dt>
            <dd>${m.accel}s</dd>
          </div>
          <div>
            <dt>${translations[lang]['modal.top']}</dt>
            <dd>${m.top} km/h</dd>
          </div>
        </dl>

        <div class="scard__price">
          <span>${translations[lang]['modal.starting']}</span>
          <b>${getText(m.price, lang)}</b>
        </div>

        <button class="scard__btn" data-open="${m.id}">
          ${translations[lang]['modal.viewDetails']}
        </button>
      </div>
    </article>
  `).join('');

  if (window.VeloraReveal) window.VeloraReveal();
}

function getModelById(id) {
  return MODELS.find(m => m.id === id);
}