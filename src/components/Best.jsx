import "../styles/best.css";
import right from "../assets/right.svg";
import wrong from "../assets/wrong.svg";
function Best() {
  return (
    <>
      <div className="hiredude-section hiredude-pack-new-best">
        <h2 className="hiredude-f-48 hiredude-text-pink hiredude-text-center">
          <span className="hiredude-text-black hiredude-fw-400">
            Why are we the{" "}
          </span>
          Best?
        </h2>
        <div className="hiredude-main-outer">
          <div className="hiredude-best">
            <div className="hiredude-bm-top">
              <div className=""></div>
              <div className="hiredude-bm-top-hiredude">HireDude</div>
              <div className="hiredude-bm-top-hiredude-light">
                Traditional Agency
              </div>
              <div className="hiredude-bm-top-hiredude-light">
                Job Board/ Ads
              </div>
              <div className="hiredude-bm-top-hiredude-light">
                DIY In-House Sourcing
              </div>
            </div>
            <div className="hiredude-bm-bottom">
              <div className="hiredude-bm-bottom-left">
                <div className="hiredude-bm-bottom-left-text">Cost</div>
                <div className="hiredude-bm-bottom-left-text">
                  Time to First CV
                </div>
                <div className="hiredude-bm-bottom-left-text">
                  Candidate Quality
                </div>
                <div className="hiredude-bm-bottom-left-text">
                  Point of Contact
                </div>
                <div className="hiredude-bm-bottom-left-text">
                  End-to-End Support
                </div>
              </div>
              <div className="hiredude-bm-bottom-pink">
                <div className="">0 ₹ for now</div>
                <div className="">&lt; 48 hrs</div>
                <div className="">Verified & Qualified </div>
                <div className="">Dedicated Pm</div>
                <div className="">
                  <img src={right} alt="Right" />
                </div>
              </div>
              <div className="hiredude-bm-bottom-lightpink">
                <div className="">8-20 % of CTC</div>
                <div className="">04-10 days</div>
                <div className="">Varies</div>
                <div className="">Something</div>
                <div className="">Partial</div>
              </div>
              <div className="hiredude-bm-bottom-lightpink">
                <div className="">Ad spend + time</div>
                <div className="">Depend on Inbond</div>
                <div className="">Unscreened</div>
                <div className="">None</div>
                <div className="">
                  <img src={wrong} alt="Wrong" />
                </div>
              </div>
              <div className="hiredude-bm-bottom-lightpink">
                <div className="">Full HR salary</div>
                <div className="">Weeks</div>
                <div className="">Varies</div>
                <div className="">Varies</div>
                <div className="">
                  <img src={wrong} alt="Wrong" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Best;
