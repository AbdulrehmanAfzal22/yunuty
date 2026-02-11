"use client";

import { useState } from "react";
import Image from "next/image";
import "./hero.css";

import bg from "../../../public/assests/bgcolor.jpeg";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import image from "../../../public/assests/hero-img.png";
import future from "../../../public/assests/Future.png";
import hero from "../../../public/assests/hero.png"
export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="hero">
      {/* Hero Background */}
      <div className="hero-bg">
        <Image
          src={bg}
          alt="ERP Dashboard"
          fill
          className="hero-bg-image"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Subtitle Section */}
          <div className="hero-subtitle">
            <Image src={left} alt="" width={79} height={17} className="no-shrink" />
            {/* <div className="sub-text">
              <Image src={future} className="left-svg" alt="Star Icon" />
            </div> */}
            <p className="feature-text">Future-Ready ERP Solutions</p>
            <Image src={right} alt="" width={79} height={17} className="no-shrink" />
          </div>

          {/* Hero Title */}
          <h1 className="hero-title">
            The Future of Supply Chain <br />
            Digital Transformation
          </h1>

          {/* Hero Description */}
          <p className="hero-desc">
            Refining an organization&apos;s comprehensive strategy <br />for its entire supply chain
            and operational processes to promote <br /> growth, streamline operations, and ensure
            protection with a <br /> cloud-based ERP solution.
          </p>

          {/* Email Form */}
          <div className="email-wrapper mt-10">
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
          {/* <div className="hero-image">
            <img
              decoding="async"
              src="https://levprime.digitalpreps.com/wp-content/uploads/2025/10/Untitled-design-16.png"
              alt=""
              className="hero-img"
            />
          </div> */}

         <div className="dark-img">
  <Image
    src={hero}
    alt="Hero Image"
    width={1000}
    height={600}
    className="dark-image"
  />
</div>
        </div>
      </div>
    </section>
  );
}
