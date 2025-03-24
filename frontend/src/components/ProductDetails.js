import React from "react";
import { motion } from "framer-motion";

const ProductDetails = ({product}) => {
  console.log("ProductDetails", product);
  const medicineDetails = {
    name: product.name,
    description: product.description,
    uses: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Deserunt ipsum quam, velit distinctio aliquam corrupti alias dolore quod fuga adipisci hic a iste necessitatibus nam ab possimus maiores perferendis ut.",
    ],
    sideEffects: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Deserunt ipsum quam, velit distinctio aliquam corrupti alias dolore quod fuga adipisci hic a iste necessitatibus nam ab possimus maiores perferendis ut.",
    ],
    howItWorks: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Deserunt ipsum quam, velit distinctio aliquam corrupti alias dolore quod fuga adipisci hic a iste necessitatibus nam ab possimus maiores perferendis ut.",
    ],
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 p-4">
      <motion.div
        className="p-6 rounded-lg mb-8 flex flex-col gap-4 lg:w-2/3 bg-gray-100"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-200 text-center p-4 rounded-lg">
          <h3>Medicine Details</h3>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-left flex flex-col gap-4">
          <div>
            <h4 className="font-bold my-2">About {medicineDetails.name}</h4>
            <p>{medicineDetails.description}</p>
          </div>
          <div>
            <h4 className="font-bold my-2">Uses of {medicineDetails.name}</h4>
            <ul className="list-disc list-inside pl-2">
              {medicineDetails.uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold my-2">How {medicineDetails.name} Works</h4>
            <ul className="list-disc list-inside pl-2">
              {medicineDetails.howItWorks.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold my-2">
              Side Effects of {medicineDetails.name}
            </h4>
            <p className="text-sm pl-2">
              Common side effects of {medicineDetails.name} include:
            </p>
            <ul className="list-disc list-inside pl-2">
              {medicineDetails.sideEffects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="p-6 rounded-lg mb-8 lg:w-1/3 flex flex-col gap-4 bg-gray-100"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Generic medicine</h2>
        <div className="flex flex-col gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </motion.div>
    </section>
  );
};

const ProductCard = () => {
  return (
    <motion.div
      className="flex items-center justify-between bg-white p-4 rounded-lg border w-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <img
          src="/medicine.jpg"
          alt="Medicine"
          className="w-12 h-12 rounded-md"
        />
        <div>
          <h3 className="font-semibold text-base">DOLOWIN PLUS TAB</h3>
          <p className="text-sm text-gray-500">Micro Labs Limited</p>
          <p className="text-xs text-gray-400">Paracetamol 650</p>
          <div className="text-left flex gap-2 items-center">
            <p className="text-gray-500 line-through text-xs">Rs. 95</p>
            <p className="font-bold text-base text-green-600">Rs. 34</p>
            <p className="text-xs bg-green-200 px-2 py-1 rounded-full text-green-600">
              75% less Price
            </p>
          </div>
        </div>
      </div>
      <button className="text-black px-6 py-2 rounded-full border border-black">
        + Add
      </button>
    </motion.div>
  );
};

export default ProductDetails;
