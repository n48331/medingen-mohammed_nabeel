import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import CompareMedicine from '../components/CompareMedicine';
import FAQSection from '../components/FAQSection';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
import Disclaimer from '../components/Disclaimer';
import Features from '../components/Features';

const ProductPage = () => {
  const { id } = useParams();
  const { product,  loading, error, fetchProductData } = useProduct();

  useEffect(() => {
    console.log('ProductPage useEffect triggered with ID:', id);
    fetchProductData(id);
  }, [id, fetchProductData]); // fetchProductData is now stable

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div className="text-center text-lg">No product data available</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails />
        <CompareMedicine  />
        <FAQSection />
        <ReviewsSection />
        <Disclaimer />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;