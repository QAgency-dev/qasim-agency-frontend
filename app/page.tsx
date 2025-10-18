
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
import { Playwrite_US_Modern } from "next/font/google";
import { motion } from "framer-motion";
import en from "./locales/en.json";
import ar from "./locales/ar.json";


const playwrite = Playwrite_US_Modern({
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ENG");
  const [lang, setLang] = useState(en);

  useEffect(() => {
    setLang(language === "ENG" ? en : ar);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "ENG" ? "ARAB" : "ENG");
  };

  const navItems = [
    { label: lang.nav.home, id: "hero" },
    { label: lang.nav.who, id: "who" },
    { label: lang.nav.why, id: "why" },
    { label: lang.nav.tiktok, id: "tiktok" },
    { label: lang.nav.service, id: "service" },
    { label: lang.nav.testimonials, id: "testimonials" },
    { label: lang.nav.amigo },
    { label: lang.nav.contact },
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
    <div className={`flex flex-col min-h-screen font-sans bg-[#e9912d] relative overflow-x-hidden ${language === 'ARAB' ? 'font-arabic rtl' : playwrite.className}`}>
      {/* Navigation Header */}
      <header className="fixed top-2 left-1/2 -translate-x-1/2 z-30 w-[80%] sm:w-[60%] lg:w-[50%] bg-[#F0FFF0] rounded-[3rem] py-8 px-6 shadow-md flex justify-between items-center">
        {/* Left text */}
        <button onClick={toggleLanguage} className="text-[#e9912d] text-sm sm:text-base font-medium focus:outline-none">
          {language === "ENG" ? "ARAB" : "ENG"}
        </button>

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
              <h1 className="text-2xl md:text-4xl tracking-tight text-[#FFFFFF] font-extrabold" dangerouslySetInnerHTML={{ __html: lang.hero.title }} />

              <p className="text-[#005454] text-base md:text-lg leading-relaxed max-w-lg">
                {lang.hero.description}
              </p>

              <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
                   hover:bg-[#6A5EBF] hover:text-white
                   transform transition duration-300 ease-in-out hover:scale-105">
                <span>{lang.hero.join}</span>
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
                {lang.who.title}
              </h2>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: lang.who.description }} />
              <Button className="bg-[#F9E758] text-[#005454] border-2 border-[#F9E758] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
                   hover:bg-[#FCE33A] hover:text-[#005454]
                   transform transition duration-300 ease-in-out hover:scale-105">
                <span>{lang.who.learnMore}</span>
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
                    {lang.stats.views}
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
                    {lang.stats.creators}
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
                    {lang.stats.hours}
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
                  {lang.why.title}
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-[#005454] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{lang.why.instantFeedback}</h3>
                    <p className="text-sm md:text-base">
                      {lang.why.instantFeedbackDescription}
                    </p>
                  </div>

                  <div className="bg-[#005454] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{lang.why.authenticConnection}</h3>
                    <p className="text-sm md:text-base">
                      {lang.why.authenticConnectionDescription}
                    </p>
                  </div>

                  <div className="bg-[#005454] text-white rounded-xl p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{lang.why.monetization}</h3>
                    <p className="text-sm md:text-base">
                      {lang.why.monetizationDescription}
                    </p>
                  </div>
                </div>

                {/* Centered CTA Button */}
                <div className="flex justify-center">
                  <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
          hover:bg-[#6A5EBF] hover:text-white
          transform transition duration-300 ease-in-out hover:scale-105">
                    <span>{lang.hero.join}</span>
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
                    {lang.tiktok.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-white text-base md:text-lg leading-relaxed">
                  {lang.tiktok.description}
                </p>

                {/* Features List */}
                <div className="space-y-6">
                  {/* Live Polls */}
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{lang.tiktok.polls}</h3>
                    <p className="text-white text-sm md:text-base">
                      {lang.tiktok.pollsDescription}
                    </p>
                  </div>

                  {/* Q&A Sessions */}
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{lang.tiktok.qa}</h3>
                    <p className="text-white text-sm md:text-base">
                      {lang.tiktok.qaDescription}
                    </p>
                  </div>

                  {/* Live Reactions */}
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{lang.tiktok.reactions}</h3>
                    <p className="text-white text-sm md:text-base">
                      {lang.tiktok.reactionsDescription}
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
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#FFFFFF] mb-12 text-center" dangerouslySetInnerHTML={{ __html: lang.viral.title}} />
              {/* Centered CTA Button - MOVED HERE */}
              <div className="flex justify-center">
                <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
          hover:bg-[#6A5EBF] hover:text-white
          transform transition duration-300 ease-in-out hover:scale-105">
                  <span>{lang.hero.join}</span>
                  <IconCircleArrowRightFilled style={{ width: "38px", height: "38px" }} />
                </Button>
              </div>
            </div>
          </section>

          {/* START: Our Service and Support Section */}
          <section id="service" className="bg-[#005454] py-20 md:py-32">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#e9912d] mb-16">
                {lang.service.title}
              </h2>

              {/* Cards Container - Using Flexbox for wrapping and centering */}
              <div className="flex flex-wrap justify-center gap-8">

                {/* Card 1: Promotion & Marketing */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{lang.service.promotion}</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    {lang.service.promotionDescription}
                  </p>
                </div>

                {/* Card 2: Income Generation */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{lang.service.income}</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    {lang.service.incomeDescription}
                  </p>
                </div>

                {/* Card 3: Personal Mentorship */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{lang.service.mentorship}</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    {lang.service.mentorshipDescription}
                  </p>
                </div>

                {/* Card 4: Talent Management */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{lang.service.management}</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    {lang.service.managementDescription}
                  </p>
                </div>

                {/* Card 5: Interactive Activities */}
                <div className="bg-[#e9912d] rounded-2xl p-8 text-left w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{lang.service.activities}</h3>
                  <p className="text-white text-sm md:text-base font-medium">
                    {lang.service.activitiesDescription}
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
                {lang.amigo.title}
              </h2>
              <p className="text-white text-lg md:text-xl font-semibold">
                {lang.amigo.subtitle}
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
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">{lang.amigo.support}</h3>
                  <p className="text-base text-gray-800">
                    {lang.amigo.supportDescription}
                  </p>
                </div>

                {/* Feature 2: Revenue Opportunities */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">{lang.amigo.revenue}</h3>
                  <p className="text-base text-gray-800">
                    {lang.amigo.revenueDescription}
                  </p>
                </div>

                {/* Feature 3: Exposure and Growth */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">{lang.amigo.exposure}</h3>
                  <p className="text-base text-gray-800">
                    {lang.amigo.exposureDescription}
                  </p>
                </div>

                {/* Feature 4: Availability */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#005454] mb-3">{lang.amigo.availability}</h3>
                  <p className="text-base text-gray-800">
                    {lang.amigo.availabilityDescription}
                  </p>
                </div>


              </div>
              {/* Centered CTA Button - MOVED HERE */}
              <div className="flex justify-center">
                <Button className="bg-[#005454] text-white border-2 border-[#6D6DB7] rounded-full px-6 py-6 flex items-center justify-between font-extrabold
          hover:bg-[#6A5EBF] hover:text-white
          transform transition duration-300 ease-in-out hover:scale-105">
                  <span>{lang.hero.join}</span>
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
                {lang.testimonials.title}
              </h2>
              <p className="text-white text-lg md:text-xl">
                {lang.testimonials.subtitle}
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
                {lang.contact.title}
              </h2>

              {/* Form Container (The large rounded purple card) */}
              <div className="bg-[#005454] p-8 md:p-12 rounded-[3rem] shadow-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-white text-left font-bold mb-2">
                        {lang.contact.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder={lang.contact.namePlaceholder}
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>

                    {/* TikTok Handle Field */}
                    <div>
                      <label htmlFor="tiktok" className="block text-white text-left font-bold mb-2">
                        {lang.contact.tiktokHandle}
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        placeholder={lang.contact.tiktokHandlePlaceholder}
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-white text-left font-bold mb-2">
                        {lang.contact.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder={lang.contact.emailPlaceholder}
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="phone" className="block text-white text-left font-bold mb-2">
                        {lang.contact.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder={lang.contact.phonePlaceholder}
                        className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg bg-[#E0E0E0] text-[#5A4D9A]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="pt-2">
                    <label htmlFor="message" className="block text-white text-left font-bold mb-2">
                      {lang.contact.message}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder={lang.contact.messagePlaceholder}
                      className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-[#e9912d] text-lg resize-none bg-[#E0E0E0] text-[#5A4D9A]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-[#e9912d] text-white py-6 rounded-xl text-xl font-extrabold hover:bg-[#6A5EBF] transition duration-300">
                    {lang.contact.submit}
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
