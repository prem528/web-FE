import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const [showFullDisclaimer, setShowFullDisclaimer] = useState(false);

  const shortDisclaimer = `SOFTWARE INTENDED FOR LEGAL & ETHICAL USE ONLY. Please check your local laws before using monitoring software.`;
  const fullDisclaimer = `SOFTWARE INTENDED FOR LEGAL & ETHICAL USE CASES ONLY. Please check your state or country laws before using monitoring software or consult your lawyer before downloading, installing, or using IONMONITOR. 
By purchasing IONMONITOR, the subscriber takes the full responsibility for making sure that you notify & install the IONMONITOR on your kid/child/minor’s phone before him/her with proper consent. In failure of which, 
it may result in severe penalties (monetary & criminal) imposed on the violator. IONMONITOR cannot be held responsible if the subscriber chooses to monitor a device against his/her state or country laws.`;

  return (
    <footer className="relative py-6 px-4 bg-[url('/topbg10.avif')] bg-cover overflow-hidden">
      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto z-10 mb-42">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 mt-28">
          {/* Quick Links */}
          <div>
            <motion.h3
              className="text-gray-400 font-semibold text-2xl mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3 text-gray-500">
              {[
                "About Us",
                "Buy Now",
                "Compatibility",
                "Contact Us",
                "Employee Tracking",
                "Family Tracking",
                "Features",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="hover:underline hover:text-gray-900 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <motion.h3
              className="text-gray-400 font-semibold text-2xl mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              More Links
            </motion.h3>
            <ul className="space-y-3 text-gray-500">
              {[
                "Make in India",
                "Alternate Payment",
                "Banking Details",
                "F.A.Q.",
                "Installation Guide",
                "Testimonials",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="hover:underline hover:text-gray-900 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <motion.h3
              className="text-gray-400 font-semibold text-2xl mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Use Cases
            </motion.h3>
            <ul className="space-y-3 text-gray-500">
              {[
                "Android Tracking",
                "Call Recorder",
                "Facebook Tracking",
                "Instagram Tracking",
                "Mobile Tracking",
                "Tinder Tracking",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="hover:underline hover:text-gray-900 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Policies */}
          <div>
            <motion.h3
              className="text-gray-400 font-semibold text-2xl mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Legal Policies
            </motion.h3>
            <ul className="space-y-3 text-gray-500">
              {[
                "Cookie Policy",
                "Privacy Policy",
                "Refund Policy",
                "Terms of Usage",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="hover:underline hover:text-gray-900 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Secure Payments */}
          <div>
            <motion.h3
              className="text-gray-400 font-semibold text-2xl mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Secure Payments
            </motion.h3>
            <p className="text-md text-gray-300 mb-6 leading-relaxed">
              We accept payments via all major debit, credit cards, internet
              banking and PayPal.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "VISA", src: "/visa.svg" },
                { name: "MasterCard", src: "/Mastercard.svg" },
                { name: "AMERICAN EXPRESS", src: "/amex.png" },
                { name: "PayPal", src: "/Paypal.png" },
                { name: "Paytm", src: "/Paytm.svg" },
                { name: "PhonePe", src: "/PhonePe.webp" },
              ].map(({ name, src }) => (
                <div
                  key={name}
                  className="bg-white rounded p-2 flex items-center justify-center h-10 w-full"
                >
                  <img
                    src={src}
                    alt={`${name} logo`}
                    className="max-h-8 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <motion.div
          className="border-t border-b pb-2 lg:pt-2 backdrop"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-gray-400 font-semibold text-2xl text-center">
            Disclaimer
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {showFullDisclaimer ? fullDisclaimer : shortDisclaimer}
            <button
              onClick={() => setShowFullDisclaimer(!showFullDisclaimer)}
              className="text-blue-600 ml-2 underline hover:text-blue-800 transition-colors text-sm cursor-pointer"
            >
              {showFullDisclaimer ? "Read less" : "Read more"}
            </button>
          </p>
        </motion.div>

        <motion.h2
          className="text-center text-gray-200 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          © 2025 ion Monitor All rights reserved.
        </motion.h2>
      </div>

      {/* BIG BACKGROUND WORD with subtle breathing (still premium) */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-end justify-center pb-0 opacity-20 select-none z-0"

      >
        <h1 className="text-[220px] font-extrabold text-white tracking-tight blur-[2px] leading-none">
          ION MONITOR
        </h1>
      </motion.div>
    </footer>
  );
};

export default Footer;
