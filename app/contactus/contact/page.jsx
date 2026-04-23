"use client";
import React, { useState } from "react";
import "./contact.css";
import Navbar from "@/app/page/navbar/page";
import connect from "../../../public/assests/city.png";
import Image from "next/image";
import Footer1 from "../contact-footer/page";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/notify@yunuak.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          _subject: "New Contact Form Submission - Yunuak",
          _captcha: false,
        }),
      });

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        setMessage("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="cnt__page">

        <div className="cnt__bg-mesh" />

        <div className="cnt__header">
          <p className="cnt__kicker">YOUR COMPASS TO ERP EXCELLENCE</p>
          <h1 className="cnt__title">CONTACT US</h1>
          <p className="cnt__subtitle">
            Navigating smarter systems and seamless operations.
          </p>
          <div className="cnt__divider" />
        </div>

        <div className="cnt__body">

          <div className="cnt__left">
            <div className="cnt__img-wrap">
              <Image
                src={connect}
                alt="City"
                width={600}
                height={220}
                className="cnt__city-img"
              />
            </div>

            <div className="cnt__address">
              <div className="cnt__addr-title">
                <span className="cnt__addr-slash">/</span>
                <span>MIAMI — HEADQUARTERS</span>
              </div>

              <div className="cnt__addr-item">
                <span className="cnt__addr-icon cnt__addr-icon--pin">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                  </svg>
                </span>
                <span>Doral, Florida</span>
              </div>

              <div className="cnt__addr-item">
                <span className="cnt__addr-icon cnt__addr-icon--phone">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                  </svg>
                </span>
                <span>+1 (561) 648-5791</span>
              </div>

              <div className="cnt__addr-item">
                <span className="cnt__addr-icon cnt__addr-icon--mail">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <span>notify@yunuak.com</span>
              </div>
            </div>
          </div>

          <div className="cnt__right">
            <form className="cnt__form" onSubmit={handleSubmit}>
              <h2 className="cnt__form-title">Contact Us</h2>

              <div className="cnt__field">
                <label className="cnt__label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="cnt__input"
                  required
                />
              </div>

              <div className="cnt__field">
                <label className="cnt__label">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="cnt__input"
                  required
                />
              </div>

              <div className="cnt__field">
                <label className="cnt__label">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="cnt__input"
                />
              </div>

              <button type="submit" className="cnt__submit" disabled={loading}>
                {loading ? "Sending..." : "SUBMIT"}
              </button>

              {message && <p style={{ marginTop: "10px" }}>{message}</p>}
            </form>
          </div>

        </div>
      </div>
      <Footer1 />
    </>
  );
}