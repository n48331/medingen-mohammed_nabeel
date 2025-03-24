import React from 'react';

const Reviews = ({ reviews }) => (
  <section className="mb-5">
    <h2 className="text-xl font-semibold mb-2">Reviews</h2>
    {reviews.map((review) => (
      <div key={review.id} className="border-b border-gray-200 py-3">
        <p className="text-sm">Rating: {review.rating}/5</p>
        <p>{review.comment}</p>
      </div>
    ))}
  </section>
);

export default Reviews;