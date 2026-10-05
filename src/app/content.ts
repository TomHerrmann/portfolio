import { resumeData } from './resume/resumeData';

// Home page copy. Everything here is taken from the
// existing site copy or resumeData; nothing new is claimed.
export const intro =
  "Hey! I'm Tom, a software engineer based in New York City with a knack for building scalable web applications and delivering modern UX.";

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
  ...resumeData.skills.tools.split(',').map((s) => s.trim()),
];

export const zvcStack = ['Next.js', 'Payload CMS', 'Stripe', 'QStash', 'Resend', 'Vercel'];

// From the zero-vision-cinema README; the events/critic line is Tom's own.
export const zvc = {
  summary:
    'A film screening pop-up in NYC where I run movie events and work as a critic. I also built and run the platform behind it:',
  system: [
    'Stripe payments with server-side pricing and double-charge protection',
    'Queued ticket emails with retries, so no buyer misses a ticket',
    'CMS admin for events, venues, orders, refunds and check-in',
  ],
};

export { resumeData };
