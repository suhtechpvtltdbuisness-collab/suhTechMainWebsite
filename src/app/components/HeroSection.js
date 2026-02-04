"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  const handleBookDemo = () => router.push("/contact");
  const handleDiscover = () => router.push("/services");

  // right-side blue hero image (local)
  const heroImg = "/images/Hero section Img (2).png";

  return (
    <section id="hero" className="relative w-full overflow-hidden pt-8 md:pt-12 pb-12 md:pb-16 lg:pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {/* LEFT CONTENT */}
          <motion.div className="order-1 lg:order-1 text-left md:text-center lg:text-left relative z-10">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 mb-8 shadow-sm md:mx-auto lg:mx-0"
            >
              <Sparkles size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Next-Gen IT Solutions
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Build Secure, <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Web Applications
              </span> <br />
              & Future-Ready Tech.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl md:mx-auto lg:mx-0 leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              We transform ambitious ideas into scalable technology. As a leading <strong>Web Development</strong> company, we engineer growth from AI-driven platforms to seamless mobile experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:justify-center lg:justify-start"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <button
                onClick={handleBookDemo}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 group-hover:text-black transition-colors">
                  Start Your Project <ArrowRight size={18} />
                </span>
              </button>

              <button
                onClick={handleDiscover}
                className="px-8 py-4 rounded-full  bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10  text-gray-900 dark:text-white font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                hover:bg-gradient-to-r from-purple-600 to-blue-600 hover:text-white "
              >
                View Services
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="order-2 lg:order-2 relative w-full max-w-4xl mx-auto"
            style={{ scale, opacity }}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
          >
            <div className="relative z-10 w-full h-auto drop-shadow-2xl">
              <Image
                src={heroImg}
                alt="SUH Tech Web Development & DevOps Services Hero Visual"
                width={1200}
                height={1200}
                priority
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Decorative circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
