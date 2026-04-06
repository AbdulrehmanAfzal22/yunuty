import React from 'react';
import './featuregrid.css';
import Image from 'next/image';
// import helmet from '../../../public/assests/helmet.png';
import wheel from '../../../public/assests/arrow-top.png';
import write from '../../../public/assests/write.png';
import effort from '../../../public/assests/qb.png';
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import aws from '../../../public/assests/AWS.svg';
import github from '../../../public/assests/Github.svg';
import googlecloud from '../../../public/assests/googlecloud.svg';
import stripe from '../../../public/assests/Stripe.svg';
import apple from "../../../public/assests/Apple1.svg";
import android from "../../../public/assests/Android.svg";
import helmet from "../../../public/assests/yellow.png";
import improve from "../../../public/assests/improve.png";
// Row 1 icons (scrolls right → left)
const row1 = [
  { src: aws,         alt: "AWS" },
  { src: github,      alt: "GitHub" },
  { src: googlecloud, alt: "Google Cloud" },
  { src: stripe,      alt: "Stripe" },
];

// Row 2 icons (scrolls left → right)
const row2 = [
  { src: apple,       alt: "Apple" },
  { src: android,     alt: "Android" },
  { src: aws,         alt: "AWS" },
  { src: github,      alt: "GitHub" },
];

const FeatureGrid = () => {
  return (
    <div className="grid11">

      {/* ── Header ── */}
      <div className="feature-grid-container">
          <div className="hero-subtitle-row">
                   <Image 
                     src={left} 
                     alt="decor left" 
                     width={80} 
                     height={24} 
                     className="decor-image" 
                   />
                   <p className="hero-label">Benefits</p>
                   <Image 
                     src={right} 
                     alt="decor right" 
                     width={80} 
                     height={24} 
                     className="decor-image" 
                   />
                 </div>
        <div className="feature-heading">
          <h1>Your Benefits</h1>
          <p>Free Up Your Time to Focus on What Matters Most</p>
        </div>
      </div>

      {/* ── Top 3 cards ── */}
      <div className="feature-grid">

        {/* Box 1: Platform icons */}
        <div className="feature-card">
          <div className="card-header w3">
            <h3 className="card-title">Innovative Essential Platforms</h3>
            <p className="card-description">
              Explore versatile ERP solution designed to connect operations, people, and data across your entire business.
            </p>
          </div>
          <div className="card-content">
            <div className="platform-scroll-wrap">

              {/* Row 1 — scrolls right to left */}
              <div className="platform-scroll-row">
                <div className="platform-scroll-track track--ltr">
                  {[...row1, ...row1].map((icon, i) => (
                    <div key={`r1-${i}`} className="platform-icon">
                      <Image src={icon.src} alt={icon.alt} width={40} height={40} style={{ objectFit: "contain" }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 — scrolls left to right */}
              <div className="platform-scroll-row">
                <div className="platform-scroll-track track--rtl">
                  {[...row2, ...row2].map((icon, i) => (
                    <div key={`r2-${i}`} className="platform-icon">
                      <Image src={icon.src} alt={icon.alt} width={40} height={40} style={{ objectFit: "contain" }} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Box 2: Effortless Personalization */}
        <div className="feature-card">
          <div className="card-header w3">
            <h3 className="card-title">Smart Sync with QuickBooks</h3>
            <p className="card-description">
              Power your business with live QuickBooks synchronization and total visibility.
            </p>
          </div>
          <div className="card-content">
            <div className="visualization-container">
              <Image src={effort} alt="Effort" className="visualization-image" />
            </div>
          </div>
        </div>

        {/* Box 3: Continual Improvement */}
        <div className="feature-card">
          <div className="card-header">
            <h3 className="card-title">Continual Improvement</h3>
            <p className="card-description">
              Our ERP evolves with your business, analyzing performance and adapting workflows.
            </p>
          </div>
          <div className="card-content">
            <div className="ideas-container">
              <Image src={improve} alt="Write" className="ideas-image" />
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom 2 cards ── */}
      <div className="flex">

        {/* Box 4 */}
        <div className="feature-card feature-card-wide w1">
          <div className="card-header">
            <h3 className="card-title">Boost Efficiency & Productivity</h3>
            <p className="card-description">
              Automate routine tasks, streamline communication, and focus your team's time on driving growth.
            </p>
          </div>
          <div className="card-content">
            <div className="dashboard-container">
              <Image src={wheel} alt="Wheel" className="dashboard-image" />
            </div>
          </div>
        </div>

        {/* Box 5 */}
        <div className="feature-card1 feature-card-wide w2">
          <div className="card-header">
            <h3 className="card-title">Actionable Insights</h3>
            <p className="card-description">
              Turn real-time data into clear actions that drive smarter decisions. YunutyConnect transforms operational metrics into meaningful insights, helping businesses identify trends, improve performance, and act with precision.
            </p>
          </div>
          <div className="card-content">
            <div className="insights-container">
              <Image src={helmet} alt="Helmet" className="insight-image" />
            </div>
          </div>
        </div>

      </div>

      {/* ── Explore More ── */}
      <div className="explore-more-container">
        <button className="explore-more-btn">
          Explore More
          <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default FeatureGrid;