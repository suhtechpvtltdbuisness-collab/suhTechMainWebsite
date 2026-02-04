import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";
import ServicesBanner from "./ServicesBanner";
import ServicesCards from "./ServicesCards";
import ServicesHero from "./ServicesHero";

export const metadata = {
  title: "IT Services - Website Development & DevOps Solutions | SUH Tech",
  description:
    "Comprehensive IT services across India - Website Development, Mobile Apps, Cloud & DevOps, AI Automation, Cybersecurity, and IT Consulting. Serving Mumbai, Bangalore, Delhi, Hyderabad, Chennai, Pune & 20+ cities. 500+ successful projects delivered.",
  keywords: [
    "it services company india",
    "website development services",
    "web development company",
    "mobile app development",
    "cloud services india",
    "devops services",
    "ai automation services",
    "cybersecurity services",
    "it consulting services",
    "saas development",
    "website development mumbai",
    "website development bangalore",
    "website development delhi",
    "website development hyderabad",
    "website development chennai",
    "website development pune",
    "it services provider india",
    "custom software development",
    "digital transformation services",
    "enterprise it solutions",
  ],
  openGraph: {
    title: "IT Services - Website Development & DevOps Solutions | SUH Tech",
    description:
      "Comprehensive IT services across India - Website Development, Mobile Apps, Cloud & DevOps, AI Automation. Serving 20+ major cities.",
    url: "https://www.suhtech.top/services",
  },
  alternates: {
    canonical: "https://www.suhtech.top/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />

      {/* Header */}
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="uppercase text-xs sm:text-sm tracking-[0.35em] text-blue-500 mb-6 text-center">
            Services
          </p>

          {/* Hero */}
          <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
            <ServicesHero />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <ServicesCards />
      </section>

      {/* Banner */}
      <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <ServicesBanner />
      </section>

      <FooterSection />
    </main>
  );
}
