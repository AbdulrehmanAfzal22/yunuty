"use client";

import React, { useEffect, useRef, useState } from "react";
import "./grid.css";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import lineImg from "../../../public/assests/line.png";

const FeatureChips = () => {
  const aboutSectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutSectionRef.current) return;

      const rect = aboutSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -rect.height;

      let progress = 0;

      if (rect.top <= start && rect.top >= end) {
        progress = (start - rect.top) / (start - end);
      } else if (rect.top < end) {
        progress = 1;
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      {/* <section className="aboutx-section" ref={aboutSectionRef}>
        <div className="aboutx-container">
          <div className="aboutx-header">
            <Image src={left} alt="Left decoration" />
            <p className="aboutx-label">Who we are</p>
            <Image src={right} alt="Right decoration" />
          </div>

          <h1 className="aboutx-heading">
            <span
              className="aboutx-heading-fill"
              style={{ "--fill-percent": `${scrollProgress * 100}%` }}
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

          <button className="aboutx-button">
            More About Us
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="aboutx-arrow"
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

        <div className="aboutx-grid-bg"></div>
      </section> */}

      {/* ================= TAGS SECTION ================= */}
      <section className="tagsx-section">
        <div className="tagsx-container">
          <div className="tagsx-row">
            <div className="tagsx-pill">
              <span className="tagsx-icon orange">🔶</span>
              <span className="tagsx-text">Inventory Visibility</span>
            </div>
            <div className="tagsx-pill">
              <span className="tagsx-icon green">🔶</span>
              <span className="tagsx-text">Customer Portal Access</span>
            </div>
            <div className="tagsx-pill">
              <span className="tagsx-icon purple">🔶</span>
              <span className="tagsx-text">Interconnectivity</span>
            </div>
          </div>

          <div className="tagsx-row">
            <div className="tagsx-pill">
              <span className="tagsx-icon green">🔶</span>
              <span className="tagsx-text">
                Integrated Financial Management
              </span>
            </div>
            <div className="tagsx-pill">
              <span className="tagsx-icon blue">🔶</span>
              <span className="tagsx-text">Process Automation</span>
            </div>
          </div>

          <div className="tagsx-row">
            <div className="tagsx-pill">
              <span className="tagsx-icon red">🔶</span>
              <span className="tagsx-text">
                Real-Time Analytics & Reporting
              </span>
            </div>
            <div className="tagsx-pill">
              <span className="tagsx-icon yellow">🔶</span>
              <span className="tagsx-text">
                Demand Forecasting & Planning
              </span>
            </div>
          </div>

          <div className="tagsx-row">
            <div className="tagsx-pill">
              <span className="tagsx-icon purple">🔶</span>
              <span className="tagsx-text">Mobile Accessibility</span>
            </div>
            <div className="tagsx-pill">
              <span className="tagsx-icon orange">🔶</span>
              <span className="tagsx-text">
                Live Quickbooks Connection
              </span>
            </div>
            <div className="tagsx-pill">
              <span className="tagsx-icon purple">🔶</span>
              <span className="tagsx-text">Process Automation</span>
            </div>
          </div>

          <div className="tagsx-row">
            <div className="tagsx-pill">
              <span className="tagsx-icon green">🔶</span>
              <span className="tagsx-text">Online Payment</span>
            </div>
          </div>

          <div className="tagsx-divider">
            <Image src={lineImg} alt="Divider line" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureChips;