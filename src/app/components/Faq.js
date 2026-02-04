"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle, Plus, Send } from "lucide-react";
import { useState } from "react";

function FAQSection() {
  const [formData, setFormData] = useState({
    name: "",
    interest: "",
    favorite: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch(
        "/api/newsletter/submit-user-info",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Failed to submit");

      setSubmitSuccess(true);
      setFormData({ name: "", interest: "", favorite: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      question: "How fast can you kick off a project?",
      answer: "Discovery workshops begin within five business days. Once scope is agreed, your dedicated pod starts sprint one in under two weeks with a shared backlog and success metrics.",
    },
    {
      question: "Can you co-build with our internal team?",
      answer: "Yes. We embed into your rituals, tools, and QA gates. Expect shared Slack channels, joint standups, paired programming, and transparent burndown charts.",
    },
    {
      question: "What DevOps and CI/CD support do you provide?",
      answer: "We provision cloud landing zones, set up GitHub Actions or GitLab pipelines, manage Kubernetes or serverless deployments, and configure observability with automated rollbacks.",
    },
    {
      question: "How do you manage security and compliance?",
      answer: "Zero-trust architecture, secrets management, and infrastructure as code are standard. We deliver artifacts for SOC2, ISO 27001, HIPAA, and GDPR audits when required.",
    },
    {
      question: "Which engagement models are available?",
      answer: "Monthly pods, fixed-scope builds, or dedicated DevOps/SEO retainers. All options include weekly status notes, quarterly steering reviews, and shared OKRs.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Absolutely. Every go-live includes 30 days of hypercare plus optional 24/7 monitoring, feature grooming, SEO upkeep, and analytics reporting.",
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* FAQ Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-left md:text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight" style={{ lineHeight: '1.1' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about our process and delivery.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex justify-between items-center w-full p-6 text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                      {item.question}
                    </span>
                    <span className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                      <Plus className="text-primary" />
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Project Fit Snapshot
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
                Share a few details and we'll send a readiness checklist.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Mayank jha"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Company / Team
                  </label>
                  <input
                    type="text"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Suh pvt limited, marketing..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Priority Focus
                  </label>
                  <input
                    type="text"
                    name="favorite"
                    value={formData.favorite}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Migration, AI, SEO..."
                  />
                </div>

                {submitSuccess && (
                  <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <CheckCircle size={16} /> Submitted successfully!
                  </div>
                )}

                {submitError && (
                  <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm p-3 rounded-lg border border-red-200 dark:border-red-800">
                    <AlertCircle size={16} /> {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Snapshot <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
