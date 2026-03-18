import React from 'react';
import './featuregrid.css';
import Image from 'next/image';
import helmet from '../../../public/assests/insight600.png';
import wheel from '../../../public/assests/insigth6002.png';
import write from '../../../public/assests/write.png';
import effort from '../../../public/assests/effort.png';
import apple from '../../../public/assests/Apple1.svg'
import aws from '../../../public/assests/AWS.svg'
import android from '../../../public/assests/Android.svg'
import github from '../../../public/assests/Github.svg'
import stripe from '../../../public/assests/Stripe.svg'
import cloud from '../../../public/assests/googlecloud.svg'
import book from '../../../public/assests/Quickbooks.svg'
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";

// ─────────────────────────────────────────────────────
// 👇 ADD YOUR TWO BOTTOM BOX IMAGES HERE
// import bottomLeft  from "../../../public/assests/YOUR_LEFT_IMAGE.png";
// import bottomRight from "../../../public/assests/YOUR_RIGHT_IMAGE.png";
// ─────────────────────────────────────────────────────

const FeatureGrid = () => {
  const platformIcons = [
    { src: cloud, alt: "Google Cloud" },
    { src: apple, alt: "Apple" },
    { src: aws, alt: "AWS" },
    { src: android, alt: "Android" },
    { src: github, alt: "Github" },
    { src: stripe, alt: "Stripe" },
    { src: book, alt: "Quickbooks" },
    { src: cloud, alt: "Google Cloud" }
  ];

  const row1Icons = platformIcons.slice(0, 4);
  const row2Icons = platformIcons.slice(4, 8);

  return (
    <div className="grid11">
      <div className="feature-grid-container">
        <div className="featuregrid-subtitle">
          <div className="subtitles">
            <Image src={left} alt="Decorative left accent" width={79} height={17} className="no-shrink" />
            <p className="feature-text">Benefits</p>
            <Image src={right} alt="Decorative right accent" width={79} height={17} className="no-shrink" />
          </div>
          <div className="feature-heading">
            <h1>Your Benefits</h1>
            <p>Free Up Your Time to Focus on What Matters Most</p>
          </div>
        </div>

        {/* ── Top row: 3 cards ── */}
        <div className="feature-grid">
          <div className="feature-card">
            <div className="card-header w3">
              <h3 className="card-title">Innovative Essential Platforms</h3>
              <p className="card-description">
                Explore versatile ERP solution designed to connect operations, people, and data across your entire business.
              </p>
            </div>
            <div className="card-content">
              <div className="platform-grid">
                <div className="platform-grid-row">
                  <div className="platform-grid-scroll">
                    {row1Icons.map((icon, index) => (
                      <div key={`row1-icon-${index}`} className="platform-icon">
                        <Image src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                    {row1Icons.map((icon, index) => (
                      <div key={`row1-icon-dup-${index}`} className="platform-icon">
                        <Image src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="platform-grid-row">
                  <div className="platform-grid-scroll reverse">
                    {row2Icons.map((icon, index) => (
                      <div key={`row2-icon-${index}`} className="platform-icon">
                        <Image src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                    {row2Icons.map((icon, index) => (
                      <div key={`row2-icon-dup-${index}`} className="platform-icon">
                        <Image src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-header w3">
              <h3 className="card-title">Effortless Personalization</h3>
              <p className="card-description">
                Our system adapts to each user's role, showing only what matters most.
              </p>
            </div>
            <div className="card-content">
              <div className="visualization-container">
                <Image src={effort} alt="Effort" className="visualization-image"/>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-header">
              <h3 className="card-title">Continual Improvement</h3>
              <p className="card-description">
                Our ERP evolves with your business, analyzing performance and adapting workflows.
              </p>
            </div>
            <div className="card-content">
              <div className="ideas-container">
                <Image src={write} alt="Write" className="ideas-image"/>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom row: 2 equal image cards ── */}
        <div className="bottom-row">

          {/* Bottom Left — image card */}
          {/* IMAGE SIZE: 680px × 500px recommended */}
          <div className="bottom-card">
            <Image
              src={wheel}
              alt="Boost Efficiency"
              className="bottom-card-img"
            />
           
            {/* Placeholder shown until image is added */}
            <div className="bottom-card-placeholder">
              <span>680 × 500 px</span>
              <p>Import <code>bottomLeft</code> and uncomment the img above</p>
            </div>
          </div>

          {/* Bottom Right — image card */}
          {/* IMAGE SIZE: 680px × 500px recommended */}
          <div className="bottom-card">
            <Image
              src={helmet}
              alt="Actionable Insights"
              className="bottom-card-img"
            />
           
            {/* Placeholder shown until image is added */}
            <div className="bottom-card-placeholder">
              <span>680 × 500 px</span>
              <p>Import <code>bottomRight</code> and uncomment the img above</p>
            </div>
          </div>

        </div>

        <div className="explore-more-container">
          <button className="explore-more-btn">
            Explore More
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;