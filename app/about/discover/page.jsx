"use client"
import React from "react";
import "./discover.css";
import Image from "next/image";
import moving from "../../../public/assests/moving.jpeg";

export default function DiscoverSection() {
  return (
    <section className="custom-hero-section">
      <Image
        src={moving}
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        aria-hidden="true"
      />
      <div className="custom-hero-bg-overlay" />
      <div className="custom-hero-container">
        <h1 className="custom-hero-title">
          Transform Insights into Action with Smart, Data-Driven Decisions.
        </h1>
        <button className="custom-hero-button">Request A Demo</button>
      </div>
    </section>
  );
}