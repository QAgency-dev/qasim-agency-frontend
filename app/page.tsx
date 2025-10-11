"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
import { Playwrite_US_Modern } from "next/font/google";
import { motion } from "framer-motion";


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
    { label: "Our Service", id: "service" }, // Added id here
    { label: "What They Say", id: "testimonials" }, // New nav item for testimonials
    { label: "Why become an Amigo?" },
    { label: "Contact Us" },
  ];

  // Testimonial data for the marquee
  const testimonials = [
    {
      text: "Figo's Amigos is more than an agency, it's a community. Love the support and teamwork! #community",
      author: "mohamed salah",
      role: "TikTok Creator",
      avatar: "/img/qasim-2.png", // Replace with actual avatar path
    },
    {
      text: "So grateful for Figo's Amigos! They truly care about their creators and their success. #grateful",
      author: "Mahmoud",
      role: "TikTok Creator",
      avatar: "/img/qasim-2.png", // Replace with actual avatar path
    },
    {
      text: "My TikTok journey has transformed thanks to Qasim Agency. Highly recommend their mentorship!",
      author: "Layla Ahmed",
      role: "Live Streamer",
      avatar: "/img/qasim-2.png", // Replace with actual avatar path
    },
    {
      text: "The best decision I made for my TikTok growth. Amazing support and genuine connections.",
      author: "Omar Khan",
      role: "Content Creator",
      avatar: "/img/qasim-2.png", // Replace with actual avatar path
    },
  ];

  return (
    <div className={`${playwrite.className} flex flex-col min-h-screen font-sans bg-[#e9912d] relative overflow-x-hidden`}>
      {/* Navigation Header */}
      <header className="fixed top-2 left-1/2 -translate-x-1/2 z-30 w-[80%] sm:w-[60%] lg:w-[50%] bg-[#F0FFF0] rounded-[3rem] py-8 px-6 shadow-md flex justify-between items-center">
        {/* Left text */}
        <span className="text-[#e9912d] text-sm sm:text-base font-medium">Arab</span>

        {/* Center logo */}
        <div className="text-center">
          <img
            src="/img/Logo_Qasim.png" // **<-- IMPORTANT: Replace this with the actual path to your logo image**
            alt="Qasim Agency Logo"
            className="h-20 sm:h-24 inline-block" // **<-- Adjust the height (h-10/sm:h-12) to fit your design**
          />
        </div>

        {/* Right menu icon */}
        <button
          className="text-[#e9912d] focus:outline-none"
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
        <div className="fixed inset-0 z-40 bg-[#005454] flex flex-col items-center justify-center text-center transition-all duration-300">
          {/* Logo top-left */}
          <div className="absolute top-6 left-8">
            <img
            src="/img/Logo_Qasim.png" // **<-- IMPORTANT: Replace this with the actual path to your logo image**
            alt="Qasim Agency Logo"
            className="h-20 sm:h-24 inline-block" // **<-- Adjust the height (h-10/sm:h-12) to fit your design**
          />
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
        <section id="hero" className="bg-[#e9912d] py-16 sm:py-20 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8 items-center">

            {/* Left - Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
              <h1 className="text-2xl md:text-4xl tracking-tight text-[#FFFFFF] font-extrabold">
                Grow Your <br />
                TikTok Presence
              </h1>

              <p className="text-[#005454] text-base md:text-lg leading-relaxed max-w-lg">
                Welcome to Figo's Amigos Talent Agency—where creativity meets opportunity! At Figo's Amigos, we're passionate about powering up your potential and catapulting your TikTok career to new heights. Join a community that thrives on innovation and collaboration, where every stream is a step toward stardom. Whether you're just starting out or looking to expand your reach, Figo's Amigos provides the tools, support, and platform to transform your passion into a profession.
              </p>

              <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
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
            </div>

          </div>
        </section>



        {/* Who is Qasim Section */}
        <section id="who" className="bg-[#005454] py-16 sm:py-20 md:py-32 lg:py-40 relative rounded-t-[4rem] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8 items-center">

            {/* Left - Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-lg">
              <h2 className="text-3xl md:text-5xl font-bold text-[#e9912d]">
                Who is Qasim?
              </h2>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                Hello! I'm Qasim, the founder of Qasimo's Amigos Talent Agency.
                My journey on TikTok began in 2020 when I started live streaming
                with a passion for cooking and helping others showcase their unique talents.
              </p>
              <Button className="bg-[#F9E758] text-[#005454] border-2 border-[#F9E758] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
                   hover:bg-[#FCE33A] hover:text-[#005454]
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
          <section className="bg-[#005454] py-12 sm:py-16 relative -mt-12 sm:-mt-16">
            {/* Make the card full width */}
            <div className="w-full bg-[#e9912d] rounded-[6rem] py-24 px-6 sm:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

                {/* Views Generated */}
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-[#005454] text-xl sm:text-2xl font-bold">
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
                  <h3 className="text-[#005454] text-xl sm:text-2xl font-bold">
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
                  <h3 className="text-[#005454] text-xl sm:text-2xl font-bold">
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
          <section id="why" className="bg-[#005454] py-20 md:py-32 relative -mt-12 sm:-mt-16">
            <div className="max-w-7xl mx-auto px-0 sm:px-8 lg:px-12"> {/* remove px on mobile */}
              <div className="bg-[#e9912d] rounded-[6rem] py-16 px-6 sm:px-12 text-center w-full sm:w-auto"> {/* full width on small */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#005454] mb-12">
                  Why Live Stream?
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-[#005454] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Instant Feedback</h3>
                    <p className="text-sm md:text-base">
                      Gain valuable insights directly from your audience through live chats,
                      comments, and reactions, allowing you to tailor your content for
                      maximum impact.
                    </p>
                  </div>

                  <div className="bg-[#005454] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Authentic Connection</h3>
                    <p className="text-sm md:text-base">
                      The real-time interaction with viewers fosters a genuine sense of
                      community and loyalty, forging deeper bonds with your audience.
                    </p>
                  </div>

                  <div className="bg-[#005454] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Monetization</h3>
                    <p className="text-sm md:text-base">
                      From advertising and subscriptions to viewer donations, live streaming
                      platforms offer a variety of ways to generate income.
                    </p>
                  </div>
                </div>

                {/* Centered CTA Button */}
                <div className="flex justify-center">
                  <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
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
          <section id="tiktok" className="bg-[#005454] py-20 md:py-32 relative -mt-12 sm:-mt-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-8 items-center">

              {/* Left - Text Content */}
              <div className="flex flex-col items-start space-y-8">
                {/* Title Badge */}
                <div className="bg-[#e9912d] rounded-xl px-8 py-3">
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
              </div>

            </div>
          </section>

          {/* START: Go Viral*/}
          <section className="bg-[#005454] py-12 sm:py-16 relative -mt-12 sm:-mt-16">
            {/* Make the card full width */}
            <div className="w-full bg-[#e9912d] rounded-tr-[6rem] rounded-tl-[6rem] py-24 px-6 sm:px-12 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#FFFFFF] mb-12 text-center">
                Make Your Content Go Viral
                <br />
                With Figo's Amigos
              </h2>
              {/* Centered CTA Button - MOVED HERE */}
              <div className="flex justify-center">
                <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
          hover:bg-[#6A5EBF] hover:text-white
          transform transition duration-300 ease-in-out hover:scale-105">
                  <span>Join Us</span>
                  <IconCircleArrowRightFilled style={{ width: "38px", height: "38px" }} />
                </Button>
              </div>
            </div>
          </section>

          {/* START: Our Service and Support Section */}
          <section id="service" className="bg-[#005454] py-20 md:py-32">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#e9912d] mb-16">
                Our Service and Support
              </h2>

              {/* Cards Container - Using Flexbox for wrapping and centering */}
              <div className="flex flex-wrap justify-center gap-8">

                {/* Card 1: Promotion & Marketing */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Promotion & Marketing</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    We'll assist you in reaching a wider audience through customized
                    marketing strategies, in-app promotional tools, and introducing
                    you to new communities on TikTok. Get ready to go viral!
                  </p>
                </div>

                {/* Card 2: Income Generation */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Income Generation</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    From maximizing in-app earnings to boosting tips and gifts from your
                    fans, we provide guidance on the best monetization strategies. We
                    help you understand the market and seize financial opportunities.
                  </p>
                </div>

                {/* Card 3: Personal Mentorship */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Personal Mentorship</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    Receive one-on-one guidance from industry experts who will help you
                    set clear goals and create actionable plans to achieve them.
                    We're committed to helping you succeed!
                  </p>
                </div>

                {/* Card 4: Talent Management */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Talent Management</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    Join a supportive and stimulating environment that encourages
                    collaboration with other talented creators. Participate in exclusive
                    events and grow your network while building a personal brand that
                    captivates your target audience.
                  </p>
                </div>

                {/* Card 5: Interactive Activities */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Interactive Activities</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    Get access to unique opportunities to showcase your skills, both on and
                    off the platform. Participate in exclusive events, increase your
                    audience engagement, and elevate your profile in the community.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* END: Our Service and Support Section */}

          {/* START: Why become an Amigo? section */}
          <section className="bg-[#e9912d] py-12 sm:py-16 relative -mt-12 sm:-mt-16 rounded-[6rem]">

            {/* Heading and Subheading */}
            <div className="text-center mb-10 px-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Why become an Amigo?
              </h2>
              <p className="text-white text-lg md:text-xl font-semibold">
                We believe that every creator has a story to tell
              </p>
            </div>

            {/* Content Card */}
            <div className="w-full bg-[#e9912d] rounded-[6rem] py-12 px-6 sm:px-12 flex flex-col items-center justify-center">

              {/* Image Container (Simulating the rounded corners and look) */}
              <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl mb-16">
                {/* REPLACE with your actual image component or tag */}
                <img
                  src="/img/cover.avif" // **CHANGE THIS PATH**
                  alt="Four smiling friends looking at a phone"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl text-center">

                {/* Feature 1: Comprehensive Support */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">Comprehensive Support</h3>
                  <p className="text-base text-gray-800">
                    From technical assistance to content development, we're with you every step of the way.
                  </p>
                </div>

                {/* Feature 2: Revenue Opportunities */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">Revenue Opportunities</h3>
                  <p className="text-base text-gray-800">
                    Learn how to monetize your content effectively and maximize your earnings.
                  </p>
                </div>

                {/* Feature 3: Exposure and Growth */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">Exposure and Growth</h3>
                  <p className="text-base text-gray-800">
                    Get the chance to reach new audiences, increase your followers, and build your personal brand.
                  </p>
                </div>

                {/* Feature 4: Availability */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">Availability</h3>
                  <p className="text-base text-gray-800">
                    We operate around the clock across Egypt, Kuwait, Saudi Arabia, Lebanon, and the UAE, so you're never without support!
                  </p>
                </div>


              </div>
              {/* Centered CTA Button - MOVED HERE */}
              <div className="flex justify-center">
                <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
          hover:bg-[#6A5EBF] hover:text-white
          transform transition duration-300 ease-in-out hover:scale-105">
                  <span>Join Us</span>
                  <IconCircleArrowRightFilled style={{ width: "38px", height: "38px" }} />
                </Button>
              </div>

            </div>
          </section>


          {/* START: Testimonials Marquee Section */}
          <section id="testimonials" className="bg-[#005454] py-20 md:py-32 relative overflow-hidden">
            <style jsx>{`
              @keyframes scrollLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
              .marquee-content {
                animation: scrollLeft 60s linear infinite; /* Adjust speed as needed */
                display: flex; /* Ensure inline display for items */
                width: max-content; /* Allow content to dictate width */
              }
              .marquee-container::before,
              .marquee-container::after {
                content: '';
                position: absolute;
                top: 0;
                width: 15%; /* Adjust width of the fade */
                height: 100%;
                z-index: 20; /* Above marquee content */
                pointer-events: none; /* Allows clicks to pass through */
              }
              .marquee-container::before {
                left: 0;
                background: linear-gradient(to right, #005454, transparent);
              }
              .marquee-container::after {
                right: 0;
                background: linear-gradient(to left, #005454, transparent);
              }
            `}</style>

            <div className="text-center mb-16 px-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#e9912d] mb-4">
                What They Say About Us?
              </h2>
              <p className="text-white text-lg md:text-xl">
                Real feedback from creators we've helped grow.
              </p>
            </div>

            <div className="relative w-full overflow-hidden py-8 marquee-container">
              <div className="marquee-content flex gap-8 pr-8"> {/* Add pr-8 for initial spacing before duplication */}
                {/* Duplicate testimonials for seamless looping */}
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-80 bg-[#e9912d] rounded-2xl p-6 shadow-lg">
                    <p className="text-[#005454] text-base mb-4 font-medium italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[#FFFFFF] font-bold text-sm">{testimonial.author}</p>
                        <p className="text-[#005454] text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* END: Testimonials Marquee Section */}
        </section>

        {/* START: Contact Us Section */}
        <section className="bg-[#005454] py-12 sm:py-16 relative -mt-12 sm:-mt-16">
          {/* Make the card full width */}
          <div className="w-full bg-[#e9912d] rounded-br-[6rem] rounded-tl-[6rem] py-24 px-6 sm:px-12">
            {/* ADJUSTMENT: Changed max-w-3xl to max-w-xl to make the central content smaller */}
            <div className="max-w-xl mx-auto px-6 sm:px-12 text-center">
              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-12 drop-shadow-lg">
                Contact Us
              </h2>

              {/* Form Container (The large rounded purple card) */}
              <div className="bg-[#005454] p-8 md:p-12 rounded-[3rem] shadow-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-white text-left font-bold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Jane Smith"
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>

                    {/* TikTok Handle Field */}
                    <div>
                      <label htmlFor="tiktok" className="block text-white text-left font-bold mb-2">
                        TikTok Handle
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        placeholder="Jane_Smith"
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-white text-left font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="jane@framer.com"
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="phone" className="block text-white text-left font-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+965"
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="pt-2">
                    <label htmlFor="message" className="block text-white text-left font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your message..."
                      className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg resize-none bg-[#E0E0E0] text-[#5A4D9A]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-[#e9912d] text-white py-6 rounded-xl text-xl font-extrabold hover:bg-[#6A5EBF] transition duration-300">
                    Submit
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </section>
        {/* END: Contact Us Section */}


      </main>
    </div>
  );
}