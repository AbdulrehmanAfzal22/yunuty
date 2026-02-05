"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./hero1.css";

import Navbar from "@/app/page/navbar/page";
import decorLeft from "../../../public/assests/sub-title-left.svg";
import decorRight from "../../../public/assests/sub-title-right.svg";
import FeatureGrid from "@/app/page/featuregrid/page";

/* ================= Scroll Animated Paragraph ================= */
function ScrollAnimatedParagraph({ text, className }) {


  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const words = ref.current.querySelectorAll(".word");
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress (0 → 1)
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      // 🔧 TUNING (more words white)
      const WORD_LEAD = 0.38;
      const FADE_WINDOW = 0.12;

      words.forEach((word, index) => {
        const threshold = index / words.length - WORD_LEAD;

        if (progress > threshold - FADE_WINDOW) {
          word.classList.add("active");
        } else {
          word.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      <Navbar />

      <section className="hero-about-section">
        {/* Subtitle */}
        <div className="subtitle-row">
          <Image src={decorLeft} alt="decor left" width={80} height={24} />
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <p className="section-label">About Us</p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image src={decorRight} alt="decor right" width={80} height={24} />
        </div>

        {/* Hero content */}
        <div className="hero-content-wrapper">
          <h1 className="hero-main-title">
            Experts Driven by Passion and <br /> Purpose
          </h1>

          <p className="hero-description">
            Explore our journey, expertise, and commitment to delivering exceptional results over years.
          </p>

          <div className="cta-button-wrapper">
            <button className="excellence-cta-button" type="button">
              <span className="button-icon">⟳</span>
              Delivering Excellence for Over 10+ Years
            </button>
          </div>
        </div>

        {/* Scroll-animated paragraphs with manual line breaks */}
        <div className="text-container">
          <ScrollAnimatedParagraph
            text={`We're a passionate team of innovators obsessed
with using AI to streamline content creation. We
believe AI can revolutionise the writing industry
by making high-quality content generation
faster and more accessible.`}
          />

          <ScrollAnimatedParagraph
            className="mission-second"
            text={`Our mission is to address these challenges
head-on by developing cutting-edge AI tools
that enhance the writing process.`}
          />
        </div>


       
      </section>

    </>
  );
}
