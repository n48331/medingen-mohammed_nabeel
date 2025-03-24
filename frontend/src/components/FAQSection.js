import React from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';
import { useProduct } from "../context/ProductContext";
const FAQSection = () => {
    const { product } = useProduct();


  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-8 ">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 ">
        Frequently Asked Questions for {product.name}
      </h2>
      <h3 className='mb-2 font-bold'>{product.name}</h3>
      <div className="space-y-4">
        {product.faq.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center text-gray-800 font-medium"
            >
              <span className="text-sm md:text-base">{faq.question}</span>
              <RiArrowDownSLine 
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