"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  GraduationCap,
  Heart,
  Home,
  ShoppingBag,
  Truck,
} from "lucide-react";

const industries = [
  {
    name: "FinTech",
    detail: "Payments, Lending, Wealth, Compliance.",
    icon: CreditCard,
  },
  {
    name: "EdTech",
    detail: "LMS, Cohort Platforms, Content Marketplaces, Compliance.",
    icon: GraduationCap,
  },
  {
    name: "E-commerce",
    detail: "Payments, Lending, Wealth, Compliance.",
    icon: ShoppingBag,
  },
  {
    name: "Healthcare",
    detail: "HIPAA Portals, Telehealth,",
    icon: Heart,
  },
  {
    name: "Real Estate",
    detail: "PropTech, CRMs, 3D Tours, Broker Ops.",
    icon: Home,
  },
  {
    name: "Logistics",
    detail: "Fleet Tracking, WMS, Route Optimization, Compliance.",
    icon: Truck,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.08,
    },
  }),
};

const IndustryCard = ({ industry, index }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -8,
        rotateX: -6,
        rotateY: 6,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      style={{ perspective: 1000 }}
      className="relative overflow-visible rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 pt-16 pb-10 flex flex-col items-center text-center min-h-[240px] shadow-[0_8px_30px_#6E44FA33] hover:shadow-[0_14px_45px_#6E44FA55] transition-shadow duration-300 cursor-pointer"
    >
      {/* Glow overlay (clipped safely) */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-[#941DFB]/10 to-[#265BFB]/10"
        />
      </div>

      {/* Icon (NO CLIPPING NOW) */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 p-5 rounded-full bg-gradient-to-br from-[#941DFB] to-[#265BFB] shadow-lg z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <industry.icon className="w-8 h-8 text-white" strokeWidth={2} />
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h3
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.2 }}
        className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {industry.name}
      </motion.h3>

      {/* Details */}
      <motion.p
        whileHover={{ opacity: 0.85 }}
        transition={{ duration: 0.2 }}
        className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
      >
        {industry.detail}
      </motion.p>
    </motion.div>
  );
};

const IndustriesSection = () => {
  return (
    <section
      id="industries"
      className="w-full py-20 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-400 dark:text-gray-400 mb-3 font-medium">
            Industries
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Domain Acceleration
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mt-12 ">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.name}
              industry={industry}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
