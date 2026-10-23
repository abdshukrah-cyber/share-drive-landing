"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"rider" | "driver">("rider");

  return (
    <main className="bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#57370D]/5 dark:bg-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-balance"
          >
            How{" "}
            <span className="text-[#57370D] dark:text-[#E8B26A]">
              SharedDrive
            </span>{" "}
            Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Whether you&apos;re looking for a ride or offering one, SharedDrive
            makes carpooling in Lagos simple, safe, and affordable.
          </motion.p>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="px-6 pb-8">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 dark:bg-[#1e1e1e] p-1 rounded-2xl flex">
            <button
              onClick={() => setActiveTab("rider")}
              className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                activeTab === "rider"
                  ? "bg-[#57370D] text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              I Need a Ride
            </button>
            <button
              onClick={() => setActiveTab("driver")}
              className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                activeTab === "driver"
                  ? "bg-[#57370D] text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              I Have a Car
            </button>
          </div>
        </div>
      </section>

      {/* Steps for Riders */}
      {activeTab === "rider" && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-16">
              {riderSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-12 bg-[#57370D] text-white rounded-2xl flex items-center justify-center text-xl font-bold">
                        {i + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                      {step.desc}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((detail, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="w-5 h-5 text-[#57370D] dark:text-[#E8B26A] mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${
                      i % 2 === 1 ? "lg:order-1" : ""
                    } bg-gray-50 dark:bg-[#1e1e1e] rounded-3xl p-8 flex items-center justify-center`}
                  >
                    <div className="text-[#57370D] dark:text-[#E8B26A]">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Steps for Drivers */}
      {activeTab === "driver" && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-16">
              {driverSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-12 bg-[#57370D] text-white rounded-2xl flex items-center justify-center text-xl font-bold">
                        {i + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                      {step.desc}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((detail, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="w-5 h-5 text-[#57370D] dark:text-[#E8B26A] mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${
                      i % 2 === 1 ? "lg:order-1" : ""
                    } bg-gray-50 dark:bg-[#1e1e1e] rounded-3xl p-8 flex items-center justify-center`}
                  >
                    <div className="text-[#57370D] dark:text-[#E8B26A]">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Safety Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#57370D] dark:text-[#E8B26A]">
              Your Safety is Our Priority
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;ve built multiple layers of safety into SharedDrive to
              ensure every ride is secure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl border border-gray-100 dark:border-gray-800"
              >
                <div className="w-12 h-12 bg-[#57370D]/10 dark:bg-[#E8B26A]/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-[#57370D] dark:text-[#E8B26A]">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              See It In Action
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our intuitive app makes finding or offering rides as easy as
              sending a message. Set your route, find matches, and you&apos;re
              ready to go.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#57370D]/10 dark:bg-[#E8B26A]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#57370D] dark:text-[#E8B26A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Real-time route matching
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#57370D]/10 dark:bg-[#E8B26A]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#57370D] dark:text-[#E8B26A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  In-app secure payments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#57370D]/10 dark:bg-[#E8B26A]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#57370D] dark:text-[#E8B26A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Live location sharing
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 aspect-[9/18]">
              <Image
                src="/image/sharedrivepg.png"
                alt="SharedDrive App Interface"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
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
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            SharedDrive is live. Sign up on the web app and start enjoying
            smarter commuting in Lagos today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.sharedrive.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#57370D] hover:bg-[#3d2609] text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1"
            >
              Open the Web App
            </a>
            <Link
              href="/faq"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold transition-all"
            >
              View FAQ
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

const riderSteps = [
  {
    title: "Create Your Profile",
    desc: "Sign up and complete your verification to join our trusted community.",
    details: [
      "Quick phone number or email verification",
      "Upload a clear profile photo",
      "Set your preferred pickup and drop-off areas",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Find Available Rides",
    desc: "Browse rides heading your way or set up recurring ride requests.",
    details: [
      "Search by route, time, or pickup point",
      "View driver profiles and ratings",
      "See estimated cost before booking",
      "Join recurring rides for your daily commute",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Book & Coordinate",
    desc: "Request to join a ride and chat with your driver to arrange pickup.",
    details: [
      "Send a ride request with one tap",
      "In-app messaging with driver",
      "Follow your driver's live location",
      "Cancel free up to 2 hours before departure (30% fee after that)",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Ride & Pay",
    desc: "Enjoy your ride and pay securely through the app.",
    details: [
      "Track your ride in real-time",
      "Share trip details with loved ones",
      "Automatic fare calculation",
      "Rate your driver after the trip",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const driverSteps = [
  {
    title: "Register Your Vehicle",
    desc: "Add your car details and complete driver verification.",
    details: [
      "Upload your driver's licence and vehicle documents",
      "Add a vehicle photo and your car's make, model, colour and plate",
      "Our team reviews your documents",
      "Publish rides once you're approved",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Post Your Route",
    desc: "Share your daily commute route and available seats.",
    details: [
      "Set your regular work/school route",
      "Choose departure times",
      "Specify available seats",
      "Set your price per seat",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Accept Riders",
    desc: "Review ride requests and accept passengers you're comfortable with.",
    details: [
      "View rider profiles and ratings",
      "Accept or decline requests",
      "Coordinate pickup points via chat",
      "Start the trip at pickup; after a 10-minute wait past departure, mark no-shows (you get 50%)",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Drive & Earn",
    desc: "Complete rides and receive payments directly to your wallet.",
    details: [
      "Navigate with in-app directions",
      "Automatic fare collection",
      "Withdraw your earnings to your bank on demand",
      "Build your driver rating",
      "Late cancellations (under 2 hours) count as strikes; 3 in 30 days pause publishing for 7 days",
    ],
    icon: (
      <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const safetyFeatures = [
  {
    title: "Verified Drivers",
    desc: "Drivers' licences and vehicle documents are reviewed before they can publish rides, and every user verifies their phone number or email.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    title: "Trip Sharing & Live Tracking",
    desc: "Follow your driver on a live map and share your trip details with people you trust.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Ratings & Reviews",
    desc: "Every user can rate and review after trips, building trust in our community.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Emergency Button",
    desc: "One tap alerts your emergency contacts and co-rider with your location, with a quick call to 112.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    desc: "All transactions are encrypted and processed through secure payment gateways.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Responsive Support",
    desc: "Email admin@sharedrive.ng and our team typically responds within 24 hours on business days.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];
