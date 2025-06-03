'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto mt-20 text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
      <p className="text-neutral-400 mb-6">
        Whether it’s collab ideas, code talk, or music banter — hit me up.
      </p>

      <div className="flex justify-center gap-6 text-3xl mb-8">
        <a
          href="https://github.com/odaridavid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/david-odari-kiribwa-155613111"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:davidkibzodari@gmail.com"
          className="hover:text-indigo-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-sm text-neutral-500">
        Or email me manually: <span className="select-all">davidkibzodari@gmail.com</span>
      </p>
    </section>
  );
}