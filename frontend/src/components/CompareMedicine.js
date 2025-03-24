import React from "react";
import { motion } from "framer-motion";
import { useProduct } from "../context/ProductContext";

const CompareMedicine = () => {
  const { allProducts } = useProduct();
  return (
    <section className=" rounded-lg mb-8 m-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Compare Medicine
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
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
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border border-gray-100 rounded-2xl shadow-sm bg-white p-4 hover:bg-gray-50 transition duration-200"
    >
      {/* Image Section */}
      <div className="bg-purple-50 rounded-lg p-6 flex justify-center items-center">
        <div className="bg-purple-50 p-8">
          <img
            className="rounded-t-lg bg-purple-50"
            src={"/medicine3.png"}
            alt={medicine.name}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
          {medicine.name}
        </h5>

        {/* Manufacturer */}
        <p className="mb-2 text-sm font-normal text-gray-400">
          By {medicine.company}
        </p>

        {/* Generic Name */}
        <div className="mb-2">
          <p className="text-xs font-semibold text-black">Generic Name:</p>
          <p className="text-sm text-gray-400">{medicine.othername}</p>
        </div>

        {/* Pricing */}

        {/* Chemical Formula */}

        <div className="flex items-center mb-3 bg-gray-200 py-1 px-2 rounded-lg justify-between">
          <p className="ml-2 text-sm text-gray-500 ">{offerpercent}% Off</p>
          <p className="text-lg font-bold text-gray-900">Rs. {price}</p>
        </div>
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 ">
            Chemical Formation:
          </p>
          <p className="text-sm text-gray-400">{medicine.chemicalformula}</p>
        </div>
        <div className="mb-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 ">Rating & Review:</p>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.round(medicine.reviews[0].rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs bg-gray-300 px-2 py-[2px] w-8 text-center rounded-sm">
                {medicine.reviews[0].rating}
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            "{medicine.reviews[0].comment} "
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompareMedicine;
