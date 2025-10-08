const translations = {
  ua: {
    slogan: "Розумні уми. Міцний код. Успішна сім'я.",
    desc: "Інноваційні програмні рішення від команди, що цінує креативність, якість і довіру.",
    contactBtn: "Зв'язатися з нами",
    // Додавайте сюди інші переклади з data-key
  },
  en: {
    slogan: "Smart minds. Strong code. Successful family.",
    desc: "Innovative software solutions built by a team that values creativity, quality, and trust.",
    contactBtn: "Contact Us",
    // Додавайте сюди інші переклади з data-key
  }
};

const langToggle = document.querySelector('.lang-toggle');
const langButtons = document.querySelectorAll('[data-lang]');
const translatableElements = document.querySelectorAll('[data-key]');

// Функція для встановлення мови
const setLanguage = (lang) => {
  translatableElements.forEach(element => {
    const key = element.getAttribute('data-key');
    element.textContent = translations[lang][key];
  });
  
  // Встановлюємо мову в атрибут html для CSS та доступності
  document.documentElement.lang = lang; 
  
  // Оновлюємо активну кнопку
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
};

// Обробник подій для кнопок
langToggle.addEventListener('click', (event) => {
  const selectedLang = event.target.dataset.lang;
  if (selectedLang) {
    setLanguage(selectedLang);
  }
});

// Встановлюємо мову за замовчуванням при завантаженні
setLanguage('ua');
