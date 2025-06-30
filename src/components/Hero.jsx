import "../styles/Hero.css";
import heroimg from "../assets/hero.png";
function Hero({}) {
  return (
    <section className="hiredude-section hero-section " id="new-designs-hero">
      <div className="hero-left">
        <div className="hero-left-top">
          <div className="hero-left-iit hiredude-text-pink">
            An IIT Delhi Alumni Initiative
          </div>
          <h1 className="main-heading wood-smoke-950 hiredude-fw-500">
            Hire Instantly and Build your team—with effectively
            <span className="hiredude-text-light-pink hiredude-fw-700">
              {" "}
              FREE
            </span>
          </h1>
        </div>
        <div className="hero-speciallycrafted-para">
          HireDude short-lists and delivers job-ready talent to fast-growing
          companies, startups, and agencies.
        </div>
        <div className="hero-left-bottom-outer">
          <div className="hero-left-bottom">
            <div className="hero-lb-hiretalent"> Hire Talent for FREE</div>
            <div className="hero-lb-whatsappnow"> Whatsapp now</div>
          </div>
          <div className="hero-left-paid">
            <span className="hero-text-green">Paid </span> from 15th July
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-image">
          <img src={heroimg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
