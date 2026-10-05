import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward, MdOutlineMail } from 'react-icons/md';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { RxGithubLogo } from 'react-icons/rx';
import { intro, metrics, contact, skills, zvc, zvcStack, resumeData } from './content';

// Bento grid: the whole story in one screen of tiles a recruiter can scan in seconds.
const tile =
  'rounded-3xl bg-card border border-glow/[0.08] p-6 sm:p-7 transition-colors hover:border-blue-light/40';

export default function HomePage() {
  return (
    <main className="font-body max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(150px,auto)] gap-4">
        {/* Intro */}
        <section className={`${tile} sm:col-span-2 lg:row-span-2 flex flex-col justify-between bg-gradient-to-br from-card to-blue-light/15`}>
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/me-circle.png"
              alt="Thomas Herrmann"
              width={88}
              height={88}
              priority
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h1 className="font-display uppercase text-4xl tracking-wide leading-none">Thomas Herrmann</h1>
              <p className="font-utility uppercase text-xs tracking-[0.2em] text-blue-light mt-2">
                Senior Software Engineer
              </p>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl leading-snug text-glow/90">{intro}</p>
        </section>

        {/* Contact */}
        <section className={`${tile} flex flex-col justify-between`}>
          <p className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50">Reach Out</p>
          <div className="flex flex-col gap-2 mt-4">
            <a href={`mailto:${contact.email}`} className="flex items-center justify-between rounded-2xl bg-glow text-blackout px-4 py-3 font-utility uppercase text-xs tracking-[0.15em]">
              Email <MdOutlineMail className="h-5 w-5" />
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a href={contact.linkedin} aria-label="LinkedIn" className="flex items-center justify-center rounded-2xl border border-glow/15 py-3 hover:border-glow/40">
                <RiLinkedinBoxLine className="h-5 w-5" />
              </a>
              <a href={contact.github} aria-label="GitHub" className="flex items-center justify-center rounded-2xl border border-glow/15 py-3 hover:border-glow/40">
                <RxGithubLogo className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Resume */}
        <Link href="/resume" className={`${tile} group flex flex-col justify-between bg-blue-light! border-blue-light!`}>
          <MdArrowOutward className="h-8 w-8 self-end transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          <p className="font-display uppercase text-5xl tracking-wide leading-none">Resume</p>
        </Link>

        {/* Metrics */}
        {metrics.slice(0, 2).map((m) => (
          <section key={m.label} className={`${tile} flex flex-col justify-between`}>
            <p className="font-display text-6xl text-blue-light leading-none">{m.value}</p>
            <p className="text-base text-glow/65 leading-snug mt-4">{m.label}</p>
          </section>
        ))}

        {/* Experience */}
        <section className={`${tile} sm:col-span-2 lg:row-span-2`}>
          <p className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50 mb-5">Experience</p>
          <ul className="divide-y divide-glow/10">
            {resumeData.experience.map((exp) => (
              <li key={exp.company + exp.title} className="py-3 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-display uppercase text-2xl tracking-wide leading-tight">{exp.company}</p>
                  <p className="text-base text-glow/60">{exp.title}</p>
                </div>
                <span className="font-utility text-xs tracking-[0.15em] text-retro-blue whitespace-nowrap">
                  {exp.dates}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className={`${tile} sm:col-span-2`}>
          <p className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50 mb-4">Stack</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-glow/15 px-3 py-1 text-sm text-glow/80">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Side project */}
        <a href="https://www.zerovisioncinema.com" className={`${tile} group sm:col-span-2 flex flex-col justify-between`}>
          <div className="flex items-start justify-between">
            <p className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50">Side Project</p>
            <MdArrowOutward className="h-6 w-6 text-blue-light transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <div>
            <p className="font-display uppercase text-3xl tracking-wide mt-4">Zero Vision Cinema</p>
            <p className="text-base text-glow/75 mt-2 mb-3">{zvc.summary}</p>
            <ul className="list-disc marker:text-blue-light pl-5 space-y-1 text-base text-glow/65 leading-snug mb-4">
              {zvc.system.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {zvcStack.map((s) => (
                <span key={s} className="rounded-full bg-blue-light/15 text-blue-light px-3 py-1 text-xs font-utility uppercase tracking-[0.1em]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </a>

        {/* Talks */}
        <section className={`${tile} sm:col-span-2`}>
          <p className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50 mb-4">Talks</p>
          <ul className="space-y-2 text-lg text-glow/80">
            {resumeData.talks.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {metrics.slice(2).map((m) => (
          <section key={m.label} className={`${tile} flex flex-col justify-between`}>
            <p className="font-display text-6xl text-blue-light leading-none">{m.value}</p>
            <p className="text-base text-glow/65 leading-snug mt-4">{m.label}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
