"use client";
import React from "react";
import "./discover.css";

export default function DiscoverSection() {
  return (
    <section className="custom-hero-section">
      <div className="custom-hero-container">
        <h1 className="custom-hero-title">
          Discover the future of productivity, <br />
          optimize your processes and make <br />
          every minute count.
        </h1>
        <p className="custom-hero-subtitle">
          Get a demo and unleash your productivity. Explore the latest technology
          and have a great experience!
        </p>
        <button className="custom-hero-button">Get A Demo</button>
      </div>
      <div className="custom-hero-grid"></div>
    </section>
  );
}