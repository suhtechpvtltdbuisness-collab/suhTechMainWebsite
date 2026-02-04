"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Project() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y }}
                    className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                    className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div>
                            <motion.span
                                className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold tracking-wider uppercase mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Featured Project
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Skill<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Guru</span>
                            </h2>
                            <h3 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mt-2">
                                LMS Platform
                            </h3>
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                            Empowering continuous learning with a scalable, high-performance Learning Management System.
                            Experience structured courses, real-time tracking, and a personalized learning journey designed for the modern era.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="https://www.suhtech.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300"
                                >
                                    View Project
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="flex gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">100+</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wide">Courses</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">5k+</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wide">Learners</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        className="lg:w-1/2 relative"
                        style={{ opacity }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            viewport={{ once: true }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-white"
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/images/Skillguru.png"
                                    alt="SkillGuru LMS Platform"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Overlay Gradient on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <span className="text-white font-medium text-lg">Detailed Case Study Available &rarr;</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative background visual elements */}
                        <div className="absolute -z-10 top-10 right-10 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-6 scale-95 blur-sm" />

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
