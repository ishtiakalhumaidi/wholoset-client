import React from "react";

const faqs = [
  {
    question: "How do I register as a wholesale buyer or seller?",
    answer:
      "To register, click on the Sign Up button and select whether you want to join as a buyer or a seller. Provide the required business information and verification documents.",
  },
  {
    question: "What are the minimum order quantities?",
    answer:
      "Minimum order quantities vary by supplier. You can check each product listing for MOQ details or contact the seller directly.",
  },
  {
    question: "How does pricing work for bulk orders?",
    answer:
      "Pricing is typically tiered based on order volume. Higher quantities often receive discounted rates, which are clearly indicated on product pages.",
  },
  {
    question: "Can I negotiate prices with sellers?",
    answer:
      "Yes, our platform supports direct communication between buyers and sellers, allowing you to negotiate terms including price, shipping, and payment.",
  },
  {
    question: "What payment methods are available for wholesale transactions?",
    answer:
      "We support multiple payment methods including bank transfers, credit cards, and escrow services to ensure secure payments.",
  },
  {
    question: "How long does shipping usually take?",
    answer:
      "Shipping times depend on the seller’s location and your destination. Estimated delivery times are provided on each product page.",
  },
  {
    question: "Can I return or exchange products?",
    answer:
      "Return and exchange policies are set by individual sellers. Please review the seller's terms or contact them directly for assistance.",
  },
  {
    question: "How do I track my orders?",
    answer:
      "You can track your order status in the 'My Orders' section of your dashboard once the seller ships your items.",
  },
  {
    question: "Is my business information secure on this platform?",
    answer:
      "Absolutely. We use industry-standard encryption and data protection practices to keep your business and personal information safe.",
  },
  {
    question: "How can I contact customer support for assistance?",
    answer:
      "You can reach out to our support team via live chat, email at support@wholoset.com, or through the Help Center available in your dashboard.",
  },
];

const FAQ = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-4xl font-bold text-center text-primary mb-6">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map(({ question, answer }, idx) => (
          <div
            key={idx}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input
              type="radio"
              name="my-accordion"
              id={`faq-${idx}`}
              defaultChecked={idx === 0}
            />
            <div
              className="collapse-title font-semibold cursor-pointer"
              htmlFor={`faq-${idx}`}
            >
              {question}
            </div>
            <div className="collapse-content text-sm">{answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
