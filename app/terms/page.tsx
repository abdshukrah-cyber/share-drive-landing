"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#57370D]/5 dark:bg-transparent -z-10" />
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Last updated: {new Date().toLocaleDateString("en-NG", { month: "long", day: "numeric", year: "numeric" })}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-[#57370D] dark:prose-headings:text-[#E8B26A]"
        >
          <div className="bg-gray-50 dark:bg-[#1e1e1e] rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
              Please read these Terms of Service (&quot;Terms&quot;) carefully
              before using the ShareDrive mobile application and website
              (&quot;Service&quot;) operated by ShareDrive Nigeria
              (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, you may not access
            the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            ShareDrive is a carpooling platform that connects drivers traveling to
            their destinations with riders heading in the same direction. We
            facilitate the arrangement of shared rides but are not a transportation
            provider ourselves.
          </p>
          <p>
            ShareDrive does not provide transportation services and is not a
            transportation carrier. It is up to the driver to offer transportation
            services which may be accepted by riders through use of the Service.
            ShareDrive is not responsible for the conduct of any user of the
            Service.
          </p>

          <h2>3. User Accounts</h2>
          <h3>Registration</h3>
          <p>
            To use certain features of the Service, you must register for an
            account. You agree to provide accurate, current, and complete
            information during registration and to update such information to keep
            it accurate, current, and complete.
          </p>

          <h3>Account Security</h3>
          <p>
            You are responsible for safeguarding the password you use to access the
            Service and for any activities or actions under your password. You
            agree not to disclose your password to any third party.
          </p>

          <h3>Age Requirement</h3>
          <p>
            You must be at least 18 years old to create an account and use the
            Service.
          </p>

          <h2>4. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Service for any purpose that is illegal or prohibited by
              these Terms
            </li>
            <li>
              Harass, abuse, or harm another person or engage in any discriminatory
              behavior
            </li>
            <li>
              Impersonate any person or entity, or falsely state or misrepresent
              your affiliation with a person or entity
            </li>
            <li>
              Interfere with or disrupt the Service or servers or networks
              connected to the Service
            </li>
            <li>
              Use the Service for any commercial purpose not expressly permitted by
              us
            </li>
            <li>
              Collect or store personal data about other users without their
              consent
            </li>
            <li>
              Engage in any activity that could damage, disable, or impair the
              Service
            </li>
          </ul>

          <h2>5. Driver Requirements</h2>
          <p>If you wish to offer rides as a driver, you must:</p>
          <ul>
            <li>Hold a valid Nigerian driver&apos;s license</li>
            <li>Be the registered owner of the vehicle or have authorization to use it</li>
            <li>Maintain valid vehicle insurance as required by Nigerian law</li>
            <li>Keep your vehicle in safe operating condition</li>
            <li>Comply with all applicable traffic and transportation laws</li>
            <li>Successfully complete our driver verification process</li>
          </ul>

          <h2>6. Rider Responsibilities</h2>
          <p>As a rider, you agree to:</p>
          <ul>
            <li>Be at the agreed pickup location at the scheduled time</li>
            <li>Treat drivers and their vehicles with respect</li>
            <li>Wear seatbelts at all times during the ride</li>
            <li>Not smoke or consume alcohol during rides</li>
            <li>Pay the agreed-upon fare through the app</li>
            <li>Report any safety concerns or incidents promptly</li>
          </ul>

          <h2>7. Payments and Fees</h2>
          <h3>Payment Processing</h3>
          <p>
            All payments for rides are processed through the ShareDrive platform.
            By using the Service, you authorize us to charge your selected payment
            method for all fees incurred.
          </p>

          <h3>Driver Earnings</h3>
          <p>
            Drivers set their own prices for rides. ShareDrive may charge a service
            fee on transactions processed through the platform.
          </p>

          <h3>Cancellations</h3>
          <p>
            Users may be subject to cancellation fees if they cancel confirmed
            rides within a certain time period before the scheduled departure, as
            specified in our cancellation policy.
          </p>

          <h2>8. Ratings and Reviews</h2>
          <p>
            After each ride, users may rate and review each other. You agree that
            any ratings and reviews you submit will be truthful and accurate. We
            reserve the right to remove reviews that violate these Terms.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are
            owned by ShareDrive Nigeria and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property laws.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR
            IMPLIED. SHAREDRIVE DOES NOT WARRANT THAT THE SERVICE WILL BE
            UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
          </p>
          <p>
            SHAREDRIVE DOES NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY, OR
            ABILITY OF DRIVERS OR RIDERS. YOU AGREE THAT THE ENTIRE RISK ARISING
            OUT OF YOUR USE OF THE SERVICE REMAINS SOLELY WITH YOU.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            SHAREDRIVE, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR
            THE SERVICE.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless ShareDrive and its
            officers, directors, employees, and agents from and against any claims,
            liabilities, damages, losses, and expenses arising out of or in any way
            connected with your access to or use of the Service.
          </p>

          <h2>13. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms. Upon termination, your right to use
            the Service will immediately cease.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the Federal Republic of Nigeria, without regard to its conflict
            of law provisions.
          </p>

          <h2>15. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a
            revision is material, we will provide at least 30 days&apos; notice prior
            to any new terms taking effect. What constitutes a material change will
            be determined at our sole discretion.
          </p>

          <h2>16. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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

      {/* Related Links */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-bold text-lg dark:text-white mb-4">
            Related Documents
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl font-medium hover:border-[#57370D] dark:hover:border-[#E8B26A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl font-medium hover:border-[#57370D] dark:hover:border-[#E8B26A] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl font-medium hover:border-[#57370D] dark:hover:border-[#E8B26A] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
