"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Globe, Users } from "lucide-react";

const stats = [
  {
    icon: <Users size={24} />,
    value: "500+",
    label: "Clients Worldwide",
    description: "Trusted by startups and enterprises",
  },
  {
    icon: <CheckCircle size={24} />,
    value: "98%",
    label: "Project Success Rate",
    description: "Delivering excellence consistently",
  },
  {
    icon: <Globe size={24} />,
    value: "15+",
    label: "Countries Served",
    description: "Global presence and impact",
  },
  {
    icon: <Award size={24} />,
    value: "50+",
    label: "Industry Awards",
    description: "Recognized for innovation",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
