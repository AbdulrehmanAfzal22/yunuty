import React from "react";
import "./helpcenterhero.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "@/app/page/navbar/page";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import FAQSection from "../faq/page";
import DiscoverSection from "@/app/about/discover/page";
import Footer from "@/app/page/footer/page";
import dashboard from "../../../public/assests/Dashboards.png";
import contact from "../../../public/assests/Contacts.png"
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
    description: "View real-time business insights through customizable dashboards",
    img: dashboard,
  },
  {
    title: "Contacts",
    description: "Centralize and manage all customer and vendor information",
    img: contact, // replace with: contactsImg
  },
  {
    title: "Products",
    description: "Track product details, pricing, and availability in real time.",
    img: products, // replace with: productsImg
  },
  {
    title: "CRM",
    description: "Manage leads, track engagement, and strengthen relationships",
    img: crm, // replace with: crmImg
  },
  {
    title: "Sales",
    description: "Streamline quotes, invoices, and sales performance",
    img: sale, // replace with: salesImg
  },
  {
    title: "Accounting",
    description: "Automate bookkeeping, reporting, and payment processing",
    img: accounting, // replace with: accountingImg
  },
  {
    title: "WMS",
    description: "Control inventory, orders, and warehouse operations efficiently",
    img: wms, // replace with: wmsImg
  },
  {
    title: "Purchase",
    description: "Manage suppliers, purchase orders, and procurement processes",
    img: purchase, // replace with: purchaseImg
  },
  {
    title: "Quickbooks Sync",
    description: "Generate comprehensive analytics and performance reports",
    img: qb, // replace with: reportsImg
  },
];

const Helpcenterhero = () => {
  return (
    <>
      <Navbar />

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

          {/* <div className="help-search-box">
            <div className="help-search-input">
              <FaSearch className="help-search-icon" />
              <input type="text" placeholder="Search Here..." />
            </div>
            <button>Search</button>
          </div> */}
        </div>
      </section>

      <div className="help-section-cards">
        {/* Featured Large Box */}
        <div className="help-featured-card">
          <h2>Empowering Smarter Connections for Better Business</h2>
          <p>
            Ready, set, succeed! Navigate YunutyConnect and turn connections into measurable growth
          </p>
          <div className="help-featured-video">
            <div className="help-video-placeholder">
              <div className="help-play-button">▶</div>
              <span>Watch Tutorial Video</span>
            </div>
          </div>
        </div>

        {/* 3x3 Grid of 9 Cards */}
        <section className="help-grid-container">
          {cardData.map((card, index) => (
            <div className="help-card" key={index}>

              {/* Slash accent + Title */}
              <div className="help-card-header">
                <span className="help-card-slash">/</span>
                <h2>{card.title}</h2>
              </div>

              {/* Description */}
              <p>{card.description}</p>

              {/* Image — always renders, no null check */}
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

      <FAQSection />
      <DiscoverSection />
      <Footer />
    </>
  );
};

export default Helpcenterhero;