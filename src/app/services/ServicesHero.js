"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServicesHero() {
  const router = useRouter();

  return (
    <section className="relative pb-44">
  <img
    src="/Ellipse 604.svg"
    alt="bg-glow"
    className="
      absolute pointer-events-none z-0 opacity-90

      top-[180px] left-[-120px] w-[420px]

      

      md:bottom-0 md:left-[-290px] md:w-[650px]
    "
  />



      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          {/* LEFT TEXT */}
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3 ml-[-180px]">
              Comprehensive IT Services for{" "}
              <span className="text-[#6F44FB]">Modern Businesses</span> Across India
            </h2>
          </div>

          {/* RIGHT BUTTON */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => router.push("/contact")}
              className="px-7 py-3 w-fit rounded-full bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mr-[-75px]"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* -------------------- MOBILE VIEW ------------------ */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {/* IMAGE 1 */}
          <div className="relative rounded-[24px] overflow-hidden bg-white aspect-[548/292]">
            <Image
              src="/images/Service_Hero_Teams.svg"
              alt="Team"
              fill
              className="object-cover"
            />
          </div>

          {/* STATS */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#D5BFFF] to-[#F4F4F4] p-4 flex flex-col justify-between h-[292px]">
            <div>
              <p className="text-sm text-gray-600">Satisfied</p>
              <p className="text-sm text-gray-600">Customers</p>
            </div>

            <h3 className="text-3xl font-bold">200K+</h3>

            <img
              src="/images/Avatar Group.svg"
              alt="Avatars"
              className="h-8"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="relative rounded-[24px] overflow-hidden bg-white aspect-[407/292]">
            <Image
              src="/images/Service_Hero_Meetings.svg"
              alt="Meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ---------------- DESKTOP VIEW ---------------- */}
     <div className="hidden md:flex justify-center">
  <div className="flex items-stretch gap-6 max-w-[1320px] w-full px-6 ml-[-240px]">
    
    {/* IMAGE CARD 1 */}
    <div className="w-[548px] h-[292px] rounded-[24px] overflow-hidden bg-white shrink-0">
      <Image
        src="/images/Service_Hero_Teams.svg"
        alt="Team"
        width={548}
        height={292}
        className="w-full h-full object-cover"
        priority
      />
    </div>

    {/* STATS CARD */}
    <div className="w-[301px] h-[292px] rounded-[24px] bg-gradient-to-br from-[#D5BFFF] to-[#F4F4F4] p-4 flex flex-col justify-between shrink-0">
      <div>
        <p className="text-sm text-gray-600">Satisfied</p>
        <p className="text-sm text-gray-600">Customers</p>
      </div>

      <h3 className="text-3xl font-bold">200K+</h3>

      <img
        src="/images/Avatar Group.svg"
        alt="Avatars"
        className="h-8"
      />
    </div>

    {/* IMAGE CARD 2 */}
    <div className="w-[407px] h-[292px] rounded-[24px] overflow-hidden bg-white shrink-0">
      <Image
        src="/images/Service_Hero_Meetings.svg"
        alt="Meeting"
        width={407}
        height={292}
        className="w-full h-full object-cover"
        priority
      />
    </div>

  </div>
</div>

      </div>
    </section>
  );
}
