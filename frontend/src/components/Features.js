import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Features.module.css"; // Import modular CSS

const Features = () => {
  return (
    <motion.section
      className={styles["features-section"]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles["features-grid"]}>
        <Card title="Safe and Secured Payment" icons="/logo.png" />
        <Card title="Safe and Secured Payment" icons="/logo.png" />
        <Card title="Free Shipping" icons="/logo.png" />
      </div>
    </motion.section>
  );
};

const Card = ({ title, icons }) => {
  return (
    <div className={styles["feature-card"]}>
      <img src={icons} alt="" className={styles["feature-card__image"]} />
      <p className={styles["feature-card__title"]}>{title}</p>
    </div>
  );
};

export default Features;