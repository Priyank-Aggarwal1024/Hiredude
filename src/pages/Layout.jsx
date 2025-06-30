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
function Layout() {
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
    </div>
  );
}

export default Layout;
