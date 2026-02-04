"use client";
import { motion } from "framer-motion";
import { Code, FileSearch, Lightbulb, Palette, Rocket, TestTube, Wrench } from "lucide-react";
// import  images from "next/images";
const steps = [
  {
    title: "Requirement Analysis",
    subtitle: "Step 1",
    description: "We understand your vision and goals deeply. Our team conducts thorough research to capture every detail of your project requirements.",
    icon: FileSearch,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Solution Planning",
    subtitle: "Step 2",
    description: "Beautiful, intuitive UI/UX crafted with care. We create detailed wireframes and prototypes to visualize the end product.",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Design",
    subtitle: "Step 3",
    description: "Solid foundation with scalable tech stack. Our designers create stunning interfaces that users love to interact with.",
    icon: Palette,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Development",
    subtitle: "Step 4",
    description: "Clean, tested, production-ready code. Expert developers bring designs to life with robust and scalable solutions.",
    icon: Code,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Testing",
    subtitle: "Step 5",
    description: "Bulletproof quality assurance process. Rigorous testing ensures everything works flawlessly before launch.",
    icon: TestTube,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Deployment",
    subtitle: "Step 6",
    description: "Smooth launch with zero downtime. We handle the entire deployment process with precision and care.",
    icon: Rocket,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Maintenance",
    subtitle: "Step 7",
    description: "Continuous improvement and scaling. Ongoing support and updates to keep your product running smoothly.",
    icon: Wrench,
    color: "from-teal-500 to-cyan-500"
  },
];

export default function ProcessSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Header */}
        <div className="text-left md:text-center mb-12 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 dark:text-blue-400 text-sm tracking-widest uppercase mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300"
          >
            How We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl md:mx-auto"
          >
            Our battle-tested 7-step process ensures your project succeeds from concept to launch.
          </motion.p>
        </div>

        {/* Steps with Connecting Lines */}
        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden lg:block" />

          {steps.map((step, i) => {
            const IconComponent = step.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                className="relative mb-16 md:mb-32 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
                  {/* Left Side - Text (for even) or Card (for odd) */}
                  <motion.div
                    className={`${isEven ? 'text-right pr-16' : 'pl-16'}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {isEven ? (
                      // Text Content on Left
                      <div>
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4"
                        >
                          {step.subtitle}
                        </motion.span>
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                        >
                          {step.description}
                        </motion.p>
                      </div>
                    ) : (
                      // Card on Left
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-1"
                      >
                        <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 h-full relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 opacity-10"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${step.color} blur-3xl`} />
                          </motion.div>
                          <div className="relative z-10">
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                              className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-6`}
                            >
                              <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 0.3, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              className={`text-9xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30`}
                            >
                              {(i + 1).toString().padStart(2, "0")}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Right Side - Card (for even) or Text (for odd) */}
                  <motion.div
                    className={`${!isEven ? 'text-left pr-16' : 'pl-16'}`}
                    initial={{ opacity: 0, x: !isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {!isEven ? (
                      // Text Content on Right
                      <div>
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4"
                        >
                          {step.subtitle}
                        </motion.span>
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                        >
                          {step.description}
                        </motion.p>
                      </div>
                    ) : (
                      // Card on Right
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: -5 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-1"
                      >
                        <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 h-full relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 opacity-10"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br ${step.color} blur-3xl`} />
                          </motion.div>
                          <div className="relative z-10">
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                              className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-6`}
                            >
                              <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 0.3, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              className={`text-9xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30`}
                            >
                              {(i + 1).toString().padStart(2, "0")}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Center Circle Connector */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-950 flex items-center justify-center">
                        <span className={`text-lg font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                          {i + 1}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <motion.div
                    className="flex gap-4 mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                      className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-lg font-bold text-white">
                        {i + 1}
                      </span>
                    </motion.div>
                    <div className="flex-1">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium mb-2"
                      >
                        {step.subtitle}
                      </motion.span>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-1 ml-6"
                  >
                    <div className="bg-white dark:bg-gray-950 rounded-2xl p-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      >
                        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${step.color} blur-3xl`} />
                      </motion.div>
                      <div className="relative z-10 flex items-center justify-between">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.3 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className={`text-4xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30`}
                        >
                          {(i + 1).toString().padStart(2, "0")}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
