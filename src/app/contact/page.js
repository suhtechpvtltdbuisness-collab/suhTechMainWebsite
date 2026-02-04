import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import ContactFormSection from "../components/ContactForm";

export const metadata = {
  title: "Contact Us - Web Development & DevOps Services | SUH Tech",
  description:
    "Contact SUH Tech Private Limited for web application development and DevOps services. Get a free consultation for your web app project, DevOps automation, or cloud infrastructure needs. Expert IT services team ready to help.",
  keywords: [
    "contact web development company",
    "devops consulting contact",
    "web app development quote",
    "it services consultation",
    // Long-tail keywords for Delhi NCR
    "contact web development company delhi",
    "devops consulting services contact noida",
    "web app development quote delhi ncr",
    "it services consultation gurgaon",
    "free consultation web development delhi",
    "devops services inquiry noida",
    "web development company contact delhi ncr",
    "get quote for web app development delhi",
  ],
  openGraph: {
    title: "Contact Us - Web Development & DevOps Services | SUH Tech",
    description:
      "Get in touch with SUH Tech for web application development and DevOps services consultation.",
    url: "https://www.suhtech.top/contact",
  },
  alternates: {
    canonical: "https://www.suhtech.top/contact",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <section className="py-16">
          <div className="container mx-auto text-center mb-12">
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Great
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you need a full product team, specialized expertise, or
              just want to explore what's possible—we're here to help.
            </p>
          </div>
          <ContactFormSection />
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
