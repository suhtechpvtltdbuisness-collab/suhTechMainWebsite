"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Target,
} from "lucide-react";

const values = [
  {
    title: "Customer-Centric Approach",
    description:
      "We place clients at the forefront, focusing on unique needs and ensuring long-term success.",
    icon: MessageSquare,
    image: "/images/Cust Centric Approach.png", 
  },
  {
    title: "Collaboration",
    description:
      "We value teamwork and collective effort to achieve shared goals and deliver exceptional results.",
    icon: Users,
    image: "/images/Collaboration.png", 
  },
  {
    title: "Integrity",
    description:
      "Transparency and honesty guide every interaction, fostering trust and ethical practices.",
    icon: ShieldCheck,
    image: "/images/Integrity.png", 
  },
  {
    title: "Innovation",
    description:
      "We champion creativity, leveraging cutting-edge technologies to create meaningful solutions.",
    icon: Sparkles,
    image: "/images/Innovation.png", 
  },
  {
    title: "Commitment to Excellence",
    description:
      "We continuously improve, innovate, and exceed expectations in every project we undertake.",
    icon: Target,
    image: "/images/Commitment to Excellence (1).png", 
  },
];

export default function OurValueSection() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold 
            bg-gradient-to-r from-purple-600 to-blue-500 
            bg-clip-text text-transparent dark:from-purple-400 
            dark:to-blue-300 leading-tight">
            Our Core Value
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mt-4">
            At INNERACTIVE, we prioritize a customer-first mindset, innovation, and integrity.
            Through collaboration and commitment to excellence, we deliver impactful solutions that exceed expectations.
          </p>
        </div>

        {/* FIRST 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="
                relative rounded-3xl p-8 overflow-hidden
                flex flex-col items-center text-center justify-between
                min-h-[420px] md:min-h-[460px] w-full

                bg-gradient-to-br 
                from-purple-500/10 via-transparent to-blue-500/10
                dark:from-purple-400/10 dark:via-transparent dark:to-blue-300/10

                border border-white/20 dark:border-gray-800/40
                backdrop-blur-2xl

                shadow-[0_8px_18px_-6px_rgba(0,0,0,0.10)]
                hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12)]
                dark:shadow-[0_20px_40px_-10px_rgba(0,0,40,0.4)]
                dark:hover:shadow-[0_25px_55px_-10px_rgba(0,0,50,0.5)]
              "
            >
              {/* CONTENT */}
              <div className="relative z-20 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed max-w-[90%]">
                  {item.description}
                </p>
              </div>

              {/* BG GLOW */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] opacity-50 pointer-events-none">
                <div className="w-full h-28 rounded-xl 
                  bg-gradient-to-tr from-purple-500/20 to-blue-500/10 
                  dark:from-purple-400/10 dark:to-blue-300/10
                  blur-2xl"/>
              </div>

              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-[100%] object-contain opacity-70
                  pointer-events-none select-none
                "
              />

            </motion.div>
          ))}
        </div>

        {/* LAST 2 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {values.slice(3).map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="
                relative rounded-3xl p-8 overflow-hidden
                flex flex-col items-center text-center justify-between
                h-[450px] md:h-[360px] w-full
                
                bg-gradient-to-br 
                from-purple-500/10 via-transparent to-blue-500/10
                dark:from-purple-400/10 dark:via-transparent dark:to-blue-300/10

                border border-white/20 dark:border-gray-800/40
                backdrop-blur-2xl
              "
            >
              {/* CONTENT */}
              <div className="relative z-20 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed max-w-[90%]">
                  {item.description}
                </p>
              </div>

              {/* BG GLOW */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] opacity-50 pointer-events-none">
                <div className="w-full h-28 rounded-xl 
                  bg-gradient-to-tr from-purple-500/20 to-blue-500/10 
                  dark:from-purple-400/10 dark:to-blue-300/10
                  blur-2xl"/>
              </div>

              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  max-h-[65%] w-auto 
                  object-contain opacity-60
                  pointer-events-none select-none
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
