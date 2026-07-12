export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  name: string;
  category: string;
  summary: string;
  impact: string;
  href?: string;
  stack: string[];
};

export const profile = {
  name: "Suri Slai",
  initials: "SS",
  role: "Product-minded builder",
  location: "Hong Kong",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/in/surislai/",
  github: "https://github.com/suris-lab",
  availability: "Open to selective collaborations",
  headline:
    "Product-minded builder focused on practical digital products, systems, and outcomes.",
  intro:
    "This first version is structured so your LinkedIn history, case studies, metrics, and writing can be updated from one data file without reworking the site.",
  focusAreas: [
    "Product strategy",
    "Full-stack delivery",
    "UX systems",
    "Automation",
    "Founder support"
  ]
};

export const metrics = [
  { label: "Core mode", value: "0 to 1" },
  { label: "Work style", value: "Hands-on" },
  { label: "Timezone", value: "HKT" }
];

export const experiences: Experience[] = [
  {
    company: "Add your latest company",
    role: "Your current or most recent role",
    period: "YYYY - Present",
    location: "City / Remote",
    summary:
      "Replace this with the strongest one-sentence description of your scope, ownership, and business context.",
    highlights: [
      "Add a measurable outcome, such as revenue, usage, cost savings, speed, quality, or adoption.",
      "Add a second proof point that shows how you worked across product, design, engineering, or operations.",
      "Add a third proof point that shows leadership, judgment, or technical depth."
    ]
  },
  {
    company: "Previous company",
    role: "Previous role",
    period: "YYYY - YYYY",
    summary:
      "Use this space for earlier roles once you paste or export your LinkedIn experience.",
    highlights: [
      "Keep bullets specific and outcome-led.",
      "Prefer numbers and named systems over generic responsibilities."
    ]
  }
];

export const projects: Project[] = [
  {
    name: "Portfolio Platform",
    category: "Personal site",
    summary:
      "A Vercel-ready portfolio foundation with editable content, restrained visual direction, and room for case studies.",
    impact: "Built to be updated over time without redesigning the system.",
    stack: ["Next.js", "TypeScript", "Vercel", "GitHub"]
  },
  {
    name: "Add featured work",
    category: "Case study",
    summary:
      "Replace this with a concrete project: the problem, your role, the constraints, and the shipped result.",
    impact: "Add the most credible result or learning from the work.",
    stack: ["Product", "Design", "Engineering"]
  }
];

export const principles = [
  "Make the important thing easier to see.",
  "Prefer working systems over polished promises.",
  "Keep taste close to operational reality.",
  "Document enough that future updates feel cheap."
];
