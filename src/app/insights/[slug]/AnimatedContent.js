"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function AnimatedContent({ blog, formattedDate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#9616FB] to-[#3459FB] z-50 origin-left"
        style={{ scaleX: 0 }} // We would need useScroll for this, but simplistic for now
        animate={{ scaleX: 1 }} // Placeholder, ideally use useScroll from framer-motion
      />

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden mt-20">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src={blog.imageUrl || "/images/Rectangle_Web_Development.svg"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900"></div>
        </motion.div>

        <div className="relative pt-32 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <Link href="/insights" className="text-white/80 hover:text-white mb-8 inline-flex items-center gap-2 transition-all hover:-translate-x-1 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-medium">Back to Insights</span>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/90">
              <span className="bg-[#9616FB] text-white px-4 py-1.5 rounded-full uppercase tracking-wider text-xs font-bold shadow-lg shadow-purple-900/20">
                {blog.category}
              </span>
              <span className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-purple-300" /> {blog.readTime || '5 min read'}
              </span>
              <span className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <Calendar className="w-4 h-4 text-purple-300" /> {formattedDate}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-24 leading-tight tracking-tight"
            >
              {blog.title}
            </motion.h1>
            
            {/* <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed font-light"
            >
              {blog.excerpt}
            </motion.p> */}
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <div
                className="prose prose-lg dark:prose-invert max-w-none
                                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mb-6 prose-headings:mt-10
                                prose-h2:text-3xl prose-h3:text-2xl
                                prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                                prose-a:text-[#9616FB] dark:prose-a:text-[#A855F7] hover:prose-a:text-[#3459FB] prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                                prose-blockquote:border-l-4 prose-blockquote:border-[#9616FB] prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
                                prose-ul:space-y-2 prose-li:marker:text-[#9616FB]"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
  <span className="font-bold text-gray-900 dark:text-white">
    Share this article
  </span>

  <div className="flex gap-4">
    {/* LinkedIn */}
    <Link
      href="https://www.linkedin.com/company/suh-tech/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all"
    >
      <Linkedin className="w-5 h-5" />
    </Link>

    {/* Instagram */}
    <Link
      href="https://www.instagram.com/suhtechpvtltd/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all"
    >
      <Instagram className="w-5 h-5" />
    </Link>

    {/* Facebook */}
    <Link
      href="https://www.facebook.com/profile.php?id=61571524414304#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#4267B2] hover:text-white transition-all"
    >
      <Facebook className="w-5 h-5" />
    </Link>
  </div>
</div>

            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-fit">
            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">About the Author</h3>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9616FB] to-[#3459FB] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-purple-50 dark:ring-purple-900/20">
                  {blog.author ? blog.author[0] : 'A'}
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900 dark:text-white">{blog.author || 'SUH Tech Team'}</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Content Contributor</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                Expert insights from our engineering and product teams. We write about what we build and what we learn.
              </p>
            </motion.div>

            {/* Newsletter Cta */}
            {/* <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                             <h3 className="font-bold text-gray-900 dark:text-white mb-2">Subscribe to our newsletter</h3>
                             <p className="text-gray-500 text-sm mb-4">Get the latest insights directly to your inbox.</p>
                             <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                             <button className="w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm hover:opacity-90 transition-opacity">
                                 Subscribe
                             </button>
                        </div> */}

            {/* Contact Cta */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl p-8 text-white shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-[#9616FB] rounded-full blur-3xl"></div>
              </div>

              <h3 className="text-2xl font-bold mb-3 relative z-10">Build Your Next Project</h3>
              <p className="text-gray-400 mb-8 text-sm relative z-10 leading-relaxed">
                Ready to transform your ideas into reality? Let's discuss your requirements and build something amazing together.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-100 transition-transform active:scale-95 relative z-10 shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

        </div>
      </article>
    </>
  );
}
