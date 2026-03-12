"use client";
import React from "react";
import Image from "next/image";
import "./test.css";

import img1 from "../../../public/assests/sas.jpeg";
import img2 from "../../../public/assests/patner1.jpeg";

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

        {/* Left — image flush to edges */}
        <div className="ors__img-panel">
          <Image
            src={img1}
            alt="Oracle demo visual"
            fill
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