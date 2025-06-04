"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/life", label: "Life" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-neutral-800 px-4 py-3 z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          odari<span className="text-indigo-500">.dev</span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="text-2xl md:hidden"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay + Drawer */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-white/10 backdrop-blur-md z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 w-64 h-full bg-neutral-900 text-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
              className="text-2xl absolute top-4 right-4"
            >
              ✕
            </button>

            {/* Menu */}
            <ul className="mt-16 flex flex-col gap-6 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
