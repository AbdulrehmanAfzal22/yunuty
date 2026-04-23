"use client";
import React from "react";
import "./footer.css";
import Image from "next/image";
import logo from "../../../public/assests/logo12.png";
import { Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import linkedin from "../../../public/assests/linkedin.png";

const Footer = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/notify@yunuak.com", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      // alert("Thank you! You have subscribed.");
      form.reset();
    } catch (error) {
      // alert("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-overlay" />

      <div className="footer-container">

        {/* ── LEFT ── */}
        <div className="footer-left">

          <div className="logo-placeholder">
            <Image src={logo} alt="Yunuak Logo" height={44} style={{ width: "auto", height: "44px" }} />
          </div>

          <div className="footer-social-row">
            <span className="footer-social-label">Keep in touch:</span>

            <Image src={linkedin} alt="LinkedIn" height={19} width={22} />

            <p className="footer-social-label">
              Yunuak
            </p>

            <a
              href="https://www.instagram.com/yunutyconnect?igsh=ZTMwZGRhdHQwcWJ5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={15} strokeWidth={2} />
            </a>

            <p className="footer-social-label">
              YunutyConnect
            </p>
          </div>

          <p className="footer-description">
            ADVANCED SUPPLY CHAIN, ENGINEERING, AND TECHNOLOGY SOLUTIONS.
          </p>

        </div>

        {/* ── CENTER — HQ block ── */}
        <div className="footer-center">
          <div className="footer-hq">

            <div className="footer-hq-title">
              <span className="footer-hq-slash">/</span>
              <span>MIAMI — HEADQUARTERS</span>
            </div>

            <div className="footer-hq-item">
              <span className="footer-hq-icon footer-hq-icon--pin">
                <MapPin size={14} strokeWidth={2} />
              </span>
              <span>Doral, Florida</span>
            </div>

            <div className="footer-hq-item">
              <span className="footer-hq-icon footer-hq-icon--phone">
                <Phone size={13} strokeWidth={2} />
              </span>
              <span>+1 (561) 648-5791</span>
            </div>

            <div className="footer-hq-item">
              <span className="footer-hq-icon footer-hq-icon--mail">
                <Mail size={13} strokeWidth={2} />
              </span>
              <span>notify@yunuak.com</span>
            </div>

          </div>
        </div>

        {/* ── RIGHT — newsletter ── */}
        <div className="footer-right">
          <p className="newsletter-label">Subscribe to our newsletter</p>

          <form
            action="https://formsubmit.co/notify@yunuak.com"
            method="POST"
            className="newsletter"
            onSubmit={handleSubmit}
          >
            <input type="email" name="email" placeholder="Enter your email" required />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">Submit ↗</button>
          </form>

        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 Yunuak LLC. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>

    </footer>
  );
};

export default Footer;