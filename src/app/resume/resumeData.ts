export const resumeData = {
  header: {
    name: 'Thomas Herrmann',
    title: 'Senior Software Engineer | Full-Stack & AI',
    summary:
      'Senior software engineer (ex-Bloomberg, ex-Meta) and technical lead who architects full-stack systems and human-in-the-loop multi-agent LLM products (LangGraph, MCP, RAG, LLM evals). Led an AI-assisted migration workflow adopted by 20+ engineers; founded Bloomberg’s Web App Security Guild.',
    location: 'New York City',
    phone: '631-681-3233',
    email: 'tomherrmannd@gmail.com',
    linkedin: 'linkedin.com/in/thomasherrmann1',
  },
  skills: {
    languages:
      'JavaScript/TypeScript, React, Next.js, Python, GraphQL, REST, Redux, Node.js, Express.js, PHP/Hack, SQL',
    ai:
      'Multi-agent orchestration (Claude & OpenAI APIs), LangGraph, MCP, prompt & context engineering, RAG, LLM evals',
    tools:
      'AWS, Docker, Kubernetes, Redis, Postgres, Vercel, Stripe, Jenkins (CI/CD), Module Federation, Webpack',
    testing:
      'Jest/React Testing Library, pytest, A/B testing, accessibility (WCAG), CSS/Tailwind',
  },
  experience: [
    {
      company: 'Bloomberg',
      title: 'Senior Software Engineer',
      dates: '2023-2026',
      bullets: [
        'Designed and rolled out an AI-assisted migration workflow (shared Cursor rules, skill files, human-in-the-loop PR review) that cut each migration from 1 month to 1 week, adopted by all 4 teams (20+ engineers) to move 9 sub-apps to micro-frontends.',
        'Automated module decoupling, test writing, the React Query migration and PR creation for human review, using reusable repo-level skill files that enforce 80%+ test coverage, PII compliance and query caching strategies.',
        'Architected Module Federation for the contracts portal (9 sub-apps), decoupling deployments for 4 teams and ending cross-team rollbacks.',
        'Engineered backend RBAC and audit logging middleware for regulatory compliance, moving the org from open access to least-privilege.',
        'Led design and execution of a centralized secure attachment backend service, closing a critical unauthorized access risk for legal contracts.',
        'Developed the runtime environment and infrastructure for the Chromium-based Terminal browser, supporting 10,000+ unique applications for 325,000+ subscribers, and migrated it to a multi-process model, improving reliability, efficiency and security.',
        'Founded and chaired the Web Application Security Guild, authored the firm-wide “Web App Security Best Practices,” and ran a security on-call rotation for code audits and vulnerability assessments.',
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
        'Founded Configuration Products UX group to build a design system and component library, promoting consistency across internal apps.',
        'Optimized C++ and Python API endpoints, improving data querying efficiency for internal dashboards.',
        'Collaborated with product customers to gather requirements, define features and resolve technical issues; served in the on-call rotation.',
        'Mentored and trained new engineers, including bootcamp and intern hires, fostering a culture of knowledge-sharing and growth.',
      ],
    },
    {
      company: 'Meta',
      title: 'Software Engineer - Rotational',
      dates: '2021-2022',
      bullets: [
        'Built breadcrumbs navigation and a multi-selection feature with persistent state for search results in the modernized Unigraph dashboard.',
        'Developed a scheduled backend job (PHP/Hack, Chronos) that securely ingests email and posts it to Workplace.',
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
  projects: [
    {
      name: 'Zero Vision Cinema',
      url: 'zerovisioncinema.com',
      dates: '2025-Present',
      bullets: [
        'Shipped a production ticketing platform processing thousands of payments with idempotent webhooks, queued retries and order recovery.',
        'Architected a multi-agent pipeline (Claude drafters, verifier agents) that publishes each event to external platforms with human approval.',
        'Designed a LangGraph agent that triages inquiries and executes end-to-end ticket refunds by interfacing with Stripe and headless CMS APIs.',
        'Launched a grounded research agent (cites only sources it fetched) that emails the team a daily brief on film news and press screenings.',
      ],
    },
    {
      name: 'ZVC Cutroom',
      stack: 'Python, Claude API, DaVinci Resolve',
      dates: 'June 2026-Present',
      bullets: [
        'Built Cutroom, an agentic video editor where Claude drives DaVinci Resolve via tool calls and Pydantic structured outputs.',
        "Engineered Cutroom's transcript RAG (pgvector) to pick clips and write grounded copy, plus a subtitle review agent with an eval set.",
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
  testing: string;
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
