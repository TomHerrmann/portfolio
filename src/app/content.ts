import { resumeData } from './resume/resumeData';

// Home page copy. Everything here is taken from the
// existing site copy or resumeData; nothing new is claimed.
export const intro =
  "Hey! I'm Tom, a senior software engineer in New York City. I build scalable web applications and AI agents that keep a human in the loop.";

// Numbers pulled from Bloomberg bullets in resumeData.
export const metrics = [
  { value: '9', label: 'Sub-apps moved to a Federated Module architecture' },
  { value: '5', label: 'Pods given independent deployment cycles' },
  { value: '20+', label: 'Engineers onboarded via the "Golden Path" playbook' },
  { value: '0', label: 'Unintentional cross-team rollbacks after the federated split' },
];

export const contact = {
  email: 'tomherrmannd@gmail.com',
  linkedin: 'https://linkedin.com/in/thomasherrmann1/',
  github: 'https://github.com/TomHerrmann',
};

export const skills = [
  ...resumeData.skills.languages.split(',').map((s) => s.trim()),
  'Claude / OpenAI APIs',
  'Multi-agent orchestration',
  'Context engineering',
  'MCP',
  ...resumeData.skills.tools.split(',').map((s) => s.trim()),
];

export const zvcStack = ['Next.js', 'Payload CMS', 'Postgres', 'Stripe', 'Claude', 'QStash', 'Resend', 'Vercel'];

// Summary is Tom's own wording; system lines come from the zero-vision-cinema README
// and its .claude/skills/event-rollout pipeline.
export const zvc = {
  summary:
    'A web app with an end-to-end ticketing system, newsletter and community integrations, built to support my passion: running community-focused movie events.',
  system: [
    'Stripe payments with server-side pricing and double-charge protection',
    'Queued ticket emails with retries, so no buyer misses a ticket',
    'CMS admin for events, venues, orders, refunds and check-in',
    'Multi-agent event rollout: Claude drafters and independent checker agents, with human approval before anything publishes',
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
