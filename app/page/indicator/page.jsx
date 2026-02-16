"use client";
import React, { useState, useEffect, useRef } from 'react';
import './indicator.css';
import Image from 'next/image';
import profile1 from '../../../public/assests/man.png';
import profile2 from '../../../public/assests/man1.png';
import left from '../../../public/assests/sub-title-left.svg';
import right from '../../../public/assests/sub-title-right.svg';
import group from '../../../public/assests/group.png';
import evan from '../../../public/assests/evan.png';
import ariyna from '../../../public/assests/ariyna.png';
import girl from '../../../public/assests/girl.png';
import man from '../../../public/assests/man.png';

const PerformanceDashboard = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  
  // Counter states
  const [clientsRevenue, setClientsRevenue] = useState(0);
  const [profitIncrease, setProfitIncrease] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [costReduction, setCostReduction] = useState(0);
  const [revenueIncrease, setRevenueIncrease] = useState(0);

  // Target values
  const targets = {
    clientsRevenue: 11.5,
    profitIncrease: 21.9,
    transactions: 21.9,
    costReduction: 300,
    revenueIncrease: 300
  };

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startCounting();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Counting animation function
  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const interval = duration / steps;

    // Clients Revenue (11.5M)
    let currentClients = 0;
    const clientsStep = targets.clientsRevenue / steps;
    const clientsTimer = setInterval(() => {
      currentClients += clientsStep;
      if (currentClients >= targets.clientsRevenue) {
        setClientsRevenue(targets.clientsRevenue);
        clearInterval(clientsTimer);
      } else {
        setClientsRevenue(currentClients);
      }
    }, interval);

    // Profit Increase (21.9M)
    let currentProfit = 0;
    const profitStep = targets.profitIncrease / steps;
    const profitTimer = setInterval(() => {
      currentProfit += profitStep;
      if (currentProfit >= targets.profitIncrease) {
        setProfitIncrease(targets.profitIncrease);
        clearInterval(profitTimer);
      } else {
        setProfitIncrease(currentProfit);
      }
    }, interval);

    // Transactions (21.9M)
    let currentTransactions = 0;
    const transactionsStep = targets.transactions / steps;
    const transactionsTimer = setInterval(() => {
      currentTransactions += transactionsStep;
      if (currentTransactions >= targets.transactions) {
        setTransactions(targets.transactions);
        clearInterval(transactionsTimer);
      } else {
        setTransactions(currentTransactions);
      }
    }, interval);

    // Cost Reduction (300+)
    let currentCost = 0;
    const costStep = targets.costReduction / steps;
    const costTimer = setInterval(() => {
      currentCost += costStep;
      if (currentCost >= targets.costReduction) {
        setCostReduction(targets.costReduction);
        clearInterval(costTimer);
      } else {
        setCostReduction(currentCost);
      }
    }, interval);

    // Revenue Increase (300+)
    let currentRevenue = 0;
    const revenueStep = targets.revenueIncrease / steps;
    const revenueTimer = setInterval(() => {
      currentRevenue += revenueStep;
      if (currentRevenue >= targets.revenueIncrease) {
        setRevenueIncrease(targets.revenueIncrease);
        clearInterval(revenueTimer);
      } else {
        setRevenueIncrease(currentRevenue);
      }
    }, interval);
  };

  // Format numbers
  const formatNumber = (num, decimals = 1, suffix = '') => {
    if (num === 0) return '0';
    return num.toFixed(decimals) + suffix;
  };

  return (
    <div className="performance-dashboard" ref={sectionRef}>
      {/* Background Pattern */}
      {/* <div className="background-pattern"></div> */}
      
      <div className="container">
        <div className="content-wrapper">
          {/* Left Section */}
          <div className="left-section">
            <div className="indicator-badge">
              <Image src={left} alt="Left Decoration" className="decoration-img" />
              <span className="text">Indicator</span>
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
                <Image src={man} alt="Profile 3" className="profile-img" />
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
          
          {/* Right Section with Animated Counters */}
          <div className="right-section">
            <div className="metrics-grid">
              <div className="metric-card blue">
                <p className="metric-value counting">
                  {formatNumber(clientsRevenue, 1, 'M+')}
                </p>
                <p className="metric-label">Clients Revenue</p>
              </div>
              
              <div className="metric-card light-blue">
                <p className="metric-value counting">
                  {formatNumber(profitIncrease, 1, 'M+')}
                </p>
                <p className="metric-label">Profit Increase</p>
              </div>
              
              <div className="metric-card pink">
                <p className="metric-value counting">
                  {formatNumber(transactions, 1, 'M+')}
                </p>
                <p className="metric-label">Transactions Recorded</p>
              </div>
              
              <div className="metric-card purple">
                <p className="metric-value counting">
                  {Math.floor(costReduction)}+
                </p>
                <p className="metric-label">Cost Reduction</p>
              </div>
              
              <div className="metric-card purple-pink full-width">
                <p className="metric-value counting">
                  {Math.floor(revenueIncrease)}+
                </p>
                <p className="metric-label">Revenue Increase</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bottom-text">
          {/* <p>Your preferred ERP for stone and marble companies in South Florida</p> */}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;