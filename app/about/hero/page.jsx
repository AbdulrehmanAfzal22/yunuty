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

      const words = ref.current.querySelectorAll(".scroll-word");
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
          word.classList.add("scroll-word--active");
        } else {
          word.classList.remove("scroll-word--active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once immediately (handles case when already scrolled into view)
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p ref={ref} className={`hero-mission-text ${className || ""}`}>
      {text.split("\n").map((line, lineIndex) => (
        <span key={lineIndex} className="scroll-line">
          {line.split(" ").map((word, wordIndex) => (
            <span key={`${lineIndex}-${wordIndex}`} className="scroll-word">
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

      <section className="hero-about">
        {/* Subtitle */}
        <div className="hero-about__subtitle">
          <Image src={decorLeft} alt="decor left" width={80} height={24} />
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <p className="hero-about__label">About Us</p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image src={decorRight} alt="decor right" width={80} height={24} />
        </div>

        {/* Hero content */}
        <div className="hero-about__content">
          <h1 className="hero-about__title">
           <b> Experts Driven by Passion <br />and  Purpose</b>
          </h1>

          <p className="hero-about__description">
            Explore our journey, expertise, and commitment to delivering exceptional results over years.
          </p>

          <div className="hero-about__cta-wrapper">
            <button className="hero-about__cta-button" type="button">
              <span className="hero-about__cta-icon"><Timer />
              </span>
              Delivering Excellence for Over 10+ Years
            </button>
          </div>
        </div>

        {/* Scroll-animated paragraphs with manual line breaks */}
        <div className="hero-about__text-container">
          <ScrollAnimatedParagraph
            text={`Yunuak helps businesses transform their supply chains into smart, connected ecosystems built for speed, efficiency, and growth. Backed by a team with deep industry experience across supply chain, logistics, and operations, we deliver integrated solutions using data analytics and AI along with Cloud-based ERP, EDI integration, and mobile technologies to streamline operations, reduce complexity, and drive measurable results in a rapidly evolving digital age.`}
          />
          <br/>
          <ScrollAnimatedParagraph
            className="hero-mission-text--secondary"
            text={``}
          />
        </div>
      </section>
    </>
  );
}