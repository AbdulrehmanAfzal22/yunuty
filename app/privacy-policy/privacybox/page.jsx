"use client";

import { useEffect, useRef } from "react";
import { Grid2x2 , Zap, Fan, DiamondPlus,Users} from "lucide-react";
// import DiscoverSection from "@/app/about/discover/page";
import Footer from "@/app/page/footer/page";
import Privacy from "../privacyhero/page";
import "./privacybox.css";

export default function Vision() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
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
<Privacy/>
      <div className="vision-row vision-row-1">
        <section className="vision-section">
          <div
            className="vision-card"
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <div className="vision-icon">
              <div className="icon-ring">
                <div className="icon-inner"></div>
                <div className="icon-middle"></div>
              </div>
              <Grid2x2 size={30} strokeWidth={1.5} />
            </div>
            <h2 className="vision-title">Types of Information We Gather</h2>
            <div className="vision-text">
              <p>
               We collect information required to operate the app
                 effectively, including user login details, contact information, company details,
                  addresses, and business records such as products, inventory counts, estimates,
                   and sales orders. We may also collect usage data, device information, and
                    diagnostic logs to monitor performance, improve features, and ensure system 
                    security
              </p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div
            className="vision-card"
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <div className="vision-icon">
              <div className="icon-ring">
                <div className="icon-inner"></div>
                <div className="icon-middle"></div>
              </div>
              <Zap size={30} strokeWidth={1.5} />
            </div>
            <h2 className="vision-title">Ways We Utilize Your Data</h2>
            <div className="vision-text">
              <p>
            Your data is used to authenticate users, manage inventory, create contacts, estimates,
and sales orders, and support daily business operations. We also use data to improve app
functionality, maintain system reliability, provide customer support, and enable
integrations with authorized third-party business tools. We do not sell personal data,
and we strictly limit access to authorized personnel only.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Third & Fourth Cards */}
      <div className="vision-row vision-row-2">
        <section className="vision-section">
          <div
            className="vision-card"
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <div className="vision-icon">
              <div className="icon-ring">
                <div className="icon-inner"></div>
                <div className="icon-middle"></div>
              </div>
              <Fan size={30} strokeWidth={1.5} />
            </div>
            <h2 className="vision-title">Cookies and Tracking Tools</h2>
            <div className="vision-text">
              <p>
            We place cookies to make your visit better — remembering your preferences, improving
             performance, analyzing usage, and showing more relevant content. Feel free to manage
              or turn them off in your browser settings (some features might not work perfectly 
              without them). By using the site, you agree to our cookie use.
              </p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div
            className="vision-card"
            ref={(el) => (cardRefs.current[3] = el)}
          >
            <div className="vision-icon">
              <div className="icon-ring">
                <div className="icon-inner"></div>
                <div className="icon-middle"></div>
              </div>
              <DiamondPlus size={30} strokeWidth={1.5} />
            </div>
            <h2 className="vision-title">Services from Third Parties</h2>
            <div className="vision-text">
              <p>
               We may integrate with trusted third-party services such as accounting, ERP, or cloud 
               infrastructure providers to support app functionality. Data shared with these 
               services is limited to what is necessary for operations and is handled according
                to their security and privacy standards. We do not allow third parties to use your
                 data for marketing purposes.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Fifth & Sixth Cards */}
      <div className="vision-row vision-row-3">
        <section className="vision-section">
          <div
            className="vision-card"
            ref={(el) => (cardRefs.current[4] = el)}
          >
            <div className="vision-icon">
              <div className="icon-ring">
                <div className="icon-inner"></div>
                <div className="icon-middle"></div>
              </div>
              <Users size={30} strokeWidth={1.5} />
            </div>
            <h2 className="vision-title">Contact Us with Your Questions or Concerns</h2>
            <div className="vision-text">
              <p>
              If you have any questions, concerns, or requests related to this Privacy Policy or 
              how your data is handled, please contact us. We are committed to addressing
               privacy-related inquiries promptly and transparently. You may reach us by email, 
               and we will respond within a reasonable timeframe to assist with access, corrections,
                or general information regarding your data.


             <br/><br/>Please do not hesitate to contact us at notify@yunuak.com
              </p>
            </div>
          </div>
        </section>
      </div>
    


<section className="hero-section-v2">
  <div className="hero-container-v2">
    <h1 className="hero-title-v2">
      Discover the future of productivity, <br />
      optimize your processes and make <br />
      every minute count.
    </h1>
    <p className="hero-subtitle-v2">
      Get a demo and unleash your productivity. Explore the latest technology
      and have a great experience!
    </p>
    <button className="hero-button-v2">Get A Demo</button>
  </div>
  <div className="hero-grid-v2"></div>
</section>

 

<Footer/>
    </>
  );
}
