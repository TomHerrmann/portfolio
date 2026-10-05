import React from 'react';
import { resumeData } from './resumeData';
import { MdArrowBack } from 'react-icons/md';
import Link from 'next/link';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-10">
    <h2 className="zvc-heading text-2xl sm:text-3xl mb-2">{title}</h2>
    <span className="zvc-rule mb-5" aria-hidden="true" />
    {children}
  </section>
);

const Bullets = ({ bullets }: { bullets: string[] }) => (
  <ul className="list-disc marker:text-blue-light pl-5 space-y-1.5 zvc-body text-base sm:text-lg leading-snug">
    {bullets.map((bullet, index) => (
      <li key={index}>{bullet}</li>
    ))}
  </ul>
);

const ExperienceItem = ({
  company,
  title,
  dates,
  bullets,
}: {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}) => (
  <div className="mb-8 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
      <h3 className="font-display uppercase text-2xl text-glow">
        {company}{' '}
        <span className="font-utility text-sm text-retro-blue tracking-[0.15em]">
          / {title}
        </span>
      </h3>
      <span className="zvc-badge self-start sm:self-auto">{dates}</span>
    </div>
    <Bullets bullets={bullets} />
  </div>
);

const ProjectItem = ({
  name,
  url,
  dates,
  bullets,
}: {
  name: string;
  url: string;
  dates?: string;
  bullets: string[];
}) => (
  <div className="mb-6 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
      <div className="flex flex-wrap items-baseline gap-x-4">
        <h3 className="font-display uppercase text-2xl text-glow">{name}</h3>
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="zvc-link text-blue-light"
        >
          {url}
        </a>
      </div>
      {dates && (
        <span className="zvc-badge self-start sm:self-auto">{dates}</span>
      )}
    </div>
    <Bullets bullets={bullets} />
  </div>
);

const EducationItem = ({
  institution,
  degree,
}: {
  institution: string;
  degree: string;
}) => (
  <div className="mb-3">
    <h3 className="font-display uppercase text-lg text-glow">{institution}</h3>
    <p className="zvc-body text-lg">{degree}</p>
  </div>
);

export default function ResumePage() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full max-w-4xl mb-6">
        <Link
          href="/"
          aria-label="Back to home"
          className="zvc-icon-frame h-10 w-10 hover:bg-blue-light/25 transition-colors"
        >
          <MdArrowBack className="h-5 w-5" />
        </Link>
      </div>
      <div className="w-full max-w-4xl p-6 sm:p-10 md:p-14 bg-card border-2 border-glow/15 shadow-[6px_6px_0_0_rgba(0,0,0,0.55)]">
        {/* Header Section */}
        <header className="mb-12 text-center flex flex-col items-center">
          <h1 className="zvc-heading text-5xl sm:text-6xl">
            {resumeData.header.name}
          </h1>
          <p className="zvc-kicker text-sm sm:text-base mt-4">
            {resumeData.header.title}
          </p>
          <div className="mt-6 zvc-body text-base flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-1 sm:gap-x-4">
            <span>{resumeData.header.location}</span>
            <span className="hidden sm:inline text-blue-light">/</span>
            <span>{resumeData.header.phone}</span>
            <span className="hidden sm:inline text-blue-light">/</span>
            <span>{resumeData.header.email}</span>
            <span className="hidden sm:inline text-blue-light">/</span>
            <a
              href={`https://${resumeData.header.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="zvc-link text-blue-light"
            >
              {resumeData.header.linkedin}
            </a>
          </div>
        </header>

        {/* Technical Skills Section */}
        <Section title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border-2 border-glow/10 bg-blackout/60 p-4">
              <h4 className="zvc-kicker text-xs mb-2">
                Languages & Frameworks
              </h4>
              <p className="zvc-body text-lg">{resumeData.skills.languages}</p>
            </div>
            <div className="border-2 border-glow/10 bg-blackout/60 p-4">
              <h4 className="zvc-kicker text-xs mb-2">Cloud & Tools</h4>
              <p className="zvc-body text-lg">{resumeData.skills.tools}</p>
            </div>
          </div>
        </Section>

        {/* Work Experience Section */}
        <Section title="Work Experience">
          {resumeData.experience.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </Section>

        {/* Personal Projects Section */}
        <Section title="Personal Projects">
          {resumeData.projects.map((proj, index) => (
            <ProjectItem key={index} {...proj} />
          ))}
        </Section>

        {/* Selected Talks Section */}
        <Section title="Selected Talks">
          <Bullets bullets={resumeData.talks} />
        </Section>

        {/* Education & Certificates Section */}
        <Section title="Education & Certificates">
          {resumeData.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </Section>
      </div>
    </div>
  );
}
