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
      isoul: "A global women-only networking app and community platform — from idea to launch on the App Store and Google Play.",
      "balloons-calgary": "A full e-commerce website for a Calgary balloon-arrangement business — catalog, cart, and date-based delivery ordering.",
      "boom-chat": "A messaging + tasks + calendar app in one — built for teams, families and groups, shipped to the App Store with subscriptions.",
      "airsoft-arena": "An app for airsoft players to find, create and join games near them — with an organizer web admin, built end to end.",
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
    p1: "We're Nika & Sarkhan, co-founders of Niksar. We don't work alone — we lead a tight-knit team of developers, designers, project managers, and QA engineers who deliver every project end-to-end.",
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
  caseStudy: {
    eyebrow: "Case study",
    back: "Back to projects",
    factsTitle: "Quick facts",
    timeline: "Timeline",
    timelineValue: "6–8 weeks",
    techStack: "Tech stack",
    projectType: "Project type",
    whatWeDid: "What we did",
    whatWeDidValue: "Strategy, UI/UX design, development, launch",
    platforms: "Platforms",
    languages: "Languages",
    category: "Category",
    appStore: "App Store",
    googlePlay: "Google Play",
    liveSite: "Live site",
    challengeTitle: "The challenge",
    challengeBody:
      "The client came to us with an early idea and a tight timeline. They needed a polished, reliable product that would stand out in a crowded market — without cutting corners on design or engineering. Our job was to turn a rough concept into a shippable product with a clear architecture and a delightful user experience.",
    solutionsTitle: "Key solutions",
    solutionsIntro:
      "We worked in short, focused sprints — shaping the product step by step and validating each decision with the client before moving on.",
    solution1Title: "Discovery & product shape",
    solution1Body:
      "We started by mapping the core user journeys and defining the feature set that mattered most. A clear scope and a shared spec let us move fast without surprises.",
    solution2Title: "Design system & interface",
    solution2Body:
      "We designed a consistent, on-brand interface in Figma — from wireframes to a reusable component library — so every screen felt like part of one product.",
    solution3Title: "Build & launch",
    solution3Body:
      "We implemented the product with a clean, maintainable codebase, wired up the integrations, and shipped through a smooth release process with room to grow.",
    resultTitle: "Result",
    resultBody:
      "The product launched on schedule and gave the client a solid foundation to build on. The result is a fast, polished experience that users enjoy and the team can extend with confidence.",
    result1: "A polished product ready for real users",
    result2: "A scalable codebase and design system",
    result3: "A clear path for future features",
    ctaTitle: "Discuss your project",
    ctaBody:
      "Have an idea you want to bring to life? Tell us about it — we'll help you shape, design, and ship it.",
    ctaButton: "Discuss your project",
    // Per-project real content. Projects without an entry fall back to the
    // generic copy above.
    cases: {
      isoul: {
        subtitle:
          "A global women-only networking app and community platform — built end to end, from idea to launch on the App Store and Google Play.",
        timelineValue: "3–4 months (mobile + web admin + release)",
        techStackValue:
          "Flutter, Firebase (Auth, Firestore, Cloud Messaging, Analytics), Web admin panel",
        projectTypeValue: "Mobile app (iOS & Android) + Web admin",
        whatWeDidValue:
          "Full cycle — product, UX/UI design, mobile development, web admin, App Store & Google Play release",
        platformsValue: "iOS · Android · Web admin",
        languagesValue: "English · Russian",
        challengeBody:
          "ISOUL set out to build something rare: a safe, women-only space where entrepreneurs, leaders and creators from 28+ countries could actually connect — not just scroll. The client came with a vision and needed a partner to turn it into a real, published product. The challenge was to design an entire ecosystem — daily matching, a knowledge library, an events system and a live community feed — that felt warm and personal, worked in two languages, and was stable enough to run a paid membership from day one. And it had to be delivered fast, ready for the stores.",
        solution1Title: "Discovery & product shaping",
        solution1Body:
          "We turned the vision into a concrete product map: which features drive real connection, how membership tiers work, and what the daily experience should feel like. We defined the core loop early — the “Match of the Day” — so the whole app had a heartbeat.",
        solution2Title: "Design & experience",
        solution2Body:
          "We designed the full interface in ISOUL's warm, inclusive visual language. Onboarding was crafted to be effortless, navigation clear, content discovery intuitive across feed, library and events. Every screen was built in two languages (EN/RU).",
        solution3Title: "Build & launch",
        solution3Body:
          "We developed the app in Flutter for iOS and Android from a single codebase, wired to a Firebase backend (auth, real-time data, push, analytics). We built a web admin panel so the ISOUL team manages members, content and events themselves. Then we handled the full release: App Store and Google Play submission, review and go-live — including subscriptions and a 7-day free trial.",
        results: [
          "Launched and live on both App Store and Google Play, with a 5.0 rating from early members.",
          "A full ecosystem in production: daily matching, knowledge library, event calendar with Google Calendar sync, and a global community feed.",
          "A monetized product from day one, with a working subscription model and free trial.",
          "Members from 28+ countries using it daily.",
          "A self-serve web admin that lets the ISOUL team run the community without developer involvement.",
        ],
      },
      "balloons-calgary": {
        subtitle:
          "A full e-commerce website for a Calgary balloon-arrangement business — catalog, cart, and date-based delivery ordering, built end to end in 2 weeks.",
        timelineValue: "2 weeks",
        techStackValue: "Next.js, Supabase, Resend (transactional email)",
        projectTypeValue: "E-commerce website",
        whatWeDidValue:
          "Full cycle — design, front-end, back-end, ordering flow, email, launch",
        platformsValue: "Web (responsive)",
        challengeBody:
          "Balloons Calgary needed to move from Instagram DMs to a real online storefront — a place where customers could browse arrangements by occasion, order with a delivery date and time, and get a smooth, trustworthy checkout experience. The site had to feel warm and celebratory, handle a wide catalog across many occasion-based categories, and run reliably with automated order emails — all while looking clean and premium, not like a generic template shop.",
        solution1Title: "Structure & catalog",
        solution1Body:
          "We organized the product range into 13 occasion-based collections (birthdays, baby showers, gender reveals, graduations, seasonal, ready-to-go and more) so customers instantly find the right set for their event. A clear “How it works” flow (choose → order → we deliver) removes friction for first-time buyers.",
        solution2Title: "Design & experience",
        solution2Body:
          "We designed a bright, celebratory, clean and modern interface — soft imagery, clear categories, and a calm ordering flow. Fully responsive, premium and trustworthy, with reviews and transparent delivery rules built into the page.",
        solution3Title: "Build & launch",
        solution3Body:
          "We built the site on Next.js with a Supabase back-end powering the catalog, cart and orders, and Resend handling automated order notification emails to the owner. We implemented the full ordering flow — cart, delivery details, date & time selection, and free-delivery logic for the Calgary urban area — then shipped it live.",
        results: [
          "A live, fully functional storefront replacing manual Instagram ordering.",
          "13 curated collections with a complete browse → cart → order flow.",
          "Date- and time-based delivery ordering with automated email notifications to the owner.",
          "Built-in delivery logic (free within Calgary, flat fee outside) handled automatically.",
          "A clean, premium brand presence the business can grow on.",
        ],
      },
      "boom-chat": {
        subtitle:
          "A messaging + tasks + calendar app in one — built for teams, families and groups, shipped to the App Store with subscriptions.",
        timelineValue: "2–3 months (from idea to release)",
        techStackValue: "React Native, Supabase, In-app subscriptions",
        projectTypeValue: "Mobile app (iOS)",
        whatWeDidValue:
          "Full cycle — product, UX/UI design, mobile development, subscriptions, App Store release",
        platformsValue: "iOS (also runs on Mac & Vision)",
        categoryValue: "Productivity",
        challengeBody:
          "Most people juggle three apps to run a group: one for chatting, one for tasks, and one for scheduling. Boom Chat set out to collapse all three into a single, calm space — private and group chats, shared tasks, and a built-in calendar — that works equally well for a work team, a family, a study group or a sports club. The challenge was to combine real-time messaging, a full task system and a calendar into one coherent app that stays simple, runs a subscription with a free trial, and is polished enough to pass App Store review.",
        solution1Title: "Product & scope",
        solution1Body:
          "We shaped a product that unifies communication and planning without feeling bloated: personal and group chats, messages with images and files, tasks and subtasks with deadlines and statuses, and a task calendar — all tied together so a conversation can turn into a task in seconds. We defined the subscription model and free trial up front.",
        solution2Title: "Design & experience",
        solution2Body:
          "We designed a clean, focused interface where chat, tasks and calendar live side by side without clutter. Simple enough for a family group yet capable enough for a work team. Push notifications keep everyone in sync across messages, task updates and deadlines.",
        solution3Title: "Build & launch",
        solution3Body:
          "We built the app in React Native for iOS, backed by Supabase for real-time data, auth, and storage of messages and files. We implemented in-app subscriptions with a trial and self-serve management in the user profile, then handled the full App Store release — and shipped ongoing updates, including voice and video calls.",
        results: [
          "Live on the App Store as a single app replacing separate chat, task and calendar tools.",
          "Real-time private and group messaging with image and file sharing.",
          "Full task system — subtasks, deadlines, statuses — with an integrated calendar.",
          "A working subscription model with free trial and in-profile management.",
          "Shipped and actively updated, with voice and video calls added post-launch.",
        ],
      },
      "airsoft-arena": {
        subtitle:
          "An app for airsoft players to find, create and join games near them — with an organizer web admin, built end to end.",
        timelineValue: "3 months",
        techStackValue: "Flutter, Firebase, Web admin panel",
        projectTypeValue: "Mobile app (Android) + Web admin",
        whatWeDidValue:
          "Full cycle — product, UX/UI design, mobile development, web admin, Google Play release",
        platformsValue: "Android",
        categoryValue: "Travel & Local",
        challengeBody:
          "Airsoft players had no simple way to discover games happening near them or fill their own events with participants — it all lived scattered across chats and social groups. Airsoft Arena set out to become the single place to find, create and join airsoft games by date, location and format. The challenge was to build a location-based events platform with registration, participant tracking and organizer/player rankings — simple enough for a beginner's first game, powerful enough for team commanders — plus a web admin to manage it all, and ship it to Google Play.",
        solution1Title: "Product & scope",
        solution1Body:
          "We shaped an events platform around three core actions: find nearby games (by date, location, format), create your own game and invite players, and track registrations with confirmed participation. We added public and private events, plus organizer and player rankings to build trust in the community.",
        solution2Title: "Design & experience",
        solution2Body:
          "We designed a clean, uncluttered, tactical interface that gets a player from “I want to play” to “I'm registered” in a few taps. Quick registration, clear event details, and simple organizer tools.",
        solution3Title: "Build & launch",
        solution3Body:
          "We built the app in Flutter, backed by Firebase for real-time data, auth and location-based event discovery, plus a dedicated web admin panel for managing events, players and rankings. Then we handled the full Google Play release.",
        results: [
          "Live on Google Play as the go-to app to find and organize airsoft games.",
          "Location-based event discovery by date, location and format.",
          "Full event creation with participant registration and confirmation tracking.",
          "Public and private events, plus organizer and player rankings.",
          "A web admin panel to manage the whole platform.",
        ],
      },
    },
  },
};

export default en;

// The English dictionary defines the canonical shape every locale must satisfy.
// Note: `en` is intentionally NOT `as const` so string values widen to `string`,
// letting the other locales assign their own translated strings.
export type Dict = typeof en;
