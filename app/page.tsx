"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
// import { Titillium_Web } from "next/font/google";
import { Playwrite_US_Modern } from "next/font/google";

// const titillium = Titillium_Web({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

const playwrite = Playwrite_US_Modern({
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Who is Qasim?", id: "who" },
    { label: "Why Live Stream?" },
    { label: "TikTok Live!" },
    { label: "Our Service" },
    { label: "Why become an Amigo?" },
    { label: "Contact Us" },
  ];

  return (
    <div className={`${playwrite.className} flex flex-col min-h-screen font-sans bg-[#F9CE01] relative overflow-x-hidden`}>
      {/* Navigation Header */}
      <header className="fixed top-2 left-1/2 -translate-x-1/2 z-30 w-[80%] sm:w-[60%] lg:w-[50%] bg-[#6D6DB7] rounded-[3rem] py-12 px-6 shadow-md flex justify-between items-center">
        {/* Left text */}
        <span className="text-white text-sm sm:text-base font-medium">Arab</span>

        {/* Center logo */}
        <div className="text-center">
          <span className="font-extrabold text-xl sm:text-2xl text-[#F9CE01] tracking-wider text-extra-bold">
            Qasim Agency
          </span>
        </div>

        {/* Right menu icon */}
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>


      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#6D6DB7] flex flex-col items-center justify-center text-center transition-all duration-300">
          {/* Logo top-left */}
          <div className="absolute top-6 left-8">
            <span className="font-black text-xl sm:text-2xl text-[#F9CE01] tracking-wider drop-shadow-lg text-extra-bold">
              Qasim Agency
            </span>
          </div>

          {/* Close Button top-right */}
          <button
            className="absolute top-6 right-8 text-[#F9E758] border border-[#F9E758] rounded-md p-1"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 mt-10">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.id ? `#${item.id}` : "#"}
                className="text-white text-xl md:text-2xl font-bold hover:text-[#F9E758] transition-colors"
                onClick={(e) => {
                  if (item.id) {
                    // prevent default navigation, close overlay, then scroll after it's removed
                    e.preventDefault();
                    setMenuOpen(false);
                    const el = document.getElementById(item.id);
                    // short delay to allow overlay to unmount so it doesn't block the scroll
                    setTimeout(() => {
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 120);
                  } else {
                    setMenuOpen(false);
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section id="hero" className="bg-[#F9CE01] py-16 sm:py-20 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8 items-center">

            {/* Left - Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
              <h1 className="text-2xl md:text-4xl tracking-tight text-[#FFFFFF] font-extrabold">
                Grow Your <br />
                TikTok Presence
              </h1>

              <p className="text-[#6D6DB7] text-base md:text-lg leading-relaxed max-w-lg">
                Welcome to Figo's Amigos Talent Agency—where creativity meets opportunity! At Figo's Amigos, we're passionate about powering up your potential and catapulting your TikTok career to new heights. Join a community that thrives on innovation and collaboration, where every stream is a step toward stardom. Whether you're just starting out or looking to expand your reach, Figo's Amigos provides the tools, support, and platform to transform your passion into a profession.
              </p>

              <Button className="bg-[#5A4D9A] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold 
                   hover:bg-[#6A5EBF] hover:text-white 
                   transform transition duration-300 ease-in-out hover:scale-105">
                <span>Join Us</span>
                <IconCircleArrowRightFilled style={{ width: "38px", height: "38px" }} />
              </Button>


            </div>

            {/* Right - Image */}
            <div className="flex justify-center md:justify-end relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src="/img/qasim.png"
                alt="Figo with arms out"
                fill
                className="object-contain relative z-10"
                priority
              />

              {/* Emoji Decorations */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <span className="absolute top-0 left-10 text-4xl transform -rotate-12 will-change-transform">🌟</span>
                <span className="absolute top-1/3 left-[10%] text-5xl transform rotate-6 will-change-transform">❤️</span>
                <span className="absolute bottom-1/2 right-60 text-4xl transform rotate-45 will-change-transform">👍</span>
              </div>
            </div>

          </div>
        </section>



        {/* Who is Qasim Section */}
        <section id="who" className="bg-[#5A4D9A] py-16 sm:py-20 md:py-32 lg:py-40 relative rounded-t-[4rem] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8 items-center">

            {/* Left - Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-lg">
              <h2 className="text-3xl md:text-5xl font-bold text-[#F9E758]">
                Who is Qasim?
              </h2>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                Hello! I'm Qasim, the founder of Qasimo's Amigos Talent Agency.
                My journey on TikTok began in 2020 when I started live streaming
                with a passion for cooking and helping others showcase their unique talents.
              </p>
              <Button className="bg-[#F9E758] text-[#5A4D9A] border-2 border-[#F9E758] rounded-full px-6 py-6 flex items-center justify-between font-extrabold 
                   hover:bg-[#FCE33A] hover:text-[#5A4D9A] 
                   transform transition duration-300 ease-in-out hover:scale-105">
                <span>Learn more</span>
                <IconCircleArrowRightFilled style={{ width: "38px", height: "38px" }} />
              </Button>


            </div>

            {/* Right - Image */}
            <div className="flex justify-center md:justify-end relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src="/img/qasim-2.png"
                alt="Qasim pointing"
                fill
                className="object-contain relative z-10"
                priority
              />

              {/* Emoji Decorations */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <span className="absolute top-0 right-1/4 text-4xl transform rotate-12 will-change-transform">👑</span>
                <span className="absolute top-1/2 left-1/4 text-5xl transform -rotate-6 will-change-transform">✨</span>
                <span className="absolute bottom-1/4 right-1/3 text-3xl transform -rotate-45 will-change-transform">🎶</span>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
