// all portfolio text lives here: edit this file to update the site.

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  href?: string;
  badge: string;
  summary: string;
  highlights: string[];
  tags?: string[];
  links?: Link[];
};

export type Job = {
  when: string;
  role: string;
  href?: string;
  where: string;
  summary: string;
  highlights?: string[];
  links?: Link[];
};

export type Place = {
  country: string;
  city: string;
  when: string;
  summary: string;
  highlights?: string[];
};

export type EventItem = {
  name: string;
  when: string; // month + year, shown in the badge
  where?: string;
  role?: string;
  upcoming?: boolean; // set to false (or remove) once the event has happened
};

export type WritingPiece = { title: string; when: string; href: string };

export type SkillGroup = { label: string; items: string };

export const profile = {
  name: "alice lourenco",
  lede: "cs student at unc-chapel hill, minor in education.",
  status:
    "looking for summer 2027 internships and research lab positions · based in chapel hill, nc · open to relocation",
};

export const links: Link[] = [
  { label: "github", href: "https://github.com/alicedsal" },
  { label: "linkedin", href: "https://www.linkedin.com/in/alice-louren%C3%A7o-/" },
  { label: "email", href: "mailto:arau@unc.edu" },
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
];

export const experience: Job[] = [
  {
    when: "jan 2026 – now",
    role: "research assistant, mathematics potential lab",
    href: "https://www.mathematicspotential.com/about-1-1",
    where: "unc-chapel hill",
    summary:
      "worked on coding full-text articles from 6 math and special education journals, analyzed 3 teacher interviews on research-backed resources, and presented at appalachian state university's inclusion summit (2026) and unc's research week (2026).",
  },
  {
    when: "jan 2022 – jul 2023",
    role: "tech intern",
    where: "fcamara consulting and training · são paulo, brazil",
    summary:
      "built and optimized a java, spring boot and postgresql timekeeping system for 2,000+ employees: 30% more accurate timesheet data, 40% faster payroll processing.",
    highlights: [
      "tech leader and content creator for orange juice, fcamara's tech community of 12,500+ active members",
      "managed 4 hackathons with 600+ participants",
      "ran weekly study livestreams on discord",
      "worked backstage on multiple episodes of the community podcast",
      "wrote the weekly and monthly newsletters for the whole community",
    ],
  },
  {
    when: "jun 2020 – dec 2023",
    role: "research assistant",
    where: "federal institute of education, science, and technology · itaporanga, brazil",
    summary:
      "built a low-cost campus access-tracking prototype with groovy, ruby on rails and arduino: 85% less manual logging, 60% lower hardware cost per unit. published in the research, society and development journal (vol. 12, 2023).",
    links: [
      { label: "read the paper ↗", href: "https://rsdjournal.org/index.php/rsd/article/view/39849/33401" },
    ],
  },
];

export const globalView = {
  intro:
    "as a founding fellow of the flight school, i co-created the fellowship and was awarded $10,000 to immerse myself in other cultures and explore my driving questions in tech, education and social entrepreneurship. i was 1 of 4 young latin americans selected for the first cohort (2024–2025).",
  questions: [
    "how do opportunities for women affect gender and shift the world and its cultural norms?",
    "how do we actually break the barriers young latin american women face to join stem fields?",
  ],
  places: [
    {
      country: "india",
      city: "bengaluru",
      when: "2 months",
      summary: "volunteered with two organizations in india's silicon valley.",
      highlights: [
        "inqui-lab foundation: helped redesign the makerspace robotics and programming curriculum, making classes more fun and engaging for kids through gamified storytelling",
        "tvarita arts: learned about indian culture and built tvarita's first website",
      ],
    },
    {
      country: "germany",
      city: "kraichtal",
      when: "4 weeks",
      summary: "worked on building a garden.",
    },
  ] satisfies Place[],
};

// unc events, hackathons, meetups, workshops and conferences.
// the page shows upcoming events first (soonest first), then past ones (newest first),
// in the order they appear in each group below.
export const events: EventItem[] = [
  {
    name: "wolfhacks 2026",
    when: "oct 2026",
    where: "nc state",
    upcoming: true,
  },
  {
    name: "hacknc",
    when: "oct 2026",
    where: "unc-chapel hill",
    upcoming: true,
  },
  {
    name: "unc research week 2026",
    when: "oct 2026",
    where: "unc-chapel hill",
    role: "presenter",
    upcoming: true,
  },
  {
    name: "github universe 2026",
    when: "oct 2026",
    where: "fort mason, san francisco, ca",
    upcoming: true,
  },
  {
    name: "inclusion summit",
    when: "sep 2026",
    where: "appalachian state university",
    role: "presenter",
  },
  {
    name: "behring scholars conference",
    when: "apr 2026",
    where: "massachusetts institute of technology",
  },
];

