import "../styles/TutedudeLearn.css";
import learn from "../assets/learn.svg";
import hiringwork1 from "../assets/hiringwork1.svg";
import hiringwork2 from "../assets/hiringwork2.svg";
import hiringwork3 from "../assets/hiringwork3.svg";
import moneyback from "../assets/trustworthy.png";
function TutedudeLearn() {
  return (
    <>
      <div className="hiredude-learn">
        <div className="hiredude-learn-top">
          <h2 className="hiredude-text-center hiredude-f-45 hiredude-text-white hiredude-fw-500">
            How hiring <span className="hiredude-fw-700">Work with us ?</span>
          </h2>
        </div>
        <div className="hiredude-learn-main">
          <div className="hiredude-learn-main-right">
            <img
              src={learn}
              alt="Tutedude Learn"
              className="hiredude-learn-image"
            />
            <img
              src={moneyback}
              alt="Tutedude Money Back Guarantee"
              className="hiredude-learn-moneyback"
            />
            <div className="hiredude-learn-gradient"></div>
          </div>
          <div className="hiredude-learn-main-left">
            <div className="hiredude-lml-card">
              <div className="hiredude-lmlc-left">
                <img src={hiringwork1} alt="Tell Us the Role " />
              </div>
              <div className="hiredude-lmlc-right">
                <div className="hiredude-lmlcr-head">Tell Us the Role </div>
                <div className="hiredude-lmlcr-para">
                  {" "}
                  share your JD or a two-minute brief.
                </div>
              </div>
              <div className="hiredude-lmlc-no">1</div>
            </div>
            <div className="hiredude-lml-card">
              <div className="hiredude-lmlc-left">
                <img src={hiringwork2} alt="We Source & Screen" />
              </div>
              <div className="hiredude-lmlc-right">
                <div className="hiredude-lmlcr-head">We Source & Screen</div>
                <div className="hiredude-lmlcr-para">
                  our experts match, evaluate, and phone-screen candidates.
                </div>
              </div>
              <div className="hiredude-lmlc-no">2</div>
            </div>
            <div className="hiredude-lml-card">
              <div className="hiredude-lmlc-left">
                <img src={hiringwork3} alt="You Interview & Hire" />
              </div>
              <div className="hiredude-lmlc-right">
                <div className="hiredude-lmlcr-head">You Interview & Hire</div>
                <div className="hiredude-lmlcr-para">
                  receive a shortlist + notes; choose who to meet. That’s it.
                </div>
              </div>
              <div className="hiredude-lmlc-no">3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutedudeLearn;
