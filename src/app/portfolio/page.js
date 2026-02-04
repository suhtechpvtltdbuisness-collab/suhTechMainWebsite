import OurProject from "../../app/components/ourProjects";
import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Portfolio - Web App Development & DevOps Projects | SUH Tech",
  description:
    "Explore SUH Tech Private Limited's portfolio of successful web application development and DevOps projects. Case studies showcasing scalable web apps, cloud infrastructure, CI/CD automation, and enterprise solutions delivered to clients worldwide.",
  keywords: [
    "web app development portfolio",
    "devops project case studies",
    "successful web applications",
    "cloud migration projects",
    "CI/CD implementation examples",
    "enterprise software solutions",
  ],
  openGraph: {
    title: "Portfolio - Web App Development & DevOps Projects | SUH Tech",
    description:
      "Explore our portfolio of successful web application development and DevOps projects.",
    url: "https://www.suhtech.top/portfolio",
  },
  alternates: {
    canonical: "https://www.suhtech.top/portfolio",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <NavBar />

      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <OurProject />
      </div>

      <FooterSection />
    </main>
  );
}
