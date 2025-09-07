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
  <section className="mb-6">
    <h2 className="text-xl font-bold border-b-2 border-sky-300 pb-1 mb-2 text-gray-900 dark:text-white">
      {title}
    </h2>
    {children}
  </section>
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
  <div className="mb-4">
    <div className="flex justify-between items-start mb-1">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {company}{' '}
        <span className="text-sm font-normal text-sky-700 dark:text-sky-300">
          - {title}
        </span>
      </h3>
      <span className="text-sm text-sky-700 dark:text-sky-300">{dates}</span>
    </div>
    <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
      {bullets.map((bullet, index) => (
        <li key={index}>{bullet}</li>
      ))}
    </ul>
  </div>
);

const ProjectItem = ({
  name,
  url,
  bullets,
}: {
  name: string;
  url: string;
  bullets: string[];
}) => (
  <div className="mb-4">
    <div className="flex justify-start items-center mb-1 gap-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <a
        href={`https://${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-sky-600 hover:underline"
      >
        {url}
      </a>
    </div>
    <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
      {bullets.map((bullet, index) => (
        <li key={index}>{bullet}</li>
      ))}
    </ul>
  </div>
);

const TalkItem = ({ talk }: { talk: string }) => <li>{talk}</li>;

const EducationItem = ({
  institution,
  degree,
}: {
  institution: string;
  degree: string;
}) => (
  <div className="mb-2">
    <h3 className="font-semibold text-gray-900 dark:text-white">
      {institution}
    </h3>
    <p className="text-gray-800 dark:text-gray-200">{degree}</p>
  </div>
);

export default function ResumePage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-sky-100 via-white to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900">
      <Link href="/">
        <MdArrowBack className="absolute top-6 left-8 h-8 w-8 text-gray-900 dark:text-white transition-colors duration-200 hover:text-sky-700" />
      </Link>
      <div className="relative w-full max-w-4xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-5xl p-6 m-4 sm:p-10 md:p-14 border-4 border-gray-200 dark:border-gray-700">
        {/* Header Section */}
        <header className="mb-8 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-lg">
            {resumeData.header.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 dark:text-sky-300 mt-2">
            {resumeData.header.title}
          </h2>
          <div className="mt-4 text-gray-800 dark:text-gray-200 text-base flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <span>{resumeData.header.location}</span>
            <span className="hidden sm:inline">|</span>
            <span>{resumeData.header.phone}</span>
            <span className="hidden sm:inline">|</span>
            <span>{resumeData.header.email}</span>
            <span className="hidden sm:inline">|</span>
            <a
              href={`https://${resumeData.header.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sky-600 dark:text-sky-400 font-medium"
            >
              {resumeData.header.linkedin}
            </a>
          </div>
        </header>

        {/* Technical Skills Section */}
        <Section title="TECHNICAL SKILLS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
            <div className="bg-sky-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-sky-700 dark:text-sky-300 mb-1">
                Languages & Frameworks:
              </h4>
              <p>{resumeData.skills.languages}</p>
            </div>
            <div className="bg-sky-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-sky-700 dark:text-sky-300 mb-1">
                Cloud & Tools:
              </h4>
              <p>{resumeData.skills.tools}</p>
            </div>
          </div>
        </Section>

        {/* Work Experience Section */}
        <Section title="WORK EXPERIENCE">
          {resumeData.experience.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </Section>

        {/* Personal Projects Section */}
        <Section title="PERSONAL PROJECTS">
          {resumeData.projects.map((proj, index) => (
            <ProjectItem key={index} {...proj} />
          ))}
        </Section>

        {/* Selected Talks Section */}
        <Section title="SELECTED TALKS">
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            {resumeData.talks.map((talk, index) => (
              <TalkItem key={index} talk={talk} />
            ))}
          </ul>
        </Section>

        {/* Education & Certificates Section */}
        <Section title="EDUCATION & CERTIFICATES">
          {resumeData.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </Section>
      </div>
    </div>
  );
}
