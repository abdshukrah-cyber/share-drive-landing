"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type FAQCategory = "general" | "riders" | "drivers" | "safety" | "payments";

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
        <div className="absolute inset-0 bg-(--brand)/5 dark:bg-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Frequently Asked{" "}
            <span className="text-(--brand-text) dark:text-[#E8B26A]">
              Questions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to know about ShareDrive. Can&apos;t find the
            answer you&apos;re looking for?{" "}
            <Link
              href="/contact"
              className="text-(--brand-text) dark:text-[#E8B26A] hover:underline"
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
                    ? "bg-(--brand) text-(--on-brand)"
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
                    className={`w-5 h-5 text-(--brand-text) dark:text-[#E8B26A] shrink-0 transition-transform ${
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
              className="bg-(--brand) hover:bg-(--brand-hover) text-(--on-brand) px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1"
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

const categories: { id: FAQCategory; label: string }[] = [
  { id: "general", label: "General" },
  { id: "riders", label: "For Riders" },
  { id: "drivers", label: "For Drivers" },
  { id: "safety", label: "Safety" },
  { id: "payments", label: "Payments" },
];

const faqs: Record<FAQCategory, { question: string; answer: string }[]> = {
  general: [
    {
      question: "What is ShareDrive?",
      answer:
        "ShareDrive is a carpooling platform designed specifically for Lagos, Nigeria. We connect drivers heading to work or other destinations with riders going the same way, helping everyone save on fuel costs while reducing traffic congestion.",
    },
    {
      question: "Is ShareDrive live?",
      answer:
        "Yes! ShareDrive is live now. You can sign up and start sharing rides today on our web app at app.sharedrive.ng. Our Android app is coming very soon, and the iOS app is coming soon.",
    },
    {
      question: "Is ShareDrive available outside Lagos?",
      answer:
        "We're starting with Lagos as our primary market. Once we've established a strong presence there, we plan to expand to other major Nigerian cities like Abuja, Port Harcourt, and more.",
    },
    {
      question: "How is ShareDrive different from Uber or Bolt?",
      answer:
        "Unlike ride-hailing services where you pay for a dedicated car and driver, ShareDrive is for carpooling - sharing rides with people already heading your way. This makes it more affordable for riders and helps drivers offset their fuel costs rather than work as professional drivers.",
    },
    {
      question: "How do I access ShareDrive?",
      answer:
        "ShareDrive is available now as a web app at app.sharedrive.ng, which works in the browser on any phone or computer. Our Android app is coming very soon to Google Play, and the iOS app is coming soon to the App Store.",
    },
  ],
  riders: [
    {
      question: "How do I find a ride?",
      answer:
        "Simply enter your pickup location and destination in the app. We'll show you available drivers heading your way along with their profiles, ratings, departure times, and prices. You can then send a ride request to join.",
    },
    {
      question: "Can I book rides in advance?",
      answer:
        "Yes! You can search for rides up to a week in advance. This is especially useful for your daily commute - you can set up recurring rides and match with the same driver regularly.",
    },
    {
      question: "What if my driver cancels?",
      answer:
        "If a driver cancels, you'll be notified immediately and can search for alternative rides. We work to minimize cancellations by encouraging commitment from both riders and drivers.",
    },
    {
      question: "Can I bring luggage?",
      answer:
        "That depends on the driver and available space. When posting rides, drivers indicate how much luggage space is available. You can also message the driver beforehand to confirm.",
    },
    {
      question: "How do I know my pickup point?",
      answer:
        "You'll coordinate the exact pickup point with your driver through in-app messaging. The app also allows you to share your live location so the driver can find you easily.",
    },
  ],
  drivers: [
    {
      question: "What do I need to become a driver?",
      answer:
        "You'll need a valid Nigerian driver's license, vehicle registration documents, proof of insurance, and to pass our verification process. Your vehicle should be in good condition and have passed recent inspection.",
    },
    {
      question: "How do I set my price?",
      answer:
        "You set your own price per seat based on your route and distance. We provide suggested pricing based on fuel costs and similar routes, but you have full control over what you charge.",
    },
    {
      question: "Can I choose who rides with me?",
      answer:
        "Absolutely! You can view rider profiles, ratings, and reviews before accepting any ride request. You always have the final say on who joins your ride.",
    },
    {
      question: "What if a rider doesn't show up?",
      answer:
        "If a rider doesn't show up at the agreed pickup point within a reasonable time, you can mark them as a no-show and proceed with your trip. Repeated no-shows affect a rider's rating.",
    },
    {
      question: "How much can I earn?",
      answer:
        "Earnings depend on your route, how many seats you offer, and how often you drive. Many drivers cover their entire fuel costs and more by filling empty seats on their daily commute.",
    },
  ],
  safety: [
    {
      question: "How does ShareDrive verify users?",
      answer:
        "All users must verify their phone number and upload a valid government-issued ID. Drivers undergo additional checks including license verification and vehicle documentation review. We also use facial recognition to confirm identity.",
    },
    {
      question: "Can I share my trip with someone?",
      answer:
        "Yes! Our live trip sharing feature lets you share your ride details and real-time location with trusted contacts. They can follow your journey until you arrive safely.",
    },
    {
      question: "What if I feel unsafe during a ride?",
      answer:
        "The app has an emergency button that connects you directly to local emergency services. You can also share your live location instantly with your emergency contacts.",
    },
    {
      question: "How does the rating system work?",
      answer:
        "After each ride, both riders and drivers can rate each other and leave reviews. These ratings are visible on profiles and help build trust in our community. Users with consistently low ratings may be removed from the platform.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "We take data privacy seriously. Your personal information is encrypted and never shared with other users without your consent. Only necessary information (like your first name and profile photo) is visible to matches.",
    },
  ],
  payments: [
    {
      question: "How do payments work?",
      answer:
        "Payments are handled securely through the app. Riders pay when they book a ride, and drivers receive the funds after the trip is completed. We support multiple payment methods including bank cards and mobile money.",
    },
    {
      question: "When do drivers get paid?",
      answer:
        "Drivers can withdraw their earnings to their bank account at any time. Withdrawals are typically processed within 24-48 hours on business days.",
    },
    {
      question: "What fees does ShareDrive charge?",
      answer:
        "ShareDrive charges a small service fee to cover platform operations, payment processing, and user support. You'll always see the full price, including fees, before you confirm a ride.",
    },
    {
      question: "Can I pay with cash?",
      answer:
        "To ensure security and accountability, all payments are processed through the app. This protects both riders and drivers and provides a record of all transactions.",
    },
    {
      question: "What if there's a payment dispute?",
      answer:
        "If there's any issue with a payment, contact our support team through the app. We'll review the trip details and work to resolve the dispute fairly for both parties.",
    },
  ],
};
