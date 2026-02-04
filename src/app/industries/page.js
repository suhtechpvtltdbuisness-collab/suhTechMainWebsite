import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import IndustriesSection from "../components/IndustriesSection";
// import CoreValue from "../../app/components/CoreValues"
// import OurTeam from "../../app/components/OurTeam"
import FoundersVision from "../components/Founder-vision";
export const metadata = {
  title: "Industries We Serve - Web Development & DevOps Solutions | SUH Tech",
  description:
    "SUH Tech Private Limited provides specialized web application development and DevOps solutions for FinTech, HealthTech, InsurTech, E-commerce, SaaS, and enterprise sectors. Industry-specific IT services with deep domain expertise.",
  keywords: [
    "fintech web development",
    "healthtech devops",
    "ecommerce web apps",
    "saas development services",
    "enterprise web solutions",
    "industry specific it services",
  ],
  openGraph: {
    title: "Industries We Serve | SUH Tech Private Limited",
    description: "Specialized web development and DevOps solutions for various industries.",
    url: "https://www.suhtech.top/industries",
  },
  alternates: {
    canonical: "https://www.suhtech.top/industries",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
              <FoundersVision />
      </div>
      {/* <div className="mt-16 md:mt-20 lg:mt-24">
        <CoreValue />
      </div> */}
      <div className="mt-16 md:mt-20 lg:mt-24">
        <IndustriesSection />
      </div>
      <FooterSection />
    </main>
  );
}
