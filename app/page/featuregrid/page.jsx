import React from 'react';
import './featuregrid.css';
import Image from 'next/image';
import helmet from '../../../public/assests/helmet.png';
import wheel from '../../../public/assests/wheel.png';
import dashboard from '../../../public/assests/Dashboard.png';
import twelve from '../../../public/assests/twelve.jpg';
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
const FeatureGrid = () => {
  // Platform icons array - split into two rows
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

  // Split icons into two rows
  const row1Icons = platformIcons.slice(0, 4);
  const row2Icons = platformIcons.slice(4, 8);

  return (
    <div className="grid11">

    


      <div className="feature-grid-container">
                  <div className="featuregrid-subtitle">
                     <div className="subtitles">
                       <Image src={left} alt="Decorative left accent" width={79} height={17} className="no-shrink" />
                      
                      <p className="feature-text">Features</p>
                      <Image src={right} alt="Decorative right accent" width={79} height={17} className="no-shrink" />
                     </div>
                    <div className="feature-heading">
                          <h1>Our Clients Love Us</h1>
                      <p>Free Up Your Time to Focus on What Matters Most</p>
                    </div>
                    </div>
        <div className="feature-grid">
          
         
          <div className="feature-card">
            <div className="card-header w3">
              <h3 className="card-title">Innovative Essential Platforms</h3>
              <p className="card-description">
                Explore versatile ERP solution designed to connect operations, people, and data across your entire business. Manage everything from materials to payments with seamless integration.
              </p>
            </div>
            
            <div className="card-content">
              {/* Two rows of scrolling platform icons */}
              <div className="platform-grid">
                {/* First row - scrolls left */}
                <div className="platform-grid-row">
                  <div className="platform-grid-scroll">
                    {/* First set of icons */}
                    {row1Icons.map((icon, index) => (
                      <div key={`row1-icon-${index}`} className="platform-icon">
                        <Image src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {row1Icons.map((icon, index) => (
                      <div key={`row1-icon-dup-${index}`} className="platform-icon">
                        <Image src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second row - scrolls right (reverse) */}
                <div className="platform-grid-row">
                  <div className="platform-grid-scroll reverse">
                    {/* First set of icons */}
                    {row2Icons.map((icon, index) => (
                      <div key={`row2-icon-${index}`} className="platform-icon">
                        <Image src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
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

          {/* Box 2: Effortless Personalization */}
          <div className="feature-card">
            <div className="card-header w3">
              <h3 className="card-title">Effortless Personalization</h3>
              <p className="card-description">
                Our system adapts to each user's role, showing only what matters most. Get dashboards, insights, and tools that fit your workflow perfectly.
              </p>
            </div>
            
            <div className="card-content">
              <div className="visualization-container">
                <Image src={effort} alt="Effort" className="visualization-image"/>
              </div>
            </div>
          </div>

          {/* Box 3: Continual Improvement */}
          <div className="feature-card">
            <div className="card-header">
              <h3 className="card-title">Continual Improvement</h3>
              <p className="card-description">
                Our ERP evolves with your business, analyzing performance and adapting workflows to improve efficiency, reduce bottlenecks, and enhance decision-making processes.
              </p>
            </div>
            
            <div className="card-content">
              <div className="ideas-container">
                <Image src={write} alt="Write" className="ideas-image"/>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Box 4: Boost Efficiency & Productivity */}
          <div className="feature-card feature-card-wide w1">
            <div className="card-header">
              <h3 className="card-title">Boost Efficiency & Productivity</h3>
              <p className="card-description">
                Automate routine tasks, streamline communication, and focus your team's time on driving growth instead of managing systems.
              </p>
            </div>
            
            <div className="card-content">
              <div className="dashboard-container">
                <Image src={wheel} alt="Wheel" className="dashboard-image"/>
              </div>
            </div>
          </div>

          {/* Box 5: Actionable Insights */}
          <div className="feature-card1 feature-card-wide w2">
            <div className="card-header">
              <h3 className="card-title">Actionable Insights</h3>
              <p className="card-description">
                Turn real-time data into clear actions that drive smarter decisions. Yunuty transforms operational metrics into meaningful insights, helping businesses identify trends, improve performance, and act with precision.
              </p>
            </div>
            
            <div className="card-content">
              <div className="insights-container">
                <Image src={helmet} alt="Helmet" className="insight-image"/>
              </div>
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