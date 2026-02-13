import React from "react";
import Navbar from "@/app/page/navbar/page";
import Image from "next/image";
import img1 from "../../../public/assests/sub-title-left.svg";
import img2 from "../../../public/assests/sub-title-right.svg";
import "./privacy.css";
import {Timer} from "lucide-react";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <section className="privacy-hero-section">
        {/* Subtitle */}
        <div className="privacy-subtitle-row">
          <Image src={img1} alt="decor left" width={80} height={24} />
            <p className="privacy-section-label">Privacy Policy</p>
            <Image src={img2} alt="decor right" width={80} height={24} />
        </div>

        {/* Privacy content */}
        <div className="privacy-content-wrapper">
          <h1 className="privacy-main-title">
            Our Commitment to Your<br />
            Privacy And Data Security
          </h1>

          <p className="privacy-description">
            See how we protect your information and ensure your privacy policy.
          </p>

          <div className="privacy-cta-wrapper">
            <button className="privacy-cta-button" type="button">
              <span className="privacy-button-icon"><Timer className="watch" /></span>
              Last Updated on June 19, 2024
            </button>
          </div>
        </div>

        <section className="privacy-mission-section">
          <div className="privacy-mission-card">
            <div className="privacy-mission-content">
              <p className="privacy-mission-text">
                We are committed to protecting your privacy of your personal information.This policy <br/>outlines the types of information we collect and your rights regarding your data.
              </p>
              <button className="privacy-cta-buttons">Report an Issue</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}