// add published pieces here, newest first; the section says "coming up" while this is empty
export const writing: WritingPiece[] = [];

export const techAndEducation = {
  impact: { number: "23,000+", label: "students reached across brazil in 5 years" },
  story: [
    "i'm proud to have reached more than 23,000 young brazilians through my work, bringing programming and robotics classes to public school students over the last 5 years. the leadership roles i held at the federal institute of education, science, and technology of paraíba, tocando em frente ngo, programar no sertão, code lab ngo and stem para as minas ngo didn't just make me a latin american leader: they turned me into a leader driven by purpose and commitment.",
    "knowing the actual number of young brazilians whose journeys i've been part of made me reflect on my own background as a girl in tech, one i spent a long time wondering was even \"valid\". coming from a low-income family, raised in the countryside of paraíba by a mother who worked as a domestic worker: these gaps made me more resilient. my dream is to keep reaching countless girls throughout my journey, leaving the legacy that the more resilient we are, the more barriers we break, and the more bridges we build between these distant worlds that don't talk to each other.",
  ],
  projects: [
    {
      name: "programming & robotics, tocando em frente ngo",
      href: "https://tocandoemfrente.org/pages/home.html",
      badge: "dec 2021 – nov 2024",
      summary:
        "democratizing educational opportunities for young brazilians. as leader and co-founder of the programming and robotics team, i led a 5-person core team and designed a playful, gamified curriculum.",
      highlights: [
        "taught programming to 10,300+ children across brazil",
        "trained 60+ volunteers to serve as regional directors in public schools",
        "built 4 partnerships with first lego league robotics teams across brazil",
        "the project won the 2023 prêmio led – luz na educação (rede globo and fundação roberto marinho)",
      ],
    },
    {
      name: "stem para as minas ngo",
      badge: "2022 – 2023",
      summary: "creating stem opportunities for brazilian girls.",
      highlights: [
        "director of the pesquisa para elas program (2023): organized workshops and brought 10+ women scientists to share their stories with 60+ participants",
        "host of the ciênciapod podcast (2022): produced and recorded a full 6-episode season of interviews with young women researchers, reaching 1,000+ listeners with a 5-star average on spotify",
      ],
      links: [
        { label: "youtube ↗", href: "https://www.youtube.com/@stemparaasminas5124/videos" },
        { label: "podcast ↗", href: "https://open.spotify.com/show/7CfgmCGepjTPu9rwzkt4K2" },
      ],
    },
    {
      name: "programar no sertão, ifpb",
      badge: "2022",
      summary:
        "an extension project teaching programming to low-income students in the countryside of paraíba.",
      highlights: [
        "as a scholarship teaching assistant, co-created the curriculum and trained 43 middle school students from public schools",
        "wrote a scientific report on the barriers young people in paraíba face to access stem knowledge, which became my final course project (graded 100/100)",
      ],
      links: [
        { label: "read the report ↗", href: "https://drive.google.com/file/d/1PeUkmArSzhQ5rRoJgcV221nGcXKZN8Wm/view" },
      ],
    },
    {
      name: "code lab ngo",
      badge: "2021 – 2022",
      summary: "building bridges for programming education in brazil.",
      highlights: [
        "created 100+ python coding challenges and 30+ python lessons for 4 mentees",
        "helped one mentee land their first tech internship",
      ],
    },
    {
      name: "volunteer teaching assistant, algorithms and programming logic, ifpb",
      badge: "2020",
      summary: "co-founded the volunteer teaching assistant team for my own class.",
      highlights: [
        "built 20+ programming logic lessons in portugol and python for 42+ classmates",
        "the class's grades in the course improved by up to 50%",
        "invited by the professor to become a paid teaching assistant",
      ],
    },
  ] satisfies Project[],
};

export const skills: SkillGroup[] = [
  { label: "languages", items: "java, python, typescript, sql, cuda c++, groovy, html/css, r" },
  { label: "frameworks", items: "spring boot, fastapi, next.js, react native, expo, ruby on rails" },
  { label: "ai/ml", items: "claude api, rag, sentence-transformers, lightgbm, pandas, numpy" },
  { label: "databases", items: "postgresql, pgvector, supabase, mysql" },
  { label: "testing & devops", items: "junit, pytest, playwright, git, github actions, docker" },
  { label: "spoken", items: "brazilian portuguese (native), english (fluent), spanish (b2)" },
];
