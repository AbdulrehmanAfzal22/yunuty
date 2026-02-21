import React from "react";
import "./footer.css";
import Image from "next/image";
import logo from "../../../public/assests/logo.png";
import { FaFacebookF, FaLinkedinIn, FaDribbble,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        
   
        <div className="footer-left">
          <div className="logo-placeholder">
           <Image src={logo} alt="Company Logo" />
          </div>

          <p className="footer-description">
            Advanced Supply Chain, Engineering, and Technology Solutions.
          </p>
        </div>


     
        <div className="footer-center">
          <div>
            <h4>Phone Number</h4>
            <p>+1 (561) 648-5791</p>
          </div>

           <div>
            <h4>Email</h4>
            <p>notify@yunuak.com</p>
          </div>

           <div>
            <h4>Location</h4>
            <p>notify@yunuak.com</p>
          </div>
        </div>

        <div className="footer-right">
          <p>Subscribe to our newsletter</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>
              Submit →
            </button>
          </div>

          {/* <div className="social-icons">
            <div className="icon1"><FaInstagram /></div>
            <div className="icon1"><FaLinkedinIn /></div>
          </div> */}
        </div>

      </div>

      <div className="footer-bottom">
        <p className="year">© 2026 | All Rights Reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
