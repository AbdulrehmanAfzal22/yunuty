"use client;"
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import "./faqgrid.css";

export default function ProductivityHero() {
  return (
    <section className="productivity-hero">
        
      <div className="content">
        <h1>
          Discover the future of productivity,
          <br />
          optimize your processes and make
          <br />
          every minute count.
        </h1>

        <p>
          Get a demo and unleash your productivity. Explore the latest
          technology <br /> and have a great experience!
        </p>

        <button className="demo-btn">Get A Demo</button>
      </div>
    </section>
  );
}
