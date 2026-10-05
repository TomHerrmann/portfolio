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
  { value: '3', label: 'Tech talks given at Bloomberg and Build With Code NYC' },
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

export const zvcStack = ['Next.js', 'Payload CMS', 'Vercel', 'Stripe', 'Resend', 'Tailwind CSS', 'Shadcn'];

export { resumeData };
