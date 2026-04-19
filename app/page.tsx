"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Subtle Background Gradient for Light Mode */}
        <div className="absolute inset-0 bg-[#57370D]/5 dark:bg-transparent -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#57370D]/10 dark:bg-[#E8B26A]/10 text-[#57370D] dark:text-[#E8B26A] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#57370D] dark:bg-[#E8B26A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#57370D] dark:bg-[#E8B26A]"></span>
              </span>
              Coming Soon - Join the Waitlist
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white text-balance"
            >
              The Smarter Way to{" "}
              <span className="text-[#57370D] dark:text-[#E8B26A]">
                Move Lagos
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Join the community of savvy Lagosians sharing rides. Save on fuel,
              reduce traffic, and make your daily commute more enjoyable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              id="waitlist"
            >
              <WaitlistForm variant="hero" />
            </motion.div>
          </div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[9/18]">
              <Image
                src="/image/sharedrive.png"
                alt="ShareDrive App Mockup showing Lagos carpool map"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 px-6 bg-[#57370D] dark:bg-[#57370D]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES - Lighter background for Light Mode */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#57370D] dark:text-[#E8B26A]">
              Why Choose ShareDrive?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;re building the most trusted carpooling platform for
              Lagos. Here&apos;s what makes us different.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="text-[#57370D] dark:text-[#E8B26A] mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 dark:text-white">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SCREENSHOTS SECTION */}
      <section className="py-24 px-6 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Experience the App
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A glimpse into how ShareDrive makes your daily commute seamless.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[9/16] max-w-[280px] mx-auto"
            >
              <Image
                src="/image/sharedrivepg.png"
                alt="ShareDrive app showing ride details"
                fill
                className="object-contain drop-shadow-xl rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-[9/16] max-w-[320px] mx-auto"
            >
              <Image
                src="/image/sharedrive.png"
                alt="ShareDrive app showing Lagos map"
                fill
                className="object-contain drop-shadow-2xl rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[9/16] max-w-[280px] mx-auto"
            >
              <Image
                src="/image/sharedrivett.png"
                alt="ShareDrive app showing ride booking"
                fill
                className="object-contain drop-shadow-xl rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#121212]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Easy as 1-2-3-4
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting started with ShareDrive is simple.{" "}
            <Link
              href="/how-it-works"
              className="text-[#57370D] dark:text-[#E8B26A] hover:underline"
            >
              Learn more
            </Link>
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-[#57370D] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:rotate-12 transition-transform">
                {i + 1}
              </div>
              <h4 className="font-bold mb-2 dark:text-white">{s.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#57370D] dark:text-[#E8B26A]">
              What Early Users Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from Lagosians who are excited about changing their daily
              commute.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-[#1e1e1e] p-8 rounded-3xl border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#57370D]/20 dark:bg-[#E8B26A]/20 rounded-full flex items-center justify-center text-[#57370D] dark:text-[#E8B26A] font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#57370D] dark:bg-[#57370D]/20 rounded-[3rem] p-12 text-center border border-[#57370D]/10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-balance">
            Ready to change how you commute?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of Lagosians waiting for ShareDrive. Be the first to
            know when we launch.
          </p>
          <WaitlistForm variant="compact" className="max-w-lg mx-auto" />
        </motion.div>
      </section>
    </main>
  );
}

const stats = [
  { value: "10K+", label: "Waitlist Signups" },
  { value: "50%", label: "Avg. Cost Savings" },
  { value: "30min", label: "Avg. Time Saved" },
  { value: "100+", label: "Routes Covered" },
];

const features = [
  {
    title: "Verified Users",
    desc: "Every driver and rider is verified for a safe Lagos commute.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Split the Bill",
    desc: "Share fuel costs automatically through our secure wallet system.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Live Tracking",
    desc: "Keep your loved ones informed with real-time ride tracking.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Instant Chat",
    desc: "Coordinate pick-ups easily with in-app messaging.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
];

const steps = [
  { title: "Sign Up", desc: "Create your profile and verify your ID." },
  { title: "Set Route", desc: "Input your daily work or school route." },
  { title: "Match", desc: "Browse people heading your way." },
  { title: "Ride", desc: "Meet up, share the ride, and save money." },
];

const testimonials = [
  {
    name: "Adaobi Okonkwo",
    role: "Marketing Manager, Victoria Island",
    quote:
      "I spend over 3 hours daily in Lagos traffic. ShareDrive is exactly what we need - finally, a solution built for Lagosians by Lagosians!",
  },
  {
    name: "Emeka Nwosu",
    role: "Software Developer, Lekki",
    quote:
      "The concept is brilliant. Sharing rides with verified professionals going my route? Sign me up! Can't wait for the launch.",
  },
  {
    name: "Funke Adeyemi",
    role: "Bank Executive, Ikeja",
    quote:
      "Fuel prices are crazy right now. The idea of splitting costs while also reducing my carbon footprint is a win-win. Excited for ShareDrive!",
  },
];
