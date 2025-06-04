'use client';

import Link from 'next/link';
import { FaYoutube, FaMedium,FaTwitch } from 'react-icons/fa';

export default function Blog() {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-4">
      <h2 className="text-4xl font-bold mb-4 text-center">Dev Content & Writing</h2>
      <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
        I share insights on building mobile apps, solving real-world problems with code, and documenting the chaos of being a modern dev.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Medium */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaMedium /> Medium
          </h3>
          <p className="text-gray-700 mb-4">
            Dev deep dives, technical articles, and career insights.
          </p>
          <Link
            href="https://medium.com/@davidkibzodari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Read on Medium →
          </Link>
        </div>

        {/* Hashnode */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
             Hashnode
          </h3>
          <p className="text-gray-700 mb-4">
            Short-form devlogs, build notes, and weekly learning summaries.
          </p>
          <Link
            href="https://davidodari.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Visit my Hashnode →
          </Link>
        </div>

        {/* YouTube */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaYoutube /> YouTube
          </h3>
          <p className="text-gray-700 mb-4">
            I post code walkthroughs, live builds, and dev tool reviews.
          </p>
          <Link
            href="https://www.youtube.com/@droidhalla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Watch on YouTube →
          </Link>
        </div>
        {/* Twitch */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaTwitch /> Twitch
          </h3>
          <p className="text-gray-700 mb-4">
            Catch my live coding streams, Q&As, and debugging chaos in real-time.
          </p>
          <Link
            href="https://twitch.tv/droidhalla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Stream on Twitch →
          </Link>
        </div>
      </div>
    </section>
  );
}
