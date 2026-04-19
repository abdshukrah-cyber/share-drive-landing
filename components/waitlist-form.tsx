"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  variant?: "default" | "compact" | "hero";
  className?: string;
}

export function WaitlistForm({
  variant = "default",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"rider" | "driver">("rider");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-green-600 dark:text-green-400"
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
        <h3 className="font-bold text-lg text-green-800 dark:text-green-200 mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-green-700 dark:text-green-300 text-sm">
          We&apos;ll notify you as soon as ShareDrive launches. Get ready to
          change how you commute!
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm text-green-600 dark:text-green-400 hover:underline"
        >
          Add another email
        </button>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`w-full ${className}`}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#57370D] dark:focus:ring-[#E8B26A] transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#57370D] hover:bg-[#3d2609] disabled:opacity-70 text-white px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
      </form>
    );
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className={`w-full max-w-lg ${className}`}>
        {/* User Type Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setUserType("rider")}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
              userType === "rider"
                ? "bg-[#57370D] text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            I need a ride
          </button>
          <button
            type="button"
            onClick={() => setUserType("driver")}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
              userType === "driver"
                ? "bg-[#57370D] text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            I have a car
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#57370D] dark:focus:ring-[#E8B26A] transition-all text-lg"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#57370D] hover:bg-[#3d2609] disabled:opacity-70 text-white px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 font-bold text-lg whitespace-nowrap"
          >
            {isSubmitting ? "Joining..." : "Get Early Access"}
          </button>
        </div>
        {error && (
          <p className="mt-3 text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Be the first to know when we launch. No spam, we promise.
        </p>
      </form>
    );
  }

  // Default variant
  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white dark:bg-[#1e1e1e] rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 ${className}`}
    >
      <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">
        Join the Waitlist
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Be among the first to experience ShareDrive when we launch.
      </p>

      {/* User Type Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setUserType("rider")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
            userType === "rider"
              ? "bg-[#57370D] text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          I need rides
        </button>
        <button
          type="button"
          onClick={() => setUserType("driver")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
            userType === "driver"
              ? "bg-[#57370D] text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          I have a car
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#57370D] dark:focus:ring-[#E8B26A] transition-all"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#57370D] hover:bg-[#3d2609] disabled:opacity-70 text-white px-6 py-4 rounded-xl font-bold transition-all"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      {error && (
        <p className="mt-3 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </form>
  );
}
