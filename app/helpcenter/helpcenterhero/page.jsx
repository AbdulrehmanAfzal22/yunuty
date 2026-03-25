import React from "react";
import "./helpcenterhero.css";
import Navbar from "@/app/page/navbar/page";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import FAQSection from "../faq/page";
import DiscoverSection from "@/app/about/discover/page";
import Footer from "@/app/page/footer/page";
import dashboard from "../../../public/assests/Dashboards.png";
import contact from "../../../public/assests/Contacts.png";
import products from "../../../public/assests/Products.png";
import crm from "../../../public/assests/CRM.png";
import wms from "../../../public/assests/WMS.png";
import sale from "../../../public/assests/Sales.png";
import accounting from "../../../public/assests/Accounting.png";
import purchase from "../../../public/assests/Purchasing.png";
import qb from "../../../public/assests/qb.png";
const cardData = [
  {
    title: "Dashboards",
    description: "Gain real-time insights with fully customizable business dashboards.",
    img: dashboard,
  },
  {
    title: "Contacts",
    description: " Centralize and manage all customer and vendor information in one place.",
    img: contact,
  },
  {
    title: "Products",
    description: "Monitor product details, pricing, and availability in real time.",
    img: products,
  },
  {
    title: "CRM",
    description: "Manage leads, generate estimates, and build stronger customer relationships.",
    img: crm,
  },
  {
    title: "Sales",
    description: "Track orders, accept online payments, capture e-signatures, and update customers in real time.",
    img: sale,
  },
  {
    title: "Accounting",
    description: "Automate bookkeeping, reporting, and payment processes efficiently.",
    img: accounting,
  },
  {
    title: "WMS",
    description: "Manage inventory with barcode scanning, lot tracking, and multi-warehouse support.",
    img: wms,
  },
  {
    title: "Purchase",
    description: " Streamline supplier management, purchase orders, and procurement workflows.",
    img: purchase,
  },
  {
    title: "Quickbooks Sync",
    description: "Enable real-time synchronization for financial and operational alignment.",
    img: qb,
  },
];

const Helpcenterhero = () => {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="help-hero">
        <div className="help-hero-content">
          <div className="help-section-img">
            <Image src={left} alt="Decorative left accent" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>Resources</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={right} alt="Decorative right accent" />
          </div>

          <h1>
            All-in-One Intellectual <br />
            Resource Hub
          </h1>
{/* 
          <p>
            Where knowledge meets efficiency, everything
            <br />
            you need to make the most of your ERP.
          </p> */}
        </div>
      </section>

      {/* ── Full-width dark background wrapper (fixes white sides) ── */}
      <div className="help-section-cards-outer">
        <div className="help-section-cards">

          {/* Featured Large Box */}
          <div className="help-featured-card">
            <div className="help-card-header">
              <span className="help-card-slash">/</span>
              <h2>Empowering Smarter Connections for Better Business</h2>
            </div>
            <p>
              Ready, set, succeed! Navigate YunutyConnect and turn connections
              into measurable growth
            </p>
            <div className="help-featured-video">
              <div className="help-video-placeholder">
                <div className="help-play-button">▶</div>
                <span>Watch Tutorial Video</span>
              </div>
            </div>
          </div>

          {/* 3×3 Grid of 9 Cards */}
          <section className="help-grid-container">
            {cardData.map((card, index) => (
              <div className="help-card" key={index}>
                <div className="help-card-header">
                  <span className="help-card-slash">/</span>
                  <h2>{card.title}</h2>
                </div>
                <p>{card.description}</p>
                <div className="help-card-img-wrapper">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={600}
                    height={180}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </section>

        </div>
      </div>

      <FAQSection />
      <DiscoverSection />
      <Footer />
    </>
  );
};

export default Helpcenterhero;