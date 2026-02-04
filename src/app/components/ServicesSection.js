"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Layers,
  LifeBuoy,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web development including composable websites, portals, and scalable web applications built with React and Next.js.",
    icon: Code2,
    slug: "web-development",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps with offline-first UX, analytics hooks, and app store optimization baked in.",
    icon: Smartphone,
    slug: "mobile-apps",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, and GCP modernization plus GitHub Actions, ArgoCD, and Kubernetes automation.",
    icon: Cloud,
    slug: "cloud-and-devops",
  },
  {
    title: "AI & Automation",
    description:
      "LLM copilots, intelligent search, RPA workflows, and AI-enabled analytics dashboards.",
    icon: Bot,
    slug: "ai-and-automation",
  },
  {
    title: "Cybersecurity",
    description:
      "Security assessments, zero-trust architecture, DevSecOps pipelines, and continuous compliance.",
    icon: ShieldCheck,
    slug: "cybersecurity",
  },
  {
    title: "IT Consulting",
    description:
      "Architecture reviews, digital transformation roadmaps, and fractional CTO advisory.",
    icon: Briefcase,
    slug: "it-consulting",
  },
  {
    title: "SaaS Development",
    description:
      "Multi-tenant SaaS platforms with billing, provisioning, and usage analytics ready for scale.",
    icon: Layers,
    slug: "saas-development",
  },
  {
    title: "Maintenance & Support",
    description:
      "24/7 monitoring, performance tuning, feature upgrades, and level 2/3 support pods.",
    icon: LifeBuoy,
    slug: "maintenance-and-support",
  },
  {
    title: "Startup Solutions",
    description:
      "We help startups transform ideas into scalable digital products.",
    icon: Layers,
    slug: "startup-solutions",
  },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1); // Mobile Apps

  const visibleServices = showAll ? services : services.slice(0, 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-16 lg:py-28" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 mb-16"
        >
          <div>
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-3">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              From Discovery to Scale
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-lg">
            Dedicated pods keep design, engineering, DevOps, and growth in sync.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 cursor-pointer"
        >
          {visibleServices.map((service, i) => {
            const Icon = service.icon;
            const isSelected = i === selectedIndex;

            return (
              <motion.div
                key={service.slug}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setSelectedIndex(i)}
                className={
                  isSelected
                    ? "p-[2px] rounded-2xl bg-gradient-to-b from-white via-[#6F44FB] to-white"
                    : "rounded-2xl"
                }
              >
                {/* Inner Card */}
                <div
                  className={`
                    h-full rounded-2xl p-7 bg-white transition-all duration-300
                    ${isSelected
                      ? "shadow-[0_20px_45px_rgba(111,68,251,0.18)]"
                      : "border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                    }
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center mb-6
                      ${isSelected
                        ? "border border-[#6F44FB] text-[#6F44FB]"
                        : "border border-[#6F44FB] text-[#6F44FB]"
                      }
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-black"
                  >
                    Read More

                    <span
                      className={`
      w-7 h-7 rounded-full flex items-center justify-center
      bg-[#6F44FB] text-white
      transition-transform duration-300
      group-hover:translate-x-1 group-hover:-translate-y-1
    `}
                    >
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All */}
        <div className="flex justify-start">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-white border border-[#6F44FB] text-[#6F44FB] font-medium hover:bg-[#6F44FB]/10 transition cursor-pointer"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

      </div>
    </section>
  );
}
