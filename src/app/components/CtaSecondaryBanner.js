"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSecondaryBanner() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative rounded-[36px] overflow-hidden 
          bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100
          shadow-2xl
          dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        "
      >
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          {/* right glow */}
          <div
            className="
              absolute right-0 top-0 w-[150px] h-[150px] 
              bg-white/80 blur-[80px] rounded-b-full
              dark:bg-white/60
            "
          />
          {/* left glow */}
          <div
            className="
              absolute left-0 bottom-0 w-[300px] h-[300px]
              bg-blue-300/40 blur-[100px] rounded-full
              dark:bg-blue-800/20
            "
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="
          relative flex flex-col md:flex-row justify-between items-center 
          px-6 md:px-10 lg:px-16 py-14 gap-8
        ">
          {/* TEXT BLOCK */}
          <div className="text-center md:text-left max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ready for your next release window?
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Book a 45-minute roadmap session with our product, engineering, and 
              growth leads to identify quick wins and mid-term bets.
            </p>
          </div>

          {/* ACTION BUTTON */}
          <Link
            href="/contact"
            className="
              px-8 py-4 rounded-xl text-white font-semibold
              bg-gradient-to-r from-blue-500 to-purple-600
              hover:from-blue-600 hover:to-purple-700
              transition shadow-lg
              whitespace-nowrap
            "
          >
            Book strategy call →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}