import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [uses, setUses] = useState([]);
  const [sideEffects, setSideEffects] = useState([]);
  const [workings, setWorkings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true); // Start as true to show loading initially
  const [error, setError] = useState(null);

  const fetchProductData = useCallback(async (productId) => {
    if (!token) {
      setError('No authentication token available');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const config = { headers: { Authorization: `Bearer ${token}` } };

      console.log('Making API requests...');
      const [productRes, allProductsRes, usesRes, sideEffectsRes, workingsRes, reviewsRes,
        faqRes
      ] = await Promise.all([
        axios.get(`http://localhost:5000/api/products/${productId}`, config),
        axios.get(`http://localhost:5000/api/products`, config),
        axios.get(`http://localhost:5000/api/products/${productId}/uses`, config),
        axios.get(`http://localhost:5000/api/products/${productId}/side-effects`, config),
        axios.get(`http://localhost:5000/api/products/${productId}/how-it-works`, config),
        axios.get(`http://localhost:5000/api/products/${productId}/reviews`, config),
        axios.get(`http://localhost:5000/api/products/${productId}/faq`, config),
      ]);

      console.log('Product Response:', productRes.data);
      console.log('All Products Response:', allProductsRes.data);
      setProduct(productRes.data);
      setAllProducts(allProductsRes.data);
      setUses(usesRes.data);
      setSideEffects(sideEffectsRes.data);
      setWorkings(workingsRes.data);
      setReviews(reviewsRes.data);
      setFaq(faqRes.data);
    } catch (err) {
      console.error('Fetch error:', err.response ? err.response.data : err.message);
      setError('Failed to load product data');
    } finally {
      setLoading(false);
    }
  }, [token]); // Dependency: token

  const value = {
    product,
    allProducts,
    uses,
    sideEffects,
    workings,
    reviews,
    faq,
    loading,
    error,
    fetchProductData,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};