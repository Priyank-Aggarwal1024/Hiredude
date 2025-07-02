import { useState } from "react";
import "../styles/Faq.css";
function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "What exactly is HireDude?",
      answer:
        "Your zero-fee hiring partner. We shortlist and send you pre-vetted candidates in under 48 hrs.",
      open: false,
    },
    {
      question: "How much does it cost?",
      answer:
        "₹0 to post and shortlist; you pay a success fee only if you hire (free until 15 July).",
      open: false,
    },
    {
      question: "How fast will I see my shortlisted candidates?",
      answer:
        "For standard roles, your curated shortlist lands in under 48 hrs. Ultra-niche positions may take up to 72 hrs. Either way, you move from JD to interview in days, not weeks.",
      open: false,
    },
    {
      question: "How does HireDude shortlist candidates?",
      answer:
        "Resume shortlist + Assignment test + Behavioural interview + References. According to your job description, our expert Hiring Team handles everything. You'll also get a dedicated point of contact until the seat is filled.",
      open: false,
    },
    {
      question: "What if the hire doesn’t work out?",
      answer:
        "We’ll send a new set of top candidates within 48 hours, free of charge – no hassle.",
      open: false,
    },
  ]);
  const toggleFaq = (index) => {
    // Trigger re-render
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };
  return (
    <section className="hiredude-section">
      <div className="hiredude-faq">
        <h2 className="hiredude-f-48 hiredude-text-pink hiredude-text-center">
          <span className="hiredude-text-black hiredude-fw-400">
            Frequently
          </span>
          Asked Questions
        </h2>
        <div className="hiredude-faq-main">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`hiredude-faq-card ${
                faq.open ? "hiredude-faq-card-open" : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="hiredude-faq-top">
                <div className="hiredude-faq-question">
                  {index + 1}. {faq.question}
                </div>
                <div className="hiredude-faq-icon">
                  {faq.open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M2.03786 13.5563C2.27227 13.7906 2.59015 13.9223 2.92161 13.9223C3.25306 13.9223 3.57095 13.7906 3.80536 13.5563L9.99286 7.3688L16.1804 13.5563C16.4161 13.784 16.7319 13.91 17.0596 13.9071C17.3874 13.9043 17.7009 13.7728 17.9326 13.5411C18.1644 13.3093 18.2959 12.9958 18.2987 12.668C18.3015 12.3403 18.1756 12.0245 17.9479 11.7888L10.8766 4.71755C10.6422 4.48321 10.3243 4.35156 9.99286 4.35156C9.6614 4.35156 9.34352 4.48321 9.10911 4.71755L2.03786 11.7888C1.80352 12.0232 1.67187 12.3411 1.67187 12.6725C1.67187 13.004 1.80352 13.3219 2.03786 13.5563Z"
                        fill="black"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M17.9621 6.78745C17.7277 6.55312 17.4098 6.42147 17.0784 6.42147C16.7469 6.42147 16.4291 6.55312 16.1946 6.78745L10.0071 12.975L3.81964 6.78745C3.58389 6.55976 3.26814 6.43376 2.94039 6.43661C2.61264 6.43946 2.29913 6.57092 2.06737 6.80268C1.83561 7.03444 1.70415 7.34796 1.7013 7.6757C1.69845 8.00345 1.82445 8.3192 2.05214 8.55495L9.12339 15.6262C9.3578 15.8605 9.67569 15.9922 10.0071 15.9922C10.3386 15.9922 10.6565 15.8605 10.8909 15.6262L17.9621 8.55495C18.1965 8.32054 18.3281 8.00266 18.3281 7.6712C18.3281 7.33975 18.1965 7.02186 17.9621 6.78745Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {faq.open && (
                <div className="hiredude-faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
