import React from 'react';

const Description = ({ description }) => (
  <section className="mb-5">
    <h2 className="text-xl font-semibold mb-2">Description</h2>
    <p>{description}</p>
  </section>
);

export default Description;