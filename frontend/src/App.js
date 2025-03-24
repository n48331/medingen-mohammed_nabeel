import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/product/:id"
          element={token ? <ProductPage /> : <Navigate to="/login" replace />}
        />
        <Route path="/" element={<Navigate to="/product/1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;