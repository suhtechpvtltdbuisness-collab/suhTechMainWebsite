import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />

      <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header Section */}
        <div className="relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[490px] mt-22">
          {/* Background Image */}
          <img
            src="/Union.svg"
            alt="Header Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay (optional but improves readability)
          <div className="absolute inset-0 bg-black/40"></div> */}

          {/* Header Text */}
          <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-10 pt-35">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Privacy Policy
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-8">
          {/* Introduction */}
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              This Privacy Notice for SUH Tech Private Limited ("Company", "We",
              "Us", or "Our"), describes how and why we might collect, store, use,
              and/or share ("process") your information when you use our services
              ("Services").
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Visit our website at https://www.suhtech.top or any website of
                ours that links to this Privacy Notice
              </li>
              <li>
                Use our applications or any other application of ours that links
                to this Privacy Notice
              </li>
              <li>
                Engage with us in other related ways — including sales,
                marketing, or events
              </li>
            </ul>
          </div>

          {/* Summary Section */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold">
              SUMMARY OF KEY POINTS
            </h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                This summary provides key points from our Privacy Notice. More
                details can be found in the sections below.
              </p>

              <p>
                <strong>What Personal Information Do We Process?</strong> We may
                process personal information depending on how you interact with
                our services.
              </p>

              <p>
                <strong>Do We Process Sensitive Information?</strong> No.
              </p>

              <p>
                <strong>Do We Receive Information From Third Parties?</strong> Yes,
                from public databases, marketing partners, and social platforms.
              </p>

              <p>
                <strong>How Do We Keep Your Information Safe?</strong> We use
                technical and organizational security measures, but no system is
                100% secure.
              </p>

              <p>
                <strong>What Are Your Rights?</strong> Your rights depend on your
                location and applicable laws.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <h3 className="font-bold">
                Personal Information You Disclose To Us
              </h3>

              <p>
                <strong>In Short:</strong> We collect personal information you
                voluntarily provide.
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Email</li>
                <li>Address</li>
                <li>Preferences</li>
              </ul>

              <p>
                <strong>Sensitive Information:</strong> We do not process
                sensitive personal information.
              </p>
            </div>
          </section>

          {/* Automatically Collected Info */}
          <section className="space-y-4">
            <h3 className="text-base font-bold">
              Information Automatically Collected
            </h3>

            <p className="text-sm leading-relaxed">
              We automatically collect IP address, device data, browser type,
              and usage data for security and analytics purposes.
            </p>
          </section>

          {/* Other Sources */}
          <section className="space-y-4">
            <h3 className="text-base font-bold">
              Information Collected From Other Sources
            </h3>

            <p className="text-sm leading-relaxed">
              We may collect limited data from public databases, social media
              platforms, and marketing partners.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </>
  );
}