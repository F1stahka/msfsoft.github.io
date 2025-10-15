/* =========================================
   MSFSoft — script.js
   Handles theme, language, animations, modals, nav
   ========================================= */

// ============ THEME SWITCHER ============
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
}

themeToggle?.addEventListener('click', () => {
  const theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? '🌙' : '☀️';
});

// ============ LANGUAGE SWITCHER ============
const langToggle = document.querySelector('#lang-toggle');
const allTextNodes = document.querySelectorAll('[data-en][data-ua]');
let currentLang = localStorage.getItem('lang') || 'en';
updateLanguage(currentLang);

langToggle?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ua' : 'en';
  localStorage.setItem('lang', currentLang);
  updateLanguage(currentLang);
  langToggle.innerText = currentLang.toUpperCase();
});

function updateLanguage(lang) {
  allTextNodes.forEach(node => {
    node.textContent = node.getAttribute(`data-${lang}`);
  });
}

// ============ BURGER MENU (mobile nav) ============
const nav = document.querySelector('.nav');
const navClone = nav.cloneNode(true);
const burger = document.createElement('button');
burger.className = 'burger';
burger.innerHTML = `<span></span><span></span><span></span>`;
document.querySelector('.nav-wrap').appendChild(burger);

const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.appendChild(navClone);
document.body.appendChild(mobileMenu);

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  burger.classList.toggle('active');
});

// close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('active');
  })
);

// ============ SCROLL REVEAL ============
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============ MODAL SYSTEM ============
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('[data-modal]');
const modalCloseBtns = document.querySelectorAll('.modal-close');

modalTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-modal');
    const modal = document.getElementById(id);
    modal.classList.add('open');
  });
});

modalCloseBtns.forEach(btn =>
  btn.addEventListener('click', e => {
    e.target.closest('.modal').classList.remove('open');
  })
);

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('open');
  }
});

// ============ CONTACT FORM (dummy send) ============
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting MSFSoft! We’ll reply soon.');
    contactForm.reset();
  });
}

// ============ BURGER & MOBILE MENU STYLES ============
const style = document.createElement('style');
style.textContent = `
.burger {
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 0.4rem;
}
.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--text);
  border-radius: 3px;
  transition: 0.3s ease;
}
.burger.active span:nth-child(1) { transform: rotate(45deg) translateY(8px); }
.burger.active span:nth-child(2) { opacity: 0; }
.burger.active span:nth-child(3) { transform: rotate(-45deg) translateY(-8px); }

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--bg-card);
  transform: translateY(-100%);
  transition: transform 0.4s ease;
  box-shadow: 0 8px 20px var(--shadow);
  z-index: 999;
}
.mobile-menu.open { transform: translateY(0); }
.mobile-menu .nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1.2rem;
}
@media (max-width: 900px) {
  .burger { display: flex; }
}
`;
document.head.appendChild(style);

// ============ ANIMATED BACKGROUND MOVEMENT ============
const heroBG = document.querySelector('.hero-bg');
if (heroBG) {
  let pos = 0;
  setInterval(() => {
    pos += 0.5;
    heroBG.style.backgroundPosition = `${pos}px ${pos / 2}px`;
  }, 100);
}

// ============ FOOTER YEAR ============
const year = new Date().getFullYear();
const footer = document.querySelector('.site-footer');
if (footer) {
  footer.innerHTML = `© ${year} MSFSoft. All rights reserved.`;
}

// ============ INIT COMPLETE ============
console.log("✅ MSFSoft Frontend Loaded Successfully");
