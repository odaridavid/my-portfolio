"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaGooglePlay,
  FaApple,
  FaYoutube,
  FaAndroid,
} from "react-icons/fa";

const COVER = "/placeholders/project-cover.svg";

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto mt-20 px-4">
      <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
      <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
        Here’s where I ship stuff — apps, experiments, tools. Some are in the
        store, others live on GitHub.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub */}
        <div className="bg-white text-black rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="relative aspect-video bg-neutral-900">
            <Image
              src={COVER}
              alt="GitHub cover placeholder"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaGithub /> GitHub
            </h3>
            <p className="text-gray-700 mb-4">
              Explore my open source projects, experiments, and dev utilities.
            </p>
            <Link
              href="https://github.com/odaridavid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              View on GitHub →
            </Link>
          </div>
        </div>

        {/* Play Store */}
        <div className="bg-white text-black rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="relative aspect-video bg-neutral-900">
            <Image
              src={COVER}
              alt="Google Play cover placeholder"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaGooglePlay /> Google Play
            </h3>
            <p className="text-gray-700 mb-4">
              Android apps I have designed, developed, and published to the world.
            </p>
            <Link
              href="https://play.google.com/store/apps/dev?id=8090138511631227064&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              See my apps →
            </Link>
          </div>
        </div>

        {/* Apple App Store */}
        <div className="bg-white text-black rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="relative aspect-video bg-neutral-900">
            <Image
              src={COVER}
              alt="App Store cover placeholder"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaApple /> App Store
            </h3>
            <p className="text-gray-700 mb-4">
              iOS apps for iPhone and iPad — built with KMP.
            </p>
            <Link
              href="https://apps.apple.com/developer/david-odari-kiribwa/id1706468850"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              Check App Store →
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-4 text-center">🎥 Highlights</h2>
        <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
          Here is a story I was featured in by the Android developer team some
          years back on my journey as a developer and how I got into Android
          development. It was a great experience to share my story with the
          community.
        </p>

        <div className="relative overflow-hidden rounded-xl shadow-lg max-w-3xl mx-auto aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DZ-rEgAWFkQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        <p className="mt-4 text-center text-sm text-neutral-500">
          <FaYoutube className="inline mr-1" /> Watch it on{" "}
          <Link
            href="https://www.youtube.com/watch?v=DZ-rEgAWFkQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            YouTube
          </Link>
        </p>
        {/* Android Weekly Feature */}
        <div className="bg-white text-black p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaAndroid /> Android Weekly Feature
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            My app quality insight video was featured in{" "}
            <strong>Android Weekly Issue #571</strong> — a go-to resource for
            devs in the Android ecosystem.
          </p>
          <Link
            href="https://androidweekly.net/issues/issue-571"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Read Android Weekly →
          </Link>
        </div>
      </div>
    </section>
  );
}
