"use client";

import { useState } from "react";
import Image from "next/image";
import "./hero.css";

import bg from "../../../public/assests/bg-4.jpeg";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import hero from "../../../public/assests/hero.png";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src={bg}
          alt="ERP Dashboard"
          fill
          priority
          sizes="100vw"
          quality={100}
          unoptimized
          className="hero-bg-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">

          {/* ✅ SUBTITLE — fixed: consistent margin-bottom, no negative offsets */}
          <div className="hero-subtitle">
            <Image
              src={left}
              alt="Decorative left accent"
              width={79}
              height={17}
              className="no-shrink"
            />
            <p className="feature-text">Future-Ready ERP Solutions</p>
            <Image
              src={right}
              alt="Decorative right accent"
              width={79}
              height={17}
              className="no-shrink"
            />
          </div>

          {/* ✅ HEADING — removed <br> tags, CSS handles line breaks */}
          <h1 className="heading-hero">
            The Future of Supply Chain Digital Transformation
          </h1>

          {/* ✅ DESCRIPTION — removed <br> tags, text wraps naturally */}
          <p className="hero-desc">
            Refining an organization&apos;s comprehensive strategy for its
            entire supply chain and operational processes to promote growth,
            streamline operations, and ensure protection with a cloud-based
            ERP solution.
          </p>

          {/* Email Form */}
          <div className="email-wrapper">
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="email-input"
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>

          {/* Hero Image */}
          <div className="dark-img">
            <Image
              src={hero}
              alt="Illustration of supply chain digital transformation"
              width={1000}
              height={600}
              className="dark-image"
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}