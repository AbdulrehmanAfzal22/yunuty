"use client";

import React, { useState } from "react";
import Image from "next/image";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
import "./faq.css";

const faqData = [
  {
    question: "What is YunutyConnect?",
    answer:
      "YunutyConnect is Yunuak’s all-in-one ERP system designed to help organizations streamline operations, improve efficiency, and boost performance. It connects every part of your business—finance, supply chain, inventory, and more into a single, easy-to-use platform.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes. For monthly plans, you can change at any time, with updates applied to your next billing cycle. For annual plans, upgrades are available anytime with a prorated adjustment, while downgrades take effect at the end of the term. This way, YunutyConnect adapts to your business needs while keeping costs under control.",
  },
  {
    question: "What resources does Yunak provide?",
    answer:
      "Yunuak provides expert consulting, training, and ongoing support, along with access to YunutyConnect, mobile tools, and best-practice frameworks. These resources ensure your team can streamline operations, adapt quickly, and achieve long-term growth.",
  },
  {
    question: "What benefits will I see after implementation?",
    answer:
      "With YunutyConnect, you’ll gain greater efficiency, streamlined workflows, real-time visibility, and cost savings. The system helps you boost revenue, save time, and scale confidently, giving your business the tools to work smarter and grow faster.",
  },
  {
    question: "What’s the timeline for implementation?",
    answer:
      "The timeline depends on your organization’s size, processes, and level of customization. While many clients can have YunutyConnect running within weeks, projects with additional add-ons or tailored features may take longer. Before implementation, we take time to understand your operations and workflows, ensuring the system is aligned with your needs. This approach guarantees a smooth rollout and sets the foundation for long-term success.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="colorbg">
        
        <section className="faq-hero">
              <div className="secimg">
            <Image src={left} alt="Decorative left accent" />
            &nbsp;&nbsp;&nbsp;
            <p>FAQ</p>
            &nbsp;&nbsp;&nbsp;
            <Image src={right} alt="Decorative right accent" />
                </div>
        
      <div className="faq-hero-content">
        <h3>
          Get answers to your questions <br />
          in our FAQ's
        </h3>

        <p>
          Streamline your inquiries—explore our FAQs to save time
        </p>
      </div>
    </section>
    <div className="faqcard">
    <section className="faq">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleItem(index)}>
            <h3>{item.question}</h3>
            <span className="icon">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>

          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
    </div>
    </div>
    </>
  );
};

export default FAQSection;
