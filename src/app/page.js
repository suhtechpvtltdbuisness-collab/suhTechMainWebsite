import dynamic from "next/dynamic";
import Link from "next/link";
import Ecosystem from "./components/Ecosystem";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import StatsSection from "./components/StatsSection";
import WhyChooseUsSection from "./components/WhyChooseUs";


export const metadata = {
  title: "Web App Development & DevOps Services | SUH Tech Private Limited",
  description:
    "India's #1 Website Development Company serving Mumbai, Bangalore, Delhi, Hyderabad, Chennai, Pune & 20+ cities. Expert web application development, DevOps automation, cloud infrastructure, and digital transformation. 500+ successful projects. Get free consultation today!",
  keywords: [
    // Location-based keywords - All Major Indian Cities
    "website development company in mumbai",
    "website development company in bangalore",
    "website development company in delhi",
    "website development company in hyderabad",
    "website development company in chennai",
    "website development company in pune",
    "website development company in kolkata",
    "website development company in ahmedabad",
    "website development company in jaipur",
    "website development company in chandigarh",
    "website development company in lucknow",
    "website development company in kochi",
    "website development company in indore",
    "website development company in bhopal",
    "website development company in coimbatore",
    "website development company in visakhapatnam",
    "website development company in surat",
    "website development company in nagpur",
    "web development services mumbai",
    "web development services bangalore",
    "web development services delhi",
    "web development services hyderabad",
    "web development services chennai",
    "web development services pune",
    "best web development company in india",
    "top website development companies india",
    "affordable web development services india",
    "custom website development india",
    "ecommerce website development india",
    "responsive web design company india",
    "professional website development services",
    "web app development company",
    "devops services provider",
    "web application development",
    "devops consulting services",
    "CI/CD automation",
    "cloud infrastructure services",
    "kubernetes experts",
    "docker containerization",
    "aws devops services",
    "react development company",
    "next.js development",
    "node.js backend services",
    "full stack development",
    "microservices architecture",
    "infrastructure automation",
    "terraform services",
    "jenkins CI/CD setup",
    "gitlab CI/CD implementation",
    "container orchestration",
    "cloud migration experts",
  ],
  openGraph: {
    title: "Web App Development & DevOps Services | SUH Tech Private Limited",
    description:
      "Expert IT services provider specializing in web application development and DevOps solutions. Build scalable, high-performance web apps with modern cloud infrastructure.",
    url: "https://www.suhtech.top",
    siteName: "SUH Tech Private Limited",
    images: [
      {
        url: "https://www.suhtech.top/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SUH Tech - Web App Development & DevOps Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App Development & DevOps Services | SUH Tech",
    description:
      "Expert IT services provider specializing in web application development and DevOps automation.",
    images: ["https://www.suhtech.top/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.suhtech.top",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

// Dynamically import non-critical components
const VideoSection = dynamic(() => import("./components/VedioSection"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const AboutUsSection = dynamic(() => import("./components/AboutUs"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const TechStackSection = dynamic(() => import("./components/TechStackSection"));
const PortfolioSection = dynamic(() => import("./components/PortfolioSection"));
const ProcessSection = dynamic(() => import("./components/ProcessSection"));
const PricingSection = dynamic(() => import("./components/PricingSection"));
const IndustriesSection = dynamic(() => import("./components/IndustriesSection"));
const TestimonialsPage = dynamic(() => import("./components/Testimonial"));
const BlogResourcesSection = dynamic(() => import("./components/BlogResourcesSection"));
const CareersSection = dynamic(() => import("./components/CareersSection"));
const NewsletterSection = dynamic(() => import("../app/components/NewsLetters"));
const ContactFormSection = dynamic(() => import("./components/ContactForm"));
const FAQSection = dynamic(() => import("./components/Faq"));
const ProjectModal = dynamic(() => import("./components/ProjectModal"));



const Project = dynamic(() => import("./components/Project"));

export default function Home() {
  return (
    <main className="bg-white dark:bg-black selection:bg-purple-500/30">
      <ProjectModal />
      <NavBar />

      {/* Hero & Stats */}
      <div className="pt-20">
        <HeroSection />
        <StatsSection />
      </div>

      {/* Main Content with Consistent Spacing */}
      <div className="space-y-12 md:space-y-16 lg:space-y-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        <AboutUsSection />

        <ServicesSection />

        <Project />

        <Ecosystem />

        {/* Portfolio CTA */}
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden rounded-3xl bg-gray-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
          <div className="container mx-auto text-center px-6 md:px-8 lg:px-12 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              See Our Work in Action
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore detailed case studies with metrics, timelines, and
              real-world impact across industries.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              View Full Portfolio
            </Link>
          </div>
        </section>

        <ProcessSection />

        <PricingSection />

        <IndustriesSection />

        <TestimonialsPage />

        <WhyChooseUsSection />

        {/* SEO Content Section - India Cities Coverage */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border-y border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Website Development Company Serving All Major Indian Cities
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-center mb-12 text-lg leading-relaxed">
                  SUH Tech Private Limited is India's leading <strong>website development company</strong> with a proven track record of delivering exceptional web solutions across the nation. We serve businesses in <strong>Mumbai, Bangalore, Delhi, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad</strong>, and 20+ major cities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {/* Metro Cities */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Metro Cities</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>✓ <strong>Website Development in Mumbai</strong> - Navi Mumbai, Thane</li>
                      <li>✓ <strong>Website Development in Bangalore</strong> - Bengaluru Tech Hub</li>
                      <li>✓ <strong>Website Development in Delhi NCR</strong> - Noida, Gurgaon, Ghaziabad</li>
                      <li>✓ <strong>Website Development in Hyderabad</strong> - Cyberabad, Secunderabad</li>
                    </ul>
                  </div>

                  {/* Tier 1 Cities */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Tier 1 Cities</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>✓ <strong>Website Development in Chennai</strong> - Tamil Nadu</li>
                      <li>✓ <strong>Website Development in Pune</strong> - Maharashtra</li>
                      <li>✓ <strong>Website Development in Kolkata</strong> - West Bengal</li>
                      <li>✓ <strong>Website Development in Ahmedabad</strong> - Gujarat</li>
                    </ul>
                  </div>

                  {/* Tier 2 Cities */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">Tier 2 Cities</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>✓ <strong>Website Development in Jaipur</strong> - Rajasthan</li>
                      <li>✓ <strong>Website Development in Chandigarh</strong> - Punjab</li>
                      <li>✓ <strong>Website Development in Lucknow</strong> - Uttar Pradesh</li>
                      <li>✓ <strong>Website Development in Kochi</strong> - Kerala</li>
                    </ul>
                  </div>

                  {/* Growing Cities */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Growing Cities</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>✓ <strong>Website Development in Indore</strong> - Madhya Pradesh</li>
                      <li>✓ <strong>Website Development in Bhopal</strong> - MP Capital</li>
                      <li>✓ <strong>Website Development in Coimbatore</strong> - Tamil Nadu</li>
                      <li>✓ <strong>Website Development in Visakhapatnam</strong> - Andhra Pradesh</li>
                    </ul>
                  </div>

                  {/* Industrial Cities */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold mb-4 text-pink-600 dark:text-pink-400">Industrial Hubs</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>✓ <strong>Website Development in Surat</strong> - Diamond City</li>
                      <li>✓ <strong>Website Development in Nagpur</strong> - Maharashtra</li>
                      <li>✓ <strong>Website Development in Vadodara</strong> - Gujarat</li>
                      <li>✓ <strong>Website Development in Rajkot</strong> - Gujarat</li>
                    </ul>
                  </div>

                  {/* Our Services */}
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-2xl shadow-lg text-white hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
                    <ul className="space-y-2">
                      <li>✓ Custom Website Development</li>
                      <li>✓ E-commerce Solutions</li>
                      <li>✓ Web Application Development</li>
                      <li>✓ Mobile-Responsive Design</li>
                      <li>✓ DevOps & Cloud Services</li>
                      <li>✓ Digital Transformation</li>
                    </ul>
                  </div>
                </div>

                {/* Why Choose Us for Website Development */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose SUH Tech for Website Development?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-purple-600 dark:text-purple-400">🏆 Proven Track Record</h4>
                      <p className="text-gray-700 dark:text-gray-300">500+ successful website development projects delivered across India with 98% client satisfaction rate.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">💼 Industry Expertise</h4>
                      <p className="text-gray-700 dark:text-gray-300">Expert team specializing in e-commerce, healthcare, fintech, education, and enterprise web solutions.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-cyan-600 dark:text-cyan-400">⚡ Latest Technology</h4>
                      <p className="text-gray-700 dark:text-gray-300">Using React, Next.js, Node.js, and modern frameworks for fast, scalable, and secure websites.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-indigo-600 dark:text-indigo-400">🎯 Result-Driven</h4>
                      <p className="text-gray-700 dark:text-gray-300">SEO-optimized, mobile-responsive websites designed to increase conversions and business growth.</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Looking for the <strong>best website development company in India</strong>?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Whether you're in Mumbai, Bangalore, Delhi, or any other city, we deliver world-class web solutions tailored to your business needs. Get a free consultation today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <ContactFormSection />
        </section>

        <FAQSection />
      </div>

      {/* Footer moved outside main content container */}
      <FooterSection />
    </main>
  );
}
