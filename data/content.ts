// all portfolio text lives here: edit this file to update the site.

export type Link = { label: string; href: string; primary?: boolean };

export type Project = {
  name: string;
  href?: string;
  badge: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type Job = {
  when: string;
  role: string;
  where: string;
  summary: string;
};

export type SkillGroup = { label: string; items: string };

export const profile = {
  name: "alice lourenco",
  lede: "cs student at unc-chapel hill, minor in education.",
  status: "looking for summer 2027 internships · based in chapel hill, nc · open to relocation",
};

export const links: Link[] = [
  { label: "github", href: "https://github.com/alicedsal" },
  { label: "linkedin", href: "https://linkedin.com/in/alice-lourenco" },
  { label: "email", href: "mailto:arau@unc.edu" },
  { label: "resume ↗", href: "/assets/alice_lourenco_resume.pdf", primary: true },
];

export const projects: Project[] = [
  {
    name: "cupinudous",
    href: "https://github.com/alicedsal/cupinudous",
    badge: "in progress · sep 2026 –",
    summary:
      "a web app that turns research-backed learning techniques into practical study steps for cs and math. pick what you're struggling with, get a short plan, each step linked to the research behind it.",
    highlights: [
      "rag pipeline with the claude api and pgvector, grounding study steps in cited open-access research",
      "custom cuda kernels for gpu-accelerated similarity search, with a numpy fallback",
      "spring boot + fastapi microservices, docker compose, github actions ci",
    ],
    tags: ["java", "spring boot", "python", "fastapi", "cuda", "postgresql", "claude api"],
  },
  {
    name: "fever",
    href: "https://github.com/alicedsal/catch-fever",
    badge: "in progress · aug 2026 –",
    summary:
      "a cross-platform dating app for unc students that matches on personality, not looks, with weekly match drops instead of infinite swiping.",
    highlights: [
      "signup restricted to verified @unc.edu emails via supabase auth",
      "ai matchmaking pipeline with claude haiku 4.5, sentence-transformers and lightgbm",
      "weekly match drops with supabase jobs and expo push notifications",
    ],
    tags: ["typescript", "react native", "expo", "python", "supabase", "lightgbm"],
  },
  {
    name: "programming & robotics, tocando em frente ngo",
    badge: "dec 2021 – nov 2024",
    summary:
      "founded the program and led a 5-person core team, bringing tech education to underserved students in brazil.",
    highlights: [
      "designed and led programming and robotics initiatives reaching 10,300+ students",
      "recruited and trained 60+ volunteer instructors",
    ],
    tags: ["arduino", "scratch", "python"],
  },
];

export const experience: Job[] = [
  {
    when: "jan 2026 – now",
    role: "research assistant, mathematics potential lab",
    where: "unc-chapel hill",
    summary:
      "coded 50+ full-text articles from 6 math and special education journals in nvivo, analyzed teacher interviews on research-backed resources, and presented 2 posters and a 50-minute talk at appalachian state university's inclusion summit.",
  },
  {
    when: "jan 2022 – jul 2023",
    role: "tech intern",
    where: "fcamara consulting and training · são paulo, brazil",
    summary:
      "built and optimized a java, spring boot and postgresql timekeeping system for 2,000+ employees: 30% more accurate timesheet data, 40% faster payroll processing.",
  },
  {
    when: "jun 2020 – dec 2023",
    role: "research assistant",
    where: "federal institute of education, science, and technology · itaporanga, brazil",
    summary:
      "built a low-cost campus access-tracking prototype with groovy, ruby on rails and arduino: 85% less manual logging, 60% lower hardware cost per unit.",
  },
];

export const skills: SkillGroup[] = [
  { label: "languages", items: "java, python, typescript, sql, cuda c++, groovy, html/css, r" },
  { label: "frameworks", items: "spring boot, fastapi, next.js, react native, expo, ruby on rails" },
  { label: "ai/ml", items: "claude api, rag, sentence-transformers, lightgbm, pandas, numpy" },
  { label: "databases", items: "postgresql, pgvector, supabase, mysql" },
  { label: "testing & devops", items: "junit, pytest, playwright, git, github actions, docker" },
  { label: "spoken", items: "brazilian portuguese (native), english (fluent), spanish (b2)" },
];
