"use client";

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, Boxes, Code2, Smartphone, PenTool } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To help businesses simplify operations through reliable, easy-to-use software.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a trusted technology partner for growing businesses.",
  },
  {
    icon: CheckCircle2,
    title: "The Problem We Solve",
    text: "Manual, scattered processes slow teams down. We replace them with simple, connected software.",
  },
];

const whatWeDo = [
  { icon: Boxes, text: "Build our own products & custom solutions for clients" },
  { icon: Code2, text: "Develop websites & software" },
  { icon: Smartphone, text: "Create mobile apps" },
  { icon: PenTool, text: "Design, quality assurance & marketing services" },
];

export default function AboutSuhTech() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* soft animated background glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              SUH Tech
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 mx-auto lg:mx-0">
            <strong>SUH Tech Pvt Ltd</strong> is a technology company that builds software
            products and digital solutions for growing businesses - from ready-to-use
            platforms like <strong>ORGA HRMS</strong> to custom web and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Mission / Vision / Problem */}
          <div className="space-y-5">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group flex items-start gap-5 rounded-2xl border border-purple-200/60 dark:border-purple-500/20 bg-purple-50/70 dark:bg-slate-900/70 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-shadow"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-md transition-transform duration-500 group-hover:rotate-[360deg]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: What we do */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1235] to-[#241a4d] p-8 sm:p-10 text-white shadow-2xl shadow-purple-900/30"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-purple-500/30 blur-3xl"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <h3 className="relative text-2xl sm:text-3xl font-bold mb-8">What we do</h3>
            <ul className="relative space-y-6">
              {whatWeDo.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-base sm:text-lg font-medium leading-snug">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
