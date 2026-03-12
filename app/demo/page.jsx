"use client"
import React from "react";
import "./demo.css";
import Image from "next/image";
import boat from "../../public/assests/boat.jpeg";

export default function DemoSection() {
  return (
    <section className="dmo-section">
      <Image
        src={boat}
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        aria-hidden="true"
      />
      <div className="dmo-bg-overlay" />
      <div className="dmo-container">
        <h1 className="dmo-title">
          <span className="dmo-line1">Row Toward the Future Together Where</span><br />
          <span className="dmo-line2">Teamwork and Technology Drives Productivity.</span>
        </h1>
        <button className="dmo-button">Request A Demo</button>
      </div>
    </section>
  );
}