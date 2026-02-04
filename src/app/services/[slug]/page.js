import { Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import FooterSection from "../../components/FooterSection";
import NavBar from "../../components/NavBar";
import WhyChooseUsSection from "./WhyChooseUsSection";

/* ===============================
   SERVICE DATA (UNCHANGED)
================================ */


const serviceCatalog = {
  "web-development": {
    title: "Web Development",
    subtitle: "Composable, SEO-friendly platforms built for conversion.",
    overview:
      "Fast, SEO-optimized websites built to convert traffic into revenue—powered by React, Next.js, and headless CMS.",
    outcomes: [
      "Ready-to-use libraries for rapid scaling",
      "Optimized page speed for better conversions",
      "Connected content systems for smoother campaigns",
    ],
    process: [
      "Audience research, UX flows, and information architecture",
      "Design system + content modeling",
      "Next.js/Node implementation with hydration strategy",
      "Observability, accessibility, and launch readiness",
    ],
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "GraphQL",
      "Contentful",
      "Sanity",
      "Cloudflare",
    ],

    

    featureHeading: "Unlock More with Our Latest Feature",
    featureDescription:"Smart solutions built for real business impact.",

    pricingHeading:"Transparent Pricing For Your Web Development Needs",
    pricingDescription:
      "Discover Cost-Effective Cloud Solutions With Pricing That Suitable For You",

    pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you migrate existing CMS content?",
        a: "Yes. We securely migrate your current content using automated scripts, schema mapping, and hands-on editorial training.",
      },
      {
        q: "Can you integrate analytics into our platform?",
        a: "Absolutely. We implement Google Analytics, custom dashboards, and tracking tools for real-time performance insights.",
      },
      {
        q: "Will migration cause downtime?",
        a: "No. We plan phased migrations to ensure a smooth transition with minimal or zero disruption.",
      },
      {
        q: "Can you connect with our existing marketing tools?",
        a: "Yes. Our solutions integrate seamlessly with CRMs, email platforms, and your entire marketing stack.",
      },
      {
        q: "Are your websites SEO-friendly?",
        a: "Yes. Every build follows modern SEO standards with fast loading speeds and optimized Core Web Vitals.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. We offer ongoing maintenance, updates, monitoring, and dedicated technical support.",
      },
      {
        q: "Can you customize the CMS to our needs?",
        a: "Of course. We tailor workflows, content structures, and features to match your business goals.",
      },
      {
        q: "Do you build scalable modular components?",
        a: "Yes. We create reusable component libraries that speed up development and future enhancements.",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    subtitle: "High-performance apps for iOS & Android.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",


    overview:
      "Scalable solutions built with Flutter, React Native, and native technologies.",

    outcomes: [
      "Build once, run everywhere.",
      "Reliable in any network.",
      "Fast, guided publishing.",
    ],

   

    featureHeading: "Enhance Your Capabilities with Our New Features",
    featureDescription:"Unlock powerful tools designed to elevate performance and streamline your digital growth.",

    pricingHeading: "Transparent Pricing For Your Mobile App Development Needs",
    pricingDescription:"Cost-effective mobile app solutions for iOS and Android that scale with your business.",

    pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],

    faqs: [
      {
        q: "Which technologies do you use for mobile apps?",
        a: "We develop apps using Flutter, React Native, and fully native iOS and Android technologies.",
      },

      {
        q: "Can you upgrade an existing mobile app?",
        a: "Yes. We enhance, optimize, and scale current applications with new features and improved performance.",
      },

      {
        q: "How long does it take to build a mobile app?",
        a: "Timelines vary by requirements, but most apps are delivered within structured and predictable schedules.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Absolutely. We offer maintenance, updates, monitoring, and long-term technical support.",
      },
      {
        q: "Will my app be scalable for future growth?",
        a: "Yes. All our applications are built with scalable architecture to support users, features, and integrations.",
      },
      {
        q: "Do you sign NDAs for projects?",
        a: "Yes. We ensure full confidentiality and secure handling of all client ideas and data.",
      },
    ],
  },

  "cloud-and-devops": {
    title: "Cloud & DevOps",
    subtitle: "Enterprise-grade cloud infrastructure.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "Scalable architectures deployed with advanced DevOps automation.",

    outcomes: [
      "Automated delivery",
      "High reliability",
      "Rapid provisioning",
    ],

        
    featureHeading: "Enhance Your Capabilities With Our New Features",
    featureDescription:
      "Powerful tools to modernize and accelerate your cloud journey.",

    pricingHeading: "Transparent Pricing For Your Cloud and DevOps Needs",
    pricingDescription:
      "Startup-friendly pricing for MVPs, product launches, and scaling teams.",

   pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],

    faqs: [
      {
        q: "Which cloud platforms do you support?",
        a: "AWS, Azure, and GCP—covering deployment, management, and architecture best practices.",
      },
      {
        q: "Do I need prior experience to join this course?",
        a: "No prior experience is required; the course guides you from fundamentals to advanced cloud concepts.",
      },
      {
        q: "Will I get hands-on practice?",
        a: "Yes! You’ll work on real cloud projects, CI/CD pipelines, and infrastructure labs.",
      },
      {
        q: "Is certification included?",
        a: "The course provides guidance and prep for major cloud certifications like AWS, Azure, and GCP.",
      },
       {
        q: "Do you provide post-course support?",
        a: "Absolutely. You’ll get ongoing mentorship, doubt resolution, and career guidance after completion.",
      },
    ],
  },

  "ai-and-automation": {
    title: "AI & Automation",
    subtitle: "Learn to Build Intelligent Systems Powered by Data",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "Master AI models, chatbots, and automation workflows to streamline operations and drive smarter business solutions.",

    outcomes: [
      "Build intelligent conversational agents",
      "Streamline repetitive tasks efficiently",
      "Generate insights and forecasts from data",
    ],

    featureHeading: "Enhance Your Capabilities with Our Advanced features",
    featureDescription:
      "Gain hands-on experience with tools and workflows used in real-world AI & automation projects.",

    pricingHeading: "Transparent Pricing For Your AI and Automation Needs",
    pricingDescription:
      "Startup-friendly pricing for MVPs, product launches, and scaling teams.",

     pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],


    faqs: [
      {
        q: "Do you use OpenAI models?",
        a: "Yes, OpenAI, Gemini, and custom ML models.",
      },
    ],
  },

  "cybersecurity": {
    title: "Cybersecurity",
    subtitle: "Protecting your digital assets.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We provide end-to-end security solutions, including threat detection, vulnerability management, and proactive defense strategies to safeguard your organization.",

    outcomes: [
      "Detect vulnerabilities and strengthen defenses.",
      "Continuous monitoring with real-time alerts.",
      "Ensure ISO, SOC2, and GDPR compliance effortlessly.",
    ],

    

    featureHeading: "Enhance Your Capabilities With Our New Feature",
    featureDescription:
      "Tools that strengthen your security posture and ensure business continuity.",

      pricingHeading: "Transparent Pricing For Your Cybersecurity Needs",
    pricingDescription:
      "Startup-friendly pricing for MVPs, product launches, and scaling teams.",

     pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],
    faqs: [
      {
  q: "Do you provide compliance help?",
  a: "Yes, we assist with ISO, SOC2, and GDPR compliance requirements.",
},
{
  q: "Can you perform penetration testing?",
  a: "Absolutely. Our team conducts comprehensive tests to identify vulnerabilities and secure your systems.",
},
{
  q: "Do I need prior cybersecurity knowledge?",
  a: "No. Our services are designed for businesses of all sizes, regardless of internal expertise.",
},
{
  q: "Which industries do you serve?",
  a: "Finance, healthcare, IT, e-commerce, and more—our solutions adapt to industry-specific requirements.",
},
    ],
  },

  "it-consulting": {
    title: "IT Consulting",
    subtitle: "SStrategic technology guidance.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We help organizations align technology with business goals, optimize processes, and drive digital transformation.",

    outcomes: [
      "Plan and prioritize technology initiatives strategically.",
      "Identify opportunities to reduce IT spend and increase ROI",
      "Align IT capabilities with long-term business objectives.",
    ],

     
    featureHeading: "Enhance Your Capabilities With Our New Feature",
    featureDescription:
      "Gain insights, optimize costs, and implement strategies that drive IT efficiency.",

    pricingHeading: "Transparent Pricing For Your IT Consulting Needs",
    pricingDescription:
      "Startup-friendly pricing for MVPs, product launches, and scaling teams.",


     pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],

    faqs: [
      {
  q: "Do you work with startups?",
  a: "Yes, we provide IT consulting services for startups as well as large enterprises.",
},
{
  q: "Can you help with IT strategy and roadmaps?",
  a: "Absolutely. We develop actionable roadmaps that align IT with your business goals.",
},
{
  q: "Do I need in-house IT expertise to benefit?",
  a: "No. Our consultants guide you through every step, regardless of your team’s technical knowledge.",
},
{
  q: "Which industries do you serve?",
  a: "We work across finance, healthcare, e-commerce, tech, and more, tailoring solutions to each industry’s needs.",
},

    ],
  },

  "saas-development": {
    title: "SaaS Development",
    subtitle: "Build scalable SaaS platforms.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",
    overview:
      "We design and develop multi-tenant SaaS products that grow with your business and deliver seamless user experiences.",

    outcomes: [
      "Flexible recurring payment management.",
      "Secure multi-level user management.",
      "Infrastructure designed to grow with your user base.",
    ],

    

    featureHeading: "Enhance Your Capabilities With Our New Features",
    featureDescription:
      "Advanced tools to optimize SaaS performance, enhance user engagement, and scale effortlessly.",

    pricingHeading: "Transparent Pricing For Your SaaS Development Needs",
    pricingDescription:
      "Startup-friendly pricing for MVPs, product launches, and scaling teams.",


     pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],
    faqs: [

      {
  q: "Do you handle SaaS scaling?",
  a: "Yes, we scale SaaS solutions from MVP to enterprise-level platforms.",
},
{
  q: "Can you implement multi-tenant architecture?",
  a: "Absolutely. Our SaaS solutions support multi-tenancy for secure, isolated environments.",
},
{
  q: "Do I need prior technical expertise?",
  a: "No. Our team guides you through every step from design to deployment.",
},
{
  q: "Which industries do you serve?",
  a: "We work across SaaS startups, B2B platforms, e-commerce, fintech, and enterprise software.",
},

     
    ],
  },

  "maintenance-and-support": {
    title: "Maintenance & Support",
    subtitle: "Reliable ongoing support.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We provide continuous maintenance and proactive technical support to keep your systems secure, optimized, and running smoothly.",

    outcomes: [
      "Continuous oversight to prevent disruptions.",
      "Rapid identification and resolution of technical issues.",
      "Enhance efficiency and system responsiveness.",
    ],
     

    
    featureHeading: "Enhance Your Capabilities With Our New Features",
    featureDescription:
      "Solutions designed to optimize performance, reduce downtime, and ensure system reliability.",

     pricingHeading: "Transparent Pricing For Your Maintenance & Support Needs",
    pricingDescription:
      "Startup-friendly pricing for MVPs, product launches, and scaling teams.",


    pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],

    faqs: [
      {
  q: "Do you offer 24/7 support?",
  a: "Yes, our SLA-based plans provide round-the-clock expert support.",
},
{
  q: "Can you handle critical system issues quickly?",
  a: "Absolutely. Our team ensures fast response and resolution for all technical incidents.",
},
{
  q: "Is prior technical knowledge required to benefit from your services?",
  a: "No. We manage and optimize your systems entirely, regardless of your team’s expertise.",
},
{
  q: "Which industries do you support?",
  a: "We support finance, healthcare, IT, e-commerce, SaaS, and more—tailored to each sector’s needs.",
},

    ],
  },

  "startup-solutions": {
    title: "Startup Solutions",
    subtitle: "From idea to launch.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We empower startups to transform concepts into market-ready MVPs, scalable products, and investment-ready platforms.",

    outcomes: [
      "Rapid prototypes to validate ideas.",
      "Expert guidance for founders and teams.",
      "Systems designed to grow effortlessly.",
    ],

      

    featureHeading: "Enhance Your Capabilities With Our New Features",
    featureDescription:
      "Smart solutions crafted to strengthen your startup foundation.",

       pricingHeading: "Transparent Pricing For Your startup Solutions  Needs",
    pricingDescription:
      "Startup-friendly pricing for MVPs, product launches, and scaling teams.",


     pricing: [
      {
        title: "Silver Package – Starter Website",
        bestFor: "Individuals & portfolios",
        price: "₹15,000",
        billing: "One-Time",
        features: [
          "Up to 5 pages static website",
          "Mobile responsive design",
          "Basic UI/UX customization",
          "Contact form & Google Maps",
          "SEO-friendly structure",
          "SSL setup",
          "Social media links",
          "Fast loading setup",
          "Basic security setup",
          "1 round of revisions",
        ],
      },
      {
        title: "Gold Package – Dynamic Website",
        bestFor: "Growing teams & brands",
        price: "₹50,000",
        billing: "One-Time",
        featured: true,
        features: [
          "Up to 10 dynamic pages",
          "WordPress or Headless CMS",
          "Blog module setup",
          "Analytics integration",
          "Performance optimization",
          "Accessibility compliance",
          "Custom graphics",
          "User login area",
          "3 rounds of revisions",
          "Training for content management",
        ],
      },
      {
        title: "Platinum Package – Enterprise Website",
        bestFor: "Growing Businesses",
        price: "₹1,25,000",
        billing: "One-Time",
        features: [
          "Full eCommerce setup",
          "Up to 100 products upload",
          "Payment gateway integration",
          "Custom UI/UX design",
          "Order management system",
          "Inventory integration",
          "Advanced SEO setup",
          "Speed & Core Web Vitals optimization",
          "API/CRM integrations",
          "AI chatbot integration",
        ],
      },
    ],

    faqs: [
      {
  q: "Do you help with MVP development?",
  a: "Yes, we provide complete end-to-end MVP services.",
},
{
  q: "Can you scale startup products?",
  a: "Absolutely. Our architectures are built for high growth.",
},
{
  q: "Do you mentor startup founders?",
  a: "Yes, we offer strategic and technical mentoring.",
},
{
  q: "Do you assist with cloud deployment?",
  a: "Yes, we deploy and manage solutions on AWS, Azure, and GCP.",
},

    ],
  },


  

};

