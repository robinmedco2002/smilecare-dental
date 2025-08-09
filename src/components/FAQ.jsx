import { useState } from "react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please bring your card during your visit.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional whitening is safe when done under supervision using approved materials.",
  },
  {
    question: "How often should I visit a dentist?",
    answer:
      "We recommend a dental checkup every 6 months for preventive care and early issue detection.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes, we have provisions for urgent dental issues. Contact us immediately and we will prioritize your appointment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, UPI, and most major insurance providers depending on the plan.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-5 py-4 bg-white text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium">{f.question}</span>
                <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              <div
                className={`px-5 pb-4 transition-all duration-300 ${
                  openIndex === i ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-700">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
