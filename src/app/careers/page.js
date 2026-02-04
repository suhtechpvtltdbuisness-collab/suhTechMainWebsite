import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import CareersSection from "../components/CareersSection";

export const metadata = {
  title: "Careers - Join SUH Tech | Web Development & DevOps Jobs",
  description:
    "Join SUH Tech Private Limited - Leading IT services company. Career opportunities in web application development, DevOps engineering, cloud infrastructure, and software engineering. Work on cutting-edge projects with expert teams.",
  keywords: [
    "web developer jobs",
    "devops engineer jobs",
    "software engineer careers",
    "it services careers",
    "web development jobs",
    "cloud engineer positions",
    "full stack developer jobs",
  ],
  openGraph: {
    title: "Careers at SUH Tech Private Limited | Web Development & DevOps Jobs",
    description: "Join our team of expert web developers and DevOps engineers. Build your career with SUH Tech.",
    url: "https://www.suhtech.top/careers",
  },
  alternates: {
    canonical: "https://www.suhtech.top/careers",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
        <CareersSection />
      </div>
      <FooterSection />
    </main>
  );
}
