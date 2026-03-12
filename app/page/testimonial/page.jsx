"use client";

import React, { useState, useRef, useEffect } from "react";
import "./testimonial.css";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import evan from '../../../public/assests/evan.png'
import ariyna from '../../../public/assests/ariyna.png'
import girl from  '../../../public/assests/girl.png'
import man from  '../../../public/assests/man.png'

export default function TestimonialCards() {
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const cardsContainerRef = useRef(null);

  const testimonials = [
    {
      content: "YunutyConnect has streamlined our order-to-delivery process, keeping sales and operations perfectly aligned. It helps us move deals faster, reduce team friction, improve the customer experience, and close more efficiently.",
      author: "Jennifer Reed",
      title: "Operations Manager",
      initial: "J",
      image: evan,
    },
    {
      content: "YunutyConnect gave us the structure and scalability our branch operations desperately needed. The system supports our growth, improves cross-departmental collaboration, and delivers clear operational insights. It's not just software.",
      author: "Marcus Chen",
      title: "Marketing Director",
      initial: "M",
      image: girl,
    },
    {
      content: "YunutyConnect has streamlined our entire order-to-delivery workflow, keeping sales and operations perfectly aligned. We can now move deals forward faster, reduce friction between teams, deliver a better customer experience, and close more deals efficiently.",
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

    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="tsc-section">
      <div className="tsc-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="tsc-particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="tsc-container">
        <div className="tsc-center">
          <Image src={left} alt="Left Decoration" className="tsc-deco-left" />
          <span className="tsc-badge-label">Testimonials</span>
          <Image src={right} alt="Right Decoration" className="tsc-deco-right" />
        </div>

        <h1 className="tsc-heading">
          Whats Our Clients Say
        </h1>

     
        <div className="tsc-cards-wrap" ref={cardsContainerRef}>
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

        <div className="tsc-dots">
          <div className="tsc-dot"></div>
          <div className="tsc-dot active"></div>
          <div className="tsc-dot"></div>
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
    if (isMobile || !containerRef.current || !cardRef.current) return;

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
      className={`tsc-card tsc-float-${index}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={cardStyle}
    >
      <div className="tsc-card-body">{testimonial.content}</div>
      <div className="tsc-author">
        <Image
          src={testimonial.image}
          alt={testimonial.author}
          className="tsc-avatar"
          width={40}
          height={40}
        />
        <div className="tsc-author-info">
          <div className="tsc-author-name">{testimonial.author}</div>
          <div className="tsc-author-role">{testimonial.title}</div>
        </div>
      </div>
      <div className="tsc-quote-mark">"</div>
    </div>
  );
}