import en, { type Dict } from "./i18n/en";

/**
 * Structural, language-agnostic site data. Translatable strings live in the
 * dictionaries (lib/i18n) and are looked up by these stable keys.
 */

export type ServiceId = keyof Dict["services"]["items"];
export type ProjectId = keyof Dict["projects"]["items"];
export type StepId = keyof Dict["process"]["steps"];
export type ProjectType = "mobile" | "web";

/**
 * A project has a published case study when it has a bespoke entry in the
 * dictionary `caseStudy.cases` map. This is the single source of truth: cards
 * for these projects are clickable and their `/projects/[slug]` page is built;
 * placeholder projects (still using made-up data) are neither.
 */
export function hasCaseStudy(id: ProjectId): boolean {
  return Object.prototype.hasOwnProperty.call(en.caseStudy.cases, id);
}

export const SERVICE_IDS: ServiceId[] = [
  "mobile",
  "web",
  "telegram",
  "design",
  "mvp",
  "support",
  "publishing",
];

export const STEP_IDS: StepId[] = [
  "discovery",
  "design",
  "development",
  "launch",
];

export type Project = {
  id: ProjectId;
  name: string;
  type: ProjectType;
  tags: string[];
  /** Accent gradient stops for the rendered mockup. */
  accent: [string, string];
  /** English-only label shown inside the rendered UI mockup. */
  screenTitle: string;
  /** Optional external links, rendered as buttons on the case-study page. */
  website?: string;
  appStore?: string;
  googlePlay?: string;
  telegram?: string;
  /** Marks a design concept (shows a "Concept" badge) rather than a shipped product. */
  concept?: boolean;
};

// All mockups render an English-only UI regardless of the active site language.
export const PROJECTS: Project[] = [
  {
    id: "isoul",
    name: "ISOUL",
    type: "mobile",
    tags: ["Flutter", "Firebase", "iOS", "Android", "Web admin"],
    accent: ["#e0629b", "#7c3aed"],
    screenTitle: "Match of the Day",
    appStore:
      "https://apps.apple.com/us/app/isoul-women-networking/id6742156958",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.mycompany.isoul",
  },
  {
    id: "balloons-calgary",
    name: "Balloons Calgary",
    type: "web",
    tags: ["Next.js", "Supabase", "Resend"],
    accent: ["#f472b6", "#a855f7"],
    screenTitle: "Shop by Occasion",
    website: "https://www.balloonscalgary.ca/",
  },
  {
    id: "boom-chat",
    name: "Boom Chat",
    type: "mobile",
    tags: ["React Native", "Supabase", "Subscriptions"],
    accent: ["#8b5cf6", "#4338ca"],
    screenTitle: "Chats & Tasks",
    appStore: "https://apps.apple.com/us/app/boom-chat/id6758313530",
  },
  {
    id: "airsoft-arena",
    name: "Airsoft Arena",
    type: "mobile",
    tags: ["Flutter", "Firebase", "Web admin"],
    accent: ["#65a30d", "#3f6212"],
    screenTitle: "Games Near You",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.romanovdev.airsoftarena",
  },
  {
    id: "onymi",
    name: "Onymi",
    type: "mobile",
    tags: ["Flutter", "Supabase", "AI", "Web admin"],
    accent: ["#f97316", "#c026d3"],
    screenTitle: "Pick an Emotion",
    appStore: "https://apps.apple.com/us/app/onymi/id6758524773",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.mycompany.onymi",
    telegram: "https://t.me/OnymiBot",
  },
  {
    id: "bronicat",
    name: "Bronicat",
    type: "mobile",
    tags: ["React Native", "FlutterFlow", "Supabase"],
    accent: ["#0ea5e9", "#4f46e5"],
    screenTitle: "Book a Table",
    appStore: "https://apps.apple.com/us/app/id6762212866",
  },
  {
    id: "smmarket",
    name: "SMMarket Insurance",
    type: "mobile",
    tags: ["Flutter", "React", "Supabase"],
    accent: ["#10b981", "#0369a1"],
    screenTitle: "Compare & Get Covered",
    appStore: "https://apps.apple.com/us/app/smmarket-insurance/id6779952432",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.developer.strahovoymarket",
  },
  {
    id: "studywork",
    name: "StudyWork",
    type: "web",
    tags: ["React", "Supabase"],
    accent: ["#6366f1", "#0891b2"],
    screenTitle: "Courses & Lessons",
  },
  {
    id: "cyber-garage",
    name: "Cyber Garage",
    type: "web",
    tags: ["Next.js"],
    accent: ["#a855f7", "#db2777"],
    screenTitle: "Custom Garage Builds",
    website: "https://cyber-garage-omega.vercel.app/",
    concept: true,
  },
  {
    id: "paybuddy",
    name: "PayBuddy",
    type: "mobile",
    tags: ["Kotlin", "Swift", "Plaid API"],
    accent: ["#06b6d4", "#0e3a4f"],
    screenTitle: "Send Money",
  },
  {
    id: "restopos",
    name: "RestoPOS",
    type: "web",
    tags: ["Next.js", "TypeScript", "Prisma"],
    accent: ["#ef4444", "#7f1d1d"],
    screenTitle: "POS Dashboard",
  },
  {
    id: "petcare",
    name: "PetCare",
    type: "mobile",
    tags: ["Flutter", "Firebase", "Agora"],
    accent: ["#f59e0b", "#78350f"],
    screenTitle: "Pet Health",
  },
  {
    id: "learnflow",
    name: "LearnFlow",
    type: "web",
    tags: ["React", "Node.js", "MongoDB"],
    accent: ["#14b8a6", "#134e4a"],
    screenTitle: "Course Library",
  },
  {
    id: "travelmate",
    name: "TravelMate",
    type: "mobile",
    tags: ["React Native", "Maps API", "GPT"],
    accent: ["#ec4899", "#831843"],
    screenTitle: "Trip Planner",
  },
  {
    id: "taskforge",
    name: "TaskForge",
    type: "web",
    tags: ["Next.js", "tRPC", "Supabase"],
    accent: ["#6366f1", "#312e81"],
    screenTitle: "Team Board",
  },
];

export const TECH_STACK = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Firebase",
  "Figma",
  "PostgreSQL",
  "AWS",
];

export const STATS: { target: number; key: "stat1" | "stat2" | "stat3" }[] = [
  { target: 15, key: "stat1" },
  { target: 3, key: "stat2" },
  { target: 10, key: "stat3" },
];

export const CONTACT_DETAILS = {
  email: "hello@niksar.dev",
  telegram: "@niksar",
  // WhatsApp is offered via the scannable QR image only (public/whatsup.jpg).
  // The raw number is intentionally not stored here so it never ships in the
  // page source or client bundle.
};
