"use client";

import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "How to Stand Up a CI/CD Pipeline in 14 Days",
    category: "DevOps",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "AI Product Roadmaps: From POC to Production",
    category: "AI & Automation",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "Technical SEO Checklist for Next.js & Headless CMS",
    category: "SEO & Growth",
    readTime: "9 min read",
    link: "#",
  },
  {
    title: "Security Hardening Playbook for SaaS Startups",
    category: "Cybersecurity",
    readTime: "7 min read",
    link: "#",
  },
];

const BlogResourcesSection = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs?isPublished=true');
        const data = await res.json();
        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section id="insights" className="w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="insights" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
              Insights
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Playbooks, Tutorials & Intelligence
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((post, index) => (
            <motion.div
              key={post._id || post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image for Blog Card */}
              <div className="w-full h-40 relative rounded-lg overflow-hidden mb-2">
                <img
                  src={post.imageUrl || "/images/Rectangle_Web_Development.svg"}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-xs text-gray-400">{post.readTime || '5 min read'}</span>
                <Link
                  href={`/insights/${post.slug}`}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-300 flex items-center gap-1 group"
                >
                  Read article <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogResourcesSection;

