"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../../public/assests/logo.png";
import "./navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPagesOpen(false);
  };

  const isHomeActive =
    pathname === "/" || pathname === "/page/mainhero";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
         <Image
  src={logo}
  alt="Logo"
  width={250}
  height={100}
  className="logo-image"
/>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              href="/page/mainhero"
              className={isHomeActive ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about/mainabout"
              className={pathname === "/about/mainabout" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/helpcenter/helpcenterhero"
              className={
                pathname === "/helpcenter/helpcenterhero" ? "active" : ""
              }
              onClick={closeMenu}
            >
              Help Center
            </Link>
          </li>

          <li>
            <Link
              href="/privacy-policy/privacybox"
              className={
                pathname === "/privacy-policy/privacybox" ? "active" : ""
              }
              onClick={closeMenu}
            >
              Privacy Policy
            </Link>
          </li>

          {isPagesOpen && (
            <>
              <li>
                <Link href="/pricing" onClick={closeMenu}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" onClick={closeMenu}>
                  FAQ
                </Link>
              </li>
            </>
          )}

          {/* Mobile Get Started Button */}
          <li className="mobile-btn-wrapper">
            <button className="get-started-btn mobile" onClick={closeMenu}>
              Get Started
            </button>
          </li>
        </ul>

        {/* Desktop Get Started Button */}
        <button className="get-started-btn desktop">Get Started</button>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
}
