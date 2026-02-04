"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.data.success) {
        setSubmitStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.response?.data?.error || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      className="
        relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-10 overflow-hidden
        bg-gradient-to-b from-[#f6f4ff] via-[#f4f3ff] to-[#f2f1ff]
        dark:from-[#060615] dark:via-[#08081c] dark:to-[#09091f]
      "
    >
      {/* Pink planet glow */}
      <div
        className="
          absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px]
          bg-gradient-to-tr from-fuchsia-400/500 to-purple-400/100
          blur-[140px] rounded-full pointer-events-none
          dark:from-fuchsia-500/60 dark:to-purple-500/40
        "
      />

      {/* Noise texture */}
      <div
        className="
          absolute inset-0 opacity-[0.25] pointer-events-none
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
          mix-blend-soft-light
          dark:opacity-[0.15]
        "
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left sm:text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
              Got questions?
            </span>{" "}
            <span className="text-gray-600 dark:text-gray-300">
              We're <br className="hidden sm:block"/> always here to help
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl sm:mx-auto">
            We're open to feedback, collabs, or curious minds. Drop us a message.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-10"
          >
            {/* Phone */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div
                className="
                  w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center
                  bg-purple-500/15 text-purple-600
                  dark:bg-purple-600/20 dark:text-purple-400
                "
              >
                <Phone size={20} className="lg:w-[22px] lg:h-[22px]" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg">
                  Phone Number
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">8298252909</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div
                className="
                  w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center
                  bg-blue-500/15 text-blue-600
                  dark:bg-blue-600/20 dark:text-blue-300
                "
              >
                <Mail size={20} className="lg:w-[22px] lg:h-[22px]" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg">
                  Email Support
                </h4>
                <a
                  href="mailto:info@suhtech.top"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer text-sm lg:text-base break-all"
                >
                  info@suhtech.top
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div
                className="
                  w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center
                  bg-cyan-500/15 text-cyan-600
                  dark:bg-cyan-500/20 dark:text-cyan-300
                "
              >
                <MapPin size={20} className="lg:w-[22px] lg:h-[22px]" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg">
                  Head Quarter
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                  Ithums Galleria Alpha 2 Floor 8th-40 201310
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                relative p-6 sm:p-8 md:p-10 rounded-2xl lg:rounded-3xl overflow-hidden
                border border-white/20 dark:border-white/10
                bg-white/80 dark:bg-white/[0.05]
                backdrop-blur-2xl shadow-2xl
                w-full max-w-md
              "
            >
              {/* Bottom Purple Glow */}
              <div
                className="
                  absolute bottom-[-250px] left-[120px] w-[420px] h-[420px]
                  bg-gradient-to-tr from-fuchsia-400/200 to-purple-400/40
                  blur-[140px] rounded-full pointer-events-none
                  dark:from-fuchsia-500/60 dark:to-purple-500/40
                "
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                {/* Name */}
                <div>
                  <label className="text-gray-700 dark:text-gray-300 text-sm mb-1 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Yuvraj Singh"
                    required
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-purple-50/60 border border-purple-200 text-gray-900
                      placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-purple-500/40

                      dark:bg-[#1A1F2E]/60 dark:border-white/10 dark:text-white
                      dark:placeholder-gray-400
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-700 dark:text-gray-300 text-sm mb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yuvrajsingh200203@mail.com"
                    required
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-purple-50/60 border border-purple-200 text-gray-900
                      placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-purple-500/40

                      dark:bg-[#1A1F2E]/60 dark:border-white/10 dark:text-white
                      dark:placeholder-gray-400
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-700 dark:text-gray-300 text-sm mb-1 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message"
                    required
                    className="
                      w-full px-4 py-3 rounded-xl resize-none
                      bg-purple-50/60 border border-purple-200 text-gray-900
                      placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-purple-500/40

                      dark:bg-[#1A1F2E]/60 dark:border-white/10 dark:text-white
                      dark:placeholder-gray-400
                    "
                  ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                        : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full py-4 rounded-xl text-white font-semibold cursor-pointer
                    bg-gradient-to-r from-purple-600 to-fuchsia-500
                    hover:from-purple-700 hover:to-fuchsia-600
                    transition shadow-[0_0_25px_rgba(180,50,255,0.4)]
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
