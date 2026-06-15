"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Briefcase, Handshake, Gift, Users, TrendingUp, ArrowRight } from "lucide-react";

const CareersSection = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const openings = loading
    ? []
    : jobs.filter((job) => job.isActive !== false);

  const handleNotify = async () => {
    const email = prompt("Enter your email to get notified when we’re hiring:");
    if (!email) return;
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch("/api/job-alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ You’ll be notified when new roles open!");
      } else {
        alert("❌ Something went wrong. Try again later.");
      }
    } catch (err) {
      alert("❌ Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-violet-50/50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-12 md:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Dot Grid */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-20 pointer-events-none bg-[radial-gradient(#8b5cf6_1.5px,transparent_1.5px)] [background-size:16px_16px] hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/25 mb-6 shadow-sm">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Internship Opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15] mb-6 font-custom">
              Launch Your Career with <br />
              Top Internships, PPOs & <br />
              <span className="text-[#6236FF] dark:text-[#a855f7]">Exclusive Rewards!</span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
              PPO is just 1 step away from clicking <span className="font-bold text-[#6236FF] dark:text-[#a855f7]">hack2Skill.</span>{" "}
              Showcase your skills, complete with top talent, and get noticed by leading companies.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-10">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 dark:border-purple-500/30 bg-purple-50/30 dark:bg-purple-950/20 flex items-center justify-center text-[#6236FF] dark:text-[#a855f7] mb-3">
                  <Briefcase size={20} className="stroke-[1.75]" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm mb-1">
                  Internship Opportunities
                </h4>
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 leading-normal max-w-[140px]">
                  Work on real projects and gain experience.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 dark:border-purple-500/30 bg-purple-50/30 dark:bg-purple-950/20 flex items-center justify-center text-[#6236FF] dark:text-[#a855f7] mb-3">
                  <Handshake size={20} className="stroke-[1.75]" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm mb-1">
                  PPO for Top Performers
                </h4>
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 leading-normal max-w-[140px]">
                  Top talent gets a chance to earn Pre-Placement Offers.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 dark:border-purple-500/30 bg-purple-50/30 dark:bg-purple-950/20 flex items-center justify-center text-[#6236FF] dark:text-[#a855f7] mb-3">
                  <Gift size={20} className="stroke-[1.75]" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm mb-1">
                  Exciting Rewards
                </h4>
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 leading-normal max-w-[140px]">
                  Win amazing rewards and recognition of your skills.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 dark:border-purple-500/30 bg-purple-50/30 dark:bg-purple-950/20 flex items-center justify-center text-[#6236FF] dark:text-[#a855f7] mb-3">
                  <Users size={20} className="stroke-[1.75]" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm mb-1">
                  Nationwide Competition
                </h4>
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 leading-normal max-w-[140px]">
                  Compete with talented participants from across India.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
              <button
                onClick={() =>
                  window.open(
                    "mailto:hr@suhtech.top?subject=Internship Application",
                    "_self"
                  )
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer animate-none"
              >
                Register Now & Get Started <ArrowRight size={16} />
              </button>

              <div className="flex items-center">
                {/* Overlapping Avatars */}
                <div className="flex items-center -space-x-3">
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden relative">
                    <Image
                      src="/images/viraj.png"
                      alt="Student Viraj"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden relative">
                    <Image
                      src="/images/samiksha.png"
                      alt="Student Samiksha"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden relative">
                    <Image
                      src="/images/akriti.png"
                      alt="Student Akriti"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start ml-3 text-left">
                  <span className="font-bold text-gray-900 dark:text-white text-sm">
                    2K+ Students
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Already Enrolled
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL COLUMN */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full max-w-lg lg:max-w-none mx-auto mt-8 lg:mt-0">
            {/* Background Light Blob */}
            <div className="absolute w-[110%] h-[110%] bg-purple-200/30 dark:bg-purple-950/10 rounded-full blur-3xl -z-10" />

            {/* Main Graphic Wrapper */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.2] lg:aspect-[1.1] select-none">
              <Image
                src="/images/careers_student.png"
                alt="Student workspace illustration"
                fill
                priority
                className="object-contain"
              />

              {/* Floating Card 4: Unlock Career Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="absolute bottom-[2%] right-[5%] sm:right-[2%] bg-white dark:bg-gray-800/95 border border-gray-100 dark:border-gray-700/60 p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm flex items-center gap-3 w-[185px] sm:w-[200px]"
              >
                <div className="w-10 h-10 rounded-full border border-purple-600/80 dark:border-purple-400/80 flex items-center justify-center text-purple-600 dark:text-purple-400 bg-purple-50/60 dark:bg-purple-950/30 flex-shrink-0">
                  <TrendingUp size={18} className="stroke-[2]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-900 dark:text-white text-[13px] sm:text-[14px] leading-tight font-custom">
                    Unlock Career
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-400 leading-tight">
                    Opportunities
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* JOB OPENINGS LIST SECTION */}
      {openings.length > 0 && (
        <section className="py-16 md:py-24 bg-white/40 dark:bg-gray-950/20 border-t border-gray-100 dark:border-gray-900/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-custom">
                Open Positions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2 max-w-2xl mx-auto">
                Want to make an impact? Check out our active vacancies below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* JOB CARDS */}
              {openings.map((job, index) => (
                <motion.div
                  key={job._id || job.title}
                  initial={{ opacity: 0.01, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/40 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-purple-500/30 dark:hover:border-purple-500/20 transition-all duration-300 group"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#6236FF] dark:group-hover:text-[#a855f7] transition-colors font-custom">
                      {job.title}
                    </h3>

                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {job.type || "Remote • Full time"} • {job.location || "Remote"}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 leading-relaxed line-clamp-3">
                    {job.description}
                  </p>

                  <button
                    onClick={() =>
                      window.open(
                        `mailto:hr@suhtech.top?subject=Application for ${job.title}`,
                        "_self"
                      )
                    }
                    className="mt-2 w-full px-5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-[#6236FF] dark:text-purple-300 font-semibold text-sm border border-gray-100 dark:border-gray-700 hover:bg-[#6236FF] hover:text-white dark:hover:bg-purple-700 dark:hover:text-white transition-all cursor-pointer text-center"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CareersSection;
