import "../styles/WhyHiredude.css";
import whdic1 from "../assets/whd-icon1.svg";
import whdic2 from "../assets/whd-icon2.svg";
import whdic3 from "../assets/whd-icon3.svg";
import whdic4 from "../assets/whd-icon4.svg";
import whdic5 from "../assets/whd-icon5.svg";
function WhyHiredude() {
  return (
    <div className="hiredude-why hiredude-section">
      <h2 className="hiredude-f-45 hiredude-why-heading">
        Why Founders & HR’s choose
        <span className="hiredude-why-spanpink"> HireDude</span>
      </h2>
      <div className="hiredude-why-cards">
        <div className="hiredude-wc-card">
          <div className="hiredude-wcc-top">
            <img src={whdic1} alt="Zero Cost, Zero Risk " />
          </div>
          <div className="hiredude-wcc-bottom">
            <div className="hiredude-wccb-head">Zero Cost, Zero Risk </div>
            <div className="hiredude-wccb-para">
              no subscriptions, retainers, or hidden fees.
            </div>
          </div>
        </div>
        <div className="hiredude-wc-card">
          <div className="hiredude-wcc-top">
            <img src={whdic2} alt="Pre-shortlisted  Candidates" />
          </div>
          <div className="hiredude-wcc-bottom">
            <div className="hiredude-wccb-head">Pre-shortlisted Candidates</div>
            <div className="hiredude-wccb-para">
              skills & culture fit validated by senior practitioners.
            </div>
          </div>
        </div>
        <div className="hiredude-wc-card">
          <div className="hiredude-wcc-top">
            <img src={whdic3} alt="Speed That Scales " />
          </div>
          <div className="hiredude-wcc-bottom">
            <div className="hiredude-wccb-head">Speed That Scales </div>
            <div className="hiredude-wccb-para">
              curated shortlists in 48 hrs for most roles.
            </div>
          </div>
        </div>
        <div className="hiredude-wc-card">
          <div className="hiredude-wcc-top">
            <img src={whdic4} alt="Start-to-Finish Support " />
          </div>
          <div className="hiredude-wcc-bottom">
            <div className="hiredude-wccb-head">Start-to-Finish Support </div>
            <div className="hiredude-wccb-para">
              JD drafting, interview scheduling, offer roll-out
            </div>
          </div>
        </div>
        <div className="hiredude-wc-card">
          <div className="hiredude-wcc-top">
            <img src={whdic5} alt="Dedicated Talent Partner" />
          </div>
          <div className="hiredude-wcc-bottom">
            <div className="hiredude-wccb-head">Dedicated Talent Partner</div>
            <div className="hiredude-wccb-para">
              one point of contact until the seat is filled.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyHiredude;
