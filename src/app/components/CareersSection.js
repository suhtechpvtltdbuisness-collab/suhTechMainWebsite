"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <section id="careers" className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Careers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Build with a Remote-First Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-2">
            We offer deep work culture, quarterly offsites, education budgets,
            and hardware credits. Contractors and interns welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {loading ? (
            <p className="text-gray-500 text-sm col-span-full text-center">
              Loading job openings...
            </p>
          ) : openings.length === 0 ? (
            /* EMPTY STATE */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-full flex flex-col items-center text-center py-16"
            >
              <div className="relative w-72 h-52 mb-6">
                <Image
                  src="/images/no_job_opening.svg"
                  alt="No current openings"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No Current Openings. Check Back Soon!!
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mb-6">
                We don’t have any vacancies at the moment, but this space will be
                updated when new roles open up.
              </p>

              <button
                onClick={handleNotify}
                disabled={submitting}
                className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                {submitting ? "Submitting..." : "Notify Me When Hiring"}
              </button>
            </motion.div>
          ) : (
            /* JOB CARDS */
            openings.map((job, index) => (
              <motion.div
                key={job._id || job.title}
                initial={{ opacity: 0.01, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-5 flex flex-col gap-3"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>

                <p className="text-sm text-blue-600 dark:text-blue-300 font-semibold">
                  {job.type || "Remote • Full time"} •{" "}
                  {job.location || "Remote"}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                  {job.description}
                </p>

                <button
                  onClick={() =>
                    window.open(
                      `mailto:hr@suhtech.top?subject=Application for ${job.title}`,
                      "_self"
                    )
                  }
                  className="mt-2 px-6 py-2.5 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-semibold text-sm"
                >
                  Apply Now
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
