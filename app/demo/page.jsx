"use client"
import React from "react";
import Link from "next/link";
import "./demo.css";
import Image from "next/image";
import boat from "../../public/assests/boat.jpeg";
import refine from "../../public/assests/refine.jpeg";

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

      {/* Mobile image — shown below 700px */}
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
          {/* Desktop: line1 + line2 on same row → 2 lines total
              Mobile:  each span is a block → max 3 lines        */}
          <span className="dmo-line1">Row Toward the Future Together</span>
          <span className="dmo-line2">Where Teamwork and Technology</span>
          <span className="dmo-line3">Drive Productivity.</span>
        </h1>
        <Link href="/contactus/contact" className="dmo-button">Request A Demo</Link>
      </div>
    </section>
  );      
}