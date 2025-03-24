import React from "react";
import { motion } from "framer-motion";
import { useProduct } from "../context/ProductContext";
const ProductDetails = () => {
  const { product, allProducts } = useProduct();

  if (!product) return null;
  const medicineDetails = {
    name: product.name,
    description: product.description,
    uses: product.uses.map((use) => use.use_text),
    howItWorks: product.how_it_works.map((work) => work.working_text),
    sideEffects: product.side_effects.map((effect) => effect.side_effect_text),
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 p-4">
      <motion.div
        className="p-6 rounded-lg mb-8 flex flex-col gap-4 lg:w-2/3 "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-50 text-center p-4 rounded-lg">
          <h3>Medicine Details</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-left flex flex-col gap-4">
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
          <div className="flex flex-col gap-2">
            <h4 className="font-bold my-2">
              Side Effects of {medicineDetails.name}
            </h4>
            <p className="text-sm pl-2 bg-gray-300 w-fit p-1 rounded-md">
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
      <GenericMedicine allProducts={allProducts} />
    </section>
  );
};

const GenericMedicine = ({ allProducts }) => {
  return (
    <motion.div
      className="p-6 rounded-lg mb-8 lg:w-1/3 flex flex-col gap-4 "
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Generic medicine Alternative</h2>
      <div className="flex flex-col gap-2">
        {allProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </motion.div>
  );
};
const ProductCard = ({ product }) => {
  const { offerpercent, price } = product;
  const discount = price * (offerpercent / 100);
  const discountedPrice = Math.round(price - discount);
  return (
    <motion.div
      className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border w-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <img
          src="/medicine.jpg"
          alt="Medicine"
          className="w-[90px] rounded-md "
        />
        <div>
          <h3 className="font-semibold text-base">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.company}</p>
          <p className="text-xs text-gray-400">{product.othername}</p>
          <div className="text-left flex gap-2 items-center">
            <p className="text-gray-500 line-through text-xs">Rs. {price}</p>
            <p className="font-bold text-base text-green-600">
              Rs. {discountedPrice}
            </p>
            <p className="text-xs bg-green-50 px-2 py-1 rounded-full text-green-600">
              {offerpercent}% less Price
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
