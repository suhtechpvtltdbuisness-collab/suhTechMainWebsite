// src/app/portfolio/[slug]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar";
import FooterSection from "../../components/FooterSection";
import Image from "next/image";

const projectCatalog = {
  // 🔵 ORGA
  "orga-employee-management": {
    title: "ORGA – All-In-One Team, Task & Operations Management Platform",
    description: "ORGA Is A Unified Operations Platform Designed To Help Growing Teams Manage Their People, Projects, Finance, And Support Workflows From A Single System. The Product Brings Together HRMS, Project Management, Finance, And Support Modules To Eliminate Tool Fragmentation And Improve Operational Visibility.",

    heroImage: "/images/Orga.png",

    challenge: {
      title: "Challenge",
      description: "Designing A System That Could Serve Multiple Roles—HR, Managers, Finance Teams, And Support Agents—Without Overwhelming Users.",
      points: [
        "Balancing Feature Depth With Usability Across Modules",
        "Maintaining Consistent UX Across Different Workflows",
        "Enabling Cross-Module Data Flow Without Complexity",
        "Designing For Both Small Teams And Scaling Organizations"
      ]
    },

    solution: {
      title: "Solution Provided By SUH Tech",
      description: "We Designed A Modular Yet Unified Platform Focused On Clarity, Efficiency, And Scalability.",
      points: [
        "HRMS Module: Employee Management, Attendance, Leave, And Records",
        "Project Management Module: Task Tracking, Timelines, Ownership, And Progress Visibility",
        "Finance Module: Expense Tracking, Budgets, And Financial Overview",
        "Support Module: Centralized Ticket Management And Internal/External Support Workflows",
        "Unified Dashboard For Cross-Functional Insights",
        "Role-Based Access To Keep Workflows Relevant And Focused"
      ]
    },

    impact: [
      { value: "30%", description: "Reduced Operational Complexity By Consolidating Tools" },
      { value: "20%", description: "Improved Cross-Team Coordination And Transparency" },
      { value: "40%", description: "Faster Decision-Making With Centralized Data" },
      { value: "40%", description: "Scalable Foundation For Growing Teams" }
    ],

    primaryCta: "View Live Demo",
    primaryLink: "/coming-soon",
  },

  // 🟡 VIRAJ
  "viraj-jewellers-website": {
    title: "Viraj Jewellers – Digital Trust & Gold Exchange Experience",
    description: "Viraj Jewellers Is An Established Jewelry Brand Offering Services Such As Gold Purity Testing, Cash For Gold, Cash For Silver, And Cash For Diamonds. The Brand Needed A Digital Presence That Could Instantly Build Trust, Clearly Explain Processes, And Guide Users Confidently Toward Inquiry Or Walk-In Actions.",

    heroImage: "/images/Viraj.png",

    challenge: {
      title: "Challenge",
      description: "Translating An Offline Trust-Driven Business Into A Digital Experience Where Users Feel Equally Confident Without Face-To-Face Interaction.",
      points: [
        "Communicating Transparency In Valuation And Testing",
        "Reducing Fear And Hesitation During High-Value Transactions",
        "Structuring Complex Services In A Simple, Reassuring Flow",
        "Designing A Premium Yet Approachable Visual Identity"
      ]
    },

    solution: {
      title: "Solution Provided By SUH Tech",
      description: "Customers Looking To Sell Or Exchange Gold Often Hesitate Due To Trust And Transparency Concerns In The Digital Space:",
      points: [
        "Uncertainty Around Fair Gold Valuation And Pricing Transparency",
        "Concerns About Fraud, Underpricing, And Legitimacy",
        "Confusing Or Unclear Cash-For-Gold Processes",
        "Websites That Fail To Reflect Credibility, Trust, Or Professionalism",
        "Outdated Digital Presence That Weakens Brand Trust",
        "Lack Of Seamless Inquiry, Appointment, Or Walk-In Guidance"
      ]
    },

    impact: [
      { value: "30%", description: "Higher User Confidence In Cash-For-Gold Services" },
      { value: "20%", description: "Improved Inquiry And Appointment Conversions" },
      { value: "40%", description: "Stronger Brand Reception And Better Offline Credibility" }
    ],

    primaryCta: "View Live Website",
    primaryLink: "https://www.virajjeweller.com/",
  },

  // 🟣 BOTBRIDGE
  "botbridge-support-automation": {
    title: "BOT-BRIDGE – Intelligent Support Automation Platform",
    description: "BOT-BRIDGE Is A Customer Support Automation Solution Designed To Help Businesses Manage High Volumes Of Customer Inquiries With Efficiency And Intelligence. The Platform Focuses On Combining Chatbots, Automation, And A Centralized Helpdesk To Improve Response Times, Reduce Manual Workload, And Enhance Overall Customer Experience.",

    heroImage: "/images/Botbridge.png",

    challenge: {
      title: "Challenge",
      description: "Designing A System That Balances Automation And Human Support Without Making The Experience Feel Robotic Or Disconnected.",
      points: [
        "Identifying Which Queries Could Be Safely Automated",
        "Ensuring Smooth Handoff From Bot To Human Agents",
        "Creating A Centralized Workflow For Multi-Channel Support",
        "Providing Actionable Insights For Support Managers"
      ]
    },

    solution: {
      title: "Solution Provided By SUH Tech",
      description: "We Designed An End-To-End Support Experience Focused On Speed, Efficiency, And Visibility.",
      points: [
        "AI-Powered Chatbot To Handle Repetitive And Common Queries",
        "Centralized Helpdesk To Manage Tickets From All Channels",
        "Automated Ticket Creation, Categorization, And Assignment",
        "Priority-Based Workflows To Reduce Response Time",
        "Agent Dashboard With Clear Ticket Status And Ownership",
        "Analytics And Reporting To Track Performance And Identify Bottlenecks"
      ]
    },

    impact: [
      { value: "30%", description: "Reduced Response Time For Customer Queries" },
      { value: "20%", description: "Lower Agent Workload By Automating Repetitive Tasks" },
      { value: "40%", description: "Improved Customer Satisfaction Through Faster Resolution" },
      { value: "40%", description: "Better Operational Visibility For Support Teams" }
    ],

    primaryCta: "See It in Action",
    primaryLink: "https://www.suhtech.shop/",
  },

  // 🟢 SKILLGURU
  "skillguru-lms-platform": {
    title: "Skill Guru – Unified Learning & Institution Management Platform",
    description: "Skill Guru Is A Digital Platform Designed For Educational Institutions And Training Centers To Manage Learning Resources, Tools, And Workflows Within A Single Ecosystem. The Objective Was To Replace Fragmented Systems With A Centralized, Scalable, And Easy-To-Use Interface That Improved Operational Efficiency And Learning Experience.",

    heroImage: "/images/Skillguru.png",

    challenge: {
      title: "Challenge",
      description: "Creating A Platform That Could Unify Learning, Administration, And Resource Management While Remaining Intuitive For Both Educators And Learners.",
      points: [
        "Consolidating Multiple Tools Into A Single Platform",
        "Designing Workflows Adaptable To Different Institution Sizes",
        "Simplifying Adoption For Non-Technical Users",
        "Maintaining Clarity While Handling High-Operational Operations"
      ]
    },

    solution: {
      title: "Solution Provided By SUH Tech",
      description: "We Designed A Unified Digital Ecosystem Focused On Simplicity, Scalability, And Control.",
      points: [
        "Centralized Dashboard For All Institutional Activities",
        "Unified Access To Learning Materials, Tests, And Data",
        "Structured Workflows For Content, Users, And Operations",
        "Seamless Collaboration Between Instructors, Students, And Administrators",
        "Scalable Architecture To Support Future Growth"
      ]
    },

    impact: [
      { value: "30%", description: "Improved Operational Efficiency Through Centralized Workflows" },
      { value: "20%", description: "Reduced Dependency On Legacy Disconnected Tools" },
      { value: "40%", description: "Better Organization Of Learning Resources And Records" },
      { value: "40%", description: "Enhanced Learning Experience For Students And Educators" }
    ],

    primaryCta: "View Live Demo",
    primaryLink: "https://www.suhtech.in/",
  },

  // 🔴 DHANGANGA
  "dhanganga-naye-soch-naya-kadam": {
    title: "DHANGANGA – Local Services Discovery Platform",
    description: "DHANGANGA Is A Digital Platform Aimed At Connecting Users With Trusted Local Service Professionals Such As Electricians, Plumbers, Carpenters, Cleaners, And Other Essential Workers. The Goal Was To Create A Single, Reliable Ecosystem That Benefits Both Customers Seeking Services And Professionals Looking For Consistent Work And Visibility.",

    heroImage: "/Dhanaganga.png",

    challenge: {
      title: "Challenge",
      description: "Designing A Platform That Builds Trust On Both Sides—Customers And Service Providers—While Keeping The Experience Simple For Users With Varying Levels Of Digital Literacy.",
      points: [
        "Establishing Trust Without Overwhelming Users",
        "Simplifying Service Listings And Pricing",
        "Ensuring Accountability After Service Completion",
        "Creating An Onboarding Flow That Local Professionals Could Easily Adopt"
      ]
    },

    solution: {
      title: "Solution Provided By SUH Tech",
      description: "We Designed And Delivered An End-To-End Service Discovery Experience Focused On Clarity, Trust, And Accessibility.",
      points: [
        "Centralized Marketplace To Discover Verified Local Service Providers",
        "Profile Verification System With Skill Details And Ratings",
        "Transparent Pricing Structure And Clear Service Descriptions",
        "Booking And Appointment Management Flow",
        "Review And Feedback System To Ensure Accountability",
        "Simple Onboarding For Professionals To Improve Digital Visibility"
      ]
    },

    impact: [
      { value: "20%", description: "Increase In Service Discovery Efficiency" },
      { value: "20%", description: "Improvement In User Trust And Engagement" }
    ],

    primaryCta: "Coming Soon",
    primaryLink: "https://www.nayesochnayakadam.com/",
  },
};

