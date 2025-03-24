import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

function App() {
  const { token } = useContext(AuthContext);

  const isTokenValid = (token) => {
    // Add your token validation logic here
    // For example, check if the token is not expired
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch (e) {
      return false;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/product/:id"
          element={isTokenValid(token) ? <ProductPage /> : <Navigate to="/login" replace />}
        />
        <Route path="/" element={<Navigate to="/product/1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;