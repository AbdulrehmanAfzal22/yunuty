import React from 'react';
import './featuregrid.css';
import Image from 'next/image';
import helmet from '../../../public/assests/helmet.png';
import wheel from '../../../public/assests/wheel.png';
import dashboard from '../../../public/assests/Dashboard.png';
import twelve from '../../../public/assests/twelve.jpg';
import write from '../../../public/assests/write.png';
import effort from '../../../public/assests/effort.png';
const FeatureGrid = () => {
  return (
    <div className="grid11">
    <div className="feature-grid-container">
      <div className="feature-grid">
        
        
        <div className="feature-card">
          <div className="card-header w3">
            <h3 className="card-title">Innovative Essential Platforms</h3>
            <p className="card-description">
              Explore versatile ERP solution designed to connect operations, people, and data across your entire business. Manage everything from materials to payments with seamless integration.
            </p>
          </div>
          
          <div className="card-content">
            {/* Image placeholder - 8 platform icons in grid */}
            <div className="platform-grid">
              <div className="platform-icon">
                <div className="icon-placeholder">
                </div>
              </div>
              <div className="platform-icon">
                <div className="icon-placeholder">
                  <span>Icon 2</span>
                </div>
              </div>
              <div className="platform-icon">
                <div className="icon-placeholder">
                  <span>Icon 3</span>
                </div>
              </div>
              <div className="platform-icon">
                <div className="icon-placeholder">
                  <span>Icon 4</span>
                </div>
              </div>
              <div className="platform-icon">
                <div className="icon-placeholder">
                  <span>Icon 5</span>
                </div>
              </div>
              <div className="platform-icon">
                <div className="icon-placeholder">
                  <span>Icon 6</span>
                </div>
              </div>
              <div className="platform-icon">
                <div className="icon-placeholder">
                  <span>Icon 7</span>
                </div>
              </div>
              <div className="platform-icon">
                <div className="icon-placeholder">
                  <span>Icon 8</span>
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
            {/* Image placeholder - Circular visualization */}
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
            {/* Image placeholder - Ideas list */}
            <div className="ideas-container">
              {/* <div className="image-placeholder ideas"> */}
                {/* <span>Ideas List Image</span> */}
              {/* </div> */}
              <Image src={write} alt="Write" className="ideas-image"/>
            </div>
          </div>
        </div>
  </div>
      <div className="flex">
        <div className="feature-card feature-card-wide w1">
          <div className="card-header">
            <h3 className="card-title">Boost Efficiency & Productivity</h3>
            <p className="card-description">
              Automate routine tasks, streamline communication, and focus your team's time on driving growth instead of managing systems.
            </p>
          </div>
          
          <div className="card-content">
            {/* Image placeholder - Dashboard with metrics */}
            <div className="dashboard-container">
              <Image src={wheel} alt="Wheel" className="dashboard-image"/>
            </div>
          </div>
        </div>

       
      

    
        <div className="feature-card1 feature-card-wide w2 ">
          <div className="card-header">
            <h3 className="card-title">Actionable Insights</h3>
            <p className="card-description">
              Turn real-time data into clear actions that drive smarter decisions. Yunuity transforms operational metrics into meaningful insights, helping businesses identify trends, improve performance, and act with precision.
            </p>
          </div>
          
          <div className="card-content">
            {/* Image placeholder - User card/profile */}
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
{/* <Image src={twelve} alt="Twelve" className="twelve-image"/> */}
    </div>
  );
};

export default FeatureGrid;