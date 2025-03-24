import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.section
      className="bg-white p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 shadow-lg rounded-lg">
        <Card title="Safe and Secured Payment" icons="/logo.png" />
        <Card title="Safe and Secured Payment" icons="/logo.png" />
        <Card title="Free Shipping" icons="/logo.png" />
      </div>
    </motion.section>
  );
};

const Card = ({ title, icons }) => {
  return (
    <div className="flex items-center space-x-4 flex-col gap-4 text-center">
      <img src={icons} alt="" className="w-16" />
      <p className="capitalize">{title}</p>
    </div>
  );
};

export default Features;
