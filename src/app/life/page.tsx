'use client';

import Link from 'next/link';

export default function LifePage() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">Life Outside Code</h2>
      <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
        When I’m not debugging apps, I’m behind the decks, framing cinematic moments through a lens, or editing videos like a mad man.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* DJ */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">🎧 DJ Sets</h3>
          <p className="text-gray-700 mb-4">
            I mix afrobeats, afrohouse, afrotech — basically afro-anything with soul.
          </p>
          <ul className="space-y-2 text-indigo-600 font-medium">
            <li>
              <Link
                href="https://www.youtube.com/@dj.duuhvid"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Listen on YouTube →
              </Link>
            </li>
            <li>
              <Link
                href="https://soundcloud.com/david-odari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Listen on SoundCloud →
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/dj.duuhvid"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Follow on Instagram →
              </Link>
            </li>
          </ul>
        </div>

        {/* Photography */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">📸 Photography</h3>
          <p className="text-gray-700 mb-4">
            Street photography, portraits, and cinematic travel shots — all framed with intention.
          </p>
          <ul className="space-y-2 text-indigo-600 font-medium">
            <li>
              <Link
                href="https://instagram.com/david_odari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                See on Instagram →
              </Link>
            </li>
            <li>
              <Link
                href="https://unsplash.com/@dkiribwa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View on Unsplash →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
