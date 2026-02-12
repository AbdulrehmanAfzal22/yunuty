"use client";

import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import Image from "next/image";
import acess from "../../../public/assests/acess.jpg";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import line from "../../../public/assests/line.png"
const AboutSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when section enters viewport, finish when it leaves
      const start = windowHeight;      // section top hits bottom of screen
      const end = -rect.height;        // section bottom hits top of screen

      let progress = 0;

      if (rect.top <= start && rect.top >= end) {
        progress = (start - rect.top) / (start - end);
      } else if (rect.top < end) {
        progress = 1;
      } else {
        progress = 0;
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="about-section" ref={sectionRef}>
        <div className="about-container">
          <div className="about">
            <Image src={left} alt="Left decoration" />
            &nbsp;&nbsp;&nbsp;
            <p>Who we are</p>
            &nbsp;&nbsp;&nbsp;
            <Image src={right} alt="Right decoration" />
          </div>

          <h1 className="about-heading">
            <span
              className="about-heading-fill"
              style={{
                "--fill-percent": `${scrollProgress * 100}%`,
              }}
            >
              At Yunuak, we help organizations transform operations <br />
              through digital innovation, process engineering, and smart <br />
              technology. We believe every business deserves strategies <br />
              that drive efficiency, scalability, and sustainable growth. Our <br />
              team blends deep industry expertise with a <br />
              forward-thinking approach to streamline supply chains, <br />
              optimize workflows, and deliver future-ready solutions like <br />
              our ERP system YunutyConnect and mobile applications.
            </span>
          </h1>

          <button className="about-button">
            More About Us
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="arrow-icon"
            >
              <path
                d="M4 10H16M16 10L11 5M16 10L11 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Background Grid Effect */}
        <div className="grid-background"></div>
      </section>

      <section className="features-tags-section">
        <div className="features-tags-container">
          <div className="tags-row row-1">
            <div className="feature-tag">
              <span className="tag-icon orange">🔶</span>
              <span className="tag-text">Inventory Visibility</span>
            </div>
            <div className="feature-tag">
              <span className="tag-icon green">🔶</span>
              <span className="tag-text">Customer Portal Access</span>
            </div>
            <div className="feature-tag">
              <span className="tag-icon purple">🔶</span>
              <span className="tag-text">Interconnectivity</span>
            </div>
          </div>

          <div className="tags-row row-2">
            <div className="feature-tag">
              <span className="tag-icon green">🔶</span>
              <span className="tag-text">Integrated Financial Management</span>
            </div>
            <div className="feature-tag">
              <span className="tag-icon blue">🔶</span>
              <span className="tag-text">Process Automation</span>
            </div>
          </div>

          <div className="tags-row row-3">
            <div className="feature-tag">
              <span className="tag-icon red">🔶</span>
              <span className="tag-text">Real-Time Analytics & Reporting</span>
            </div>
            <div className="feature-tag">
              <span className="tag-icon yellow">🔶</span>
              <span className="tag-text">Demand Forecasting & Planning</span>
            </div>
          </div>

          <div className="tags-row row-4">
            <div className="feature-tag">
              <span className="tag-icon purple">🔶</span>
              <span className="tag-text">Mobile Accessibility</span>
            </div>
            <div className="feature-tag">
              <span className="tag-icon orange">🔶</span>
              <span className="tag-text">Live Quickbooks Connection</span>
            </div>
            <div className="feature-tag">
              <span className="tag-icon purple">🔶</span>
              <span className="tag-text">Process Automation</span>
            </div>
          </div>

          <div className="tags-row row-5">
            <div className="feature-tag">
              <span className="tag-icon green">🔶</span>
              <span className="tag-text">Real-Time Analytics & Reporting</span>
            </div>
            <div className="feature-tag">
              <span className="tag-icon green">🔶</span>
              <span className="tag-text">Online Payment</span>
            </div>
          </div>
            <div className="line">
      <Image src={line}/>
      </div>
        </div>
      </section>
    
    </>
  );
};

export default AboutSection;
