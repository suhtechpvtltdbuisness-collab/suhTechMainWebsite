import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import BlogResourcesSection from "../components/BlogResourcesSection";

export const metadata = {
  title: "Insights & Resources - Web Development & DevOps Blog | SUH Tech",
  description:
    "Technical articles, case studies, and industry insights from SUH Tech's engineering team. Learn about modern web application development, DevOps best practices, CI/CD automation, cloud infrastructure, and software engineering.",
  keywords: [
    "web development blog",
    "devops articles",
    "CI/CD best practices",
    "cloud architecture insights",
    "software engineering resources",
    "web app development guides",
    "devops tutorials",
  ],
  openGraph: {
    title: "Insights & Resources | SUH Tech Private Limited",
    description: "Technical articles and insights on web development and DevOps from our expert team.",
    url: "https://www.suhtech.top/insights",
  },
  alternates: {
    canonical: "https://www.suhtech.top/insights",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
        <BlogResourcesSection />
      </div>
      <FooterSection />
    </main>
  );
}
