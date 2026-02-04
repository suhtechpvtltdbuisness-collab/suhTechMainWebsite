"use client";

import Link from "next/link";

export default function ServicesBanner() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* CARD */}
        <div
          className="
            relative
            bg-gradient-to-r
            from-[#9616FB]
            to-[#3459FB]
            rounded-3xl
            text-white
            shadow-xl
            overflow-visible
          "
        >
          {/* CONTENT WRAPPER */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              px-8
              py-14
              md:px-12
              md:py-16
            "
          >
            {/* LEFT CONTENT – 50% */}
            <div className="w-full md:w-1/2 z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Try Risk Free With 30-Day <br />
                <span className="text-[#D6CBFF]">Money-Back Guarantee!</span>
              </h2>

              <p className="text-purple-100 mb-8 text-sm sm:text-base">
                If You Are Not Satisfied, We Will Refund Your Payment – No Questions Asked
              </p>

              <Link
                href="/#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  rounded-full
                  bg-white/30
                  backdrop-blur
                  text-white
                  font-semibold
                  hover:bg-white/40
                  transition
                "
              >
                Join Us Now
              </Link>
            </div>

            {/* RIGHT IMAGE SLOT – 50% (space holder only) */}
            <div className="w-full md:w-1/2" />
          </div>

          {/* IMAGE (DESKTOP – does NOT affect card height) */}
          <img
            src="/images/Men_Image.svg"
            alt="CTA Illustration"
            className="
              hidden
              md:block
              absolute
              right-2
              bottom-0
              w-[380px]
              lg:w-[480px]
              pointer-events-none
              select-none
            "
          />

          {/* IMAGE (MOBILE/TABLET – normal flow) */}
          <img
  src="/images/Men_Image.svg"
  alt="CTA Illustration"
  className="
    md:hidden
    mx-auto
    mt-8
    w-[70%]          /* fluid base */
    max-w-[280px]    /* cap on very small phones */
    sm:w-[60%]
    sm:max-w-[340px]
    pointer-events-none
    select-none
  "
/>

        </div>
      </div>
    </section>
  );
}