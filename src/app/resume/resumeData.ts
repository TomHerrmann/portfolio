export const resumeData = {
  header: {
    name: 'Thomas Herrmann',
    title: 'Software Engineer',
    location: 'New York City',
    phone: '631-681-3233',
    email: 'tomherrmannd@gmail.com',
    linkedin: 'linkedin.com/in/thomasherrmann1',
  },
  skills: {
    languages:
      'React, Next, JavaScript/TypeScript, GraphQL/Relay, ReactQuery, Redux, Node.js, Express.js, PHP, Python, SQL',
    tools:
      'AWS, Vercel, CSS/Tailwind/Styled-Components, Jest/React Testing Library, Chronos, Jenkins, Webpack, Babel',
  },
  experience: [
    {
      company: 'Bloomberg',
      title: 'Senior Software Engineer',
      dates: '2023-Current',
      bullets: [
        'Architected a secure system for attaching thousands of legal documents to internal tickets, ensuring compliance with regulatory standards.',
        'Spearheaded the refactoring of a monorepo into federated modules, significantly accelerating sub-application development across teams.',
        'Developed the runtime environment and infrastructure for the Chromium-based Terminal browser, supporting 10,000+ unique applications.',
        'Migrated the Terminal to a multi-process model (browser/renderer separation) to enhance application reliability, efficiency, and security.',
        'Led a cross-functional initiative to create a direct endpoint for Launchpad components, eliminating dependencies and resolving bugs.',
        'Served technical lead for frontend development, authoring documentation, mentoring junior engineers, and delivering talks on best practices.',
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
        'Maintained comprehensive testing coverage across JavaScript and Hack codebases.',
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
  projects: [
    {
      name: 'Zero Vision Cinema',
      url: 'zerovisioncinema.com',
      bullets: [
        'Engineered a full-stack event ticketing system using Next.js and Payload CMS, deployed via Vercel’s global edge network, and built with Shadcn and Tailwind CSS to create a modern user interface.',
        'Integrated Stripe webhooks to manage secure ticket payments and leveraged Resend API to automate ticket delivery via emails, creating a seamless end-to-end user experience.',
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
  location: string;
  phone: string;
  email: string;
  linkedin: string;
};

export type Skills = {
  languages: string;
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
