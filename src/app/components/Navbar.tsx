'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
      <Link href="/" className="text-xl font-bold">
        Dave<span className="text-indigo-500">Dev</span>
      </Link>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <span className="text-2xl">☰</span>
      </button>

      <ul
        className={`${
          open ? 'block' : 'hidden'
        } md:flex gap-4 text-sm font-medium md:items-center md:space-x-6`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-indigo-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
