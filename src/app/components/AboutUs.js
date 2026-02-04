"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const heroImagePath = "/download (2) 1.svg";

export default function AboutSection() {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push("/industries");
  };

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* LEFT: Image (moved before text so image sits on left at lg+) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-2 hidden"
          >
            {/* placeholder - real text block moved below */}
          </motion.div>

          {/* RIGHT on small, LEFT on large: Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Card container to keep image and overlay elements (no decorative background) */}
            <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[500px] aspect-square rounded-3xl overflow-hidden">
              <Image
                src={heroImagePath}
                alt="about hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Text content (moved after image so it appears on right at lg+) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 text-left md:text-center lg:text-left"
          >
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-600 mb-6">About Us</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
              Driven by
              <br />
              <span className="block">Innovation. Powered</span>
              <span className="block">by People.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 lg:mb-10 max-w-2xl md:mx-auto lg:mx-0">
              <strong>SUH Tech Private Limited</strong> is a premier <strong>Web Development</strong> and IT services company. With years of experience in custom web applications, SaaS development, and cloud architecture, we empower businesses to adapt to changing technologies and thrive in the digital world.
            </p>

            <div className="flex justify-start md:justify-center lg:justify-start">
              <button
                onClick={handleLearnMore}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 group-hover:text-black transition-colors">
                  Learn More
                </span>
              </button>
            </div>
          </motion.div>
        </div>
        {/* Stats row - responsive grid layout */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-none bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3 md:mb-4">98%</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">Client Satisfaction</div>
            </div>

            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-none bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3 md:mb-4">40%</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">Efficiency Boost</div>
            </div>

            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-none bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3 md:mb-4">180+</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">Projects Delivered</div>
            </div>

            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-none bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3 md:mb-4">10K+</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">Hours of Coding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
