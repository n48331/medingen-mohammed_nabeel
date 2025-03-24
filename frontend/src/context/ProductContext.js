import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchProductData = useCallback(async (productId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${productId}`, config);
      setProduct(response.data);
      const allProductsResponse = await axios.get('http://localhost:5000/api/products', config);
      setAllProducts(allProductsResponse.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch product data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchProductData(1); // Default product ID
    }
  }, [token, fetchProductData]);

  const productData = useMemo(() => ({
    name: product?.name || '',
    description: product?.description || '',
    uses: product?.uses || [],
    sideEffects: product?.side_effects || [],
    howItWorks: product?.workings || [],
    reviews: product?.reviews || [],
    faqs: product?.faqs || [],
  }), [product]);

  const value = {
    product: productData,
    allProducts,
    loading,
    error,
    fetchProductData,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProduct = () => useContext(ProductContext);