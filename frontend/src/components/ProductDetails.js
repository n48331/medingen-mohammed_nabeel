import React from "react";
import { motion } from "framer-motion";
import { useProduct } from "../context/ProductContext";
import styles from "../styles/ProductDetails.module.css";

const ProductDetails = () => {
  const { product, allProducts } = useProduct();
  console.log(product, allProducts);
  if (!product) return null;
  const medicineDetails = {
    name: product.name,
    description: product.description,
    uses: product.uses.map((use) => use.use_text),
    howItWorks: product.howItWorks.map((work) => work.working_text),
    sideEffects: product.sideEffects.map((effect) => effect.side_effect_text),
  };

  return (
    <section className={styles["product-details-section"]}>
      <motion.div
        className={styles["details-container"]}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles["details-header"]}>
          <h3>Medicine Details</h3>
        </div>
        <div className={styles["details-content"]}>
          <div className={styles["details-subsection"]}>
            <h4 className={styles["details-title"]}>
              About {medicineDetails.name}
            </h4>
            <p>{medicineDetails.description}</p>
          </div>
          <div className={styles["details-subsection"]}>
            <h4 className={styles["details-title"]}>
              Uses of {medicineDetails.name}
            </h4>
            <ul className={styles["details-list"]}>
              {medicineDetails.uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
          <div className={styles["details-subsection"]}>
            <h4 className={styles["details-title"]}>
              How {medicineDetails.name} Works
            </h4>
            <ul className={styles["details-list"]}>
              {medicineDetails.howItWorks.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
          <div className={styles["details-subsection"]}>
            <h4 className={styles["details-title"]}>
              Side Effects of {medicineDetails.name}
            </h4>
            <p className={styles["side-effects-note"]}>
              Common side effects of {medicineDetails.name} include:
            </p>
            <ul className={styles["details-list"]}>
              {medicineDetails.sideEffects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      <GenericMedicine allProducts={allProducts} />
    </section>
  );
};

const GenericMedicine = ({ allProducts }) => {
  return (
    <motion.div
      className={styles["generic-medicine-container"]}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Generic Medicine Alternative</h2>
      <div className={styles["generic-medicine-list"]}>
        {allProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </motion.div>
  );
};

const ProductCard = ({ product }) => {
  const { offerpercent, price } = product;
  const discount = price * (offerpercent / 100);
  const discountedPrice = Math.round(price - discount);
  return (
    <motion.div
      className={styles["product-card"]}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles["product-card-content"]}>
        <img
          src="/medicine.jpg"
          alt="Medicine"
          className={styles["product-card-image"]}
        />
        <div className={styles["product-card-info"]}>
          <h3 className={styles["product-card-title"]}>{product.name}</h3>
          <p className={styles["product-card-company"]}>{product.company}</p>
          <p className={styles["product-card-generic"]}>{product.othername}</p>
          <div className={styles["product-card-pricing"]}>
            <p className={styles["product-card-original-price"]}>
              Rs. {price}
            </p>
            <p className={styles["product-card-discounted-price"]}>
              Rs. {discountedPrice}
            </p>
            <p className={styles["product-card-offer"]}>
              {offerpercent}% less Price
            </p>
          </div>
        </div>
      </div>
      <button className={styles["product-card-button"]}>+ Add</button>
    </motion.div>
  );
};

export default ProductDetails;