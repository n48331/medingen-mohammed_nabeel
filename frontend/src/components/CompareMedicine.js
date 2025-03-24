import React from "react";
import { motion } from "framer-motion";
import { useProduct } from "../context/ProductContext";
import styles from "../styles/CompareMedicine.module.css";

const CompareMedicine = () => {
  const { allProducts } = useProduct();
  return (
    <section className={styles["compare-medicine-section"]}>
      <h2 className={styles["compare-medicine-title"]}>Compare Medicine</h2>
      <p  className={styles["compare-medicine-subtitle"]}>
      Compare the price, composition, and reviews of the following medicines to make an informed decision.
      </p>
      <div className={styles["compare-medicine-grid"]}>
        {allProducts.map((medicine, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card medicine={medicine} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Card = ({ medicine }) => {
  const { offerpercent, price } = medicine;
  const discount = price * (offerpercent / 100);
  const discountedPrice = Math.round(price - discount);
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.card}>
      <div className={styles["card-image-container"]}>
        <div className={styles["card-image-wrapper"]}>
          <img
            className={styles["card-image"]}
            src={"/medicine3.png"}
            alt={medicine.name}
          />
        </div>
      </div>
      <div className={styles["card-content"]}>
        <h5 className={styles["card-title"]}>{medicine.name}</h5>
        <p className={styles["card-manufacturer"]}>By {medicine.company}</p>
        <div className={styles["card-generic-name"]}>
          <p className={styles["card-generic-name-label"]}>Generic Name:</p>
          <p>{medicine.othername}</p>
        </div>
        <div className={styles["card-pricing"]}>
          <p className={styles["card-offer"]}>{offerpercent}% Off</p>
          <p className={styles["card-price"]}>Rs. {price}</p>
        </div>
        <div>
          <p className={styles["card-chemical-label"]}>Chemical Formation:</p>
          <p className={styles["card-chemical"]}>{medicine.chemicalformula}</p>
        </div>
        <div>
          <div className={styles["card-rating-container"]}>
            <p className={styles["card-rating-label"]}>Rating & Review:</p>
            <div className={styles["card-rating"]}>
              <div className={styles["card-stars"]}>
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`${styles["card-star"]} ${
                      index < Math.round(medicine.reviews[0].rating)
                        ? styles["card-star--yellow"]
                        : styles["card-star--gray"]
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className={styles["card-rating-value"]}>
                {medicine.reviews[0].rating}
              </span>
            </div>
          </div>
          <p className={styles["card-comment"]}>
            "{medicine.reviews[0].comment} "
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompareMedicine;