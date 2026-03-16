"use client";
import React from "react";
import Image from "next/image";
import "./test.css";

import img1 from "../../../public/assests/sas.jpeg";
import img2 from "../../../public/assests/patner1.jpeg";
import second from "../../../public/assests/second.jpeg";
// ─────────────────────────────────────────────
// 👇 IMPORT YOUR MOBILE IMAGE HERE
// Replace the path below with your actual image
// import imgMobile from "../../../public/assests/YOUR_MOBILE_IMAGE.jpeg";
// ─────────────────────────────────────────────

export default function OracleSection() {
  return (
    <section className="ors__section">

      {/* ── Top bar ── */}
      <div className="ors__topbar">
        <Image src={img2} alt="Oracle Partner Logo" className="ors__logo" />
        <div className="ors__tags-top">
          <span className="ors__tag">SECURITY</span>
          <span className="ors__tag-sep">/</span>
          <span className="ors__tag">SCALABILITY</span>
          <span className="ors__tag-sep">/</span>
          <span className="ors__tag">CLOUD INNOVATION</span>
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
            We harness the power of Amazon Web Services (AWS) to deliver scalable, secure, and high-performance cloud solutions that drive business growth and digital transformation. Yunuak, powered by AWS, helps organizations streamline operations, accelerate innovation, and improve sales performance through reliable cloud infrastructure.
          </p>
          <p className="ors__para">
            Following industry-leading security standards and compliance frameworks such as GDPR, HIPAA, and PCI-DSS, Yunuak ensures your data remains protected, resilient, and fully aligned with global regulatory requirements.
          </p>
        </div>

      </div>
    </section>
  );
}