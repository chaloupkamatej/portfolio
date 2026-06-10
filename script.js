const translations = {
  cs: {
    navAbout: "O mně",
    navProjects: "Projekty",
    navExperience: "Zkušenosti",
    navTech: "Technologie",
    navContact: "Kontakt",

    heroEyebrow: "ERP Developer • PHP • MSSQL • JavaScript",
    heroTitle: "Matěj Chaloupka",
    heroSubtitle: "Vyvíjím interní aplikace a úpravy ERP systému se zaměřením na výkon, databázovou logiku a praktické využití v reálném provozu.",
    heroProjects: "Zobrazit projekty",
    heroContact: "Kontakt",
    heroCardBadge: "Zaměření",
    heroPoint1: "Vývoj a úpravy ERP systémů",
    heroPoint2: "Optimalizace MSSQL dotazů a stored procedur",
    heroPoint3: "Interní webové nástroje a automatizace",
    heroPoint4: "Zaměření na jednoduché a srozumitelné uživatelské rozhraní",

    aboutKicker: "Profil",
    aboutTitle: "O mně",
    aboutText1: "Jsem vývojář se zaměřením na firemní aplikace, ERP prostředí a databázovou logiku. Nejvíce mě baví navrhovat řešení, která zjednodušují práci uživatelů a šetří jejich čas.",
    aboutText2: "V praxi kombinuji PHP, JavaScript a MSSQL. Mám zkušenost s údržbou systémů, návrhem CRUD rozhraní, optimalizací SQL dotazů i automatizací interních procesů.",

    experienceKicker: "Praxe",
    experienceTitle: "Pracovní zkušenosti",
    experienceSubtitle: "Přechod z procesního inženýrství do vývoje mi dal kombinaci technického i provozního pohledu na problémy.",
    exp1Badge: "Současnost",
    exp1Date: "únor 2025 – dnes",
    exp1Title: "ERP Developer",
    exp1Where: "Wabtec, Plzeň",
    exp1Desc: "Vývoj a údržba interních aplikací se zaměřením na databázovou logiku, výkon a automatizaci procesů.",
    exp1Item1: "PHP, JavaScript, MSSQL",
    exp1Item2: "Automatizace procesů",
    exp1Item3: "Vývoj doprovodných aplikací",
    exp1Item4: "Uživatelská podpora",
    exp1Item5: "Vyhledávání a oprava chyb",
    exp1Item6: "Data Import/Export",

    exp2Badge: "Předchozí role",
    exp2Date: "září 2022 – leden 2025",
    exp2Title: "Process engineer",
    exp2Where: "Assa Abloy ES, Ostrov u Stříbra",
    exp2Desc: "Správa výrobních procesů a jejich vylepšování. Zajišťování pracovních postupů a následné proškolení. Implementace nových projektů.",
    exp2Item1: "Nápravná opatření na vzniklé reklamace",
    exp2Item2: "Práce s ERP - BoM, Kanban",
    exp2Item3: "Správa layoutu - AutoCAD",
    exp2Item4: "Výrobní procesy - Lean + Kaizen",
    exp2Item5: "Editace XML souborů pro automatickou linku",
    exp2Item6: "SolidWorks + 3D tisk",

    exp3Badge: "Rekvalifikace",
    exp3Date: "březen 2024 - březen 2025",
    exp3Title: "Rekvalifikační certifikát - Java from scratch",
    exp3Where: "Software Development Academy",
    exp3Desc: "Roční intenzivní kurz se zaměřením na vývoj aplikací pomocí nejnovějších technologií.",
    exp3Item1: "OOP a práce s aplikací jako celkem",
    exp3Item2: "Propojení mezi backendem a frontendem",
    exp3Item3: "Java Spring, Vue.js, MySQL, GitHub",

    projectsKicker: "Výběr práce",
    projectsTitle: "Vybrané projekty",
    projectsSubtitle: "Kvůli firemní bezpečnosti nesdílím interní kód ani citlivé screenshoty. Místo toho uvádím krátké popisy jednotlivých projektů.",
    tagCaseStudy: "Case Study",
    tagInternalTool: "Interní nástroj",
    tagAutomation: "Automatizace",

    project1Tag: "Case study",
    project1Title: "Optimalizace ERP dotazů",
    project1Summary: "Zrychlení databázových operací nad větším objemem dat v interním systému.",
    project1ProblemLabel: "Problém:",
    project1Problem: "Pomalé dotazy nad velkým objemem dat způsobovaly zbytečné prodlevy v práci uživatelů.",
    project1SolutionLabel: "Řešení:",
    project1Solution: "Návrh indexů, úprava SQL logiky a omezení neefektivních částí dotazů.",
    project1ResultLabel: "Dopad:",
    project1Result: "Citelně rychlejší odezva a lepší použitelnost v běžném provozu.",

    project2Tag: "Interní aplikace",
    project2Title: "Rezervační systém pracovních stolů",
    project2Summary: "Webová aplikace pro správu rezervací v režimu hybridní práce.",
    project2FocusLabel: "Zaměření:",
    project2Focus: "Jednoduché ovládání, přehledné UI a spolehlivá správa rezervací.",
    project2FeaturesLabel: "Řešení:",
    project2Features: "CRUD operace, validační logika a modelace reálného layoutu.",
    project2BenefitLabel: "Dopad:",
    project2Benefit: "Zjednodušení správy pracovních míst a lepší orientace uživatelů.",

    project3Tag: "Automatizace",
    project3Title: "Automatizace FAI procesu",
    project3Summary: "Návrh úprav a nástrojů pro omezení ručních kroků v každodenní operativě.",
    project3GoalLabel: "Cíl:",
    project3Goal: "Snížit chybovost, zrychlit opakované úkony a zautomatizovat emailovou komunikaci s dodavatelem.",
    project3OutcomeLabel: "Výsledek:",
    project3Outcome: "Po nahrání souboru FAI do systému - automatické propsání dat a informování dodavatele o výsledku.",

    project4Tag: "Interní aplikace",
    project4Title: "Mobilní aplikace pro expedici",
    project4Summary: "Mobilní aplikace pro čtení čárových kódů zakázek, fotografování finálního balení a následné uložení do sdílených složek OneDrive.",
    project4FeaturesLabel: "Řešení:",
    project4Features: "Android aplikace psaná v Kotlinu pomocí AI nástrojů (Copilot), Android Studia a Microsoft endpointů",
    project4BenefitLabel: "Dopad:",
    project4Benefit: "Zjednodušení procesu finální kontroly a uložení fotodokumentace na jedno místo.",

    project5Tag: "Automatizace",
    project5Title: "Potvrzování zakázek",
    project5Summary: "Automatizace generování PDF dokumentů pro potvrzení zakázek a jejich následné emailové komunikace ve třech jazycích.",
    project5GoalLabel: "Cíl:",
    project5Goal: "Zrychlení opakovaných úkonů a generování + design pdf dokumentů.",
    project5OutcomeLabel: "Výsledek:",
    project5Outcome: "Automatické generování a zasílání dokumentů pro potvrzení zakázek.",

    detailBtn: "Detail",
    problemLabel: "Problém:",
    solutionLabel: "Řešení:",
    resultLabel: "Dopad:",
    focusLabel: "Zaměření:",
    featuresLabel: "Funkce:",
    benefitLabel: "Přínos:",

    techKicker: "Stack",
    techTitle: "Technologie",
    techApproachTitle: "Dovednosti",
    techApproach1: "Angličtina - B1",
    techApproach2: "Týmová spolupráce",
    techApproach3: "Kritické myšlení",
    techApproach4: "Schopnost rychle se učit",

    contactKicker: "Spojení",
    contactTitle: "Kontakt",
    contactCardTitle: "Pojďme se spojit",
    contactCardText: "Pokud Vás zaujal můj profil, budu rád za kontakt ohledně spolupráce nebo technických projektů.",
    cvTitle: "CV ke stažení",
    cvText: "K dispozici je česká i anglická verze životopisu v PDF.",
    cvCz: "Stáhnout CV (CZ)",
    cvEn: "Download CV (EN)",

    footerText: "© 2026 Matěj Chaloupka. Vytvořeno jako osobní životopis."
  },

  en: {
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navTech: "Technology",
    navContact: "Contact",

    heroEyebrow: "ERP Developer • PHP • MSSQL • JavaScript",
    heroTitle: "Matěj Chaloupka",
    heroSubtitle: "I develop internal applications and ERP system customizations with a focus on performance, database logic, and practical use in real operations.",
    heroProjects: "View projects",
    heroContact: "Contact",
    heroCardBadge: "Focus",
    heroPoint1: "ERP system development and customization",
    heroPoint2: "MSSQL query and stored procedure optimization",
    heroPoint3: "Internal web tools and automation",
    heroPoint4: "Focus on simple and intuitive user interfaces",

    aboutKicker: "Profile",
    aboutTitle: "About me",
    aboutText1: "I am a developer focused on business applications, ERP environments, and database logic. I enjoy designing solutions that simplify users’ work and save their time.",
    aboutText2: "In practice, I combine PHP, JavaScript, and MSSQL. I have experience with system maintenance, CRUD interface design, SQL query optimization, and internal process automation.",

    experienceKicker: "Experience",
    experienceTitle: "Work experience",
    experienceSubtitle: "My transition from process engineering to development gave me both technical and operational perspective on solving problems.",
    exp1Badge: "Present",
    exp1Date: "February 2025 – present",
    exp1Title: "ERP Developer",
    exp1Where: "Wabtec, Plzeň",
    exp1Desc: "Development and maintenance of internal applications with a focus on database logic, performance, and process automation.",
    exp1Item1: "PHP, JavaScript, MSSQL",
    exp1Item2: "Process automation",
    exp1Item3: "Development of supporting applications",
    exp1Item4: "User support",
    exp1Item5: "Debugging",
    exp1Item6: "Data import/export",

    exp2Badge: "Previous role",
    exp2Date: "September 2022 – January 2025",
    exp2Title: "Process Engineer",
    exp2Where: "Assa Abloy ES, Ostrov u Stříbra",
    exp2Desc: "Management and optimization of production processes, workflow setup, training, and implementation of new projects.",
    exp2Item1: "Corrective actions for customer complaints",
    exp2Item2: "ERP work – BoM, Kanban",
    exp2Item3: "Layout management – AutoCAD",
    exp2Item4: "Production processes – Lean & Kaizen",
    exp2Item5: "Editing XML files for automatic production line",
    exp2Item6: "SolidWorks & 3D printing",

    exp3Badge: "Reskilling",
    exp3Date: "March 2024 – March 2025",
    exp3Title: "Reskilling certificate – Java from scratch",
    exp3Where: "Software Development Academy",
    exp3Desc: "One-year intensive course focused on application development using modern technologies.",
    exp3Item1: "OOP and application structure",
    exp3Item2: "Backend–frontend integration",
    exp3Item3: "Java Spring, Vue.js, MySQL, GitHub",

    projectsKicker: "Selected work",
    projectsTitle: "Projects",
    projectsSubtitle: "Due to company policy, I don’t share internal code or sensitive screenshots. Instead, I provide short summaries of selected projects.",
    tagCaseStudy: "Case Study",
    tagInternalTool: "Internal tool",
    tagAutomation: "Automation",

    project1Tag: "Case study",
    project1Title: "ERP Query Optimization",
    project1Summary: "Improved performance of database operations on large data sets within an internal system.",
    project1ProblemLabel: "Problem:",
    project1Problem: "Slow queries on large datasets were causing delays in user workflows.",
    project1SolutionLabel: "Solution:",
    project1Solution: "Designed indexes, adjusted SQL logic, and removed inefficient parts of queries.",
    project1ResultLabel: "Impact:",
    project1Result: "Significantly faster response times and improved usability in daily operation.",

    project2Tag: "Internal application",
    project2Title: "Desk Reservation System",
    project2Summary: "Web application for managing desk reservations in a hybrid work environment.",
    project2FocusLabel: "Focus:",
    project2Focus: "Simple user experience, clear interface, and reliable reservation management.",
    project2FeaturesLabel: "Solution:",
    project2Features: "CRUD operations, validation logic, and modeling of real workspace layout.",
    project2BenefitLabel: "Impact:",
    project2Benefit: "Simplified desk management and better user orientation.",

    project3Tag: "Automation",
    project3Title: "FAI Process Automation",
    project3Summary: "Design of adjustments and tools to reduce manual steps in daily operations.",
    project3GoalLabel: "Goal:",
    project3Goal: "Reduce errors, speed up repetitive tasks, and automate email communication with suppliers.",
    project3OutcomeLabel: "Result:",
    project3Outcome: "Automatic data processing after file upload and supplier notification with results.",

    project4Tag: "Internal application",
    project4Title: "Mobile App for Expedition",
    project4Summary: "Mobile application for barcode scanning, photographing final packaging, and storing results in shared OneDrive folders.",
    project4FeaturesLabel: "Solution:",
    project4Features: "Android application built in Kotlin using AI tools, Android Studio, and Microsoft endpoints.",
    project4BenefitLabel: "Impact:",
    project4Benefit: "Structured support for final quality control.",

    project5Tag: "Automation",
    project5Title: "Order Confirmation Automation",
    project5Summary: "Automation for generating PDF documents and sending confirmation emails in three languages.",
    project5GoalLabel: "Goal:",
    project5Goal: "Speed up repetitive tasks and automate document generation and formatting.",
    project5OutcomeLabel: "Result:",
    project5Outcome: "Automatic generation and sending of order confirmation documents.",

    detailBtn: "Details",
    problemLabel: "Problem:",
    solutionLabel: "Solution:",
    resultLabel: "Impact:",
    focusLabel: "Focus:",
    featuresLabel: "Features:",
    benefitLabel: "Benefit:",

    techKicker: "Stack",
    techTitle: "Technology",
    techApproachTitle: "Skills",
    techApproach1: "English – B1",
    techApproach2: "Team collaboration",
    techApproach3: "Critical thinking",
    techApproach4: "Fast learning ability",

    contactKicker: "Connect",
    contactTitle: "Contact",
    contactCardTitle: "Let’s connect",
    contactCardText: "If my profile is relevant to you, feel free to contact me regarding collaboration or technical projects.",
    cvTitle: "Download CV",
    cvText: "Both Czech and English versions of my CV are available in PDF.",
    cvCz: "Download CV (CZ)",
    cvEn: "Download CV (EN)",

    footerText: "© 2026 Matěj Chaloupka. Personal portfolio."
    } 
};

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  const translatableNodes = document.querySelectorAll("[data-i18n]");
  const detailButtons = document.querySelectorAll(".project-toggle");
  const revealItems = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  const SCROLL_OFFSET = 110;

  // -----------------------------
  // Helpers
  // -----------------------------
  function getHideDetailText(lang) {
    if (translations?.[lang]?.hideDetailBtn) {
      return translations[lang].hideDetailBtn;
    }
    return lang === "cs" ? "Skrýt detail" : "Hide details";
  }

  function closeMobileMenu() {
    if (!nav || !menuToggle) return;

    nav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function openMobileMenu() {
    if (!nav || !menuToggle) return;

    nav.classList.add("open");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function updateDetailButtonsText(lang) {
    detailButtons.forEach((btn) => {
      const detail = btn.nextElementSibling;
      if (!detail) return;

      const isOpen = detail.classList.contains("open");
      btn.textContent = isOpen
        ? getHideDetailText(lang)
        : (translations?.[lang]?.detailBtn || "Detail");
    });
  }

  // -----------------------------
  // Language switch
  // -----------------------------
  function setLanguage(lang) {
    translatableNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent =
        translations?.[lang]?.[key] ??
        translations?.cs?.[key] ??
        "";
    });

    document.documentElement.lang = lang === "cs" ? "cs" : "en";
    localStorage.setItem("portfolio-lang", lang);

    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    updateDetailButtonsText(lang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // -----------------------------
  // Smooth scroll for anchors
  // -----------------------------
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.offsetTop - SCROLL_OFFSET;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // pokud je to link v mobilním menu, zavři menu
      if (nav && nav.contains(this)) {
        closeMobileMenu();
      }
    });
  });

  // -----------------------------
  // Project details toggle
  // -----------------------------
  detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const detail = btn.nextElementSibling;
      if (!detail) return;

      detail.classList.toggle("open");

      const currentLang = localStorage.getItem("portfolio-lang") || "cs";
      const isOpen = detail.classList.contains("open");

      btn.textContent = isOpen
        ? getHideDetailText(currentLang)
        : (translations?.[currentLang]?.detailBtn || "Detail");
    });
  });

  // -----------------------------
  // Reveal animations
  // -----------------------------
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));

  // -----------------------------
  // Active nav highlighting
  // -----------------------------
  function updateActiveNav() {
    if (!sections.length || !navLinks.length) return;

    const offset = 120;
    let currentId = "";
    let closestDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // sekce musí být aspoň trochu vidět
      const isVisible =
        rect.bottom > offset && rect.top < window.innerHeight * 0.8;

      if (isVisible) {
        const distance = Math.abs(rect.top - offset);

        if (distance < closestDistance) {
          closestDistance = distance;
          currentId = section.id;
        }
      }
    });

    // pokud jsme skoro úplně dole, zvýrazni poslední sekci
    const nearBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;

    if (nearBottom && sections.length) {
      currentId = sections[sections.length - 1].id;
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  window.addEventListener("resize", updateActiveNav);

  // -----------------------------
  // Mobile menu toggle
  // -----------------------------
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("open");

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // klik mimo menu => zavřít
    document.addEventListener("click", (e) => {
      if (
        nav.classList.contains("open") &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    // Esc => zavřít
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  // -----------------------------
  // Init
  // -----------------------------
  const savedLang = localStorage.getItem("portfolio-lang") || "cs";
  setLanguage(savedLang);
  updateActiveNav();
});
``
