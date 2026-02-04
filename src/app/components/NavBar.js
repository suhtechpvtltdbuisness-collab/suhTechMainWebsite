"use client";

import ModeToggle from "@/components/ModeToggle";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo2 from "../../../public/icons/SUH_TECH_WEBHeader_LOGO (11).svg";
import Logo from "../../../public/icons/suhlogo.svg";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  const toggleMenu = () => setMenu(!menu);

  const navItems = [
    { name: "About Us", href: "/industries" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },

  ];

  const handleNavItemClick = (item) => {
    if (menu) setMenu(false);
    router.push(item.href);
  };

  const handleButtonClick = () => router.push("/contact");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24 flex justify-between items-center h-20">
          {/* Logo */}
          <div className="relative flex items-center flex-shrink-0">
            <Link href="/" className="block relative w-28 h-9 md:w-32 md:h-10 lg:w-36 lg:h-11 xl:w-40 xl:h-12">
              {mounted && (
                <Image
                  src={(resolvedTheme === 'dark' || theme === 'dark') ? Logo : Logo2}
                  alt="logo"
                  className="object-contain"
                  fill
                  priority
                />
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            <nav className="flex items-center gap-4 lg:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm lg:text-base font-medium transition-colors hover:text-primary whitespace-nowrap ${isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                    }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-3">
                <ModeToggle />
                <button
                  onClick={() => router.push("/contact")}
                  className="px-5 py-2.5 text-sm rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Let's Connect
                </button>
                <button
                  onClick={handleButtonClick}
                  className="group relative flex items-center gap-2 px-6 py-2.5 text-sm rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer whitespace-nowrap"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 group-hover:text-black transition-colors">
                    Book Demo <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <div className="flex xl:hidden items-center gap-4">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white dark:bg-gray-950 z-40 pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  onClick={() => handleNavItemClick(item)}
                  className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4 cursor-pointer"
                >
                  {item.name}
                </div>
              ))}
              <button
                onClick={() => {
                  setMenu(false);
                  router.push("/contact");
                }}
                className="mt-4 w-full py-4 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Let's Connect
              </button>
              <button
                onClick={handleButtonClick}
                className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                aria-label="Book Demo"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 group-hover:text-black transition-colors">
                  Book Demo <ArrowRight size={20} />
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
