import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward, MdOutlineMail } from 'react-icons/md';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { RxGithubLogo } from 'react-icons/rx';
import { intro, metrics, contact, skills, aiSkills, aiWork, zvc, zvcStack, resumeData, groupExperience } from './content';

// Bento grid: the whole story in one screen of tiles a recruiter can scan in seconds.
const tile =
  'rounded-3xl bg-card border border-glow/[0.08] p-6 sm:p-7 transition-colors hover:border-blue-light/40';

export default function HomePage() {
  return (
    <main className="font-body max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(150px,auto)] grid-flow-row-dense gap-4">
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
                Senior Software Engineer · AI & Full-Stack
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

        {/* AI work */}
        <section aria-labelledby="ai-work" className={`${tile} sm:col-span-2 lg:col-span-4 bg-gradient-to-br from-card to-cult-classic/20`}>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
            <h2 id="ai-work" className="font-display uppercase text-4xl tracking-wide leading-none">AI Engineering</h2>
            <p className="font-utility uppercase text-xs tracking-[0.2em] text-blue-light">
              Multi-agent systems · Tool calling · RAG · Evals · Human in the loop
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiWork.map((w) => (
              <article key={w.name}>
                <h3 className="font-display uppercase text-2xl tracking-wide leading-tight">{w.name}</h3>
                <p className="font-utility uppercase text-[0.7rem] tracking-[0.15em] text-glow/50 mt-1 mb-3">{w.sub}</p>
                <ul className="list-disc marker:text-blue-light pl-5 space-y-1.5 text-base text-glow/75 leading-snug">
                  {w.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Metrics */}
        {metrics.slice(0, 2).map((m) => (
          <section key={m.label} className={`${tile} flex flex-col justify-between`}>
            <p className="font-display text-6xl text-blue-light leading-none">{m.value}</p>
            <p className="text-base text-glow/65 leading-snug mt-4">{m.label}</p>
          </section>
        ))}

        {/* Experience */}
        <section className={`${tile} sm:col-span-2 lg:row-span-2`}>
          <h2 className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50 mb-5">Experience</h2>
          <ul className="divide-y divide-glow/10">
            {groupExperience(resumeData.experience).map((group) => (
              <li key={group.company + group.dates} className="py-3 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-display uppercase text-2xl tracking-wide leading-tight">{group.company}</p>
                  {group.roles.map((role) => (
                    <p key={role.title} className="text-base text-glow/60">
                      {role.title}
                      {group.roles.length > 1 && (
                        <span className="font-utility text-xs tracking-[0.15em] text-glow/40 ml-2">{role.dates}</span>
                      )}
                    </p>
                  ))}
                </div>
                <span className="font-utility text-xs tracking-[0.15em] text-retro-blue whitespace-nowrap">
                  {group.dates}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {metrics.slice(2).map((m) => (
          <section key={m.label} className={`${tile} flex flex-col justify-between`}>
            <p className="font-display text-6xl text-blue-light leading-none">{m.value}</p>
            <p className="text-base text-glow/65 leading-snug mt-4">{m.label}</p>
          </section>
        ))}

        {/* Skills */}
        <section className={`${tile} sm:col-span-2`}>
          <h2 className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50 mb-4">Stack</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {aiSkills.map((s) => (
              <span key={s} className="rounded-full bg-blue-light/15 text-blue-light px-3 py-1 text-sm">
                {s}
              </span>
            ))}
          </div>
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
            <p className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50">Project</p>
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
          <h2 className="font-utility uppercase text-xs tracking-[0.2em] text-glow/50 mb-4">Talks</h2>
          <ul className="space-y-2 text-lg text-glow/80">
            {resumeData.talks.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
