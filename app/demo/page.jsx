"use client"
import React from "react";
import "./demo.css";
import Image from "next/image";
import boat from "../../public/assests/boat.jpeg";
import refine from "../../public/assests/refine.jpeg";
// ─────────────────────────────────────────────────────
// 👇 IMPORT YOUR MOBILE IMAGE HERE (shown below 700px)
// import boatMobile from "../../public/assests/YOUR_MOBILE_IMAGE.jpeg";
// ─────────────────────────────────────────────────────

export default function DemoSection() {
  return (
    <section className="dmo-section">

      {/* Desktop image — hidden below 700px */}
      <Image
        src={boat}
        alt=""
        fill
        priority
        className="dmo-bg-img dmo-bg-desktop"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────
          Mobile image — shown below 700px
          STEP 1: Add your import at the top of this file
          STEP 2: Uncomment the block below and replace
                  boatMobile with your imported variable
      ───────────────────────────────────────────────── */}
      
      <Image
        src={refine}
        alt=""
        fill
        priority
        className="dmo-bg-img dmo-bg-mobile"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        aria-hidden="true"
      />
     

      <div className="dmo-bg-overlay" />
      <div className="dmo-container">
        <h1 className="dmo-title">
          <span className="dmo-line1">Row Toward the Future Together Where</span>
          <span className="dmo-line2">Teamwork and Technology Drives Productivity.</span>
        </h1>
        <button className="dmo-button">Request A Demo</button>
      </div>
    </section>
  );
}