async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const data = projectCatalog[slug];

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

        {/* Background Glow - Top Right Corner */}
        <div className="absolute -top-24 -right-32 w-[500px] md:w-[700px] opacity-80 pointer-events-none z-0">
          <Image
            src="/images/Ellipse 604_projectdetailsorga.svg"
            alt="bg-glow"
            width={750}
            height={750}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {data.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {data.description}
              </p>

              {data.primaryCta && (
                <Link
                  href={data.primaryLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  {data.primaryCta}
                </Link>
              )}
            </div>

            {/* Right Image */}
            {data.heroImage && (
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-20">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      
      {/* Main Content Section */}
          {/* Main Content Section */}
<section className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

  {/* Background Glow */}
  <img
    src="/Ellipse 604.svg"
    alt="bg-glow"
    className="absolute -bottom-32 left-0 w-[600px] md:w-[800px] opacity-90 pointer-events-none z-0"
  />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Timeline Wrapper */}
    <div className="relative pl-16">

      
      <div className="absolute left-5 top-0 bottom-0 w-[4px] bg-gray-300 rounded-full"></div>

      {/* PURPLE SEGMENTS */}
     <div
  className="
    absolute left-5 h-24 w-[4px] bg-purple-600 rounded-full
    top-6
    max-md:top-6
  "
></div>

{/* Line 2 */}
<div
  className="
    absolute left-5 h-24 w-[4px] bg-purple-600 rounded-full
    top-[430px]
    max-md:top-[580px]
  "
></div>

{/* Line 3 */}
<div
  className="
    absolute left-5 h-24 w-[4px] bg-purple-600 rounded-full
    top-[830px]
    max-md:top-[1250px]
  "
></div>

      {/* -----CHALLENGE -------------*/}
      <div className="mb-28">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
    {data.challenge.title}
  </h2>

  <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-6">
    {data.challenge.description}
  </p>

  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
    Key Challenges Included:
  </p>

  <ul className="space-y-2 max-w-3xl">
    {data.challenge.points.map((point, i) => (
      <li
        key={i}
        className="flex gap-3 text-gray-600 dark:text-gray-300"
      >
        <span className="text-purple-600 mt-1">•</span>
        <span>{point}</span>
      </li>
    ))}
  </ul>
</div>


      {/* -------------------- SOLUTION ------------------ */}
<div className="mb-28">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
    {data.solution.title}
  </h2>

  <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-6">
    {data.solution.description}
  </p>

  <ul className="space-y-2 max-w-3xl">
    {data.solution.points.map((point, i) => (
      <li
        key={i}
        className="flex gap-3 text-gray-600 dark:text-gray-300"
      >
        <span className="text-purple-600 mt-1">•</span>
        <span>{point}</span>
      </li>
    ))}
  </ul>
</div>

{/* ------------------- IMPACT ------------------ */}
<div>
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
    Impact
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
    {data.impact.map((item, i) => (
      <div
        key={i}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-purple-100 dark:border-gray-700"
      >
        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {item.value}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>

<div className="text-center pt-10">
  <Link
    href="/portfolio"
    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
  >
    <span>←</span>
    <span>Back to Portfolio</span>
  </Link>
</div>
</div>
  </div>
</section>




      <FooterSection />
    </main>
  );
}
{/* <div className="text-center pt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <span>←</span>
          <span>Back to Portfolio</span>
        </Link>
      </div> */}

export function generateStaticParams() {
  return Object.keys(projectCatalog).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = projectCatalog[slug];

  if (!data) {
    return {
      title: "Portfolio | SUH Tech Private Limited",
      description: "Web application development and DevOps project portfolio by SUH Tech Private Limited.",
      icons: { icon: "/icons/SUHTechLogo (1).svg" },
      alternates: {
        canonical: `https://www.suhtech.top/portfolio/${slug}`,
      },
    };
  }

  return {
    title: `${data.title} - Portfolio | SUH Tech Private Limited`,
    description: data.description,
    keywords: [
      data.title.toLowerCase(),
      "web app development",
      "devops project",
      "case study",
      "portfolio",
      "SUH Tech",
    ],
    openGraph: {
      title: `${data.title} - Portfolio | SUH Tech Private Limited`,
      description: data.description,
      url: `https://www.suhtech.top/portfolio/${slug}`,
    },
    alternates: {
      canonical: `https://www.suhtech.top/portfolio/${slug}`,
    },
    icons: { icon: "/icons/SUHTechLogo (1).svg" },
  };
}

export default PortfolioDetailPage;