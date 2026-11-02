export const resumeData = {
  header: {
    name: 'Thomas Herrmann',
    title: 'Senior Software Engineer | Full-Stack & AI',
    location: 'New York City',
    phone: '631-681-3233',
    email: 'tomherrmannd@gmail.com',
    linkedin: 'linkedin.com/in/thomasherrmann1',
  },
  skills: {
    languages:
      'JavaScript/TypeScript, React, Next.js, Python, GraphQL, React Query, Redux, Node.js, Express.js, PHP, SQL',
    ai:
      'Multi-agent orchestration (Anthropic Claude, OpenAI APIs), tool calling, context engineering (Cursor rules, Claude skills), MCP, human-in-the-loop (HITL)',
    tools:
      'AWS, Vercel, Postgres, Stripe, CSS/Tailwind/Styled-Components, Jest/React Testing Library, Jenkins',
  },
  experience: [
    {
      company: 'Zero Vision Cinema',
      title: 'Founder & Software Engineer',
      dates: '2025-Present',
      bullets: [
        'Built and scaled a production ticketing platform for a NYC film community, processing 1k+ orders (Next.js, Payload CMS, Postgres, Stripe) with idempotent webhook fulfillment, queued retries and order recovery.',
        'Architected a multi-agent pipeline (orchestrator, Claude Haiku drafters, independent verifier agents) that launches each event to Partiful, calendar and Linear, with human approval required before anything publishes.',
        'Built a scheduled research agent with strict grounding rules (it cites only sources it actually fetched) that keeps the team informed of upcoming film news and press screenings through a daily email brief.',
      ],
    },
    {
      company: 'Bloomberg',
      title: 'Senior Software Engineer',
      dates: '2023-2026',
      bullets: [
        'Spearheaded the design and execution of a centralized secure attachment system, mitigating a critical unauthorized access risk for legal contracts across the Bloomberg ecosystem.',
        'Engineered a custom RBAC and audit logging layer to ensure regulatory compliance, transitioning the organization from open internal access to a strictly governed, "least-privileged" read/write model.',
        'Architected a Federated Module architecture for contracts portal (9 sub-apps), decoupling deployment cycles for 5 pods and eliminating unintentional cross-team rollbacks.',
        'Established the "Golden Path" migration playbook and an AI-assisted workflow (shared Cursor rules, skill files, review checkpoints), enabling 20+ engineers across 4 teams to migrate 9 sub-apps from a monorepo to federated modules.',
        'Founded and chaired the Web Application Security Guild, establishing the organization-wide "Web App Security Best Practices" and evangelized these strategies across the firm through technical presentations.',
        'Operationalized a security on-call rotation, providing proactive code audits and vulnerability assessments to standardize security posture across all web properties.',
        'Served as the technical lead for web development, setting best practices, advocating for new technologies, and authoring documentation.',
      ],
    },
    {
      company: 'Meta',
      title: 'Software Engineer - E4',
      dates: '2022-2023',
      bullets: [
        'Led integration of Spec Doctor functionality from a CLI into the SafeChange Console dashboard, enhancing usability and improving workflow.',
        'Spearheaded migration from PHP/Hack to React/GraphQL, significantly improving application performance and developer experience (devX).',
        'Founded Configuration Products UX group to build a component library, promoting consistency and fast development across internal apps.',
        'Optimized C++ and Python API endpoints, drastically improving data querying efficiency for internal dashboards.',
        'Collaborated directly with product customers to gather requirements, define features, and resolve technical issues.',
        'Mentored and trained new engineers, including bootcamp and intern hires, fostering a culture of knowledge-sharing and growth.',
      ],
    },
    {
      company: 'Meta',
      title: 'Software Engineer - Rotational',
      dates: '2021-2022',
      bullets: [
        'Facilitated project updates by creating a multi-selection feature with persistent state for search results, streamlining the user workflow.',
        'Developed a PHP/Hack script to securely enable cross-platform posting from email to Workplace via a customized Chronos job.',
        'Crafted a breadcrumbs component for seamless user navigation through projects within the Unigraph dashboard.',
        'Contributed to the design and development of the modernized Unigraph dashboard and its UI components.',
      ],
    },
    {
      company: 'AdMarketplace',
      title: 'Software Engineer',
      dates: '2020-2021',
      bullets: [
        'Architected an internal reporting suite allowing sales teams to rapidly view report data, accelerating workflows and increasing sales.',
        'Developed a library centralizing common components and boosting development efficiency across engineering teams.',
        'Defined unit tests with Jest and React Testing Library, focusing on a lightweight, user-centric testing structure.',
      ],
    },
    {
      company: 'GenesisQL',
      title: 'Software Engineer',
      dates: '2019-2020',
      bullets: [
        'Engineered GraphQL prototyping functionality to dynamically generate schemas and resolvers from databases and REST APIs.',
        'Configured exportable Apollo Servers with GraphQL Playground for developers to test data graphs.',
        'Managed a team of four engineers, leading daily standups and project management using agile methodology.',
      ],
    },
  ],
  projects: [] as Project[],
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
  url: string;
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
