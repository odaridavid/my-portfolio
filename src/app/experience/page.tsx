"use client";

import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

const apps = [
  {
    name: "trivago",
    role: "Android Tech Lead",
    description:
      "Accommodation meta-search company with the mobile app having a user base of over 7 million.",
    tech: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Firebase",
      "CircleCI",
      "GraphQL",
      "MVVM",
      "RxJava",
      "Clean Architecture",
      "Unit Testing",
    ],
    stores: [
      {
        label: "View on Play Store",
        url: "https://play.google.com/store/apps/details?id=com.trivago&utm_source=emea_Med",
      },
    ],
  },
  {
    name: "Flink",
    role: "Software Engineer - Android",
    description:
      "Startup focusing on grocery delivery in under 10 minutes in select European countries.",
    tech: ["Kotlin", "MVI", "BitriseCI","Unit Testing","Coroutines"],
    stores: [
      {
        label: "View on Play Store (Customer App)",
        url: "https://play.google.com/store/apps/details?id=com.pickery.app&utm_source=emea_Med",
      },
      {
        label: "View on Play Store (Rider App)",
        url: "https://play.google.com/store/apps/details?id=com.pickery.rider&utm_source=emea_Med",
      },
    ],
  },
  {
    name: "Trade Republic",
    role: "Software Engineer II",
    description:
      "A fintech company dealing in trading of shares, crypto, and derivatives — and recently became a bank.",
    tech: ["Kotlin", "Github Actions", "MVI", "Screenshot Testing","Paparazzi","Zendesk AI","RxJava"],
    stores: [
      {
        label: "View on Play Store",
        url: "https://play.google.com/store/apps/details?id=de.traderepublic.app&utm_source=emea_Med",
      },
    ],
  },
  {
    name: "Blacklane",
    role: "Software Engineer II",
    description: "A premium door-to-door chauffeur service.",
    tech: ["Kotlin", "Firebase", "MVVM", "Github Actions", "Unit Testing","Roborazzi","Coroutines"],
    stores: [
      {
        label: "View on Play Store (Passenger App)",
        url: "https://play.google.com/store/apps/details?id=com.blacklane.passenger&utm_source=emea_Med",
      },
      {
        label: "View on Play Store (Driver App)",
        url: "https://play.google.com/store/apps/details?id=com.blacklane.chauffeurapp&utm_source=emea_Med",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Experience</h2>
      <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
        Here are some apps I’ve worked on in prod with a significant user base.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {apps.map((app, i) => (
          <div
            key={i}
            className="bg-white text-black p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
            <p className="text-sm text-gray-600 mb-2 italic">{app.role}</p>
            <p className="text-gray-700 mb-4">{app.description}</p>
            <div className="text-sm text-gray-500 mb-4">
              <strong>Stack:</strong> {app.tech.join(", ")}
            </div>
            {app.stores.map((store, idx) => (
              <div key={idx} className="mb-2">
                <Link
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:underline font-medium"
                >
                  <FaGooglePlay className="mr-2" /> {store.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
