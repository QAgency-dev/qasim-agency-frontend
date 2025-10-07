"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
// import { Titillium_Web } from "next/font/google";
import { Playwrite_US_Modern } from "next/font/google";
import { motion } from "framer-motion";

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
    { label: "Why Live Stream?", id: "why" },
    { label: "TikTok Live!", id: "tiktok" },
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
                src="/img/hero.png"
                alt="Figo with arms out"
                fill
                className="object-contain relative z-10"
                priority
              />

              {/* Emoji Decorations */}
              {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <span className="absolute top-0 left-10 text-4xl transform -rotate-12 will-change-transform">🌟</span>
                <span className="absolute top-1/3 left-[10%] text-5xl transform rotate-6 will-change-transform">❤️</span>
                <span className="absolute bottom-1/2 right-60 text-4xl transform rotate-45 will-change-transform">👍</span>
              </div> */}
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

          {/* Stats Section */}
          <section className="bg-[#5A4E9A] py-12 sm:py-16 relative -mt-12 sm:-mt-16">
            {/* Make the card full width */}
            <div className="w-full bg-[#F9CE01] rounded-[6rem] py-24 px-6 sm:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

                {/* Views Generated */}
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-[#6D6DB7] text-xl sm:text-2xl font-bold">
                    Views Generated
                  </h3>
                  <motion.p
                    className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    +180k
                  </motion.p>
                </div>

                {/* Creators Signed */}
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-[#6D6DB7] text-xl sm:text-2xl font-bold">
                    Creators Signed
                  </h3>
                  <motion.p
                    className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    +100
                  </motion.p>
                </div>

                {/* Live Hours */}
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-[#6D6DB7] text-xl sm:text-2xl font-bold">
                    Live Hours
                  </h3>
                  <motion.p
                    className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    +2000
                  </motion.p>
                </div>

              </div>
            </div>
          </section>

          {/* Why Live Stream Section */}
          <section id="why" className="bg-[#5A4E9A] py-20 md:py-32 relative -mt-12 sm:-mt-16">
            <div className="max-w-7xl mx-auto px-0 sm:px-8 lg:px-12"> {/* remove px on mobile */}
              <div className="bg-[#F9CE01] rounded-[6rem] py-16 px-6 sm:px-12 text-center w-full sm:w-auto"> {/* full width on small */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#6D6DB7] mb-12">
                  Why Live Stream?
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-[#6D6DB7] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Instant Feedback</h3>
                    <p className="text-sm md:text-base">
                      Gain valuable insights directly from your audience through live chats,
                      comments, and reactions, allowing you to tailor your content for
                      maximum impact.
                    </p>
                  </div>

                  <div className="bg-[#6D6DB7] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Authentic Connection</h3>
                    <p className="text-sm md:text-base">
                      The real-time interaction with viewers fosters a genuine sense of
                      community and loyalty, forging deeper bonds with your audience.
                    </p>
                  </div>

                  <div className="bg-[#6D6DB7] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Monetization</h3>
                    <p className="text-sm md:text-base">
                      From advertising and subscriptions to viewer donations, live streaming
                      platforms offer a variety of ways to generate income.
                    </p>
                  </div>
                </div>

                {/* Centered CTA Button */}
                <div className="flex justify-center">
                  <Button className="bg-[#5A4D9A] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold 
          hover:bg-[#6A5EBF] hover:text-white 
          transform transition duration-300 ease-in-out hover:scale-105">
                    <span>Join Us</span>
                    <IconCircleArrowRightFilled style={{ width: "38px", height: "38px" }} />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* TikTok Advantages Section */}
          <section id="tiktok" className="bg-[#5A4E9A] py-20 md:py-32 relative -mt-12 sm:-mt-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8 items-center">

              {/* Left - Text Content */}
              <div className="flex flex-col items-start space-y-8">
                {/* Title Badge */}
                <div className="bg-[#F9CE01] rounded-xl px-8 py-3">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#FFF] tracking-wide">
                    TIKTOK ADVANTAGES
                  </h2>
                </div>

                {/* Description */}
                <p className="text-white text-base md:text-lg leading-relaxed">
                  TikTok, a leader in short-form video, embraced live streaming. Creators can
                  leverage TikTok's features to amplify engagement, such as:
                </p>

                {/* Features List */}
                <div className="space-y-6">
                  {/* Live Polls */}
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Live Polls</h3>
                    <p className="text-white text-sm md:text-base">
                      Get instant feedback from your audience and create interactive discussions.
                    </p>
                  </div>

                  {/* Q&A Sessions */}
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Q&A Sessions</h3>
                    <p className="text-white text-sm md:text-base">
                      Answer questions directly from your viewers, fostering a sense of transparency
                      and involvement.
                    </p>
                  </div>

                  {/* Live Reactions */}
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Live Reactions</h3>
                    <p className="text-white text-sm md:text-base">
                      Show your genuine emotions and connect with your audience on a deeper level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Image with Floating Elements */}
              <div className="flex justify-center md:justify-end relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
                <Image
                  src="/img/qasim.png"
                  alt="Qasim with fist raised"
                  fill
                  className="object-contain relative z-10"
                  priority
                />

                {/* Floating Emoji/Icon Decorations */}
                {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <span className="absolute top-8 right-1/4 text-3xl text-white">⭐</span>
                  <span className="absolute top-16 right-12 text-xl text-white">⭐</span>
                  <span className="absolute top-1/3 left-8 text-2xl text-white">⭐</span>
                  <span className="absolute bottom-1/3 left-12 text-3xl text-white">⭐</span>
                  <span className="absolute bottom-1/4 right-16 text-2xl text-white">⭐</span>

                  <div className="absolute top-20 right-16 w-20 h-20 bg-[#F9CE01] rounded-full flex items-center justify-center text-3xl">
                    👍
                  </div>
                  <div className="absolute top-1/2 right-4 w-16 h-16 bg-[#F9CE01] rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
        

                  <div className="absolute top-1/2 left-16 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl">
                    🎯
                  </div>
                  <div className="absolute top-1/3 right-20 w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl">
                    👋
                  </div>
                </div> */}
              </div>

            </div>
          </section>


        </section>

      </main>
    </div>
  );
}
