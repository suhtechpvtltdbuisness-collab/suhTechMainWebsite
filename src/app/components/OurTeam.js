"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, scale } from "framer-motion";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const trackRef = useRef(null);
  const sliderRef = useRef(null);
  const [sliderX, setSliderX] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Samiksha Umbarje",
      role: "UI/UX Designer",
      image: "/images/samiksha.png",
      description:
        "It was in high school from a student that I realized understanding the bike helped nothing in accelerating it...",
      scale: 1.25,
    },
    {
      id: 2,
      name: "Akriti",
      role: "Frontend Developer",
      image: "/images/akriti.png",
      description:
        "Understanding the business is what accelerates everything. That’s how the company was built..."
    },
    {
      id: 3,
      name: "David Sequeira",
      role: "Closing",
      image: "/images/sk.png",
      description:
        "Leading closing strategies with proven methodologies that drive growth and consistency...",
    },
    {
      id: 4,
      name: "Manuel Ravier",
      role: "Investment Immobilier",
      image: "/images/team/manuel.jpg",
      description:
        "Specializing in real estate investment strategies that maximize returns over long-term growth."
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "VP Product, Fintech",
      image: "/images/team/sarah.jpg",
      description:
        "Rebuilt legacy systems into modern platforms increasing performance by more than 300%."
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const visible = teamMembers.slice(currentIndex, currentIndex + itemsPerView);

  useEffect(() => {
    if (!trackRef.current || !sliderRef.current) return;

    const trackWidth = trackRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.offsetWidth;

    const maxMove = trackWidth - sliderWidth;
    const pos = (currentIndex / maxIndex) * maxMove;

    setSliderX(pos);
  }, [currentIndex, maxIndex]);

  return (
    <section className="relative w-full overflow-hidden py-20 dark:bg-[#030314] bg-white">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-60">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br 
          from-purple-300/40 via-blue-300/40 to-transparent 
          dark:from-purple-500/20 dark:via-blue-500/20 blur-3xl
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl text-center mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6
            bg-gradient-to-r from-purple-600 to-blue-500 
            bg-clip-text text-transparent dark:from-purple-400 
            dark:to-blue-300 leading-tight">
            Our Team
          </h2>
        {/* Header */}
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">
          Partnered with most of the
        </h2>
        <p className="text-4xl italic font-light text-purple-600 dark:text-purple-400 mb-20">
          top people at each industry
        </p>

        {/* Card Section */}
        <div className="relative">

          {/* NAV BUTTONS */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full 
              bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 
              backdrop-blur-md flex items-center justify-center 
              hover:bg-black/20 dark:hover:bg-white/20 transition disabled:opacity-30 shadow-xl"
          >
            <ChevronLeft className="text-black dark:text-white" size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full 
              bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 
              backdrop-blur-md flex items-center justify-center 
              hover:bg-black/20 dark:hover:bg-white/20 transition disabled:opacity-30 shadow-xl"
          >
            <ChevronRight className="text-black dark:text-white" size={24} />
          </button>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {visible.map((member) => (
                <motion.div
                  key={member.id}
                  className="relative h-[524px] w-[364px] rounded-3xl overflow-hidden group shadow-xl mx-auto"
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >

                  {/* DEFAULT BG GLOW */}
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2
                                w-[316px] h-[316px] rounded-full 
                                blur-[110px] opacity-90"
                    style={{
                      background: "radial-gradient(circle, #C3AFF6 0%, #8058E8 70%)"
                    }}
                  />

                  {/* IMAGE */}
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-3xl"
                    animate={{
                        opacity: hoveredCard === member.id ? 0 : 1,
                        scale: hoveredCard === member.id ? member.scale + 0.05 : member.scale,
                    }}
                    transition={{ duration: 0.5 }}
                    />


                  {/* DEFAULT NAME */}
                  <motion.div
                    className="absolute bottom-6 left-6 z-20"
                    animate={{ opacity: hoveredCard === member.id ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </motion.div>

                  {/* Hover View */}
                <motion.div
                className="absolute inset-0 p-8 flex flex-col text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === member.id ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                >
                {/* Overlay */}
                <div
                    className="absolute inset-0 backdrop-blur-xl"
                    style={{
                        background: "radial-gradient(circle at center, #C3AFF6 0%, #8058E8 70%)",
                        opacity: 0.85,
                    }}
                    />

                {/* TOP SECTION — Title + Role */}
                <div className="relative z-10 mb-6">
                    <h3 className="text-3xl font-semibold text-white">
                    {member.name}
                    </h3>

                    <p className="text-white/80 text-sm mt-1">
                    {member.role}
                    </p>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* DESCRIPTION BOTTOM */}
                <p className="relative z-10 text-white/90 text-sm leading-relaxed">
                    {member.description}
                </p>

                {/* Grid Pattern */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                    {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-white/30"></div>
                    ))}
                </div>
                </motion.div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* SLIDER */}
          <div className="mt-14 max-w-xl mx-auto">
            <div
              ref={trackRef}
              className="relative h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                ref={sliderRef}
                className="absolute h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                animate={{ x: sliderX }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ width: "90px" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
