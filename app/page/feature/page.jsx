"use client";
import React, { useState } from "react";
import Image from 'next/image';
import fourth from ".././../../public/assests/fourth.jpg";
import Layers from ".././../../public/assests/vendor.png";
import Layers2 from ".././../../public/assests/seamless8.png";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import mobile from "../../../public/assests/mobile.png";
import laptop from "../../../public/assests/computer-img.png";
import ten from "../../../public/assests/ten.png";
import layer from "../../../public/assests/Layer.png";
import benefit from "../../../public/assests/Benfits.png";
import box from "../../../public/assests/box.png";
import fan from "../../../public/assests/fan.png";
import smobile from "../../../public/assests/s-mobile.png";
import smobile2 from "../../../public/assests/s-mobile2.png";
import g1 from "../../../public/assests/machine.png";
import g3 from "../../../public/assests/truck.png";
import g2 from "../../../public/assests/stone.png";
import g4 from "../../../public/assests/wall.png";
import g5 from "../../../public/assests/working.png";
import g6 from "../../../public/assests/ship.png";
import g7 from "../../../public/assests/boxes.png";
import g8 from "../../../public/assests/talk.png";
import g9 from "../../../public/assests/lady.png";

import "./feature.css";

// ── Accordion items ───────────────────────────────────────────────────────
const ACCORDION_ITEMS = [
  {
    heading: "For Purchasing",
    text: "Streamline  supplier coordination, procurement processes, and inventory planning to ensure cost efficiency and timely supply across your entire operation",
  },
  {
    heading: "For Warehouse",
    text: "Enhance inventory visibility with barcode scanning, lot tracking, and location control, while enabling multi-warehouse operations and seamless transfers for accurate, efficient fulfillment.",
  },
  {
    heading: "For Sales ",
    text: "Optimize sales operations with real-time visibility. Streamline quoting, order processing, and fulfillment to drive accuracy, speed, and smarter revenue decisions.",
  },
];

function Page() {
  // ── Built-right card carousel ─────────────────────────────────────────
  const builtImages = ["/assests/f1.png", "/assests/f2.png", "/assests/f3.png"];
  const [builtIndex, setBuiltIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBuiltIndex((prev) => (prev + 1) % builtImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ── Accordion state ───────────────────────────────────────────────────
  const [activeAccordion, setActiveAccordion] = useState(1);

  return (
    <>
       <div className="hero-subtitle-row">
                     <Image 
                       src={left} 
                       alt="decor left" 
                       width={80} 
                       height={24} 
                       className="decor-image" 
                     />
                     <p className="hero-label">Features</p>
                     <Image 
                       src={right} 
                       alt="decor right" 
                       width={80} 
                       height={24} 
                       className="decor-image" 
                     />
                   </div>
      <div className="container1">
      
        <div className="feature-subtitle">
          
          <div className="feature-heading">
            <h1>Our Clients Love Us</h1>
            <p>Free Up Your Time to Focus on What Matters Most</p>
          </div>
        </div>

        <div className="grid">
          {/* Box 1 */}
          <div className="feature-box">
            <div className="icon-wrapper flex-row">
              <div className="icon-circle">
                <svg className="icon11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="row">
                <h3 className="title">High-Level Workflow Visibility</h3>
                <p className="description">
                    Real-time insights into inventory and operations across the entire supply chain.
                </p>
              </div>
            </div>
            <div className="image-placeholder">
              <div className="placeholder-content">
                <Image src={laptop} alt="Feature Image" className="laptop" />
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="feature-box">
            <div className="icon-wrapper flex-row">
              <div className="icon-circle1">
                <svg className="icon11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="row">
                <h3 className="title">Mobile-App Access</h3>
                <p className="description">
                  Our mobile-friendly ERP tools put critical data and workflows at your fingertips.
                </p>
              </div>
            </div>
            <div className="image-placeholder">
              <div className="placeholder-content">
                <Image src={mobile} alt="Feature Image" className="mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="twoboxes">
      <div className="layers-bg">
        {/* DESKTOP VERSION (>768px) */}
        <div className="layers layers-desktop">
          <div className="clearbg">
            <h2 className="clear-h2">Smarter Inbound, Stronger Outcomes</h2>
            <p className="clear-p">From vendor management to ROI, YunutyConnect drives efficiency, accuracy, and visibility.</p>
          </div>
          <Image src={Layers} alt="Feature Image" className="layers-desktop-img" />
        </div>

        {/* MOBILE VERSION (≤768px) - SINGLE BOX WITH HEADING + TALL IMAGE */}
        <div className="layers layers-mobile">
          <h2 className="mobile-h2">Smarter Inbound, Stronger Outcomes</h2>
          <div className="mobile-img-container">
            <Image src={smobile} alt="Mobile feature" className="mobile-tall-img" />
          </div>
        </div>
      </div>

      {/* ── Section 2: DESKTOP = seamless8.png | MOBILE = smobile2 ── */}
      <div className="layers-bg">
        {/* DESKTOP VERSION (>768px) */}
        <div className="layers layers-desktop">
          <div className="clearbg">
            <h2 className="clear-h2">Powering Smarter Fulfillment</h2>
            <p className="clear-p">Bring CRM, sales, fulfillment, invoicing, and inventory together for seamless execution and full visibility.</p>
          </div>
          <Image src={Layers2} alt="Feature Image" className="layers-desktop-img" />
        </div>

        {/* MOBILE VERSION (≤768px) - SINGLE BOX WITH HEADING + TALL IMAGE */}
        <div className="layers layers-mobile">
          <h2 className="mobile-h2">Powering Smarter Fulfillment</h2>
          <div className="mobile-img-container">
            <Image src={smobile2} alt="Mobile feature" className="mobile-tall-img" />
          </div>
        </div>
      </div>
</div>
      {/* ── CTA ── */}
      <div className="cta">
        <section className="cta-banner">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-text">
                Discover the future of productivity, optimize your processes and make every minute count.
              </h2>
            </div>
            <div className="cta-button-wrapper">
              <button className="cta-button">Get A Demo</button>
            </div>
          </div>
          <div className="cta-grid-bg"></div>
        </section>
      </div>

      {/* ── Built section ── */}
      <div className="built-section">
        <div className="built-container">
          <div className="built-left">
            <h2>SUCCESS IN DIGITAL TRANSFORMATION IS A MATTER OF BALANCE</h2>
            <button className="built-btn">Request a Demo →</button>
          </div>

          <div className="built-right bac__right">
            <div className="bac__wrap">
              <div className="bac__list">
                {ACCORDION_ITEMS.map((item, i) => (
                  <button
                    key={i}
                    className={`bac__item${activeAccordion === i ? " bac__item--active" : ""}`}
                    onClick={() => setActiveAccordion(i)}
                  >
                    <span className="bac__slash">/</span>
                    <span className="bac__heading">{item.heading}</span>
                  </button>
                ))}
              </div>

              <div className="bac__content">
                <p className="bac__text" key={activeAccordion}>
                  {ACCORDION_ITEMS[activeAccordion].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;