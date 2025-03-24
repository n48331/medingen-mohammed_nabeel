import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import SaltContent from '../components/SaltContent';
import Reviews from '../components/Reviews';
import Description from '../components/Description';

const ProductPage = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [saltContent, setSaltContent] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const [productRes, saltRes, reviewsRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/products/${id}`, config),
          axios.get(`http://localhost:5000/api/products/${id}/salt-content`, config),
          axios.get(`http://localhost:5000/api/products/${id}/reviews`, config),
        ]);
        setProduct(productRes.data);
        setSaltContent(saltRes.data);
        setReviews(reviewsRes.data);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, token]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-[1366px] mx-auto p-5">
      <Header />
      <ProductDetails product={product} />
      <SaltContent saltContent={saltContent} />
      <Reviews reviews={reviews} />
      <Description description={product.description} />
    </div>
  );
};

export default ProductPage;