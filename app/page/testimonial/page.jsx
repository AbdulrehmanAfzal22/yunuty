"use client";

import React, { useState, useRef, useEffect } from "react";
import "./testimonial.css";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
export default function TestimonialCards() {
  const [particles, setParticles] = useState([]);
  const cardsContainerRef = useRef(null);
  const testimonials = [
    {
      content: "YuntuConnect has streamlined our order-to-delivery process, keeping sales and operations perfectly aligned. It helps us move deals faster, reduce team friction, improve the customer experience, and close more efficiently.",
      author: "Jennifer Reed",
      title: "Operations Manager",
      initial: "J"
    },
    {
      content: "YuntuConnect gave us the structure and scalability our branch operations desperately needed. The system supports our growth, improves cross-departmental collaboration, and delivers clear operational insights. It’s not just software.",
      author: "Marcus Chen",
      title: "Marketing Director",
      initial: "M"
    },
    {
      content: "YuntuConnect has streamlined our entire order-to-delivery workflow, keeping sales and operations perfectly aligned. We can now move deals forward faster, reduce friction between teams, deliver a better customer experience, and close more deals efficiently.",
      author: "Sarah Johnson",
      title: "CEO",
      initial: "S"
    }
  ];

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 15
    }));
    setParticles(particleArray);
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

      <div className="container">
        <div className="center-content">
            <Image src={left} alt="Left Decoration" className="decoration-left" />
            &nbsp;&nbsp;&nbsp;
          <span className="testimonial-badge1">Testimonial</span>
          &nbsp;&nbsp;&nbsp;
            <Image src={right} alt="Right Decoration" className="decoration-right" />
        </div>

        <h1>
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
            />
          ))}
        </div>

        <div className="navigation-dots">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">
            Discover the future of productivity, optimize your<br />
            processes and make every minute count.
          </h2>
          <p className="cta-subtitle">
            Harness AI-powered automation for a more efficient and high-<br />
            yield work in great importance
          </p>
          <button className="cta-button">Start a Project</button>
        </div>
      </div>
    </div>
  );
}

function DraggableCard({ testimonial, index, containerRef }) {
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const dragStart = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current && cardRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const cardWidth = 320;

      let left, top, rot;

      if (index === 0) {
        left = containerWidth / 2 - 500;
        top = containerHeight / 2 - 150;
        rot = -5;
      } else if (index === 1) {
        left = containerWidth / 2 - cardWidth / 2;
        top = containerHeight / 2 - 200;
        rot = 0;
      } else {
        left = containerWidth / 2 + 180;
        top = containerHeight / 2 - 150;
        rot = 5;
      }

      setPosition({ x: left, y: top });
      setInitialPosition({ x: left, y: top });
      setRotation(rot);
    }
  }, [index, containerRef]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX || e.touches?.[0]?.clientX,
      y: e.clientY || e.touches?.[0]?.clientY
    };
    offset.current = { x: 0, y: 0 };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;

    const deltaX = clientX - dragStart.current.x;
    const deltaY = clientY - dragStart.current.y;

    setPosition({
      x: initialPosition.x + deltaX,
      y: initialPosition.y + deltaY
    });

    setRotation(deltaX / 20);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    setTimeout(() => {
      setPosition(initialPosition);
      setRotation(index === 0 ? -5 : index === 1 ? 0 : 5);
    }, 50);
  };

  useEffect(() => {
    if (isDragging) {
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
  }, [isDragging]);

  return (
    <div
      ref={cardRef}
      className={`testimonial-card card-float-${index}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)`,
        zIndex: index === 1 ? 10 : isDragging ? 100 : 1,
        transition: isDragging ? "none" : "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      <div className="card-content">{testimonial.content}</div>
      <div className="card-author">
        <div className="author-avatar">{testimonial.initial}</div>
        <div className="author-info">
          <div className="author-name">{testimonial.author}</div>
          <div className="author-title">{testimonial.title}</div>
        </div>
      </div>
      <div className="quote-icon">"</div>
    </div>
  );
}
