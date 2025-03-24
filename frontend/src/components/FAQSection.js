import React from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    { question: 'How long does it take for Paracetamol to work?', answer: 'Paracetamol usually starts working within 30 minutes to 1 hour.' },
    { question: 'Can I take Paracetamol on an empty stomach?', answer: 'Yes, Paracetamol can be taken on an empty stomach, but taking it with food may reduce the risk of stomach upset.' },
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-8 ">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 ">
        Frequently Asked Questions for Paracetamol
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center text-gray-800 font-medium"
            >
              <span className="text-sm md:text-base">{faq.question}</span>
              <IoMdArrowDown
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-2 text-sm md:text-base">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;