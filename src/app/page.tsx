'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="text-center md:text-left order-2 md:order-1">
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
            className="text-lg md:text-xl text-neutral-400 max-w-xl mb-8 mx-auto md:mx-0"
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 relative aspect-[4/5] max-w-sm mx-auto md:max-w-none w-full rounded-2xl overflow-hidden ring-1 ring-indigo-500/30 shadow-2xl shadow-indigo-500/10"
        >
          <Image
            src="/placeholders/hero-portrait.svg"
            alt="Portrait placeholder — drop a real photo here"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 480px"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
