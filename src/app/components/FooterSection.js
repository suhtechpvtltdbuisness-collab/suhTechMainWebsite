"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  MessageSquare,
  Mail,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo2 from "../../../public/icons/SUH_TECH_WEBHeader_LOGO (11).svg";
import Logo from "../../../public/icons/suhlogo.svg";

// Tooltip Component
const SubscriptionTooltip = ({ message, type, show }) => {
  if (!show || !message) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute -top-16 left-0 right-0 mx-auto max-w-xs p-3 rounded-lg shadow-xl flex items-center gap-3 backdrop-blur-md border ${
            type === "success"
              ? "bg-green-50/90 dark:bg-green-900/50 border-green-200 dark:border-green-800"
              : "bg-red-50/90 dark:bg-red-900/50 border-red-200 dark:border-red-800"
          }`}
        >
          {type === "success" ? (
            <CheckCircle
              className="text-green-600 dark:text-green-400 shrink-0"
              size={20}
            />
          ) : (
            <AlertCircle
              className="text-red-600 dark:text-red-400 shrink-0"
              size={20}
            />
          )}
          <span
            className={`text-sm font-medium ${
              type === "success"
                ? "text-green-800 dark:text-green-200"
                : "text-red-800 dark:text-red-200"
            }`}
          >
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (subscriptionStatus.message) {
      setShowTooltip(true);
      if (subscriptionStatus.type === "success") {
        const timer = setTimeout(() => {
          setShowTooltip(false);
          setTimeout(
            () => setSubscriptionStatus({ message: "", type: "" }),
            300
          );
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [subscriptionStatus]);

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/suhtechpvtltd/",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/suh-tech/",
    },
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61571524414304#",
    },
    {
      icon: <Youtube size={20} />,
      label: "YouTube",
      href: "https://youtube.com/@suhtechpvtltd?si=-EtpjRSWZrk-v6W7",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Quora",
      href: "https://www.quora.com/profile/Suhtech-Pvtltd-Buisness",
    },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Cloud & DevOps", href: "/services/cloud-and-devops" },
        { name: "AI & Automation", href: "/services/ai-and-automation" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "IT Consulting", href: "/services/it-consulting" },
        { name: "SaaS Development", href: "/services/saas-development" },
        { name: "Support", href: "/services/maintenance-and-support" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/portfolio" },
        { name: "About us", href: "/industries" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/insights" },
      ],
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscriptionStatus({
        message: "Please enter a valid email address",
        type: "error",
      });
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubscriptionStatus({
        message: "Successfully subscribed to our newsletter!",
        type: "success",
      });
      setEmail("");
    } catch (error) {
      setSubscriptionStatus({
        message: "Failed to connect. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900/50 pt-12 md:pt-16 pb-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center lg:text-left">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-5 sm:mb-6">
              {mounted && (
                <Image
                  src={
                    resolvedTheme === "dark" || theme === "dark" ? Logo : Logo2
                  }
                  alt="Suh Tech Logo"
                  width={180}
                  height={60}
                  className="object-contain w-36 sm:w-44 md:w-48 h-auto"
                />
              )}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base max-w-md md:mx-auto lg:mx-0 md:text-center lg:text-left">
              We are an end-to-end IT services and product engineering studio
              helping fintech, SaaS, health, and commerce teams launch secure,
              SEO-friendly digital experiences.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-1 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {footerLinks.map((section, index) => (
              <div key={index} className="md:text-center lg:text-left">
                <h3 className="font-semibold sm:font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                  {section.title}
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xs sm:text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-1 lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold sm:font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                <Mail size={18} className="text-primary" />
                Stay Updated
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-5">
                Get the latest tech trends, case studies, and product updates
                from Suh Tech.
              </p>

              <form onSubmit={handleSubscribe} className="relative">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-xs sm:text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-1.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <ArrowRight size={16} />
                    )}
                  </button>
                </div>
                <SubscriptionTooltip
                  message={subscriptionStatus.message}
                  type={subscriptionStatus.type}
                  show={showTooltip}
                />
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Suh Tech Private Limited. All rights
              reserved.
            </p>
            <div className="flex gap-3 sm:gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;