/* ===============================
   PAGE
================================ */
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const data = serviceCatalog[slug];

  if (!data) notFound();

  return (
    <main className=" bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 ">
      <NavBar />

      {/* ================= HERO WRAPPER ================= */}
      <section className="relative overflow-hidden  ">

        {/* Background Glow */}
        <img
          src="/images/Ellipse 604 (1).svg"
          alt="bg-glow"
          className="absolute bottom-[-480px] right-[-120px]
               w-[550px] md:w-[750px]
               opacity-90 pointer-events-none z-0"
        />

        {/* ================= HERO ================= */}
        <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 text-center z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{data.title}</h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            {data.subtitle}
          </p>

          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-500">
            {data.overview}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white font-semibold"
            >
              Book A Workshop
            </Link>

            <Link
              href="/#pricing"
              className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-semibold"
            >
              View pricing options
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative mt-10 md:mt-12 max-w-full md:max-w-5xl mx-auto z-20 px-4">
           <img
  src="/images/Rectangle_Web_Development.svg"
  alt="Web Development"
  className="rounded-2xl shadow-xl w-full"
/>
          </div>
        </div>
      </section>


      {/* ================= LOGOS ================= */}
      <section className="py-8 text-center text-sm text-gray-500">
        Trusted By 100+ Famous Companies
        <div className="mt-4 flex flex-wrap justify-center gap-6 opacity-70">
          <span>Logoipsum</span>
          <span>Logoipsum</span>
          <span>Logoipsum</span>
          <span>Logoipsum</span>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <Stat value="500K+" label="Total Active Users" />
          <Stat value="2PB" label="Data Saved" />
          <Stat value="50+" label="Global Data Centers" />
          <Stat value="99.9%" label="Uptime Guarantee" />
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUsSection slug={slug} />


      {/* ================= FEATURE ================= */}

      <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start px-6  bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

        <div>
          <img
            src="/images/Rectangle_Growth.svg"
            alt="Growth analytics"
            className="rounded-3xl  w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.featureHeading}
          </h2>

          <p className=" mb-8  bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            {data.featureDescription}
          </p>

          <ul className="space-y-5">
            {data.outcomes.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className=" bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>





      {/* ================= PRICING ================= */}
    <section
  id="pricing"
  className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
>
  {/* HEADING */}
  <div className="text-center mb-14 px-6">
    <h2 className="text-4xl font-bold mb-4">
      {data.pricingHeading}
    </h2>

    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      {data.pricingDescription}
    </p>
  </div>

  {/* PRICING CARDS */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
    {data.pricing.map((plan, i) => {
      const isFeatured = plan.featured || i === 1;

      return (
        <div
          key={plan.title}
          className={`rounded-3xl p-8 flex flex-col justify-between shadow-xl
            transition-all duration-300
            ${
              isFeatured
                ? "bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white scale-105"
                : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            }
          `}
        >
          {/* TOP */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {plan.title}
            </h3>

            <p
              className={`mb-6
                ${
                  isFeatured
                    ? "text-purple-100"
                    : "text-gray-500 dark:text-gray-400"
                }
              `}
            >
              Best for: {plan.bestFor}
            </p>

            <p className="text-3xl font-bold mb-6">
              {plan.price}{" "}
              <span
                className={`text-base font-medium
                  ${
                    isFeatured
                      ? "text-purple-100"
                      : "text-gray-600 dark:text-gray-400"
                  }
                `}
              >
                ({plan.billing})
              </span>
            </p>

            <button
              className={`w-full py-3 rounded-full font-semibold mb-8 transition
                ${
                  isFeatured
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }
              `}
            >
              Choose The Plan
            </button>
          </div>

          {/* FEATURES */}
          <div>
            <p className="font-semibold mb-4">
              Features Include:
            </p>

            <ul className="space-y-3 text-sm">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3
                    ${
                      isFeatured
                        ? "text-purple-100"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  `}
                >
                  <Check className="w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    })}
  </div>
</section>



      {/* ================= FAQ ================= */}
      <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold mb-4">
        Frequently <br /> Asked Questions
      </h2>

      <p className="text-gray-500 dark:text-gray-400 max-w-sm">
        Have Another Question? Please Contact Us Via Email Down Below
      </p>
    </div>

    {/* RIGHT ACCORDION */}
    <div className="space-y-4">
      {data.faqs.map((faq, i) => {
        const isOpen = i === 0;

        return (
          <details
            key={faq.q}
            open={isOpen}
            className={`group rounded-2xl border transition-all
              ${
                isOpen
                  ? "bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white border-transparent"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              }
            `}
          >
            <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold list-none">
              {faq.q}
              <span className="transition-transform group-open:rotate-180">
                ⌃
              </span>
            </summary>

            <div
              className={`px-6 pb-4 text-sm leading-relaxed
                ${
                  isOpen
                    ? "text-purple-100"
                    : "text-gray-600 dark:text-gray-300"
                }
              `}
            >
              {faq.a}
            </div>
          </details>
        );
      })}
    </div>

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#9616FB] to-[#3459FB] rounded-3xl text-white text-center py-16 px-8 shadow-xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try Risk Free With 30-Day <br /> Money - Back Guarantee!
            </h2>

            <p className="text-purple-100 mb-8">
              If You Are Not Satisfied, We Will Refund Your Payment – No Questions Asked
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-10 py-3 rounded-full
                   bg-white/30 backdrop-blur text-white font-semibold
                   hover:bg-white/40 transition"
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

/* ===============================
   HELPERS
================================ */
function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}



/* ===============================
   STATIC + SEO
================================ */
export function generateStaticParams() {
  return Object.keys(serviceCatalog).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = serviceCatalog[slug];

  if (!data) {
    return {
      title: 'Service Not Found | SUH Tech',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${data.title} Services | SUH Tech`,
    description: data.subtitle,
  };
}
