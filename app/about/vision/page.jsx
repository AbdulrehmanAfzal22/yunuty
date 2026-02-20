"use client";

import { useEffect, useRef } from "react";
import { Rocket, Cog, Cpu, ChartNoAxesCombined, CloudDownload, Handshake } from "lucide-react";
import "./vision.css";
import Image from "next/image";
import decorLeft from "../../../public/assests/sub-title-left.svg";
import decorRight from "../../../public/assests/sub-title-right.svg";

export default function Vision() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      <div className="subtitle-row1">
        <Image src={decorLeft} alt="decor left" width={80} height={24} />
        &nbsp;&nbsp;&nbsp;
        <p className="hero-about__label">Values</p>
        &nbsp;&nbsp;&nbsp;
        <Image src={decorRight} alt="decor right" width={80} height={24} />
      </div>

      <div className="img" />

      {/* Heading section */}
      <div className="vision-page-container">
        <h5>The Values That Drives You</h5>
        <p className="subtitle">
          Harnessing the power of artificial intelligence to revolutionize
          industries
          <br />
          and enhance human experiences.
        </p>
      </div>

      {/* Row 1 */}
      <div className="firstsecond">
        <section className="mission-section">
          <div
            className="mission-card animate-on-scroll mission-bg-card"
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <div className="mission-icon">
              <div className="icon-circles">
                <div className="circle middle"></div>
                <div className="circle inner"></div>
              </div>
              <Rocket size={30} strokeWidth={1.5} />
            </div>
            <h2 className="mission-title">Our Mission</h2>
            <div className="mission-text-box">
              <p>
                To empower organizations with integrated, future-ready solutions
                that meet today's challenges and enable scalable, resilient growth.
              </p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div
            className="mission-card animate-on-scroll digital-bg-card"
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <div className="mission-icon">
              <div className="icon-circles">
                <div className="circle middle"></div>
                <div className="circle inner"></div>
              </div>
              <Cog size={30} strokeWidth={1.5} />
            </div>
            <h2 className="mission-title">Digital Transformation</h2>
            <div className="mission-text-box">
              <p>
                We build tailored roadmaps that align technology, culture, and strategy to drive lasting innovation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Row 2 */}
      <div className="thirdfourth">
        <section className="mission-section">
          <div
            className="mission-card animate-on-scroll process-bg-card"
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <div className="mission-icon">
              <div className="icon-circles">
                <div className="circle middle"></div>
                <div className="circle inner"></div>
              </div>
              <Cpu size={30} strokeWidth={1.5} />
            </div>
            <h2 className="mission-title">Process Engineering</h2>
            <div className="mission-text-box">
              <p>
                We optimize workflows using Lean, Quality Management, and Continuous Improvement to achieve measurable efficiency gains.
              </p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div
            className="mission-card animate-on-scroll yunutyconnect"
            ref={(el) => (cardRefs.current[3] = el)}
          >
            <div className="mission-icon">
              <div className="icon-circles">
                <div className="circle middle"></div>
                <div className="circle inner"></div>
              </div>
              <ChartNoAxesCombined size={30} strokeWidth={1.5} />
            </div>
            <h2 className="mission-title">YunutyConnect ERP & Mobile Apps</h2>
            <div className="mission-text-box">
              <p>
                Our cloud-based ERP and mobile tools deliver real-time visibility, agile decision-making, and streamlined supply chain.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Row 3 */}
      <div className="fifthsixth">
        <section className="mission-section">
          <div
            className="mission-card animate-on-scroll shaping"
            ref={(el) => (cardRefs.current[4] = el)}
          >
            <div className="mission-icon">
              <div className="icon-circles">
                <div className="circle middle"></div>
                <div className="circle inner"></div>
              </div>
              <CloudDownload size={30} strokeWidth={1.5} />
            </div>
            <h2 className="mission-title">
              Shaping Supply Chains for Better Tomorrow
            </h2>
            <div className="mission-text-box">
              <p>
                We design supply chain and operational strategies that unlock efficiency, resilience, and sustainable growth
              </p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div
            className="mission-card animate-on-scroll patnership"
            ref={(el) => (cardRefs.current[5] = el)}
          >
            <div className="mission-icon">
              <div className="icon-circles">
                <div className="circle middle"></div>
                <div className="circle inner"></div>
              </div>
              <Handshake size={30} strokeWidth={1.5} />
            </div>
            <h2 className="mission-title">
              Partnerships Built on Trust and Result
            </h2>
            <div className="mission-text-box">
              <p>
                We foster relationships built on trust and collaboration, transforming goals into results that last.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}