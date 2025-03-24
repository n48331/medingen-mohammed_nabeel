import React from "react";
import { motion } from "framer-motion";

const CompareMedicine = () => {
  const comparisons = [
    {
      name: "Dolo 650mg",
      price: "₹34",
      discount: "15% off",
      rating: "4.0",
      image: "/medicine3.png",
    },
    {
      name: "Dolo 650mg",
      price: "₹34",
      discount: "15% off",
      rating: "4.0",
      image: "/medicine3.png",
    },
    {
      name: "Dolo 650mg",
      price: "₹34",
      discount: "15% off",
      rating: "4.0",
      image: "/medicine3.png",
    },
    {
      name: "Dolo 650mg",
      price: "₹34",
      discount: "15% off",
      rating: "4.0",
      image: "/medicine3.png",
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Compare Medicine
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {comparisons.map((medicine, index) => (
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
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-sm border border-gray-100 rounded-2xl shadow-sm bg-white p-4 hover:bg-gray-50 transition duration-200"
    >
      {/* Image Section */}
      <div className="bg-pink-100 rounded-lg p-6 flex justify-center items-center">
        <div className="bg-pink-100 p-8">
          <img
            className="rounded-t-lg bg-pink-100"
            src={medicine.image}
            alt={medicine.name}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
          {medicine.name}
        </h5>

        {/* Manufacturer */}
        <p className="mb-2 text-sm font-normal text-gray-600">
          By MICRO LABS LIMITED
        </p>

        {/* Generic Name */}
        <div className="mb-2">
          <p className="text-xs font-semibold text-gray-500 uppercase">
            Generic Name:
          </p>
          <p className="text-sm text-gray-700">Paracetamol 650mg</p>
        </div>

        {/* Pricing */}
        <div className="flex items-center mb-3">
          <p className="text-lg font-bold text-gray-900">₹30</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹34</p>
        </div>

        {/* Chemical Formula */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 uppercase">
            Chemical Formula:
          </p>
          <p className="text-sm text-gray-700">CH2O [C12H2O]</p>
        </div>

        {/* Ratings & Review */}
        <div className="mb-3">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="ml-2 text-sm font-semibold text-gray-700">
              {medicine.rating}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            "The medicine is good, it is costly when compared with the exact
            generic medicine."
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompareMedicine;
