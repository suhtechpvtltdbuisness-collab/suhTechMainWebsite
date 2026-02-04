"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaBanner() {
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
              absolute right-0 top-0 w-[300px] h-[300px] 
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

        {/* Content */}
        <div className="relative text-center px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-3">
            Workflow Management
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            See Our Work in Action
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Explore detailed case studies with metrics, timelines, and real-world impact across industries.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="
                px-8 py-4 rounded-xl 
                bg-white text-gray-900 font-semibold 
                shadow-lg hover:bg-gray-100
                transition
                dark:hover:bg-gray-200/90
              "
            >
              Request early access
            </Link>

            <Link
              href="/portfolio"
              className="
                px-8 py-4 rounded-xl 
                bg-gray-900/70 text-white 
                border border-gray-300 
                font-semibold 
                hover:bg-gray-800/80 transition
                dark:bg-gray-900/60 dark:border-white/10
              "
            >
              Watch demo
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
