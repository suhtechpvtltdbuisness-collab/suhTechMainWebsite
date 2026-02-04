"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Cloud, Code, Database, Globe, Lock, Server, Smartphone, Zap } from "lucide-react";

const techCategories = [
  {
    name: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    position: { desktop: "top-20 left-1/4", mobile: "top-0" }
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    technologies: ["Node.js", "Python", "Java", "Go", "GraphQL"],
    position: { desktop: "top-20 right-1/4", mobile: "top-32" }
  },
  {
    name: "Database",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
    position: { desktop: "top-1/2 left-12", mobile: "top-64" }
  },

  {
    name: "Mobile",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"],
    position: { desktop: "top-1/2 right-12", mobile: "top-96" }
  },
  {
    name: "Cloud",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    position: { desktop: "bottom-32 left-1/4", mobile: "top-128" }
  },
  {
    name: "Security",
    icon: Lock,
    color: "from-red-500 to-pink-500",
    technologies: ["OAuth", "JWT", "SSL/TLS", "Encryption", "Firewall"],
    position: { desktop: "bottom-32 right-1/4", mobile: "top-160" }
  }
];

export default function Ecosystem() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden py-20 md:py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                         linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-blue-500 dark:text-blue-400 text-sm tracking-widest uppercase mb-4"
          >
            Technology Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight"
            style={{ lineHeight: '1.1' }}
          >
            Our Tech Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            Cutting-edge technologies powering scalable, secure, and innovative solutions
          </motion.p>
        </div>

        {/* Tablet: Grid Layout */}
        <div className="hidden md:block lg:hidden mb-12">
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />

                  {/* Card */}
                  <motion.div
                    className={`relative bg-white dark:bg-gray-950 rounded-2xl p-5 shadow-xl border-2 border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 h-full`}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {category.name}
                      </h3>

                      {/* Technologies */}
                      <div className="space-y-2">
                        {category.technologies.slice(0, 4).map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                            {tech}
                          </motion.div>
                        ))}
                        {category.technologies.length > 4 && (
                          <div className="text-xs text-gray-400 dark:text-gray-500 italic pl-3.5">
                            +{category.technologies.length - 4} more
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Orbital/Circular Layout */}
        <div className="hidden lg:block relative w-full max-w-5xl mx-auto px-4" style={{ height: '600px' }}>
          {/* Center Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <div className="relative">
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                style={{ width: 180, height: 180, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Rotating glow */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-2xl opacity-30"
                style={{ width: 160, height: 160, left: '-50%', top: '-50%', transform: 'translate(50%, 50%)' }}
              />

              {/* Main center circle */}
              <motion.div
                className="relative bg-white dark:bg-gray-950 rounded-full p-6 shadow-2xl border-4 border-purple-500/20"
                style={{ width: 160, height: 160 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.6)' }}
                animate={{
                  boxShadow: [
                    '0 20px 60px -15px rgba(168, 85, 247, 0.3)',
                    '0 20px 80px -15px rgba(59, 130, 246, 0.4)',
                    '0 20px 60px -15px rgba(168, 85, 247, 0.3)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Zap className="w-12 h-12 text-purple-500 mb-2" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-base font-bold text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Full Stack
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                    Solutions
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Connecting Lines with Animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              {/* Gradient for lines - Light Mode */}
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
              </linearGradient>

              {/* Gradient for lines - Dark Mode */}
              <linearGradient id="lineGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
              </linearGradient>

              {/* Animated gradient for flow effect */}
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
                </stop>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.6s" />
                </stop>
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background connection lines */}
            {techCategories.map((_, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              // Frontend (0) and Mobile (3) use 45%, others use 42%
              const radius = (index === 0 || index === 3) ? 45 : 42;
              const x1 = 50; // Center point
              const y1 = 50;
              const x2 = 50 + radius * Math.cos(angle); // Card center point
              const y2 = 50 + radius * Math.sin(angle);

              return (
                <g key={`line-group-${index}`}>
                  {/* Base line */}
                  <motion.line
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5 + index * 0.12,
                      ease: "easeOut"
                    }}
                    filter="url(#glow)"
                  />

                  {/* Animated flow line */}
                  <motion.line
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#flowGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="15,85"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: [0, 0.9, 0],
                      strokeDashoffset: [0, -100]
                    }}
                    transition={{
                      pathLength: { duration: 1.2, delay: 0.5 + index * 0.12 },
                      opacity: { duration: 2.5, repeat: Infinity, delay: index * 0.35 },
                      strokeDashoffset: { duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.35 }
                    }}
                    filter="url(#glow)"
                  />

                  {/* Particle dots traveling along lines */}
                  <motion.circle
                    r="4"
                    fill="#a855f7"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [`${x1}%`, `${x2}%`, `${x1}%`],
                      cy: [`${y1}%`, `${y2}%`, `${y1}%`],
                      opacity: [0, 1, 0.9, 0],
                      r: [3, 4, 3]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: index * 0.55,
                      ease: "easeInOut"
                    }}
                    filter="url(#glow)"
                  />
                </g>
              );
            })}

            {/* Orbital rings for depth */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="42%"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="8,8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </svg>

          {/* Tech Category Nodes - Orbital Layout */}
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            const angle = (index * 60 - 90) * (Math.PI / 180); // 360/6 = 60 degrees apart
            // Frontend (0) and Mobile (3) use 45%, others use 42%
            const radius = (index === 0 || index === 3) ? 45 : 42;
            // Move Cloud (4) and Security (5) slightly left and upward
            // Move Frontend (0) and Mobile (3) slightly left
            const xOffset = (index === 4 || index === 5) ? -2 : (index === 0 || index === 3) ? -2 : 0;
            // Move Cloud (4) and Security (5) upward, also move Frontend (0), Backend (1), and Database (2) upward
            const yOffset = (index === 4 || index === 5) ? -3 : (index === 0 || index === 1 || index === 2) ? -2 : 0;
            const x = 50 + radius * Math.cos(angle) + xOffset;
            const y = 50 + radius * Math.sin(angle) + yOffset;

            // Determine tooltip position based on node location
            const isTop = y < 50;
            const tooltipPosition = isTop ? 'bottom' : 'top';

            return (
              <motion.div
                key={index}
                className="absolute group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ zIndex: 9999 }}
              >
                <div className="relative cursor-pointer">
                  {/* Connection Point Glow */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${category.color} blur-2xl`} />
                  </motion.div>

                  {/* Compact Node */}
                  <motion.div
                    className={`relative bg-white/98 dark:bg-gray-900/98 rounded-2xl p-3 shadow-2xl border-2 border-gray-200/60 dark:border-gray-700/60 group-hover:border-transparent transition-all duration-300 backdrop-blur-lg`}
                    whileHover={{ scale: 1.2, zIndex: 100 }}
                    animate={{
                      boxShadow: [
                        '0 8px 20px rgba(0,0,0,0.08)',
                        '0 12px 30px rgba(0,0,0,0.12)',
                        '0 8px 20px rgba(0,0,0,0.08)'
                      ]
                    }}
                    transition={{
                      boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.3 }
                    }}
                  >
                    {/* Top accent line */}
                    <motion.div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                      animate={{
                        width: ['66%', '80%', '66%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Icon Container with Better Styling */}
                    <motion.div
                      className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg relative mb-2 group-hover:shadow-2xl transition-shadow`}
                      whileHover={{
                        rotate: [0, -5, 5, -5, 0],
                        scale: 1.1
                      }}
                      animate={{
                        boxShadow: [
                          '0 8px 16px rgba(0,0,0,0.15)',
                          '0 12px 24px rgba(0,0,0,0.20)',
                          '0 8px 16px rgba(0,0,0,0.15)'
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 0.5 },
                        scale: { duration: 0.3 }
                      }}
                    >
                      {/* Icon glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} blur-md opacity-60`} />
                      <IconComponent className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>

                    {/* Category Name */}
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white text-center leading-tight">
                      {category.name}
                    </h3>
                  </motion.div>

                  {/* Tooltip Card - Appears on Hover */}
                  <div
                    className={`absolute ${tooltipPosition === 'top' ? 'bottom-full mb-4' : 'top-full mt-4'} left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200`}
                    style={{ zIndex: 9999 }}
                  >
                    {/* Arrow pointing to node */}
                    <div
                      className={`absolute ${tooltipPosition === 'top' ? '-bottom-2' : '-top-2'} left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-950 border-2 ${tooltipPosition === 'top' ? 'border-t-gray-200 dark:border-t-gray-800 border-l-gray-200 dark:border-l-gray-800 border-b-transparent border-r-transparent' : 'border-b-gray-200 dark:border-b-gray-800 border-r-gray-200 dark:border-r-gray-800 border-t-transparent border-l-transparent'} rotate-45`}
                    />

                    {/* Tooltip Card */}
                    <div className={`relative bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-2xl border-2 border-gray-200 dark:border-gray-800 w-64 backdrop-blur-lg`}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-5`} />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      />

                      <div className="relative z-10">
                        {/* Title */}
                        <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white text-center">
                          {category.name}
                        </h4>

                        {/* Divider */}
                        <div className={`w-16 h-0.5 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-4`} />

                        {/* Technologies */}
                        <div className="space-y-2.5">
                          {category.technologies.map((tech, i) => (
                            <div
                              key={i}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2.5 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2"
                            >
                              <motion.div
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`}
                              />
                              <span className="font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack Layout */}
        <div className="md:hidden space-y-6 px-2">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                className="relative group"
              >
                {/* Animated Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} blur-xl opacity-20 group-active:opacity-40`}
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />

                {/* Card */}
                <motion.div
                  className={`relative bg-white dark:bg-gray-950 rounded-2xl p-5 md:p-6 shadow-xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden`}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-5`} />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-4 md:gap-5">
                    {/* Icon with Pulse Animation */}
                    <motion.div
                      className={`flex-shrink-0 inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                      animate={{
                        boxShadow: [
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                          '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white"
                      >
                        {category.name}
                      </motion.h3>

                      {/* Technologies with Staggered Animation */}
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.3 + index * 0.1 + i * 0.05,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white shadow-md hover:shadow-lg transition-shadow cursor-default`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 md:mt-24 lg:mt-28"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 80 }}
        >
          {/* Decorative line above button */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-purple-500 to-purple-500"
              style={{ width: 60 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="h-px bg-gradient-to-r from-purple-500 to-transparent"
              style={{ width: 60 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.button
            onClick={() => router.push('/services')}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 25px 35px -10px rgba(168, 85, 247, 0.4), 0 15px 15px -10px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.96 }}
            animate={{
              y: [0, -6, 0]
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative px-10 py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto overflow-hidden group cursor-pointer"
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-5 h-5 relative z-10" />
            </motion.div>
            <span className="relative z-10">Explore Our Services</span>

            {/* Particle Effects on Hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: '50%',
                      left: '50%'
                    }}
                    animate={{
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
                      opacity: [1, 0],
                      scale: [1, 0]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
