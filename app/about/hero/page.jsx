"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./hero1.css";

import Navbar from "@/app/page/navbar/page";
import decorLeft from "../../../public/assests/sub-title-left.svg";
import decorRight from "../../../public/assests/sub-title-right.svg";
import FeatureGrid from "@/app/page/featuregrid/page";
import { Timer } from "lucide-react";

/* ================= Scroll Animated Paragraph ================= */
function ScrollAnimatedParagraph({ text, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const words = ref.current.querySelectorAll(".word");
      if (words.length === 0) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Heavily delayed start → only first ~4-6 words visible at beginning
      let progress = (windowHeight - rect.top) / (windowHeight + rect.height * 1.45);
      progress = Math.max(0, Math.min(1, progress));

      // Tuning values - main delay is coming from high LEAD + slow SPREAD
      const LEAD = 0.48;          // ← increase this → even fewer words at start
      const SPREAD = 1.75;        // ← higher = more stretched / slower reveal
      const FADE_WINDOW = 0.10;

      words.forEach((word, index) => {
        // Using length instead of length-1 to make last words harder to reach
        const wordPos = index / words.length;
        const threshold = wordPos * SPREAD - LEAD;

        if (progress > threshold - FADE_WINDOW) {
          word.classList.add("active");
        } else {
          word.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once immediately (handles case when already scrolled into view)
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p ref={ref} className={`mission-paragraph ${className || ""}`}>
      {text.split("\n").map((line, lineIndex) => (
        <span key={lineIndex} className="line">
          {line.split(" ").map((word, wordIndex) => (
            <span key={`${lineIndex}-${wordIndex}`} className="word">
              {word}&nbsp;
            </span>
          ))}
          <br />
        </span>
      ))}
    </p>
  );
}

/* ================= Hero Section ================= */
export default function Hero1() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="hero-about-section">
        {/* Subtitle */}
        <div className="subtitle-row">
          <Image src={decorLeft} alt="decor left" width={80} height={24} />
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <p className="section-label">About Us</p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image src={decorRight} alt="decor right" width={80} height={24} />
        </div>

        {/* Hero content */}
        <div className="hero-content-wrapper">
          <h1 className="hero-main-title">
           <b> Experts Driven by Passion <br />and  Purpose</b>
          </h1>

          <p className="hero-description">
            Explore our journey, expertise, and commitment to delivering exceptional results over years.
          </p>

          <div className="cta-button-wrapper">
            <button className="excellence-cta-button" type="button">
              <span className="button-icon"><Timer />
              </span>
              Delivering Excellence for Over 10+ Years
            </button>
          </div>
        </div>

        {/* Scroll-animated paragraphs with manual line breaks */}
        <div className="text-container">
          <ScrollAnimatedParagraph
            text={`We're a passionate team of innovators obsessed with
 using AI to streamline content creation. We believe AI can 
 revolutionise the writing industry by making high-quality
  content generation faster and more accessible.`}
          />
          <br/>
          <ScrollAnimatedParagraph
            className="mission-second"
            text={`Our mission is to address these challenges head-on by
 developing cutting-edge AI tools that enhance the 
 writing process.`}
          />
        </div>
      </section>
    </>
  );
}