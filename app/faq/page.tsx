"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { categories, faqs, type FAQCategory } from "./faq-data";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("general");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const currentFAQs = faqs[activeCategory];

  return (
    <main className="bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#57370D]/5 dark:bg-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Frequently Asked{" "}
            <span className="text-[#57370D] dark:text-[#E8B26A]">
              Questions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to know about SharedDrive. Can&apos;t find the
            answer you&apos;re looking for?{" "}
            <Link
              href="/contact"
              className="text-[#57370D] dark:text-[#E8B26A] hover:underline"
            >
              Contact our team
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenItems([]);
                }}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#57370D] text-white"
                    : "bg-gray-100 dark:bg-[#1e1e1e] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            {currentFAQs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-[#1e1e1e] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(i)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#57370D] dark:text-[#E8B26A] shrink-0 transition-transform ${
                      openItems.includes(i) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {openItems.includes(i) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#121212]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Our team is here to help. Reach out to us and we&apos;ll get back
            to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#57370D] hover:bg-[#3d2609] text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <a
              href="mailto:admin@sharedrive.ng"
              className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold transition-all"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

