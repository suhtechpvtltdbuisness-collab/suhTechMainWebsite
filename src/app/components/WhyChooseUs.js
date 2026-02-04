"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUsSection() {
  const [open, setOpen] = useState(0);

  const items = [
    {
      title: "Tailored Solutions",
      content:
        "We don’t believe in one-size-fits-all. Every solution we build is customized to your unique business goals, workflows, and challenges.",
    },
    {
      title: "Scalable & Future-Ready",
      content:
        "We architect systems designed to grow with your business, ensuring long-term performance and reliability.",
    },
    {
      title: "Client-Centric Approach",
      content:
        "Transparency, communication, and trust are at the heart of every project we take on.",
    },
    {
      title: "Security & Compliance First",
      content:
        "We follow leading standards, security frameworks, and compliance practices to protect your data and operations.",
    },
  ];

  //  Auto Rotate Smooth Accordion
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="
        container mx-auto px-4 sm:px-6 lg:px-10 
        grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start
      ">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative rounded-3xl overflow-hidden shadow-xl 
            bg-white/80 dark:bg-gray-900/40 
            border border-gray-200 dark:border-gray-800
            h-[520px]
          "
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="/images/Why choose us.png"
              alt="Team Image"
              width={800}
              height={650}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Subtle Top Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t 
                          from-black/40 via-black/10 to-transparent 
                          opacity-60 pointer-events-none" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 text-left md:text-center lg:text-left"
        >
          <p className="uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400 text-sm mb-3">
            Why Choose Us
          </p>

          <h2 className="
            text-4xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent 
            dark:from-purple-400 dark:to-blue-300 
            leading-tight mb-8
          ">
            Built on Trust, <br /> Driven by Results
          </h2>

          {/* Accordion */}
          <div className="space-y-4 text-left">
            {items.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl p-5 backdrop-blur-xl transition-all
                  bg-white border border-gray-200 shadow-sm
                  dark:bg-gray-900/40 dark:border-gray-800
                "
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex items-center justify-between text-left 
                  text-gray-900 dark:text-white text-lg font-medium cursor-pointer"
                >
                  {item.title}

                  {open === index ? (
                    <ChevronUp size={20} className="text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {open === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
