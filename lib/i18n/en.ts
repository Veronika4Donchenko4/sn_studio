// English dictionary. The shape of this object is the source of truth for the
// `Dict` type — every other language must match it exactly.
const en = {
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    process: "Process",
    contact: "Contact",
  },
  hero: {
    badge: "Open to new projects",
    titleLead: "We build",
    titleAccent: "mobile apps",
    titleTrail: "and websites that work",
    desc: "Niksar — a product studio building apps and websites from idea to launch. iOS, Android, web — with a focus on design, performance, and real business results.",
    cta1: "Our projects",
    cta2: "Discuss your idea",
    stat1: "Completed projects",
    stat2: "Years of experience",
    stat3: "Happy clients",
  },
  services: {
    label: "Services",
    title: "What we do",
    desc: "End-to-end development — from design to deploy. We move fast and think strategically.",
    items: {
      mobile: {
        title: "Mobile apps",
        desc: "iOS and Android — native or cross-platform. React Native, Flutter, Swift, Kotlin — we pick the stack that fits the task.",
      },
      web: {
        title: "Websites & web apps",
        desc: "Landing pages, corporate sites, SaaS dashboards. React, Next.js, TypeScript — fast, beautiful, SEO-ready.",
      },
      design: {
        title: "UI/UX Design",
        desc: "Interface design in Figma — wireframes, prototypes, design systems. Usable for users, on-brand for you.",
      },
      mvp: {
        title: "MVP development",
        desc: "From idea to working product in 4–8 weeks. Perfect for startups who want to hit the market quickly.",
      },
      support: {
        title: "Support & evolution",
        desc: "Technical support, updates, refactoring. Your product keeps running smoothly — even when you're asleep.",
      },
      publishing: {
        title: "App Store publishing",
        desc: "We handle App Store & Google Play submissions — ASO, screenshots, descriptions, reviews.",
      },
    },
  },
  projects: {
    label: "Portfolio",
    title: "Our projects",
    desc: "Selected work — mobile apps and websites across different industries.",
    tabAll: "All",
    tabMobile: "Mobile",
    tabWeb: "Web",
    view: "View",
    items: {
      fittrack: "Fitness app with workout tracker, meal plans, and Apple Health integration.",
      ecomarket: "Marketplace for organic products with subscription system and delivery.",
      mindspace: "Meditation app with a personal AI mentor and sleep analytics.",
      creativehub: "Platform for designers — portfolios, collaboration, real-time commissions.",
      paybuddy: "Fintech app for P2P payments, bill splitting, and personal budgeting.",
      restopos: "Restaurant management system — POS, table management, sales analytics.",
      petcare: "Pet owner app — health tracker, reminders, and vet video chat.",
      learnflow: "EdTech platform with video courses, quizzes, certificates, and progress tracking.",
      travelmate: "Travel planner with AI recommendations, offline maps, and shared trips.",
      taskforge: "Kanban for teams with time tracking, Slack/GitHub integrations, and AI prioritization.",
    },
  },
  about: {
    label: "About us",
    badge: "Co-founders",
    titleLine1: "Two co-founders.",
    titleLine2: "One senior team.",
    p1: "We're Nika & Sarkham, co-founders of Niksar. We don't work alone — we lead a tight-knit team of developers, designers, project managers, and QA engineers who deliver every project end-to-end.",
    p2: "Our approach is no bureaucracy. Direct communication, fast iterations, and a laser focus on what actually matters for your product — shipping it well and on time.",
    p3: "Every project is more than code. It's a product we're proud of and happy to show off.",
    founder1Role: "Co-founder",
    founder2Role: "Co-founder",
  },
  process: {
    label: "How we work",
    title: "From idea to launch",
    desc: "A clear process, no surprises. You always know which stage the project is at.",
    steps: {
      discovery: {
        title: "Discovery",
        desc: "We dig into your idea, define goals, audience, and key features. We craft the spec together.",
      },
      design: {
        title: "Design",
        desc: "Figma prototypes, UX testing, design system. Every screen is approved before development starts.",
      },
      development: {
        title: "Development",
        desc: "1–2 week sprints, weekly demos, CI/CD. You see progress in real time.",
      },
      launch: {
        title: "Launch",
        desc: "Testing, store submission, deployment. Post-launch — ongoing support and analytics.",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Let's build something great together",
    desc: "Got an idea? Tell us what you want to build — we'll get back to you within 24 hours.",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Global, remote-first",
    telegramLabel: "Telegram",
    formName: "Name",
    formNamePh: "Your name",
    formEmail: "Email",
    formEmailPh: "email@example.com",
    formProjectType: "Project type",
    formProjectTypePh: "Choose type",
    typeMobile: "Mobile app",
    typeWeb: "Website / Web app",
    typeBoth: "Mobile + Web",
    typeDesign: "UI/UX Design",
    typeOther: "Other",
    formBudget: "Budget",
    formBudgetPh: "Estimated budget",
    budget1: "under $2,000",
    formMessage: "Message",
    formMessagePh: "Tell us about your project — what you want to build, for whom, key features...",
    formSubmit: "Send request",
    sending: "Sending…",
    success: "Thanks! We'll be in touch within 24 hours.",
    error: "Something went wrong. Please try again or email us directly.",
  },
  footer: {
    text: "© 2026 NIKSAR. Crafted for ambitious products.",
  },
};

export default en;

// The English dictionary defines the canonical shape every locale must satisfy.
// Note: `en` is intentionally NOT `as const` so string values widen to `string`,
// letting the other locales assign their own translated strings.
export type Dict = typeof en;
