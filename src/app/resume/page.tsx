import React from 'react';
import { resumeData } from './resumeData';
import { MdArrowBack } from 'react-icons/md';
import Link from 'next/link';

const card = 'rounded-3xl bg-card border border-glow/[0.08] p-6 sm:p-8';
const label = 'font-utility uppercase text-xs tracking-[0.2em] text-glow/50';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className={card}>
    <h2 className={`${label} mb-6`}>{title}</h2>
    {children}
  </section>
);

const Bullets = ({ bullets }: { bullets: string[] }) => (
  <ul className="list-disc marker:text-blue-light pl-5 space-y-1.5 text-base sm:text-lg text-glow/75 leading-snug">
    {bullets.map((bullet, index) => (
      <li key={index}>{bullet}</li>
    ))}
  </ul>
);

const ItemHeader = ({
  name,
  sub,
  dates,
}: {
  name: React.ReactNode;
  sub?: string;
  dates?: string;
}) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-3">
    <div>
      <h3 className="font-display uppercase text-2xl tracking-wide leading-tight">
        {name}
      </h3>
      {sub && <p className="text-base text-glow/60">{sub}</p>}
    </div>
    {dates && (
      <span className="font-utility text-xs tracking-[0.15em] text-retro-blue whitespace-nowrap">
        {dates}
      </span>
    )}
  </div>
);

export default function ResumePage() {
  return (
    <main className="font-body max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-4">
      <Link
        href="/"
        aria-label="Back to home"
        className="self-start inline-flex items-center gap-2 rounded-full border border-glow/15 px-4 py-2 font-utility uppercase text-xs tracking-[0.15em] hover:border-glow/40"
      >
        <MdArrowBack className="h-4 w-4" /> Home
      </Link>

      {/* Header */}
      <header className={`${card} bg-gradient-to-br from-card to-blue-light/15`}>
        <h1 className="font-display uppercase text-5xl sm:text-6xl tracking-wide leading-none">
          {resumeData.header.name}
        </h1>
        <p className="font-utility uppercase text-sm tracking-[0.2em] text-blue-light mt-3">
          {resumeData.header.title}
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {[
            resumeData.header.location,
            resumeData.header.phone,
            resumeData.header.email,
          ].map((item) => (
            <span key={item} className="rounded-full border border-glow/15 px-3 py-1 text-glow/80">
              {item}
            </span>
          ))}
          <a
            href={`https://${resumeData.header.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-light/15 text-blue-light px-3 py-1 hover:bg-blue-light/25"
          >
            {resumeData.header.linkedin}
          </a>
        </div>
      </header>

      <Section title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-utility uppercase text-xs tracking-[0.15em] text-blue-light mb-2">
              Languages & Frameworks
            </h4>
            <p className="text-lg text-glow/80">{resumeData.skills.languages}</p>
          </div>
          <div>
            <h4 className="font-utility uppercase text-xs tracking-[0.15em] text-blue-light mb-2">
              Cloud & Tools
            </h4>
            <p className="text-lg text-glow/80">{resumeData.skills.tools}</p>
          </div>
        </div>
      </Section>

      <Section title="Work Experience">
        <div className="divide-y divide-glow/10">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="py-6 first:pt-0 last:pb-0">
              <ItemHeader name={exp.company} sub={exp.title} dates={exp.dates} />
              <Bullets bullets={exp.bullets} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Personal Projects">
        {resumeData.projects.map((proj, index) => (
          <div key={index}>
            <ItemHeader
              name={
                <>
                  {proj.name}{' '}
                  <a
                    href={`https://${proj.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body normal-case text-base tracking-normal text-blue-light hover:underline"
                  >
                    {proj.url}
                  </a>
                </>
              }
              dates={proj.dates}
            />
            <Bullets bullets={proj.bullets} />
          </div>
        ))}
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section title="Selected Talks">
          <ul className="space-y-2 text-lg text-glow/80">
            {resumeData.talks.map((talk) => (
              <li key={talk}>{talk}</li>
            ))}
          </ul>
        </Section>
        <Section title="Education & Certificates">
          <div className="space-y-4">
            {resumeData.education.map((edu) => (
              <div key={edu.degree}>
                <h3 className="font-display uppercase text-xl tracking-wide">{edu.institution}</h3>
                <p className="text-lg text-glow/75">{edu.degree}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
