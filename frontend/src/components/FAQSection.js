import React from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';
import { useProduct } from "../context/ProductContext";
import styles from "../styles/FAQSection.module.css";

const FAQSection = () => {
  const { product } = useProduct();
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles["faq-section"]}>
      <h2 className={styles["faq-title"]}>
        Frequently Asked Questions for {product.name}
      </h2>
      <h3 className={styles["faq-product-name"]}>{product.name}</h3>
      <div className={styles["faq-list"]}>
        {product.faqs.map((faq, index) => (
          <div key={index} className={styles["faq-item"]}>
            <button
              onClick={() => toggleFAQ(index)}
              className={styles["faq-button"]}
            >
              <span className={styles["faq-question"]}>{faq.question}</span>
              <RiArrowDownSLine
                className={`${styles["faq-arrow"]} ${
                  activeIndex === index ? styles["faq-arrow--rotated"] : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles["faq-answer-container"]}
                >
                  <p className={styles["faq-answer"]}>{faq.answer}</p>
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