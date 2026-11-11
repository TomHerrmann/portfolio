export const resumeData = {
  header: {
    name: 'Thomas Herrmann',
    title: 'Senior Software Engineer | Full-Stack & AI',
    summary:
      'Senior software engineer (ex-Bloomberg, ex-Meta) building full-stack web apps and human-in-the-loop (HITL) multi-agent LLM systems.',
    location: 'New York City',
    phone: '631-681-3233',
    email: 'tomherrmannd@gmail.com',
    linkedin: 'linkedin.com/in/thomasherrmann1',
  },
  skills: {
    languages:
      'JavaScript/TypeScript, React, Next.js, Python, GraphQL, React Query, Redux, Node.js, Express.js, PHP/Hack, SQL',
    ai:
      'Multi-agent orchestration (Claude & OpenAI APIs), LangGraph, tool calling, structured outputs, RAG (pgvector), LLM evals',
    tools:
      'AWS, Postgres, Vercel, Stripe, Jenkins (CI/CD), Module Federation, Webpack, Jest/React Testing Library, Tailwind',
  },
  // AI projects come first, matching the resume (v3, 2026-11-11).
  projects: [
    {
      name: 'Zero Vision Cinema',
      url: 'zerovisioncinema.com',
      dates: '2025-Present',
      bullets: [
        'Built a production ticketing platform processing 1k+ orders with idempotent webhook fulfillment, queued retries and order recovery.',
        'Architected a multi-agent pipeline (Claude drafters, independent verifier agents) that launches each event to Partiful, calendar and Linear, with human approval.',
        'Built a LangGraph agent that executes end-to-end ticket refunds by interfacing with Stripe and headless CMS APIs.',
        'Built a grounded research agent (cites only sources it fetched) that emails the team a daily brief on film news and press screenings.',
      ],
    },
    {
      name: 'ZVC Cutroom',
      stack: 'Python, Claude API, DaVinci Resolve',
      dates: 'June 2026-Present',
      bullets: [
        'Built an agentic video-editing harness where Claude drives DaVinci Resolve via tool calls, assembling cuts from Pydantic structured outputs.',
        'Built a RAG pipeline over video transcripts (pgvector) that retrieves key moments to select clips and write grounded per-platform copy.',
        'Created a subtitle review agent that flags unverifiable words in AI captions for a human in the loop, backed by an eval set and a test harness.',
      ],
    },
  ],
  experience: [
    {
      company: 'Bloomberg',
      title: 'Senior Software Engineer',
      dates: '2023-2026',
      bullets: [
        'Established the "Golden Path" migration playbook and an AI-assisted workflow (prompt engineering, shared Cursor rules, skill files, review checkpoints), enabling 20+ engineers across 4 teams to migrate 9 sub-apps from a monorepo to micro-frontends.',
        'Architected Module Federation for the contracts portal (9 sub-apps), decoupling deployments for 4 teams and ending cross-team rollbacks.',
        'Engineered a custom RBAC and audit logging layer for regulatory compliance, moving the org from open internal access to least-privilege.',
        'Led design and execution of a centralized secure attachment system that closed a critical unauthorized access risk for legal contracts.',
        'Developed the runtime environment and infrastructure for the Chromium-based Terminal browser, supporting 10,000+ unique applications.',
        'Founded and chaired the Web Application Security Guild, authored the firm-wide "Web App Security Best Practices," and ran a security on-call rotation for code audits and vulnerability assessments.',
        'Served as the technical lead for web development, setting best practices, advocating for new technologies, and authoring documentation.',
      ],
    },
    {
      company: 'Meta',
      title: 'Software Engineer - E4',
      dates: '2022-2023',
      bullets: [
        'Owned the SafeChange Console, a dashboard for creating, updating, and monitoring canaries; led integration of Spec Doctor from a CLI.',
        'Spearheaded migration from PHP/Hack to React/GraphQL, improving application performance and developer experience.',
        'Founded Configuration Products UX group to build a component library, promoting consistency across internal apps.',
        'Optimized C++ and Python API endpoints, improving data querying efficiency for internal dashboards.',
        'Collaborated directly with product customers to gather requirements, define features, and resolve technical issues.',
        'Mentored and trained new engineers, including bootcamp and intern hires, fostering a culture of knowledge-sharing and growth.',
      ],
    },
    {
      company: 'Meta',
      title: 'Software Engineer - Rotational',
      dates: '2021-2022',
      bullets: [
        'Built breadcrumbs navigation and a multi-selection feature with persistent state for search results in the modernized Unigraph dashboard.',
        'Developed a PHP/Hack script to securely enable cross-platform posting from email to Workplace via a customized Chronos job.',
      ],
    },
    {
      company: 'AdMarketplace',
      title: 'Software Engineer',
      dates: '2020-2021',
      bullets: [
        'Architected an internal reporting suite allowing sales teams to rapidly view ad campaign report data, accelerating sales workflows.',
        'Developed a library centralizing common components and boosting development efficiency across engineering teams.',
      ],
    },
    {
      company: 'GenesisQL',
      title: 'Software Engineer',
      dates: '2019-2020',
      bullets: [
        'Engineered GraphQL prototyping functionality to dynamically generate schemas and resolvers from databases and REST APIs.',
        'Managed a team of four engineers, leading daily standups and project management using agile methodology.',
      ],
    },
  ],
  talks: [
    'Federated Web Application Architecture @ Bloomberg',
    'R+ with React in the Terminal @ Bloomberg',
    'Accessibility Software Standards @ Build With Code NYC',
  ],
  education: [
    {
      institution: 'SUNY Purchase',
      degree: 'B.A. in Journalism',
    },
    {
      institution: 'Certification',
      degree: 'AWS Certified Cloud Practitioner',
    },
  ],
};

export type Header = {
  name: string;
  title: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
};

export type Skills = {
  languages: string;
  ai: string;
  tools: string;
};

export type Experience = {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
};

export type Project = {
  name: string;
  url?: string;
  stack?: string;
  dates?: string;
  bullets: string[];
};

export type Education = {
  institution: string;
  degree: string;
};

export type resumeData = {
  header: Header;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  talks: string[];
  education: Education[];
};
