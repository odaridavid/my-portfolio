'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hey, I&#39;m Dave. 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-neutral-400 max-w-xl mb-8"
      >
        Software engineer and lover of the arts.
        I love my code like I love my home screen — clean, minimal, and only the essentials.
        Find me on a DJ deck or behind a camera when I am not coding a.k.a telling AI what to do.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="/projects"
          className="inline-block px-6 py-3 rounded-md border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-black transition"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
