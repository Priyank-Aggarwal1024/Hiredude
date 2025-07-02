import "../styles/Layout.css";
import TutedudeLearn from "../components/TutedudeLearn";
import Hero from "../components/Hero";
import Best from "../components/Best";
import Navbar from "../components/Navbar";
import hficon1 from "../assets/hf-icon1.svg";
import hficon2 from "../assets/hf-icon2.svg";
import hficon3 from "../assets/hf-icon3.svg";
import hficon4 from "../assets/hf-icon4.svg";
import WhyHiredude from "../components/WhyHiredude";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Hiring from "../components/Hiring";
import whatsapp from "../assets/whatsapp.png";
import { useEffect, useState } from "react";
function Layout() {
  const [floater, setFloater] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFloater(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="tech-geek-main">
      <Navbar />
      <Hero />
      <div className="hiredude-function">
        <div className="hiredude-function-cards">
          <div className="hiredude-function-card">
            <div className="hiredude-fc-left">
              <img src={hficon1} alt="Service Fee" />
            </div>
            <div className="hiredude-fc-right">
              <div className="hiredude-fcr-heading">0 ₹</div>
              <div className="hiredude-fcr-value">Service Fee</div>
            </div>
          </div>
          <div className="hiredude-function-card">
            <div className="hiredude-fc-left">
              <img src={hficon2} alt="Turnaround" />
            </div>
            <div className="hiredude-fc-right">
              <div className="hiredude-fcr-heading">48hr</div>
              <div className="hiredude-fcr-value">Turnaround</div>
            </div>
          </div>
          <div className="hiredude-function-card">
            <div className="hiredude-fc-left">
              <img src={hficon3} alt="Trusted partners" />
            </div>
            <div className="hiredude-fc-right">
              <div className="hiredude-fcr-heading">150+ </div>
              <div className="hiredude-fcr-value">Trusted partners</div>
            </div>
          </div>
          <div className="hiredude-function-card">
            <div className="hiredude-fc-left">
              <img src={hficon4} alt="Shortlisted Talent" />
            </div>
            <div className="hiredude-fc-right">
              <div className="hiredude-fcr-heading">100+ </div>
              <div className="hiredude-fcr-value">Shortlisted Talent</div>
            </div>
          </div>
        </div>
      </div>
      <WhyHiredude />
      <TutedudeLearn />
      <Best />
      <Testimonial />
      <Faq />
      <Hiring />
      {floater && (
        <div className="hiredude-bottom-floater">
          <div className="hiredude-bottom-floater-top">
            <div className="hiredude-bft-hirefree"> Hire Talent for FREE</div>
            <div className="hiredude-bft-whatsappnow">
              <img src={whatsapp} alt="Whatsapp" />
              <span>Whatsapp now</span>
            </div>
          </div>
          <div className="hero-left-paid">
            <span className="hero-text-green">Paid </span> from 15th July
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
