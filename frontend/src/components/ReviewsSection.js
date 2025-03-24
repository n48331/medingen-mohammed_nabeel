import React from 'react';
import { motion } from 'framer-motion';

const ReviewsSection = () => {
  const reviews = [
    { rating: '4.0', comment: 'The medicine is good. It is bit costly when compared with the exact generic medicine' },
    { rating: '4.0', comment: 'The medicine is good. It is bit costly when compared with the exact generic medicine' },
    { rating: '4.0', comment: 'The medicine is good. It is bit costly when compared with the exact generic medicine' },
  ];

  return (
    <section className="bg-white p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4  md:text-2xl">
        Ratings & Reviews
      </h2>
      <div className="space-y-4 ">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="py-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-yellow-500 text-lg md:text-xl">★★★★☆ {review.rating}</p>
            <p className="text-gray-600 text-sm md:text-base">" {review.comment} "</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;