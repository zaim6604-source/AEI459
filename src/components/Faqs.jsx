import { useState } from "react";

const faqs = [
  {
    q: "Is Jabballian Overseas a licensed recruitment agency?",
    a: "Yes, we are fully licensed by the Government of Pakistan under license number 2193/RWP. We operate from our office at United Centre, 3rd Floor, Shamsabad, Murree Road, Rawalpindi.",
  },
  {
    q: "Which countries do you recruit for?",
    a: "We recruit for Saudi Arabia, UAE, Qatar, Kuwait, Oman, Germany, Poland, Romania, Hungary, and other Gulf and European countries depending on employer demand.",
  },
  {
    q: "Where is your Rawalpindi office located?",
    a: "Our office is at Office No. 10, 3rd Floor, United Centre, Shamsabad, Murree Road, Rawalpindi, Punjab. You can visit us during business hours for consultation.",
  },
  {
    q: "What documents do I need to apply?",
    a: "You'll need your CNIC, passport (valid), educational certificates, experience letters, and passport-sized photographs. Additional documents may be required based on the destination country.",
  },
  {
    q: "How long does the processing take?",
    a: "Processing time varies by country and position, but typically ranges from 2 to 8 weeks from document submission to departure. We keep you informed at every stage.",
  },
  {
    q: "What are your service fees?",
    a: "Our fees are transparent and competitive. Contact us for a detailed breakdown based on your desired destination and position. We believe in honest and upfront pricing.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            FAQS
          </span>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-primary/5"
              >
                <span className="font-heading font-semibold text-ink text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <i
                  className={`fas fa-chevron-down text-primary text-sm transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-ink/70 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}