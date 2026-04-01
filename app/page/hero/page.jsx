"use client";

import { useState } from "react";
import Image from "next/image";
import "./hero.css";

import bg from "../../../public/assests/bg-4.jpeg";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import hero from "../../../public/assests/hero-img1.png";
import heroMobile from "../../../public/assests/com-mobile.png";

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
          {/* Improved Subtitle Row */}
          <div className="hero-subtitle-row">
            <Image 
              src={left} 
              alt="decor left" 
              width={80} 
              height={24} 
              className="decor-image" 
            />
            <p className="hero-label">Future-Ready ERP Solutions</p>
            <Image 
              src={right} 
              alt="decor right" 
              width={80} 
              height={24} 
              className="decor-image" 
            />
          </div>

          <h1 className="heading-hero">
            The Future of Supply Chain Digital Transformation
          </h1>

          <p className="hero-desc">
            Refining an organization's comprehensive strategy for its
            entire supply chain and operational processes to promote growth,
            streamline operations, and ensure protection with a cloud-based
            ERP solution.
          </p>

          {/* Desktop Image */}
          <div className="dark-img desktop-hero">
            <Image
              src={hero}
              alt="Illustration of supply chain digital transformation"
              width={1000}
              height={600}
              className="dark-image"
              priority
              sizes="(min-width: 769px) 100vw, 0px"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>

          {/* Mobile Image */}
          <div className="dark-img mobile-hero">
            <Image
              src={heroMobile}
              alt="Illustration of supply chain digital transformation"
              width={600}
              height={800}
              className="dark-image"
              priority
              sizes="(max-width: 768px) 100vw, 0px"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}