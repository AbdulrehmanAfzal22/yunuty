import React from "react";
import "./helpcenterhero.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "@/app/page/navbar/page";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import FAQSection from "../faq/page";
import DiscoverSection from "@/app/about/discover/page";
import ProductivityHero from "../faqgrid/page";
import Footer from "@/app/page/footer/page";

const Helpcenterhero = () => {
  return (
    <>
      <Navbar/>
      <section className="help-hero">
        <div className="help-hero-content">
          <div className="help-section-img">
            <Image src={left} alt="Decorative left accent" />
            &nbsp;&nbsp;&nbsp;
            <p>Help</p>
            &nbsp;&nbsp;&nbsp;
            <Image src={right} alt="Decorative right accent" />
          </div>

          <h1>
            All-in-One Intellectual <br />
            Resource Hub
          </h1>

          <p>
            Where knowledge meets efficiency, everything
            <br />
            you need to make the most of your ERP.
          </p>

          <div className="help-search-box">
            <div className="help-search-input">
              <FaSearch className="help-search-icon" />
              <input type="text" placeholder="Search Here..." />
            </div>
            <button>Search</button>
          </div>
        </div>
      </section>

      <div className="help-section-cards">
        <section className="help-categories">

<div className="help-card">
            <h2>Dashboards</h2>
            <p>
              View real-time business insights
              <br />
              through customizable
            </p>
          </div>

          <div className="help-card">
            <h2>Contacts</h2>
            <p>
              Centralize and manage all
              <br />
              customer and vendor...
            </p>
          </div>

          <div className="help-card">
            <h2>Products</h2>
            <p>
              Track product details, pricing,
              <br />
              and availability in real time.
            </p>
          </div>

          <div className="help-card">
            <h2>CRM</h2>
            <p>
              Manage leads, track 
              <br />
              engagement, and strengthen
            </p>
          </div>
        </section>

        <section className="help-categories">
          <div className="help-card">
            <h2>Sales</h2>
            <p>
              Streamline quotes, invoices, and
              <br />
              sales performance tracking..
            </p>
          </div>

          <div className="help-card">
            <h2>Accounting</h2>
            <p>
              Automate bookkeeping,
              <br />
              reporting, and payment...
            </p>
          </div>

          <div className="help-card">
            <h2>WMS</h2>
            <p>
              Control inventory, orders, and
              <br />
              warehouse operations efficiently.
            </p>
          </div>
            <div className="help-card">
            <h2>Purchase</h2>
            <p>
              Manage suppliers, purchase
              <br />
              orders, and procurement...
            </p>
          </div>
        </section>

              </div>
<FAQSection/>
 {/* <ProductivityHero/>  */}
    <DiscoverSection/>
      <Footer/>
    </>
  );
};

export default Helpcenterhero;