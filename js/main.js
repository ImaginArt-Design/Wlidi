/**
 * Wlidi (وليدي) — Script Officiel du Site Vitrine
 * Gestion bilingue (Arabe / Français), FAQ interactive et interactions fluides
 * Auteur : Imagin'Art — Laabidi Abdelghani
 */

const DICT = {
  ar: {
    // Navigation
    navFeatures: "المميزات",
    navSteps: "كيف يعمل",
    navDemo: "فيديو توضيحي",
    navMassar: "التوافق مع مسار",
    navDownload: "تحميل البرنامج (550 Ko)",
    langBtn: "Français",

    // Hero
    heroPill: "🕊️ صدقة جارية لروح والدي العزيز رحمه الله — تطبيق مجاني 100% للأساتذة الكرام",
    heroTitlePrefix: "أسرع وأذكى طريقة",
    heroTitleHighlight: "لمسك نقط مسار بالصوت 🎙️",
    heroDesc: "قل وداعاً لإدخال النقط اليدوي المرهق رقماً برقم. افتح ملف إكسيل مسار، وانطق أسماء التلاميذ ونقطهم بالدارجة أو العربية الفصحى، ليقوم \"وليدي\" بمطابقة الأسماء وتسجيل النقط فورياً بدقة 100%.",
    btnDownloadHero: "تحميل برنامج وليدي مجاناً (Wlidi.zip)",
    btnDemoHero: "مشاهدة العرض التوضيحي ▶️",
    badgeOffline: "يعمل 100% بدون إنترنت",
    badgePortable: "برنامج محمول خفيف (550 Ko)",
    badgeMassar: "متوافق 100% مع إكسيل مسار",
    badgeFree: "مجاني بالكامل مدى الحياة",

    // Massar Strip
    massarTitle: "تكامل رسمي ومطابقة بنسبة 100% مع منظومة مسار",
    massarSub: "وزارة التربية الوطنية والتعليم الأولي والرياضة — المملكة المغربية",
    massarTag1: "صيغة Export_...xlsx الأصلية",
    massarTag2: "حفظ المعرفات وورقة Data",
    massarTag3: "معالجة الغياب (غائب = 0)",

    // Video Section
    videoBadge: "تجربة حية وسريعة",
    videoTitle: "شاهد كيف يملأ وليدي قسماً كاملاً في دقيقتين فقط",
    videoSub: "تسجيل حقيقي لشاشة البرنامج أثناء إملاء النقط ومطابقة الأسماء بالدارجة المغربية.",

    // Steps
    stepsBadge: "بساطة وسرعة فائقة",
    stepsTitle: "كيف يعمل في 3 خطوات بسيطة ؟",
    stepsSub: "بدون أي تعقيد، مجهز خصيصاً ليتماشى مع الروتين اليومي للأستاذ المغربي.",
    step1Title: "1. حمّل ملف إكسيل من مسار",
    step1Desc: "قم بتصدير لائحة النقط (Export_...xlsx) من حسابك في منظومة مسار كالمعتاد بدون أي تغيير.",
    step2Title: "2. انطق الأسماء والنقط بصوتك",
    step2Desc: "افتح وليدي واضغط على المايكروفون. انطق مثلاً: \"العلمي يوسف 16\" أو \"حسام 15.5\" بكل راحة.",
    step3Title: "3. احفظ وارفعه لمسار بنقرة واحدة",
    step3Desc: "اضغط (Ctrl+S) لحفظ النقط مباشرة في نفس الملف، ثم ارفعه مباشرة إلى موقع مسار بنجاح تام.",

    // Features
    featBadge: "مزايا صُممت للأستاذ",
    featTitle: "لماذا يفضل الأساتذة برنامج وليدي ؟",
    featSub: "صُمم البرنامج بحرفية عالية ليوفر ساعات طويلة من الإرهاق والتدقيق اليدوي.",
    feat1Title: "إملاء صوتي مغربي ذكي",
    feat1Desc: "يتعرف بسلاسة على النطق المغربي الدارج والفصيح، ويفهم الأرقام والكسور (نصف، ربع، لاروب).",
    feat2Title: "تطابق جراحي مع إكسيل مسار",
    feat2Desc: "يقرأ ويكتب في ورقة NotesCC دون المساس بورقة Data الخفية أو الرموز البرمجية للوزارة.",
    feat3Title: "حفظ فوري في الملف الأصلي",
    feat3Desc: "احفظ كل تعديلاتك مباشرة في نفس الملف المفتوح بضغطة زر أو باختصار (Ctrl+S) دون تكرار التحميل.",
    feat4Title: "معالجة الغياب الذكية (غائب = 0)",
    feat4Desc: "يسجل نقطة صفر تلقائياً للتلاميذ الغائبين لتفادي أي أخطاء أو رفض في حساب المعدلات العامة.",
    feat5Title: "بنك التقديرات الجاهزة",
    feat5Desc: "قائمة منسدلة فورية تضم أشهر الملاحظات التربوية المعتمدة (حسن جداً، مجتهد، يحتاج لمزيد من الجهد...).",
    feat6Title: "أمان تام وخصوصية 100%",
    feat6Desc: "يعمل محلياً على جهازك دون اتصال بالسيرفرات ودون تسريب لأي معطيات شخصية أو نقط للتلاميذ.",

    // Comparison
    compBadge: "مقارنة حقيقية",
    compTitle: "الطريقة اليدوية التقليدية مقابل برنامج وليدي",
    compSub: "فرق شاسع في الوقت والجهد وراحة البال.",
    thCriteria: "المعيار",
    thManual: "الإدخال اليدوي المعتاد",
    thWlidi: "برنامج وليدي (Wlidi)",
    compRow1Crit: "سرعة مسك نقط القسم",
    compRow1Manual: "من 25 إلى 45 دقيقة لكل قسم مع إجهاد العين",
    compRow1Wlidi: "أقل من 3 دقائق بالصوت مع استرخاء تام",
    compRow2Crit: "خطر الخطأ في سطر التلميذ",
    compRow2Manual: "وارد جداً بسبب تشابه الخانات والأرقام",
    compRow2Wlidi: "شبه معدوم (مطابقة صوتية دقيقة لاسم التلميذ)",
    compRow3Crit: "التثبيت والتعقيد التقني",
    compRow3Manual: "يحتاج برامج مساعدة ونسخ مختلفة",
    compRow3Wlidi: "ملف محمول واحد (550 Ko) ينطلق فوراً",
    compRow4Crit: "التكلفة",
    compRow4Manual: "تطبيقات مدفوعة أو إعلانات مزعجة",
    compRow4Wlidi: "مجاني 100% مدى الحياة (صدقة جارية)",

    // Download CTA
    ctaTitle: "ابدأ مسك النقط بذكاء وراحة الآن",
    ctaDesc: "حمّل البرنامج في ثانية واحدة، بدون تثبيت ولا إعدادات معقدة. افتحه واستمتع بتجربة إدخال سريعة وممتعة.",
    btnDownloadCta: "تحميل وليدي مجاناً (Wlidi.zip)",
    ctaMeta1: "إصدار 1.0 محمول (ZIP)",
    ctaMeta2: "الحجم : 550 Ko فقط",
    ctaMeta3: "متوافق مع Windows 10 و Windows 11",
    ctaMeta4: "خالٍ تماماً من الإعلانات",

    // FAQ
    faqBadge: "الأسئلة الشائعة",
    faqTitle: "إجابات على أكثر ما يسأل عنه الأساتذة",
    faqQ1: "هل يحتاج البرنامج إلى تثبيت أو اتصال بالإنترنت؟",
    faqA1: "لا إطلاقاً ! البرنامج محمول (Portable) بصيغة .exe داخل ملف مضغوط بحجم 550 Ko فقط. ضعه في أي مكان، على سطح المكتب أو فلاش ديسك، وافتحه بنقرة واحدة بدون تثبيت وبدون إنترنت.",
    faqQ2: "هل يمكن أن يفسد البرنامج ملف إكسيل الخاص بمسار؟",
    faqA2: "مستحيل تماماً بفضل الله. البرنامج مصمم وفق معايير جراحية صارمة تحافظ على بنية الملف الأصلية، وتعدل فقط ورقة النقط دون المساس بورقة Data الخفية أو الرموز التعريفية UUID.",
    faqQ3: "هل سيبقى البرنامج مجانياً دائماً؟",
    faqA3: "نعم، البرنامج مجاني 100% بدون أي رسوم، تم تطويره كصدقة جارية لروح والدي العزيز رحمه الله، ونسأل كل من استفاد منه دعوة صالحة له بالرحمة والمغفرة.",
    faqQ4: "ماذا أفعل إذا ظهرت رسالة 'Windows protected your PC' (SmartScreen) ؟",
    faqA4: "هذا إجراء أمان روتيني من مايكروسوفت لأي تطبيق جديد. اضغط ببساطة على 'مزيد من المعلومات' (More info / Informations complémentaires) ثم 'تشغيل على أي حال' (Run anyway / Exécuter quand même). البرنامج سليم 100%، محمول ولا يتطلب أي تثبيت.",

    // Footer
    footerTribute: "🕊️ صدقة جارية لروح والدي العزيز رحمه الله — نسألكم الدعاء له بالرحمة والمغفرة والجنة.",
    footerDevName: "Imagin'Art — عبد الغني لعبيدي",
    footerRights: "© 2026 Wlidi (وليدي) — جميع الحقوق محفوظة"
  },

  fr: {
    // Navigation
    navFeatures: "Fonctionnalités",
    navSteps: "Comment ça marche",
    navDemo: "Démo Vidéo",
    navMassar: "Compatibilité Massar",
    navDownload: "Télécharger (550 Ko)",
    langBtn: "العربية",

    // Hero
    heroPill: "🕊️ En hommage à la mémoire de mon cher père — Outil 100% gratuit pour les enseignants",
    heroTitlePrefix: "La méthode la plus rapide",
    heroTitleHighlight: "pour saisir vos notes Massar à la voix 🎙️",
    heroDesc: "Dites adieu à la saisie manuelle fastidieuse note par note. Ouvrez votre fichier Excel Massar, dictez les noms et les notes en Darija ou en Français, et laissez Wlidi attribuer les notes en quelques secondes avec une précision chirurgicale.",
    btnDownloadHero: "Télécharger Wlidi Gratuitement (Wlidi.zip)",
    btnDemoHero: "Voir la démonstration vidéo ▶️",
    badgeOffline: "100% Hors-ligne",
    badgePortable: "Portable ultra-léger (550 Ko)",
    badgeMassar: "100% Conforme Excel Massar",
    badgeFree: "Entièrement gratuit à vie",

    // Massar Strip
    massarTitle: "Conformité et compatibilité totale avec la plateforme Massar",
    massarSub: "Ministère de l'Éducation Nationale, du Préscolaire et des Sports — Royaume du Maroc",
    massarTag1: "Format Export_...xlsx d'origine",
    massarTag2: "Préserve les UUID et la feuille Data",
    massarTag3: "Gestion de l'absence (Absent = 0)",

    // Video Section
    videoBadge: "Démonstration réelle",
    videoTitle: "Regardez Wlidi noter une classe complète en 2 minutes",
    videoSub: "Enregistrement direct du logiciel lors de la dictée vocale et de la mise à jour des notes.",

    // Steps
    stepsBadge: "Simplicité & Rapidité",
    stepsTitle: "Comment ça marche en 3 étapes ?",
    stepsSub: "Conçu pour s'intégrer directement dans le flux de travail habituel de l'enseignant marocain.",
    step1Title: "1. Téléchargez l'Excel depuis Massar",
    step1Desc: "Exportez votre fichier de notes (Export_...xlsx) depuis votre espace Massar comme d'habitude.",
    step2Title: "2. Dictez les noms et les notes à la voix",
    step2Desc: "Lancez Wlidi, cliquez sur le micro et dictez : \"Alami Youssef 16\" ou \"15.5\" en toute liberté.",
    step3Title: "3. Enregistrez et téléversez sur Massar",
    step3Desc: "Appuyez sur (Ctrl+S) pour enregistrer directement dans le fichier, puis réimportez-le sur Massar.",

    // Features
    featBadge: "Conçu pour l'enseignant",
    featTitle: "Pourquoi les professeurs choisissent Wlidi ?",
    featSub: "Développé pour éliminer les longues heures de saisie rébarbative et la fatigue oculaire.",
    feat1Title: "Dictée vocale marocaine intelligente",
    feat1Desc: "Comprend naturellement la Darija marocaine et le français, gère les fractions (noss, rbo3, larob).",
    feat2Title: "Compatibilité chirurgicale avec Excel Massar",
    feat2Desc: "Lit et écrit directement dans NotesCC sans altérer la feuille masquée Data ni les UUID système.",
    feat3Title: "Sauvegarde instantanée en place",
    feat3Desc: "Sauvegardez toutes vos modifications directement dans le fichier d'origine avec Ctrl+S sans doublon.",
    feat4Title: "Gestion intelligente des absences (Absent = 0)",
    feat4Desc: "Attribue directement la note 0 aux élèves absents pour éviter les rejets et erreurs de calcul Massar.",
    feat5Title: "Banque d'appréciations pédagogiques",
    feat5Desc: "Liste déroulante des remarques officielles (Très bien, Élève sérieux, Doit fournir des efforts...).",
    feat6Title: "Sécurité & Confidentialité absolue",
    feat6Desc: "Fonctionne 100% en local sur votre ordinateur sans aucune fuite de données d'élèves sur internet.",

    // Comparison
    compBadge: "Comparatif concret",
    compTitle: "Saisie Manuelle Traditionnelle vs Wlidi",
    compSub: "Une différence monumentale en temps, effort et sérénité.",
    thCriteria: "Critère",
    thManual: "Saisie manuelle classique",
    thWlidi: "Avec Wlidi",
    compRow1Crit: "Temps pour une classe",
    compRow1Manual: "25 à 45 minutes avec fatigue des yeux",
    compRow1Wlidi: "Moins de 3 minutes à la voix sans stress",
    compRow2Crit: "Risque de décalage de ligne",
    compRow2Manual: "Très fréquent à cause des petites cellules",
    compRow2Wlidi: "Quasi nul (reconnaissance du nom de l'élève)",
    compRow3Crit: "Installation & Prérequis",
    compRow3Manual: "Logiciels lourds ou dépendances",
    compRow3Wlidi: "Un seul fichier portable (550 Ko) direct",
    compRow4Crit: "Coût",
    compRow4Manual: "Payant ou saturé de publicités",
    compRow4Wlidi: "100% Gratuit à vie (Sadaqa Jaria)",

    // Download CTA
    ctaTitle: "Commencez dès aujourd'hui avec Wlidi",
    ctaDesc: "Téléchargez le logiciel en 1 seconde. Sans installation, sans configuration. Décompressez et profitez de la saisie vocale.",
    btnDownloadCta: "Télécharger Wlidi Gratuitement (Wlidi.zip)",
    ctaMeta1: "Version 1.0 Portable (ZIP)",
    ctaMeta2: "Poids : 550 Ko seulement",
    ctaMeta3: "Compatible Windows 10 & Windows 11",
    ctaMeta4: "Garanti sans publicité",

    // FAQ
    faqBadge: "Foire aux questions",
    faqTitle: "Questions fréquemment posées",
    faqQ1: "Le logiciel nécessite-t-il une installation ou Internet ?",
    faqA1: "Pas du tout ! Wlidi est un exécutable portable fourni dans une archive ZIP légère (550 Ko). Décompressez-le où vous voulez (Bureau, clé USB) et lancez-le en un clic sans connexion Internet.",
    faqQ2: "Wlidi risque-t-il d'endommager mon fichier Excel Massar ?",
    faqA2: "Absolument pas. Le moteur préserve rigoureusement la structure interne officielle de Massar et les identifiants techniques.",
    faqQ3: "Le logiciel restera-t-il toujours gratuit ?",
    faqA3: "Oui, Wlidi est un outil 100% gratuit conçu en hommage à la mémoire de mon cher père (Sadaqa Jaria). Nous demandons seulement une prière sincère pour lui.",
    faqQ4: "Que faire si Windows affiche 'Windows a protégé votre ordinateur' (SmartScreen) ?",
    faqA4: "C'est une protection normale de Microsoft pour tout nouveau logiciel. Cliquez simplement sur 'Informations complémentaires' puis sur 'Exécuter quand même'. Wlidi est 100% propre, garanti sans virus et sans installation.",

    // Footer
    footerTribute: "🕊️ En hommage à la mémoire de mon cher père — Qu'Allah lui accorde Sa miséricorde et Son vaste paradis.",
    footerDevName: "Imagin'Art — Laabidi Abdelghani",
    footerRights: "© 2026 Wlidi — Tous droits réservés"
  }
};

