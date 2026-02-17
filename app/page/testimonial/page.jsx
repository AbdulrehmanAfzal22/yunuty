"use client";

import React, { useState, useRef, useEffect } from "react";
import "./testimonial.css";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import evan from '../../../public/assests/evan.png';
import ariyna from '../../../public/assests/ariyna.png';
import girl from '../../../public/assests/girl.png';
import man from '../../../public/assests/man.png';

export default function TestimonialCards() {
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const cardsContainerRef = useRef(null);

  const testimonials = [
    {
      content:
        "YunutyConnect has streamlined our order-to-delivery process, keeping sales and operations perfectly aligned. It helps us move deals faster, reduce team friction, improve the customer experience, and close more efficiently.",
      author: "Jennifer Reed",
      title: "Operations Manager",
      initial: "J",
      image: evan,
    },
    {
      content:
        "YunutyConnect gave us the structure and scalability our branch operations desperately needed. The system supports our growth, improves cross-departmental collaboration, and delivers clear operational insights. It's not just software.",
      author: "Marcus Chen",
      title: "Marketing Director",
      initial: "M",
      image: girl,
    },
    {
      content:
        "YunutyConnect has streamlined our entire order-to-delivery workflow, keeping sales and operations perfectly aligned. We can now move deals forward faster, reduce friction between teams, deliver a better customer experience, and close more deals efficiently.",
      author: "Sarah Johnson",
      title: "CEO",
      initial: "S",
      image: man,
    },
  ];

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 15
    }));
    setParticles(particleArray);

    // ✅ Match CSS breakpoint exactly (768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="testimonial-section">
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="container1">
        <div className="center-content">
          <Image src={left} alt="Left Decoration" className="decoration-left" />
          <span className="testimonial-badge1">Testimonial</span>
          <Image src={right} alt="Right Decoration" className="decoration-right" />
        </div>

        <h1 className="test">
          Our clients love to<br />use our products.
        </h1>

        <p className="subtitle">
          Elevate Your Inbox: Uncover our Most Valued Content Now.
        </p>

        <div className="cards-container" ref={cardsContainerRef}>
          {testimonials.map((testimonial, index) => (
            <DraggableCard
              key={index}
              testimonial={testimonial}
              index={index}
              containerRef={cardsContainerRef}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="navigation-dots">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

function DraggableCard({ testimonial, index, containerRef, isMobile }) {
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // ✅ Skip JS positioning entirely on mobile — CSS handles layout
    if (isMobile || !containerRef.current || !cardRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const cardWidth = cardRef.current.offsetWidth || 320;

    let left, top, rot;

    if (index === 0) {
      // Left card
      left = containerWidth / 2 - cardWidth - 160;
      top = containerHeight / 2 - 200;
      rot = -5;
    } else if (index === 1) {
      // Center card (front)
      left = containerWidth / 2 - cardWidth / 2;
      top = containerHeight / 2 - 220;
      rot = 0;
    } else {
      // Right card
      left = containerWidth / 2 + 160;
      top = containerHeight / 2 - 200;
      rot = 5;
    }

    setPosition({ x: left, y: top });
    setInitialPosition({ x: left, y: top });
    setRotation(rot);
  }, [index, containerRef, isMobile]);

  const handleMouseDown = (e) => {
    if (isMobile) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX || e.touches?.[0]?.clientX,
      y: e.clientY || e.touches?.[0]?.clientY
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMobile) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;
    const deltaX = clientX - dragStart.current.x;
    const deltaY = clientY - dragStart.current.y;
    setPosition({ x: initialPosition.x + deltaX, y: initialPosition.y + deltaY });
    setRotation(deltaX / 20);
  };

  const handleMouseUp = () => {
    if (!isDragging || isMobile) return;
    setIsDragging(false);
    setTimeout(() => {
      setPosition(initialPosition);
      setRotation(index === 0 ? -5 : index === 1 ? 0 : 5);
    }, 50);
  };

  useEffect(() => {
    if (isDragging && !isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleMouseMove);
      document.addEventListener("touchend", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleMouseMove);
        document.removeEventListener("touchend", handleMouseUp);
      };
    }
  }, [isDragging, isMobile]);

  // ✅ On mobile: no inline styles — pure CSS controls layout
  // ✅ On desktop: JS absolute positioning for draggable fan layout
  const cardStyle = isMobile ? {} : {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `rotate(${rotation}deg)`,
    zIndex: index === 1 ? 10 : isDragging ? 100 : 1,
    transition: isDragging ? "none" : "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
  };

  return (
    <div
      ref={cardRef}
      className={`testimonial-card card-float-${index}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={cardStyle}
    >
      <div className="card-content">{testimonial.content}</div>
      <div className="card-author">
        <Image
          src={testimonial.image}
          alt={testimonial.author}
          className="author-avatar"
          width={40}
          height={40}
        />
        <div className="author-info">
          <div className="author-name">{testimonial.author}</div>
          <div className="author-title">{testimonial.title}</div>
        </div>
      </div>
      <div className="quote-icon">"</div>
    </div>
  );
}