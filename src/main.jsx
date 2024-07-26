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

export const MainApp = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar cartItems={cartItems} onRemoveItem={removeItemFromCart} toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails onAddToCart={addItemToCart} onRemoveItem={removeItemFromCart} />} />
        </Routes>
        <Cart items={cartItems} isOpen={isCartOpen} onClose={toggleCart} onRemoveItem={removeItemFromCart} />
      </Router>
    </ThemeProvider>
  );
};

const Home = () => (
  <div>
    <Details />
    <Category />
  </div>
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