let currentLang = 'ar';

function applyLanguage(lang) {
  currentLang = lang;
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  const t = DICT[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Mettre à jour l'intitulé du bouton de langue
  const langBtn = document.getElementById('btnLangToggle');
  if (langBtn) {
    langBtn.innerHTML = `🌐 <span>${t.langBtn}</span>`;
  }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  // 1. Bouton de bascule de langue
  const langBtn = document.getElementById('btnLangToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ar' ? 'fr' : 'ar';
      applyLanguage(nextLang);
    });
  }

  // 2. Gestion Accordéon FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 3. Effet Header Sticky au défilement
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.45)';
      navbar.style.borderBottomColor = 'rgba(20, 184, 166, 0.25)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.borderBottomColor = 'var(--border-subtle)';
    }
  });

  // 4. Menu Burger Mobile (Sandwich)
  const btnBurger = document.getElementById('btnBurger');
  const navLinks = document.getElementById('navLinks');

  if (btnBurger && navLinks) {
    btnBurger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('is-open');
      btnBurger.classList.toggle('is-open', isOpen);
      btnBurger.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu au clic sur un lien du menu
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        btnBurger.classList.remove('is-open');
        btnBurger.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu si on clique n'importe où en dehors
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !btnBurger.contains(e.target)) {
        navLinks.classList.remove('is-open');
        btnBurger.classList.remove('is-open');
        btnBurger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Appliquer la langue par défaut (Arabe)
  applyLanguage('ar');
});
