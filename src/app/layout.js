import { ThemeProvider } from "@/components/theme-provider";
import { Geist_Mono, Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://www.suhtech.top'),
  title: {
    default: "SUH Tech Private Limited | Web App Development & DevOps Services",
    template: "%s | SUH Tech Private Limited"
  },
  description:
    "SUH Tech Private Limited - India's leading website development company serving Mumbai, Bangalore, Delhi, Hyderabad, Chennai, Pune & all major cities. Expert web application development, DevOps solutions, cloud infrastructure, and digital transformation services. Trusted by 500+ businesses across India.",
  keywords: [
    "web app development",
    "web application development company",
    "devops services",
    "devops consulting",
    "CI/CD pipeline automation",
    "cloud infrastructure",
    "kubernetes deployment",
    "docker containerization",
    "aws devops",
    "azure devops",
    "react development",
    "next.js development",
    "node.js backend",
    "full stack development",
    "microservices architecture",
    "infrastructure as code",
    "terraform automation",
    "ansible automation",
    "jenkins CI/CD",
    "gitlab CI/CD",
    "github actions",
    "container orchestration",
    "cloud migration services",
    "it services company india",
    "software development company",
    "custom web application",
    "enterprise web solutions",
    "agile development",
    "scrum methodology",
    "api development",
    "restful api services",
    "graphql development",
    "database optimization",
    "performance optimization",
    "scalable web applications",
    // Location-based keywords - All Major Indian Cities
    // Delhi NCR
    "website development company in delhi",
    "web development company in noida",
    "web development services in gurgaon",
    "website design company delhi ncr",
    "best web development company in delhi",
    // Mumbai
    "website development company in mumbai",
    "web development services mumbai",
    "web design company in mumbai",
    "best website development company mumbai",
    "website development company in navi mumbai",
    // Bangalore
    "website development company in bangalore",
    "web development services bangalore",
    "web design company in bangalore",
    "best web development company bangalore",
    "website development company in bengaluru",
    // Hyderabad
    "website development company in hyderabad",
    "web development services hyderabad",
    "web design company in hyderabad",
    "best website development company hyderabad",
    // Chennai
    "website development company in chennai",
    "web development services chennai",
    "web design company in chennai",
    "best web development company chennai",
    // Pune
    "website development company in pune",
    "web development services pune",
    "web design company in pune",
    "best website development company pune",
    // Kolkata
    "website development company in kolkata",
    "web development services kolkata",
    "web design company in kolkata",
    "best web development company kolkata",
    // Ahmedabad
    "website development company in ahmedabad",
    "web development services ahmedabad",
    "web design company in ahmedabad",
    "best website development company ahmedabad",
    // Jaipur
    "website development company in jaipur",
    "web development services jaipur",
    "web design company in jaipur",
    // Chandigarh
    "website development company in chandigarh",
    "web development services chandigarh",
    "web design company in chandigarh",
    // Lucknow
    "website development company in lucknow",
    "web development services lucknow",
    // Kochi
    "website development company in kochi",
    "web development services kochi",
    "web design company in kerala",
    // Indore
    "website development company in indore",
    "web development services indore",
    // Bhopal
    "website development company in bhopal",
    "web development services bhopal",
    // Coimbatore
    "website development company in coimbatore",
    "web development services coimbatore",
    // Visakhapatnam
    "website development company in visakhapatnam",
    "web development services vizag",
    // Surat
    "website development company in surat",
    "web development services surat",
    // Nagpur
    "website development company in nagpur",
    "web development services nagpur",
    // Generic India keywords
    "website development company in india",
    "best web development company in india",
    "top website development companies india",
    "affordable web development services india",
    "custom website development india",
    "ecommerce website development india",
    "responsive web design company india",
    "professional website development services",
  ],
  authors: [{ name: "SUH Tech Private Limited" }],
  creator: "SUH Tech Private Limited",
  publisher: "SUH Tech Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.suhtech.top",
    siteName: "SUH Tech Private Limited",
    title: "SUH Tech Private Limited | Web App Development & DevOps Experts",
    description:
      "Expert IT services provider specializing in web application development and DevOps solutions. Build scalable, high-performance web apps with modern cloud infrastructure and automated CI/CD pipelines.",
    images: [
      {
        url: "https://www.suhtech.top/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SUH Tech Private Limited - Web App Development & DevOps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUH Tech Private Limited | Web App Development & DevOps Services",
    description:
      "Leading IT service provider specializing in web application development and DevOps automation. Expert team delivering scalable solutions.",
    images: ["https://www.suhtech.top/og-image.jpg"],
    creator: "@suhtech",
  },
  alternates: {
    canonical: "https://www.suhtech.top",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
    shortcut: "/icons/SUHTechLogo (1).svg",
    apple: "/icons/SUHTechLogo (1).svg",
  },
  category: "Technology",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SUH Tech Private Limited",
    "url": "https://www.suhtech.top",
    "logo": "https://www.suhtech.top/icons/SUHTechLogo (1).svg",
    "description": "Leading IT service provider specializing in web application development and DevOps solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ithums Galleria Alpha 2 Floor 8th-40",
      "addressLocality": "Noida",
      "addressRegion": "Delhi NCR",
      "postalCode": "201310",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Gurgaon" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Kolkata" },
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Chandigarh" },
      { "@type": "City", "name": "Lucknow" },
      { "@type": "City", "name": "Kochi" },
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Bhopal" },
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Visakhapatnam" },
      { "@type": "City", "name": "Surat" },
      { "@type": "City", "name": "Nagpur" },
      { "@type": "Country", "name": "India" }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8298252909",
      "contactType": "Customer Service",
      "email": "info@suhtech.top"
    },
    "sameAs": [
      "https://www.linkedin.com/company/suhtech",
      "https://twitter.com/suhtech",
      "https://www.facebook.com/suhtech"
    ],
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Application Development",
      "DevOps Services",
      "Cloud Infrastructure",
      "CI/CD Automation",
      "Software Development"
    ]
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Services",
    "provider": {
      "@type": "Organization",
      "name": "SUH Tech Private Limited"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps Services"
          }
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${inter.variable} ${poppins.variable}`}
    >
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
        />
      </head>
      <body
        className={`${geistMono.variable} ${inter.variable} ${poppins.variable}`}
      >
        <Script
          id="contentsquare"
          strategy="afterInteractive"
          src="https://t.contentsquare.net/uxa/316925807530f.js"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
