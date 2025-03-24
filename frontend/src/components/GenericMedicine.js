import React from 'react';

const GenericMedicine = () => {
  const medicines = [
    { name: 'Dolo 650mg', price: '₹34', discount: '15% off' },
    { name: 'Crocin Advance 500mg', price: '₹24', discount: '10% off' },
    { name: 'Calpol 500mg', price: '₹34', discount: '15% off' },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Generic Medicine Alternatives</h2>
      <div className="space-y-4">
        {medicines.map((medicine, index) => (
          <div key={index} className="flex justify-between items-center border-b py-2">
            <div>
              <p className="text-gray-800 font-medium">{medicine.name}</p>
              <p className="text-gray-600 text-sm">{medicine.discount}</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-gray-800 font-medium">{medicine.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenericMedicine;