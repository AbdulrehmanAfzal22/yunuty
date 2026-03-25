"use client";
import React from "react";
import Image from "next/image";
import "./aws.css";

import img1 from "../../../public/assests/Computer.png";
import img2 from "../../../public/assests/patner1.png";
import second from "../../../public/assests/ipad.png";
// ─────────────────────────────────────────────
// 👇 IMPORT YOUR MOBILE IMAGE HERE
// Replace the path below with your actual image
// import imgMobile from "../../../public/assests/YOUR_MOBILE_IMAGE.jpeg";
// ─────────────────────────────────────────────

export default function AwsSection() {
  return (
    <section className="ors__section">

      {/* ── Top bar ── */}
      <div className="ors__topbar">
        <Image src={img2} alt="Oracle Partner Logo" className="ors__logo" />
        <div className="ors__tags-top">
          <span className="ors__tag">PRIVACY</span>
          <span className="ors__tag-sep">/</span>
          <span className="ors__tag">SECURITY</span>
          <span className="ors__tag-sep">/</span>
          <span className="ors__tag">DATA PROTECTION</span>
              <span className="ors__tag-sep">/</span>
          <span className="ors__tag">FRAUD PREVENTION</span>
        </div>
      </div>

      {/* ── White box ── */}
      <div className="ors__box">

        {/* Left — image panel
            On desktop (≥900px): shows img1 (sas.jpeg)
            On mobile  (<900px):  shows imgMobile — uncomment once you add the import above */}
        <div className="ors__img-panel">

          {/* Desktop image — hidden below 900px via CSS */}
          <Image
            src={img1}
            alt="Oracle demo visual"
            fill
            className="ors__img-desktop"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          {/* ─────────────────────────────────────────────────────
              Mobile image — shown below 900px
              STEP 1: Add your import at the top of this file
              STEP 2: Uncomment the block below and replace
                      imgMobile with your imported variable name
          ───────────────────────────────────────────────────── */}
          
          <Image
            src={second}
            alt="Oracle demo visual"
            fill
            className="ors__img-mobile"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
         

        </div>

        {/* Right — content */}
        <div className="ors__content">
          <p className="ors__para">
        <span className="ors__highlight">Contact Us with Your Questions or Concerns</span>




          </p>
          <p className="ors__para">
            If you have any questions, concerns, or requests related to this Privacy Policy or how your data is handled, please contact us. We are committed to addressing privacy-related inquiries promptly and transparently. You may reach us by email, and we will respond within a reasonable timeframe to assist with access, corrections, or general information regarding your data. 
       

          </p>
          <p className="ors__para">  Please do not hesitate to contact us at <span className="ors__email">notify@yunuak.com</span></p>
        </div>

      </div>
    </section>
  );
}