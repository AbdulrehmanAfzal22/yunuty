"use client";
import React, { useState } from "react"; 
import Image from 'next/image';
import fourth from ".././../../public/assests/fourth.jpg";
import fifth from ".././../../public/assests/fifth.jpg";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import mobile from "../../../public/assests/mobile.png";
import laptop from "../../../public/assests/laptop.png";
import ten from "../../../public/assests/ten.png";
import layer from "../../../public/assests/Layer.png";
import benefit from "../../../public/assests/Benfits.png";
import "./feature.css";
function Page() {

     const images = ["/assests/f1.png", "/assests/f2.png", "/assests/f3.png"];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  return (
    <>
    
    <div className="container">
      <div className="grid">
        
        {/* Box 1: High-Level Workflow Visibility */}
        <div className="feature-box">
          {/* Icon */}
          <div className="icon-wrapper">
            <div className="icon-circle">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="title">
            High-Level Workflow Visibility
          </h3>

          {/* Description */}
          <p className="description">
            With YunuityConnect, clients gain real-time insights into inventory and operations across the entire supply chain.
          </p>

          {/* Image Placeholder */}
          <div className="image-placeholder">
            <div className="placeholder-content">
             
              <Image
        src={laptop}
        alt="Feature Image"
        className="laptop"
        />
            </div>
          </div>
        </div>

        {/* Box 2: Mobile-App Access */}
        <div className="feature-box">
          {/* Icon */}
          <div className="icon-wrapper">
            <div className="icon-circle">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="title">
            Mobile-App Access
          </h3>

          {/* Description */}
          <p className="description">
            Our mobile-friendly ERP tools put critical data and workflows at your fingertips.
          </p>

          {/* Image Placeholder */}
          <div className="image-placeholder">
            <div className="placeholder-content">
                {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg> */}
            <Image
        src={mobile}
        alt="Feature Image"
        className="mobile"
        />
            </div>
          </div>
        </div>

      </div>
    </div>

<Image
        src={fifth}
        alt="Feature Image"
        className="fifth"
        />

<div className="cta">
  <section className="cta-banner">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-text">
            Stop writer's block and generate fresh content ideas with our AI assistant. Take your content to next level!
          </h2>
        </div>
        
        <div className="cta-button-wrapper">
          <button className="cta-button">
            Get A Demo
          </button>
        </div>
      </div>
      
      <div className="cta-grid-bg"></div>
    </section>
</div>


<div className="built-section">
  <div className="built-container">
    <div className="built-left">
      <div className="built-subtitle">
          <Image
                     src={left}
                     alt=""
                     width={79}
                     height={17}
                     className="no-shrink"
                   />
&nbsp;&nbsp;&nbsp;
        <p>Built for you</p>
        &nbsp;&nbsp;&nbsp;
             <Image
                     src={right}
                     alt=""
                     width={79}
                     height={17}
                     className="no-shrink"
                   />
      </div>

      <h2>What We've Built for You</h2>
      <p className="built-desc">
        Designed to simplify operations, accelerate growth, and help businesses thrive in an ever-evolving digital world.
      </p>

      <button className="built-btn">Explore More →</button>
    </div>

    <div className="built-right">
        {/* <h3>Realtime-Tracking Data</h3> */}
        {/* <p>Track your content performance and leverage data-driven insights.</p> */}
        
     <div
      className="card-preview"
      onClick={nextImage}
      style={{
        backgroundImage: `url(${images[index]})`,
        cursor: "pointer",
      }}
    > </div>   </div>
  </div>
</div>

{/* 

 <div className="benfit">
 <section className="benefitsSection">
      <Image
    src={benefit}
    alt="Benefits Image"
    className="benefit-image"
    />
      <div className="benefitsContent">
        <h2 className="benefitsTitle">Your Benefits</h2>
        <p className="benefitsSubtitle">
          Harnessing the power of artificial intelligence to revolutionize industries
          and enhance human experiences.
        </p>
      </div>
<div className="img">
      <Image
        src={ten}
        alt="Benefits Image"
        className="b1"
      />
      <Image
        src={layer}
        alt="Benefits Image"
        className="b2"
      />
      </div>
    </section>
</div> */}

    </>
  )
}

export default Page
