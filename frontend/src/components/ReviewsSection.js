import React from "react";
import { motion } from "framer-motion";
import { useProduct } from "../context/ProductContext";

const ReviewsSection = () => {
  const { reviews } = useProduct();
  return (
    <section className="bg-white p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4  md:text-2xl">
        Ratings & Reviews
      </h2>
      <div className="space-y-4 ">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="py-1 flex flex-col space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.round(review.rating)
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
                <span className="text-xs bg-gray-300 px-2 py-[2px] w-8 text-center rounded-sm">{review.rating}</span>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              " {review.comment} "
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
