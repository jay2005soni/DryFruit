import React from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Where can I buy bulk dry fruits in India?",
    answer: "You can order directly from our website using the Bulk Order form.",
  },
  {
    question: "Does Dry Fruit House offer fair wholesale rates?",
    answer: "Yes, we provide competitive and transparent pricing for all bulk orders.",
  },

   {
    question: "Does Dry Fruit House offer fair wholesale rates?",
    answer: "Yes, we provide competitive and transparent pricing for all bulk orders.",
  },

   {
    question: "Does Dry Fruit House offer fair wholesale rates?",
    answer: "Yes, we provide competitive and transparent pricing for all bulk orders.",
  },

   {
    question: "Does Dry Fruit House offer fair wholesale rates?",
    answer: "Yes, we provide competitive and transparent pricing for all bulk orders.",
  },
  // add other FAQs here...
];

const FAQSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="bg-white rounded-lg shadow-md divide-y">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
