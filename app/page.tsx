"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Ensure you use the Next.js Image component

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

 

  return (
    <main className="bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen font-sans">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter text-[#57370D] dark:text-[#E8B26A]">
            ShareDrive
          </div>
          
          <button
            onClick={() => {
              setIsDark(!isDark)
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Subtle Background Gradient for Light Mode */}
        <div className="absolute inset-0 bg-[#57370D]/5 dark:bg-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white"
            >
              The Smarter Way to <span className="text-[#57370D] dark:text-[#E8B26A]">Move Lagos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Join the community of savvy Lagosians sharing rides. Save on fuel, reduce traffic, and make your daily commute more enjoyable.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#57370D] hover:bg-[#3d2609] text-white px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 font-bold">
                Download for Android
              </button>
              <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 font-bold">
                Download for iOS
              </button>
            </div>
          </div>

          {/* Correctly Implemented Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[9/18]">
              <Image 
                src="/image/sharedrive.png" // Path from public folder
                alt="ShareDrive App Mockup"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES - Lighter background for Light Mode */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#57370D] dark:text-[#E8B26A]">
            Why Choose ShareDrive?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="text-[#57370D] dark:text-[#E8B26A] mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-white dark:bg-[#0f0f0f]">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Easy as 1-2-3</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-[#57370D] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:rotate-12 transition-transform">
                {i + 1}
              </div>
              <h4 className="font-bold mb-2 dark:text-white">{s.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION - High Contrast Primary Color */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-[#57370D] dark:bg-[#57370D]/20 rounded-[3rem] p-12 text-center border border-[#57370D]/10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to change how you commute?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Join the movement. Download ShareDrive today and start splitting the bill.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-[#57370D] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100 dark:border-gray-900">
        © {new Date().getFullYear()} ShareDrive Nigeria. All rights reserved.
      </footer>
    </main>
  );
}

const features = [
  {
    title: "Verified Users",
    desc: "Every driver and rider is verified for a safe Lagos commute.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: "Split the Bill",
    desc: "Share fuel costs automatically through our secure wallet system.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Live Tracking",
    desc: "Keep your loved ones informed with real-time ride tracking.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  },
  {
    title: "Instant Chat",
    desc: "Coordinate pick-ups easily with in-app messaging.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
  }
];

const steps = [
  { title: "Sign Up", desc: "Create your profile and verify your ID." },
  { title: "Set Route", desc: "Input your daily work or school route." },
  { title: "Match", desc: "Browse people heading your way." },
  { title: "Ride", desc: "Meet up, share the ride, and save money." }
];