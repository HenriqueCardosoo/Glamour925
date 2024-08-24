import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import ItemDetails from './components/ItemDetails';
import Details from './pages/Details';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Cart from './components/Cart';
import './components/Cart/styles'; // Importando a animação
import CategoryPage from './pages/CategoryPage';
import RandomItemsSection from './components/RamdomItemsSection';
import PropTypes from 'prop-types';
import Footer from './components/Footer';

export const MainApp = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartOpen(true); // Abre a sacola após adicionar um item
  };

  const removeItemFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addItemToCart} />} />
          <Route path="/item/:id" element={<ItemDetails onAddToCart={addItemToCart} />} />
          <Route path="/category/:categoryName" element={<CategoryPage onAddToCart={addItemToCart} />} />
        </Routes>
        <Cart items={cartItems} isOpen={isCartOpen} onClose={toggleCart} onRemoveItem={removeItemFromCart} />
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

const Home = ({ onAddToCart }) => (
  <div>
    <Details />
    <Category />
    <RandomItemsSection onAddToCart={onAddToCart} numItems={6} />
  </div>
);

Home.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
