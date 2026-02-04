"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const exampleImages = [
  "/images/Orga.png",
  "/images/Skillguru.png",
  "/images/Botbridge.png",
  "/images/Viraj.png",
];

const ourProjects = [
  {
    title: "Orga – Employee & Operations Management System",
    subtitle:
      "Smart HR, Projects, Support & Finance — All in One Unified Platform",
    image: exampleImages[0],
    slug: "orga-employee-management",
  },
  {
    title: "SkillGuru – LMS Platform",
    subtitle:
      "Empowering Continuous Learning & Skill Development",
    image: exampleImages[1],
    slug: "skillguru-lms-platform",
  },
  {
    title: "BotBridge – Support Automation Platform",
    subtitle:
      "Smarter Customer Support with AI-Driven Chat & Ticketing",
    image: exampleImages[2],
    slug: "botbridge-support-automation",
  },
  {
    title: "Viraj Jewellers – Website Development (Client Project)",
    subtitle:
      "Elegant Website for a Luxury Jewellery Brand",
    image: exampleImages[3],
    slug: "viraj-jewellers-website",
  },
  {
    title: "Dhanganga – Naye Soch Naya Kadam",
    subtitle:
      "One-stop destination for services from healthcare and IT to home maintenance, education, and more.",
    image: "/Dhanaganga.png", // apni image path rakho
    slug: "dhanganga-naye-soch-naya-kadam",
  },
];

export default function OurProjectsSection() {
  const router = useRouter();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-400 mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent dark:from-blue-300 dark:to-purple-400">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A curated set of projects delivered across branding, SaaS, development and digital platforms.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ourProjects.map((study, idx) => (
            <motion.article
              key={study.title + idx}
              className="rounded-2xl bg-white dark:bg-gray-900 shadow-md dark:shadow-none overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.08)" }}
              onClick={() => router.push(`/portfolio/${study.slug}`)}
            >
              <div className="relative w-full aspect-[16/10] md:aspect-[12/7]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 bg-white dark:bg-gray-50/0">
                <div className="text-xs text-gray-500 mb-2">{study.year}</div>

                <h3
                  className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {study.title}
                </h3>

                <p
                  className="mt-3 text-gray-600 dark:text-gray-300 text-sm"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {study.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
