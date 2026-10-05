import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineMail } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi2';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { RxGithubLogo } from 'react-icons/rx';

const contactLinks = [
  {
    href: 'tel:+16316813233',
    label: '631-681-3233',
    Icon: HiOutlinePhone,
  },
  {
    href: 'mailto:tomherrmannd@gmail.com',
    label: 'tomherrmannd@gmail.com',
    Icon: MdOutlineMail,
  },
  {
    href: 'https://linkedin.com/in/thomasherrmann1/',
    label: 'LinkedIn',
    Icon: RiLinkedinBoxLine,
  },
  {
    href: 'https://github.com/TomHerrmann',
    label: 'GitHub',
    Icon: RxGithubLogo,
  },
];

export default function AboutMePage() {
  return (
    <main className="w-full flex items-start">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
        {/* Left: Image & Contact Info Section */}
        <section className="flex-1 flex flex-col items-start justify-start w-full max-w-sm md:max-w-none md:p-6">
          <div className="zvc-card zvc-worn-edge p-2 mb-8 w-full max-w-sm">
            <Image
              src="/me.png"
              alt="Thomas Herrmann"
              className="object-cover w-full h-auto grayscale-[15%]"
              width={250}
              height={250}
              priority
            />
          </div>
          <h1 className="zvc-heading text-5xl md:text-6xl mb-3">
            Thomas Herrmann
          </h1>
          <h2 className="zvc-kicker text-sm md:text-base mb-6">
            Software Engineer
          </h2>
          <span className="zvc-rule mb-8" aria-hidden="true" />
          <ul className="flex flex-col items-start gap-3 text-lg">
            {contactLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center gap-3 zvc-link"
                >
                  <span className="zvc-icon-frame h-10 w-10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Right: About Me Section */}
        <section className="flex-1 flex flex-col items-start justify-start gap-6 w-full md:p-6 md:pt-10">
          <p className="zvc-kicker text-xs">Now Showing</p>
          <h2 className="zvc-heading text-4xl md:text-5xl">About Me</h2>
          <div className="zvc-body text-lg md:text-xl leading-relaxed">
            <p className="mb-5">
              {
                "Hey! I'm Tom, a software engineer based in New York City with a knack for building scalable web applications and delivering modern UX. My career has been focused on planning and executing full-stack solutions at companies like Meta and Bloomberg, where I've led everything from monorepo refactorings to cross-development of large scale applications. I enjoy taking on technical leadership roles, mentoring junior engineers, and sharing my knowledge through public speaking."
              }
            </p>
            <p>
              {
                "Beyond my professional work, I'm passionate about film and building community. I founded both Zero Vision Cinema, a pop-up movie theater, and Astoria Horror Club. This passion inspired me to leverage my technical skills to create a custom event ticketing system for ZVC, which helps us put on unique film screenings."
              }
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="/resume" className="zvc-btn">
              View Resume
            </Link>
            <Link
              href="https://www.zerovisioncinema.com"
              className="zvc-btn-outline"
            >
              View ZVC
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
