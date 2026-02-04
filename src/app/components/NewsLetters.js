"use client";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle, Send, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../components/ui/button";
import { Input } from "../../components/ui/input";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    type: "success", // success or error
    message: "",
    title: "",
  });

  // Automatically hide toast after some time
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const showToast = (title, message, type = "success") => {
    setToast({
      visible: true,
      type,
      message,
      title,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const toastAnimation = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      showToast(
        "Invalid Email",
        "Please enter a valid email address.",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/newsletter", { email });

      if (response.data.success) {
        showToast(
          "Subscribed!",
          response.data.message || "You've successfully subscribed to the newsletter.",
          "success"
        );
        setEmail("");
      } else {
        showToast(
          "Oops!",
          response.data.message || "Something went wrong. Please try again later.",
          "error"
        );
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Subscription failed. Please try again later.";
      showToast(
        "Error",
        errorMessage,
        "error"
      );
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12 overflow-hidden relative">
      {/* Custom Toast */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            className={`fixed top-4 right-4 z-50 max-w-md shadow-lg rounded-lg overflow-hidden flex items-center
              ${
                toast.type === "success"
                  ? "bg-green-50 dark:bg-green-900/30"
                  : "bg-red-50 dark:bg-red-900/30"
              }`}
            variants={toastAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={`px-4 py-6 flex gap-3 items-start w-full
                ${
                  toast.type === "success"
                    ? "border-l-4 border-green-500"
                    : "border-l-4 border-red-500"
                }`}
            >
              {toast.type === "success" ? (
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              )}
              <div className="flex-1">
                <h3
                  className={`font-medium ${
                    toast.type === "success"
                      ? "text-green-800 dark:text-green-300"
                      : "text-red-800 dark:text-red-300"
                  }`}
                >
                  {toast.title}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    toast.type === "success"
                      ? "text-green-700 dark:text-green-200"
                      : "text-red-700 dark:text-red-200"
                  }`}
                >
                  {toast.message}
                </p>
              </div>
              <button
                onClick={hideToast}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <X
                  className={`h-5 w-5 ${
                    toast.type === "success" ? "text-green-500" : "text-red-500"
                  }`}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-[1300px] mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 tracking-tight"
            variants={fadeDown}
          >
            Join the ArtofQR Delivery Briefing
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-16 mt-6 md:mt-12">
            <motion.div
              className="w-full md:w-2/5 flex justify-center mb-3 md:mb-0"
              variants={fadeIn}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <Image
                src="/images/Whats_logo1.png"
                alt="Large envelope"
                width={320}
                height={320}
                className="w-[280px] sm:w-[320px] md:w-[90%] lg:w-full h-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="w-full md:w-3/5 flex flex-col"
              variants={fadeUp}
            >
              <motion.p
                className="text-base md:text-lg lg:text-normal text-gray-700 dark:text-gray-300 mt-4 w-full lg:w-full"
                variants={fadeUp}
              >
                Weekly notes on shipping software faster: CI/CD recipes,
                high-converting UX patterns, SEO playbooks, and automation ideas
                we test inside ArtofQR pods. No spam—just actionable insights
                for CTOs, PMs, and growth leaders.
              </motion.p>

              <motion.div
                className="w-full mt-6 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
                variants={fadeUp}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address..."
                    className="h-12 sm:h-[3.8125rem] rounded-full shadow-md border-gray-200 dark:border-gray-700 dark:bg-gray-800/80 w-full focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-400/20 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    text={
                      <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <span>
                          {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                        </span>
                        <Send size={16} />
                      </div>
                    }
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-[3.8125rem] flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:from-blue-600 dark:to-purple-500 dark:hover:from-blue-500 dark:hover:to-purple-400 text-white shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Newsletter;
