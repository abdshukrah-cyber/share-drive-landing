"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-(--brand)/5 dark:bg-transparent -z-10" />
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Last updated: May 29, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-(--brand-text) dark:prose-headings:text-[#E8B26A]"
        >
          <div className="bg-gray-50 dark:bg-[#1e1e1e] rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
              At ShareDrive, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our mobile application and website.
            </p>
          </div>

          <h2>1. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>
            When you register for ShareDrive, we may collect the following
            personal information:
          </p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Profile photograph</li>
            <li>Government-issued identification (for verification purposes)</li>
            <li>Payment information</li>
          </ul>

          <h3>Driver-Specific Information</h3>
          <p>If you register as a driver, we additionally collect:</p>
          <ul>
            <li>Driver&apos;s license information</li>
            <li>Vehicle registration details</li>
            <li>Vehicle insurance information</li>
            <li>Vehicle photographs</li>
          </ul>

          <h3>Location Information</h3>
          <p>
            We collect location data to provide our carpooling services, including:
          </p>
          <ul>
            <li>GPS location during rides (for navigation and safety)</li>
            <li>Pickup and drop-off locations</li>
            <li>Frequently traveled routes (to suggest matches)</li>
          </ul>

          <h3>Usage Information</h3>
          <p>We automatically collect information about your use of our services:</p>
          <ul>
            <li>Device information (model, operating system, unique identifiers)</li>
            <li>App usage patterns and preferences</li>
            <li>Ride history and transaction records</li>
            <li>Communication logs within the app</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide, maintain, and improve our carpooling services</li>
            <li>Process transactions and send related information</li>
            <li>Match riders with drivers heading in similar directions</li>
            <li>Verify user identities and ensure platform safety</li>
            <li>Send service-related communications and updates</li>
            <li>Respond to your comments, questions, and support requests</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, investigate, and prevent fraudulent activities</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We may share your information in the following circumstances:</p>

          <h3>With Other Users</h3>
          <p>
            When you book or offer a ride, certain information (such as your first
            name, profile photo, rating, and approximate pickup location) will be
            shared with the other party to facilitate the ride.
          </p>

          <h3>With Service Providers</h3>
          <p>
            We may share information with third-party vendors who perform services
            on our behalf, such as payment processing, data analysis, email
            delivery, and customer support.
          </p>

          <h3>For Legal Purposes</h3>
          <p>
            We may disclose information if required by law, or if we believe such
            action is necessary to comply with legal obligations, protect our
            rights, or ensure the safety of our users.
          </p>

          <h3>With Your Consent</h3>
          <p>
            We may share your information for other purposes with your explicit
            consent.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and audits</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Secure data storage facilities</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide
            our services and fulfill the purposes outlined in this policy. We may
            also retain certain information as required by law or for legitimate
            business purposes, such as resolving disputes and enforcing our
            agreements.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a href="mailto:admin@sharedrive.ng">admin@sharedrive.ng</a>.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            ShareDrive is not intended for use by individuals under the age of 18.
            We do not knowingly collect personal information from children. If you
            believe we have collected information from a child, please contact us
            immediately.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you
            of any changes by posting the new Privacy Policy on this page and
            updating the &quot;Last updated&quot; date. You are advised to review
            this Privacy Policy periodically for any changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <ul>
            <li>
              Email: <a href="mailto:admin@sharedrive.ng">admin@sharedrive.ng</a>
            </li>
            <li>
              Website: <a href="https://sharedrive.ng">sharedrive.ng</a>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg dark:text-white">
              Have questions about our privacy practices?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We&apos;re here to help clarify anything.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-(--brand) hover:bg-(--brand-hover) text-(--on-brand) px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
