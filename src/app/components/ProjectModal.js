"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Rocket, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasShownModal = sessionStorage.getItem("hasShownProjectModal");

    if (!hasShownModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasShownProjectModal", "true");
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConnect = () => {
    setIsOpen(false);
    router.push("/contact");
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg border border-gray-200 dark:border-gray-800"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-32 opacity-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
            >
              <X size={20} className="text-gray-500 dark:text-gray-400" />
            </button>

            <div className="relative p-8 pt-10 text-center">
              {/* Icon */}
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center shadow-inner">
                <Rocket size={32} className="text-purple-600 dark:text-purple-400" />
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Let's turn your vision into reality. Connect with our team to discuss how we can build something amazing together.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleConnect}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Let's Connect <ArrowRight size={18} />
                </button>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
