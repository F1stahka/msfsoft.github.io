/* ===========================
   MSFSoft — script.js
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ===== Elements ===== */
  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");
  const modal = document.getElementById("portfolioModal");
  const modalClose = document.querySelector(".modal-close");
  const contactForm = document.getElementById("contactForm");

  /* ===== Theme Handling ===== */
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
  }

  /* ===== Language Handling ===== */
  const texts = {
    en: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      startNow: "Start Now",
      learnMore: "Learn More",
      heroTitle: "Innovative Digital Solutions by MSFSoft",
      heroSub:
        "We create web platforms, apps, and modern IT systems that move the world forward. Founded by Y. F., MSFSoft leads in creative technology.",
      stats: { projects: "Projects", partners: "Partners", countries: "Countries" },
      tech: "Tech Stack",
      aboutText:
        "At MSFSoft, we combine innovation and simplicity to build products that improve everyday digital experiences.",
      portfolioText:
        "Our team works on projects in AI, web apps, and design systems. Each product reflects quality and modern aesthetics.",
      contactTitle: "Contact Us",
      contactInfo:
        "Got an idea or question? Reach out and we’ll reply soon!",
      send: "Send Message",
      rights: "All rights reserved.",
      modalTitle: "Project Details",
    },
    ua: {
      home: "Головна",
      about: "Про нас",
      portfolio: "Портфоліо",
      contact: "Контакти",
      startNow: "Розпочати",
      learnMore: "Детальніше",
      heroTitle: "Інноваційні цифрові рішення від MSFSoft",
      heroSub:
        "Ми створюємо вебплатформи, додатки та сучасні ІТ-системи. Засновник — Ю. Ф., MSFSoft веде у світі креативних технологій.",
      stats: { projects: "Проєктів", partners: "Партнерів", countries: "Країн" },
      tech: "Технології",
      aboutText:
        "У MSFSoft ми поєднуємо інновації та простоту, створюючи продукти, які покращують цифрове життя.",
      portfolioText:
        "Команда працює над проєктами у сфері ШІ, вебдодатків і дизайн-систем. Кожен продукт — це якість і сучасність.",
      contactTitle: "Зв’язок з нами",
      contactInfo:
        "Є ідея чи питання? Напишіть нам — ми відповімо найближчим часом!",
      send: "Відправити",
      rights: "Всі права захищено.",
      modalTitle: "Деталі проєкту",
    },
  };

  const currentLang = localStorage.getItem("lang") || "en";
  setLanguage(currentLang);
  updateLangIcon(currentLang);

  langToggle.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "ua" : "en";
    setLanguage(newLang);
    updateLangIcon(newLang);
    localStorage.setItem("lang", newLang);
    location.reload(); // просте перезавантаження для оновлення текстів
  });

  function updateLangIcon(lang) {
    langToggle.textContent = lang === "en" ? "🇺🇸" : "🇺🇦";
  }

  function setLanguage(lang) {
    const t = texts[lang];

    document.querySelectorAll("nav a")[0].textContent = t.home;
    document.querySelectorAll("nav a")[1].textContent = t.about;
    document.querySelectorAll("nav a")[2].textContent = t.portfolio;
    document.querySelectorAll("nav a")[3].textContent = t.contact;

    document.querySelector(".hero-title").textContent = t.heroTitle;
    document.querySelector(".hero-sub").textContent = t.heroSub;

    document.querySelector(".kpis").children[0].querySelector("span").textContent =
      t.stats.projects;
    document.querySelector(".kpis").children[1].querySelector("span").textContent =
      t.stats.partners;
    document.querySelector(".kpis").children[2].querySelector("span").textContent =
      t.stats.countries;

    document.querySelector(".section-title").textContent = t.tech;
    document.querySelector("#about p").textContent = t.aboutText;
    document.querySelector("#portfolio p").textContent = t.portfolioText;
    document.querySelector("#contact h2").textContent = t.contactTitle;
    document.querySelector("#contact p").textContent = t.contactInfo;

    document.querySelector("footer p").textContent = t.rights;
  }

  /* ===== Reveal Animation ===== */
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );
  reveals.forEach((el) => observer.observe(el));

  /* ===== Modal Portfolio ===== */
  const portfolioCards = document.querySelectorAll("#portfolio .card");
  portfolioCards.forEach((card) => {
    card.addEventListener("click", () => {
      modal.classList.add("open");
      modal.querySelector("h3").textContent =
        localStorage.getItem("lang") === "ua"
          ? "Деталі проєкту"
          : "Project Details";
      modal.querySelector("p").textContent = card.querySelector("p").textContent;
    });
  });
  modalClose.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  /* ===== Contact Form Handling ===== */
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(contactForm).entries());
    console.log("Form Data:", data);

    contactForm.reset();

    const lang = localStorage.getItem("lang") || "en";
    const msg =
      lang === "ua"
        ? "Дякуємо! Ваше повідомлення відправлено."
        : "Thank you! Your message has been sent.";
    alert(msg);
  });
});

