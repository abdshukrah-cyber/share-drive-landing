"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-(--brand)/5 dark:bg-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-balance"
          >
            About{" "}
            <span className="text-(--brand-text) dark:text-[#E8B26A]">
              ShareDrive
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We&apos;re on a mission to transform how Lagos moves. One shared
            ride at a time.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-(--brand-text) dark:text-[#E8B26A]">
              Our Story
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
              <p>
                ShareDrive was born out of a simple observation: millions of
                Lagosians sit in traffic every day, many heading in the same
                direction, each in their own car. Meanwhile, fuel prices
                continue to rise, roads get more congested, and commute times
                keep getting longer.
              </p>
              <p>
                We asked ourselves: what if we could connect people heading the
                same way? What if drivers could offset their fuel costs while
                riders get a comfortable, affordable ride?
              </p>
              <p>
                That&apos;s how ShareDrive was born - a platform built
                specifically for Lagos, understanding our unique traffic
                patterns, routes, and the trust factor that&apos;s essential for
                Nigerians.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src="/image/sharedrive.png"
              alt="ShareDrive App"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] dark:bg-(--brand) text-white p-10 rounded-3xl"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/80">
              To make daily commuting in Lagos affordable, efficient, and
              enjoyable by connecting people traveling the same routes. We
              believe transportation should bring people together, not keep them
              apart.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 dark:bg-[#1e1e1e] p-10 rounded-3xl border border-gray-100 dark:border-gray-800"
          >
            <div className="w-14 h-14 bg-(--brand)/10 dark:bg-[#E8B26A]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-(--brand-text) dark:text-[#E8B26A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A Lagos where traffic is reduced, fuel is shared, friendships are
              formed on the road, and everyone arrives at their destination
              stress-free. We envision a city where carpooling is the norm, not
              the exception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-(--brand-text) dark:text-[#E8B26A]">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at ShareDrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl border border-gray-100 dark:border-gray-800"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Meet the Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A passionate group of Lagosians committed to solving our city&apos;s
              transportation challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-(--brand)/10 dark:bg-[#E8B26A]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-(--brand-text) dark:text-[#E8B26A]">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-(--brand-text) dark:text-[#E8B26A] text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#121212]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Join Us on This Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Be part of the movement that&apos;s changing how Lagos moves.
            ShareDrive is live on the web today, with our Android and iOS apps
            coming soon.
          </p>
          <a
            href="https://app.sharedrive.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-(--brand) hover:bg-(--brand-hover) text-(--on-brand) px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1"
          >
            Open the Web App
          </a>
        </motion.div>
      </section>
    </main>
  );
}

const values = [
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "Every user is verified. Trust is non-negotiable in everything we build.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "We're building more than an app - we're building connections between Lagosians.",
  },
  {
    icon: "💰",
    title: "Affordability",
    desc: "Making daily commutes accessible to everyone, regardless of income level.",
  },
  {
    icon: "🌍",
    title: "Sustainability",
    desc: "Reducing traffic, lowering emissions, and building a greener Lagos.",
  },
];

const team = [
  {
    name: "Olagunju Mujeeb",
    role: "Founder & CEO",
    bio: "Lagos native passionate about solving urban mobility challenges through technology.",
  },
  {
    name: "Olagunju Mujeeb",
    role: "CTO",
    bio: "Building the technology that will power the future of carpooling in Nigeria.",
  },
  {
    name: "Abdulrahman Shukrah",
    role: "Head of Operations",
    bio: "Ensuring every ride is safe, reliable, and enjoyable for our users.",
  },
];
