import type { Dict } from "./i18n/en";

/**
 * Structural, language-agnostic site data. Translatable strings live in the
 * dictionaries (lib/i18n) and are looked up by these stable keys.
 */

export type ServiceId = keyof Dict["services"]["items"];
export type ProjectId = keyof Dict["projects"]["items"];
export type StepId = keyof Dict["process"]["steps"];
export type ProjectType = "mobile" | "web";

export const SERVICE_IDS: ServiceId[] = [
  "mobile",
  "web",
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
};

// All mockups render an English-only UI regardless of the active site language.
export const PROJECTS: Project[] = [
  {
    id: "fittrack",
    name: "FitTrack Pro",
    type: "mobile",
    tags: ["Flutter", "Firebase", "iOS", "Android"],
    accent: ["#3b82f6", "#1e3a8a"],
    screenTitle: "Today's Workout",
  },
  {
    id: "ecomarket",
    name: "EcoMarket",
    type: "web",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    accent: ["#22c55e", "#14532d"],
    screenTitle: "Organic Marketplace",
  },
  {
    id: "mindspace",
    name: "MindSpace",
    type: "mobile",
    tags: ["React Native", "Node.js", "OpenAI"],
    accent: ["#a855f7", "#581c87"],
    screenTitle: "Daily Meditation",
  },
  {
    id: "creativehub",
    name: "CreativeHub",
    type: "web",
    tags: ["React", "Socket.io", "AWS"],
    accent: ["#eab308", "#713f12"],
    screenTitle: "Designer Portfolios",
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
};
