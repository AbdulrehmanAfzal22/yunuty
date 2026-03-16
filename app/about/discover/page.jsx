"use client"
import React from "react";
import "./discover.css";
import Image from "next/image";
import moving from "../../../public/assests/moving.jpeg";
import refine2 from "../../../public/assests/refine2.jpeg";
// ─────────────────────────────────────────────────────
// 👇 IMPORT YOUR MOBILE IMAGE HERE (shown below 700px)
// import movingMobile from "../../../public/assests/YOUR_MOBILE_IMAGE.jpeg";
// ─────────────────────────────────────────────────────

export default function DiscoverSection() {
  return (
    <section className="custom-hero-section">

      {/* Desktop image — hidden below 700px */}
      <Image
        src={moving}
        alt=""
        fill
        priority
        className="custom-hero-bg-img custom-hero-bg-desktop"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────
          Mobile image — shown below 700px
          STEP 1: Add your import at the top of this file
          STEP 2: Uncomment the block below and replace
                  movingMobile with your imported variable
      ───────────────────────────────────────────────── */}
      
      <Image
        src={refine2}
        alt=""
        fill
        priority
        className="custom-hero-bg-img custom-hero-bg-mobile"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        aria-hidden="true"
      />
     

      <div className="custom-hero-bg-overlay" />
      <div className="custom-hero-container">
        <h1 className="custom-hero-title">
          Transform Insights into Action with Smart,{" "}
          <br className="custom-hero-br" />
          Data-Driven Decisions.
        </h1>
        <button className="custom-hero-button">Request A Demo</button>
      </div>
    </section>
  );
}