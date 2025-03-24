import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Disclaimer.module.css';

const Disclaimer = () => {
  return (
    <motion.section
      className={styles["disclaimer-section"]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles["disclaimer-title"]}>Disclaimer:</h2>
      <p className={styles["disclaimer-text"]}>
        The information provided on this site is intended for your general knowledge only and is not a substitute for professional medical advice or treatment for specific medical conditions. You should not use this information to diagnose or treat a health problem or disease without consulting with a qualified healthcare provider. Please consult your healthcare provider with any questions or concerns you may have regarding your condition. Your use of this website indicates your agreement to this website's published terms of use and all site policies. Please see our Medical Disclaimer for more information.
      </p>
    </motion.section>
  );
};

export default Disclaimer;