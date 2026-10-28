"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServicesHero() {
  const router = useRouter();

  return (
    <section className="relative pb-24 md:pb-32 lg:pb-44">
      <img
        src="/Ellipse 604.svg"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-0 opacity-90 bottom-0 left-[-160px] w-[360px] md:left-[-220px] md:w-[520px] lg:left-[-290px] lg:w-[650px]"
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-14">
          {/* LEFT TEXT */}
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Comprehensive IT Services for{" "}
            <span className="text-[#6F44FB]">Modern Businesses</span> Across India
          </h2>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => router.push("/contact")}
            className="px-7 py-3 w-fit shrink-0 rounded-full bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Get Started
          </button>
        </div>

        {/* CARDS: stacked on mobile, 2-col on tablet, 3 proportional cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[548fr_301fr_407fr] gap-4 md:gap-6">
          {/* IMAGE CARD 1 */}
          <div className="relative rounded-[24px] overflow-hidden bg-white aspect-[548/292] sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/Service_Hero_Teams.svg"
              alt="Team"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* STATS CARD */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#D5BFFF] to-[#F4F4F4] p-4 flex flex-col justify-between min-h-[220px] sm:aspect-auto lg:aspect-[301/292]">
            <div>
              <p className="text-sm text-gray-600">Satisfied</p>
              <p className="text-sm text-gray-600">Customers</p>
            </div>

            <h3 className="text-3xl font-bold text-gray-900">200K+</h3>

            <img
              src="/images/Avatar Group.svg"
              alt="Avatars"
              className="h-8 w-fit"
            />
          </div>

          {/* IMAGE CARD 2 */}
          <div className="relative rounded-[24px] overflow-hidden bg-white aspect-[407/292]">
            <Image
              src="/images/Service_Hero_Meetings.svg"
              alt="Meeting"
              fill
              sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
