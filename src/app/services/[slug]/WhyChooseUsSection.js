"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  ShieldCheck,
  LifeBuoy,
  Briefcase,
  Layers,
  Cloud,
} from "lucide-react";

/* ===============================
   HEADER CONTENT PER SERVICE
================================ */
const headerContent = {
  "web-development": {
    title: "Why Choose Us",
    description:
      "Your Cloud Journey Deserves the Right Partner. We don’t just move workloads—we build secure, scalable, and future-ready cloud platforms. Our expertise blends modern architecture, proactive security, and dedicated support.",
  },
  "mobile-apps": {
    title: "Why Choose Us",
    description:
      "We deliver cost-effective and secure cloud environments crafted to enhance performance and reliability using modern technology and expert assistance.",
  },
  "cloud-and-devops": {
    title: "Why We Are the Best Choice for Your Cloud Journey",
    description:
      "We transform businesses with robust cloud strategies powered by DevOps automation, strong governance, and scalable infrastructure.",
  },
  "ai-and-automation": {
    title: "Why Choose Us",
    description:
      "Gain hands-on expertise with AI and automation through real-world projects, practical labs, and industry-standard tools.",
  },
  cybersecurity: {
    title: "Why Choose Us",
    description:
      "We combine advanced security technologies, proactive monitoring, and expert guidance to protect your business today and tomorrow.",
  },
  "it-consulting": {
    title: "Why Choose Us",
    description:
      "We bridge business needs with technology solutions to improve efficiency, reduce costs, and support growth.",
  },
  "saas-development": {
    title: "Why Choose Us",
    description:
      "We build scalable SaaS platforms with enterprise-grade security and modern architecture from MVP to production.",
  },
  "maintenance-and-support": {
    title: "Why Choose Us",
    description:
      "Proactive monitoring, expert support, and scalable maintenance strategies to keep your systems stable and future-ready.",
  },
  "startup-solutions": {
    title: "Why Choose Us",
    description:
      "We help startups launch fast with secure, scalable technology—from MVP to growth stage.",
  },
};

/* ===============================
   CARDS DATA
================================ */
const items = [
  {
    title: "Cutting Edge Technology",
    description: "Modern cloud platforms built for speed and growth.",
    icon: Code2,
  },
  {
    title: "Advance Security",
    description: "Robust security frameworks that protect every layer.",
    icon: ShieldCheck,
  },
  {
    title: "Exceptional Support",
    description: "24/7 expert support you can rely on.",
    icon: LifeBuoy,
  },
  {
    title: "Proven Track Record",
    description: "Trusted experience in successful cloud transformations.",
    icon: Briefcase,
  },
  {
    title: "Seamless Integration",
    description: "Smooth integration with zero disruption.",
    icon: Layers,
  },
  {
    title: "Future Ready Solutions",
    description: "Scalable solutions designed for tomorrow.",
    icon: Cloud,
  },
];

export default function WhyChooseUsSection({ slug }) {
  const [active, setActive] = useState(0);

  const header = headerContent[slug] || {
    title: "Why Choose Us",
    description:
      "We deliver secure, scalable, and future-ready digital solutions.",
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 mb-14 items-start">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {header.title}
          </h2>

          <div className="hidden md:block w-px h-full bg-gray-200 dark:bg-gray-800" />

          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            {header.description}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setActive(i)}
                className={
                  isActive
                    ? "p-[2px] rounded-2xl bg-gradient-to-b from-purple-500 via-purple-600 to-purple-500"
                    : "rounded-2xl"
                }
              >
                <div
                  className={`h-full rounded-2xl p-6 flex flex-col transition-all
                    ${
                      isActive
                        ? "bg-white dark:bg-gray-900 shadow-[0_20px_45px_rgba(124,58,237,0.35)]"
                        : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
                    }
                  `}
                >
                  <div className="w-12 h-12 mb-5 rounded-full flex items-center justify-center border border-purple-600 text-purple-600">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                    {item.description}
                  </p>

                  {/* <Link
                    href="#"
                    className="group inline-flex items-center gap-2 mt-6 text-sm font-medium"
                  >
                    Read More
                    <span className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link> */}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
