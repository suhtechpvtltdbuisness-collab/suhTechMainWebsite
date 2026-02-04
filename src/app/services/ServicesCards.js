"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud,
  Bot,
  ShieldCheck,
  Briefcase,
  Layers,
  LifeBuoy,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    summary:
      "High-performing websites, portals, and commerce experiences with React, Next.js, and headless CMS.",
    icon: Code2,
  },
  {
    title: "Mobile Apps",
    slug: "mobile-apps",
    summary:
      "Native and cross-platform applications with offline-first UX, analytics, and CI/CD automation.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-and-devops",
    summary:
      "Cloud landing zones, infrastructure as code, Kubernetes, observability, and release governance.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    slug: "ai-and-automation",
    summary:
      "LLM copilots, data engineering, intelligent process automation, and decision support systems.",
    icon: Bot,
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    summary:
      "Security assessments, zero-trust architecture, DevSecOps tooling, and compliance automation.",
    icon: ShieldCheck,
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    summary:
      "Architecture reviews, transformation roadmaps, fractional CTO advisory, and PMO modernization.",
    icon: Briefcase,
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    summary:
      "Multi-tenant SaaS platforms with billing, provisioning, analytics, and customer success tooling.",
    icon: Layers,
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-and-support",
    summary:
      "24/7 monitoring, performance tuning, feature upgrades, and experience optimization.",
    icon: LifeBuoy,
  },
  {
    title: "Startup Solutions",
    slug: "startup-solutions",
    summary:
      "We help startups transform ideas into scalable digital products.",
    icon: Layers,
  },
];

export default function ServicesCards() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 cursor-pointer">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isSelected = i === selectedIndex;

          return (
            <motion.div
              key={service.slug}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setSelectedIndex(i)}
              className={
                isSelected
                  ? "p-[2px] rounded-2xl bg-gradient-to-b from-white via-[#6F44FB] to-white"
                  : "rounded-2xl cursor-pointer"
              }
            >
              {/* Inner Card */}
              <div
                className={`
                  h-full rounded-2xl p-6 bg-white dark:bg-gray-900
                  flex flex-col transition-all duration-300
                  ${
                    isSelected
                      ? "shadow-[0_20px_45px_rgba(111,68,251,0.18)]"
                      : "border border-gray-200 dark:border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                  }
                `}
              >
                {/* ICON */}
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all
                    ${
                      isSelected
                        ? "border border-[#6F44FB] text-[#6F44FB] shadow-md"
                        : "border border-[#6F44FB] text-[#6F44FB]"
                    }
                  `}
                >
                  <Icon size={20} />
                </div>

                <h2 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                  {service.summary}
                </p>

                {/* Read More */}
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-6"
                >
                  Read More
                  <span className="w-7 h-7 rounded-full flex items-center justify-center bg-[#6F44FB] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
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
      </div>
    </section>
  );
}
