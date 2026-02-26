"use client";

import { useState, useEffect, useRef } from "react";
import { User, Phone, Mail, MessageSquare, Send, Zap, Lock, X } from "lucide-react";
import "./contact.css";

export default function ContactForm() {
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const [particles, setParticles] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    const pts = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 6,
    }));
    setParticles(pts);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    await fetch("https://formsubmit.co/ajax/abdulrehmanafzal60@gmail.com", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);

    // Clear all inputs
    formRef.current.reset();

    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) {
    return (
      <div className="cf-closed-screen">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-overlay" />
        <div className="cf-closed-content">
          <div className="cf-closed-icon">
            <Mail size={28} strokeWidth={1.5} color="#8C5FFF" />
          </div>
          <h2 className="cf-closed-title">See you soon!</h2>
          <p className="cf-closed-sub">The contact form has been closed.</p>
          <button
            className="cf-reopen-btn"
            onClick={() => {
              setVisible(true);
              setClosing(false);
            }}
          >
            Reopen Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`cf-root ${closing ? "cf-root--closing" : ""}`}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-overlay" />

      {particles.map((p) => (
        <div
          key={p.id}
          className="star"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            "--op": p.opacity,
            "--dur": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}

      <div className={`cf-card ${closing ? "cf-card--closing" : ""}`}>

        <a href="/">
          <button className="cf-close-btn" aria-label="Close form">
            <X size={16} strokeWidth={2.5} />
          </button>
        </a>

        <div className="cf-badge">
          <span className="cf-badge-dot" />
          Get in Touch
        </div>

        <h1 className="cf-heading">
          Contact <span>Us</span>
        </h1>

        <p className="cf-sub">
          Have a project in mind or just want to say hello?
          We'd love to hear from you!
        </p>

        <div className="cf-divider" />

        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Message" />
          <input type="hidden" name="_template" value="table" />

          <div className="cf-row">
            <div className={`cf-field ${focused === "name" ? "is-focused" : ""}`}>
              <label className="cf-label">Full Name</label>
              <div className="cf-input-wrap">
                <User className="cf-icon" size={15} strokeWidth={1.8} />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="cf-input"
                  required
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                />
                <div className="cf-field-glow" />
              </div>
            </div>

            <div className={`cf-field ${focused === "phone" ? "is-focused" : ""}`}>
              <label className="cf-label">Phone Number</label>
              <div className="cf-input-wrap">
                <Phone className="cf-icon" size={15} strokeWidth={1.8} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="cf-input"
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused("")}
                />
                <div className="cf-field-glow" />
              </div>
            </div>
          </div>

          <div className={`cf-field ${focused === "email" ? "is-focused" : ""}`}>
            <label className="cf-label">Email Address</label>
            <div className="cf-input-wrap">
              <Mail className="cf-icon" size={15} strokeWidth={1.8} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="cf-input"
                required
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
              />
              <div className="cf-field-glow" />
            </div>
          </div>

          <div className={`cf-field ${focused === "message" ? "is-focused" : ""}`}>
            <label className="cf-label">Your Message</label>
            <div className="cf-input-wrap">
              <MessageSquare className="cf-icon cf-icon--textarea" size={15} strokeWidth={1.8} />
              <textarea
                name="message"
                placeholder="Write your message here..."
                className="cf-textarea"
                required
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
              />
              <div className="cf-field-glow" />
            </div>
          </div>

          <button type="submit" className="cf-btn">
            <div className="cf-btn-shimmer" />
            <Send size={15} strokeWidth={2} />
            Send Message
          </button>
        </form>

        <div className="cf-info-row">
          <div className="cf-info-item">
            <div className="cf-info-icon">
              <Zap size={13} strokeWidth={2} color="#a78bff" />
            </div>
            <span>Reply within 24 hours</span>
          </div>
          <div className="cf-info-item">
            <div className="cf-info-icon">
              <Lock size={13} strokeWidth={2} color="#a78bff" />
            </div>
            <span>Your info stays private</span>
          </div>
        </div>
      </div>

      <div className={`cf-toast ${submitted ? "show" : ""}`}>
        <Send size={14} strokeWidth={2} />
        Message sent successfully!
      </div>
    </div>
  );
}