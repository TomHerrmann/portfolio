import { resumeData } from './resume/resumeData';

// Home page copy. Everything here is taken from the
// existing site copy or resumeData; nothing new is claimed.
export const intro =
  "Hey! I'm Tom, a senior software engineer in New York City. I build AI agents that keep a human in the loop, and the scalable web applications they run in.";

// Numbers pulled from Bloomberg bullets in resumeData.
export const metrics = [
  { value: '9', label: 'Sub-apps moved to a micro-frontend architecture' },
  { value: '1 week', label: 'Per sub-app migration with an AI-assisted workflow, down from 1 month' },
  { value: '20+', label: 'Engineers moved onto an AI-assisted migration workflow' },
  { value: '0', label: 'Unintentional cross-team rollbacks after the micro-frontend split' },
];

export const contact = {
  email: 'tomherrmannd@gmail.com',
  linkedin: 'https://linkedin.com/in/thomasherrmann1/',
  github: 'https://github.com/TomHerrmann',
};

// AI skills come first and render highlighted on the home page.
export const aiSkills = [
  'Claude / OpenAI APIs',
  'Multi-agent orchestration',
  'LangGraph',
  'Agent harnesses',
  'Tool calling',
  'Structured outputs',
  'RAG (pgvector)',
  'LLM evals',
  'Human-in-the-loop',
];

export const skills = [
  ...resumeData.skills.languages.split(',').map((s) => s.trim()),
  ...resumeData.skills.tools.split(',').map((s) => s.trim()),
];

// AI work, lifted from the projects and Bloomberg bullets in resumeData.
export const aiWork = [
  {
    name: 'Zero Vision Cinema',
    sub: 'Agents on a live ticketing platform',
    lines: [
      'Multi-agent event rollout: Claude drafters and independent verifier agents publish each event to Partiful, calendar and Linear, with human approval',
      'LangGraph agent that executes end-to-end ticket refunds through the Stripe and CMS APIs',
      'Grounded research agent that cites only sources it fetched and emails a daily brief',
    ],
  },
  {
    name: 'ZVC Cutroom',
    sub: 'Python · Claude API · DaVinci Resolve',
    lines: [
      'Agentic video-editing harness: Claude drives DaVinci Resolve via tool calls, assembling cuts from Pydantic structured outputs',
      'RAG over video transcripts (pgvector) to pick key moments and write grounded per-platform copy',
      'Subtitle review agent that flags unverifiable words for a human, backed by an eval set and a test harness',
    ],
  },
  {
    name: 'Bloomberg',
    sub: 'AI-assisted engineering at scale',
    lines: [
      'AI-assisted migration workflow cut each sub-app migration from 1 month to 1 week',
      'Adopted by all 4 teams (20+ engineers) to move 9 sub-apps to micro-frontends',
      'Automated module decoupling, tests, the React Query migration and PRs for human review',
      'Reusable repo-level skill files enforce 80%+ test coverage, PII compliance and query caching strategies',
    ],
  },
];

export const zvcStack = ['Next.js', 'Payload CMS', 'Postgres', 'Stripe', 'Claude', 'QStash', 'Resend', 'Vercel', 'Python', 'DaVinci Resolve'];

// Summary is Tom's own wording; system lines come from the zero-vision-cinema README
// and its .claude/skills/event-rollout pipeline.
export const zvc = {
  summary:
    'A web app with an end-to-end ticketing system, newsletter and community integrations, built to support my passion: running community-focused movie events.',
  system: [
    'Stripe payments with server-side pricing and double-charge protection',
    'Queued ticket emails with retries, so no buyer misses a ticket',
    'CMS admin for events, venues, orders, refunds and check-in',
  ],
};

export { resumeData };

export type ExperienceGroup = {
  company: string;
  dates: string;
  roles: (typeof resumeData.experience)[number][];
};

// Consecutive roles at the same company render as one position with
// several titles (e.g. Meta: Rotational, then E4).
export function groupExperience(
  experience: typeof resumeData.experience
): ExperienceGroup[] {
  const groups: ExperienceGroup[] = [];
  for (const role of experience) {
    const last = groups[groups.length - 1];
    if (last && last.company === role.company) last.roles.push(role);
    else groups.push({ company: role.company, dates: role.dates, roles: [role] });
  }
  for (const g of groups) {
    if (g.roles.length > 1) {
      const end = g.roles[0].dates.split('-').pop();
      const start = g.roles[g.roles.length - 1].dates.split('-')[0];
      g.dates = `${start}-${end}`;
    }
  }
  return groups;
}
