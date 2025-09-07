import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineMail } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi2';

import { RiLinkedinBoxLine } from 'react-icons/ri';

export default function AboutMePage() {
  return (
    <main className="min-h-screen w-full flex items-start">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10">
        {/* Left: Image & Contact Info Section */}
        <section className="flex-1 flex flex-col items-start justify-start w-full md:p-10 text-center">
          <Image
            src="/me.png"
            alt="Thomas Herrmann"
            className="object-cover w-full h-auto rounded-x2 shadow-lg mb-6 max-w-sm"
            width={250}
            height={250}
            priority
          />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            Thomas Herrmann
          </h1>
          <h2 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">
            Software Engineer
          </h2>
          <div className="flex flex-col items-start justify-start gap-2 text-lg text-gray-800 dark:text-gray-200">
            <Link
              href="tel:+16316813233"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 hover:text-sky-500"
            >
              <HiOutlinePhone className="h-8 w-8" />
              <span>631-681-3233</span>
            </Link>
            <Link
              href="mailto:tomherrmannd@gmail.com"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 hover:text-sky-500"
            >
              <MdOutlineMail className="h-8 w-8" />
              <span>tomherrmannd@gmail.com</span>
            </Link>
            <Link
              href="https://linkedin.com/in/thomasherrmann1/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 hover:text-sky-500"
            >
              <RiLinkedinBoxLine className="h-8 w-8" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </section>

        {/* Right: About Me Section */}
        <section className="flex-1 flex flex-col items-start justify-start gap-8 w-full h-full md:p-10 md:pt-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="text-gray-300">
            <p className="text-lg leading-relaxed mb-4">
              {
                "Hey! I'm Tom, a software engineer based in New York City with a knack for building scalable web applications and delivering modern UX. My career has been focused on planning and executing full-stack solutions at companies like Meta and Bloomberg, where I've led everything from monorepo refactorings to cross-development of large scale applications. I enjoy taking on technical leadership roles, mentoring junior engineers, and sharing my knowledge through public speaking."
              }
            </p>
            <p className="text-lg leading-relaxed">
              {
                "Beyond my professional work, I'm passionate about film and building community. I founded both Zero Vision Cinema, a pop-up movie theater, and Astoria Horror Club. This passion inspired me to leverage my technical skills to create a custom event ticketing system for ZVC, which helps us put on unique film screenings."
              }
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              href="/resume"
              className="px-6 py-2 rounded-lg text-white border-1 border-white font-semibold shadow hover:bg-sky-700 transition-colors"
            >
              View Resume
            </Link>
            <Link
              href="https://www.zerovisioncinema.com"
              className="px-6 py-2 rounded-lg text-white border-1 border-white font-semibold shadow hover:bg-sky-700 transition-colors"
            >
              View ZVC
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
