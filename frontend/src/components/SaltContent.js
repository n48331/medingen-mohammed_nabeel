import React from 'react';

const SaltContent = ({ saltContent }) => (
  <section className="mb-5">
    <h2 className="text-xl font-semibold mb-2">Salt Content</h2>
    <ul className="list-none p-0">
      {saltContent.map((salt) => (
        <li key={salt.id} className="py-1">{salt.salt_name}</li>
      ))}
    </ul>
  </section>
);

export default SaltContent;