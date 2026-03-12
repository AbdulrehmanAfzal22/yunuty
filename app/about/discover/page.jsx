"use client";
import React from "react";
import "./discover.css";
import Image from "next/image";
import boat from "../../../public/assests/boat.jpeg";  
export default function DiscoverSection() {
  return (
    <section className="custom-hero-section">
      <Image
        src={boat}
        alt=""
        className="custom-hero-bg-img"
        aria-hidden="true"
      />
      <div className="custom-hero-bg-overlay" />
      <div className="custom-hero-container">
        <h1 className="custom-hero-title">
          Discover the future of productivity, 
          optimize your processes and make 
          every minute count.
        </h1>
        <p className="custom-hero-subtitle">
          Get a demo and unleash your productivity. Explore the latest technology
          and have a great experience!
        </p>
        <button className="custom-hero-button">Get A Demo</button>
      </div>
    </section>
  );
}