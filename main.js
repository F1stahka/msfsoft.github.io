// main.js - merged and cleaned functionality for MSFSoft site
document.addEventListener('DOMContentLoaded', () => {
  // core
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (window.lucide) lucide.createIcons();

  // reveal observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // hero parallax (light)
  const heroBg = document.querySelector('.hero-bg-image');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const sc = window.pageYOffset;
      heroBg.style.transform = `translateY(${sc * 0.2}px)`;
    }, { passive: true });
  }

  // translations
  const translations = {
    en: {
      navAbout: "About", navSpec: "Specialization", navTeam: "Team", navContact: "Contact",
      heroBtn: "Contact", heroBtnSpec: "Our Specialization",
      heroSubtitle: "We build stable and efficient software solutions, turning complex ideas into reality with clean and reliable code.",
      aboutTitle: "Who We Are", aboutP1: "<strong>MSFSoft is a fresh perspective on the world of software development.</strong> We are a young team, but full of enthusiasm and innovative ideas. Our passion for coding and solving complex problems unites us, allowing us to create effective and reliable IT solutions for a modern digital landscape.",
      specTitle: "Our Specialization", spec1Title: "Website Development", spec1Desc: "From landing pages to complex platforms, we create modern, fast, and responsive websites.", spec2Title: "Software Development", spec2Desc: "We develop custom desktop and server applications to automate processes and solve business tasks.", spec3Title: "Coding & Optimization", spec3Desc: "We write clean, efficient code and can analyze and refactor your existing codebase for better performance.",
      teamTitle: "Our Team", founder: "Founder / Developer", developer: "Developer",
      contactTitle: "Let's Build Something Together", contactSub: "Need a consultation or estimate?", contactDesc: "Write us — we'll prepare a solution plan with an approximate estimate.", contactBtnAction: "Write Us"
    },
    ua: {
      navAbout: "Про нас", navSpec: "Спеціалізація", navTeam: "Команда", navContact: "Контакти",
      heroBtn: "Зв'язатися", heroBtnSpec: "Наша Спеціалізація",
      heroSubtitle: "Ми створюємо стабільні та ефективні програмні рішення, перетворюючи складні ідеї на реальність за допомогою чистого та надійного коду.",
      aboutTitle: "Хто ми є", aboutP1: "<strong>MSFSoft — це свіжий погляд на світ розробки програмного забезпечення.</strong> Ми молода, але сповнена ентузіазму та інноваційних ідей команда. Наша пристрасть до кодування та вирішення складних задач об'єднує нас, дозволяючи створювати ефективні та надійні IT-рішення для сучасного цифрового світу.",
      specTitle: "Наша спеціалізація", spec1Title: "Розробка сайтів", spec1Desc: "Від лендингів до складних платформ, ми створюємо сучасні, швидкі та адаптивні сайти.", spec2Title: "Розробка програм", spec2Desc: "Розробляємо кастомні десктопні та серверні програми для автоматизації процесів та вирішення бізнес-задач.", spec3Title: "Кодинг та оптимізація", spec3Desc: "Пишемо чистий, ефективний код, а також можемо проаналізувати та провести рефакторинг вашого існуючого коду для кращої продуктивності.",
      teamTitle: "Наша команда", founder: "Засновник / Розробник", developer: "Розробник",
      contactTitle: "Створімо щось разом", contactSub: "Потрібна консультація або оцінка?", contactDesc: "Напишіть нам — і ми підготуємо план рішення з орієнтовною оцінкою.", contactBtnAction: "Написати"
    }
  };

  const teamData = {
    en: {
      yura: { name: "Yura F.", role: "Founder / Lead Developer", bio: "A passionate programmer with a love for clean code and elegant solutions. Yura specializes in backend development and system architecture.", photo: "https://raw.githubusercontent.com/F1stahka/msfsoft.github.io/main/Yura.jpg" },
      veronika: { name: "Veronika D.", role: "Frontend Developer", bio: "Frontend specialist creating elegant and accessible interfaces.", photo: "https://raw.githubusercontent.com/F1stahka/msfsoft.github.io/main/Veronika.jpg" }
    },
    ua: {
      yura: { name: "Юра Ф.", role: "Засновник / Головний розробник", bio: "Пристрасний програміст, що обожнює чистий код та елегантні рішення.", photo: "https://raw.githubusercontent.com/F1stahka/msfsoft.github.io/main/Yura.jpg" },
      veronika: { name: "Veronika D.", role: "Фронтенд-розробник", bio: "Фронтенд-спеціаліст, що створює елегантні та доступні інтерфейси.", photo: "https://raw.githubusercontent.com/F1stahka/msfsoft.github.io/main/Veronika.jpg" }
    }
  };

  // language toggler
  let currentLang = 'en'; // user chose EN default
  const langToggleBtn = document.getElementById('lang-toggle');
  const translatable = document.querySelectorAll('[data-key]');
  const modal = document.getElementById('team-modal');
  const modalPhoto = document.getElementById('modal-photo');
  const modalName = document.getElementById('modal-name');
  const modalRole = document.getElementById('modal-role');
  const modalBio = document.getElementById('modal-bio');

  function setLanguage(lang){
    currentLang = lang;
    langToggleBtn.textContent = (lang === 'en') ? 'UA' : 'EN'; // button shows other language
    document.documentElement.lang = lang;
    translatable.forEach(el => {
      const key = el.dataset.key;
      if (!key) return;
      const txt = translations[lang][key];
      if (!txt) return;
      // preserve inline HTML like <strong>
      if (el.tagName === 'P' || el.tagName === 'DIV' || el.tagName === 'SECTION' || el.tagName === 'H2' || el.tagName === 'H4' || el.tagName === 'A') {
        el.innerHTML = txt;
      } else {
        el.textContent = txt;
      }
    });
    // update modal if open
    if (modal && modal.classList.contains('visible')){
      const memberKey = modal.dataset.member;
      if (memberKey) populateModal(memberKey);
    }
  }

  langToggleBtn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ua' : 'en'));
  setLanguage(currentLang);

  // mobile menu
  const mobileOpen = document.getElementById('mobile-open');
  const mobileClose = document.getElementById('mobile-close');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileOpen && mobileClose && mobileMenu){
    mobileOpen.addEventListener('click', ()=>{
      mobileMenu.classList.remove('hidden');
      mobileMenu.setAttribute('aria-hidden','false');
      mobileOpen.setAttribute('aria-expanded','true');
      document.body.style.overflow = 'hidden';
    });
    mobileClose.addEventListener('click', ()=>{
      mobileMenu.classList.add('hidden');
      mobileMenu.setAttribute('aria-hidden','true');
      mobileOpen.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    });
    document.querySelectorAll('.mobile-link').forEach(l=> l.addEventListener('click', ()=>{
      mobileMenu.classList.add('hidden');
      mobileMenu.setAttribute('aria-hidden','true');
      mobileOpen.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    }));
  }

  // team modal logic
  function populateModal(memberKey){
    const info = teamData[currentLang][memberKey];
    if (!info) return;
    modalPhoto.src = info.photo;
    modalPhoto.alt = info.name;
    modalName.textContent = info.name;
    modalRole.textContent = info.role;
    modalBio.textContent = info.bio;
    modal.dataset.member = memberKey;
  }

  document.querySelectorAll('.team-member').forEach(card => {
    const open = () => {
      const member = card.dataset.member;
      populateModal(member);
      modal.classList.add('visible');
      modal.setAttribute('aria-hidden','false');
      // trap focus simple: focus close button
      const closeBtn = document.getElementById('modal-close-btn');
      if (closeBtn) closeBtn.focus();
    };
    card.addEventListener('click', open);
    card.addEventListener('keypress', (e)=> { if(e.key === 'Enter' || e.key === ' ') open(); });
  });

  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn){
    modalCloseBtn.addEventListener('click', ()=> {
      modal.classList.remove('visible');
      modal.setAttribute('aria-hidden','true');
    });
  }
  // close when clicking backdrop
  if (modal) modal.addEventListener('click', (e)=>{ if (e.target === modal) { modal.classList.remove('visible'); modal.setAttribute('aria-hidden','true'); } });
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){ if (modal.classList.contains('visible')) { modal.classList.remove('visible'); modal.setAttribute('aria-hidden','true'); } } });

  // Initialize lucide icons after DOM change
  if (window.lucide) lucide.createIcons();

});
