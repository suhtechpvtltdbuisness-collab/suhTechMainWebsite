"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const technologies = [
  {
    category: "Frontend",
    items: [
      { src: "/icons/react-svgrepo-com (1).svg", label: "React" },
      { src: "/icons/Next Js.svg", label: "Next.js" },
    ],
  },
  {
    category: "Backend",
    items: [
      { src: "/icons/node-js-svgrepo-com (2).svg", label: "Node.js" },
      { src: "/icons/python-svgrepo-com.svg", label: "Python" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { src: "/icons/aws-svgrepo-com (2).svg", label: "AWS" },
      { src: "/icons/Docker.svg", label: "Docker" },
      { src: "/icons/kubernetes.svg", label: "Kubernetes" },
    ],
  },
  {
    category: "Databases",
    items: [
      { src: "/icons/mongodb (1).svg", label: "MongoDB" },
      { src: "/icons/Postgresql.svg", label: "Postgres" },
      { src: "/icons/redis.svg", label: "Redis" },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { src: "/icons/tensorflow.svg", label: "TensorFlow" },
      { src: "/icons/openai.svg", label: "OpenAI" },
    ],
  },
];

export default function TechStackSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={sectionRef} id="tech" className="w-full py-20 lg:py-28 relative overflow-hidden">
      {/* Animated Background Elements with Parallax */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-400 mb-4"
          >
            Technologies
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium leading-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 mb-4"
          >
            Proven Platforms & Tooling
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Cloud-native, AI-ready, and performance tuned from day one.
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="space-y-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="
                p-8 rounded-3xl transition-all
                bg-white border border-gray-200 shadow-sm
                dark:bg-gray-900/40 dark:border-gray-800 dark:backdrop-blur-xl
                hover:border-blue-400 dark:hover:border-blue-500/40
                dark:shadow-lg dark:hover:shadow-blue-900/10
              "
            >
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              >
                {category.category}
              </motion.h3>

              {/* Technology Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.1 + techIndex * 0.08,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.08,
                      rotateZ: 5,
                      transition: { duration: 0.3 },
                    }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 transition-all hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer"
                  >
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 flex items-center justify-center rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.label}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </motion.div>

                    {/* Tech Label */}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
