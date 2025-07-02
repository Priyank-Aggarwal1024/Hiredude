import "../styles/Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testcomp1 from "../assets/test-comp1.png";
import testcomp2 from "../assets/test-comp2.png";
import testcomp3 from "../assets/test-comp3.png";
import PrevArrow from "./reusable/PrevArrow";
import NextArrow from "./reusable/NextArrow";
import { useRef } from "react";
function Testimonial() {
  const swiper = useRef(null);
  return (
    <section className="hiredude-section ">
      <div className="hiredude-testimonial">
        <h2 className="hiredude-f-48 hiredude-text-pink hiredude-text-center">
          <span className="hiredude-text-black hiredude-fw-400">
            Success Stories &{" "}
          </span>
          Testimonials
        </h2>
        <div className="testimonial-swiper-wrapper">
          {/* Arrows positioned absolutely */}
          <PrevArrow
            className="testimonial-prev-arrow"
            onClick={() => swiper.current?.swiper.slidePrev()}
          />
          <NextArrow
            className="testimonial-next-arrow"
            onClick={() => swiper.current.swiper.slideNext()}
          />
          <Swiper
            className="hiredude-testimonial-cards"
            ref={swiper}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,
              },
              668: {
                slidesPerView: 2,
                spaceBetween: 18,
                centeredSlides: false,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
                centeredSlides: true,
              },
            }}
            style={{ height: "100%" }}
          >
            <SwiperSlide className="hiredude-tc-slide">
              <div className="hiredude-tc-card">
                <div className="hiredude-tcc-top">
                  <div className="hiredude-tcc-top-companyimage">
                    <img src={testcomp1} alt="Company Logo" />
                  </div>
                  <div className="hiredude-tcc-top-para">
                    We tried three paid agencies before. HireDude’s free
                    shortlist had a higher close rate and better culture fit.
                  </div>
                </div>
                <div className="hiredude-tcc-bottom">
                  <div className="hiredude-tccb-name">Rhea Singh</div>
                  <div className="hiredude-tccb-designation">
                    HR Lead, BrightAds
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hiredude-tc-slide">
              <div className="hiredude-tc-card">
                <div className="hiredude-tcc-top">
                  <div className="hiredude-tcc-top-companyimage">
                    <img src={testcomp2} alt="Company Logo" />
                  </div>
                  <div className="hiredude-tcc-top-para">
                    We scaled from 15 to 40 designers during peak season without
                    touching job boards. Their pre-vetted pipeline was
                    gold-standard.
                  </div>
                </div>
                <div className="hiredude-tcc-bottom">
                  <div className="hiredude-tccb-name">Parth Aggarwal </div>
                  <div className="hiredude-tccb-designation">
                    CO-Founder, French n you
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hiredude-tc-slide">
              <div className="hiredude-tc-card">
                <div className="hiredude-tcc-top">
                  <div className="hiredude-tcc-top-companyimage">
                    <img src={testcomp3} alt="Company Logo" />
                  </div>
                  <div className="hiredude-tcc-top-para">
                    Marketing roles are notoriously hard. HireDude filled ours
                    in 48 hrs while we focused on launching our ad campaign.
                  </div>
                </div>
                <div className="hiredude-tcc-bottom">
                  <div className="hiredude-tccb-name">Avnish Yadav</div>
                  <div className="hiredude-tccb-designation">
                    Co-founder, Rentout homes
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
