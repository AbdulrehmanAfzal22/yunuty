"use client";
import React from 'react';
import './indicator.css';
import Image from 'next/image';
import profile1 from '../../../public/assests/man.png';
import profile2 from '../../../public/assests/man1.png';
import left from '../../../public/assests/sub-title-left.svg';
import right from '../../../public/assests/sub-title-right.svg';
import group from '../../../public/assests/group.png';
import evan from '../../../public/assests/evan.png'
import ariyna from '../../../public/assests/ariyna.png'
import girl from '../../../public/assests/girl.png'
import man from '../../../public/assests/man.png'
const PerformanceDashboard = () => {
  return (
    <div className="performance-dashboard">
      {/* Background Pattern */}
      <div className="background-pattern"></div>
      
      <div className="container">
        <div className="content-wrapper">
          {/* Left Section */}
          <div className="left-section">
            <div className="indicator-badge">
             <Image src={left} alt="Left Decoration" className="decoration-img" />
            <span className="text">  Indicator</span>
              <Image src={right} alt="Right Decoration" className="decoration-img" />
            </div>
            
            <p className="main-heading">
              We are proud to have<br />
              strong<br />
             Performance indicators.
            </p>
            <div className="line"></div>
            <div className="rating-section">
              <div className="profile-images">
                <Image src={evan} alt="Profile 1" className="profile-img" />
                <Image src={girl} alt="Profile 2" className="profile-img" />
               <Image src={man} alt="Profile 3v " className="profile-img" />
              </div>
              <div className="rating-info">
                <div className="stars">
                  <span className="rating-number">4.9/5</span>
                  <div className="star-icons">
                    {'★★★★★'.split('').map((star, index) => (
                      <span key={index} className="star">{star}</span>
                    ))}
                  </div>
                </div>
                <p className="rating-text">Based on 24 reviews on Clutch</p>
              </div>
            </div>
          </div>
          
          <div className="right-section">
            <div className="metrics-grid">
              <div className="metric-card blue">
                <p className="metric-value">11.5M+</p>
                <p className="metric-label">Clients Revenue</p>
              </div>
              
              <div className="metric-card light-blue">
                <p className="metric-value">21.9M+</p>
                <p className="metric-label">Profit Increase</p>
              </div>
              
              <div className="metric-card pink">
                <p className="metric-value">21.9M+</p>
                <p className="metric-label">Transactions Recorded</p>
              </div>
              
              <div className="metric-card purple">
                <p className="metric-value">300+</p>
                <p className="metric-label">Cost Reduction</p>
              </div>
              
              <div className="metric-card purple-pink full-width">
                <p className="metric-value">300+</p>
                <p className="metric-label">Revenue Increase</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bottom-text">
          {/* <p>Your preferred ERP for stone and marble companies in South Florida</p> */}
        </div>
      </div>
      {/* <div className="group-image">
        <Image src={group} alt="Group" />
      </div> */}
    </div>
  );
};

export default PerformanceDashboard;
