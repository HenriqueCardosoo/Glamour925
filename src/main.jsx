import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import PaymentPage from './pages/PaymentPage';

const AppContent = ({ cartItems, isCartOpen, toggleCart, addItemToCart, removeItemFromCart, updateItemQuantity }) => {
  const location = useLocation(); // Obter a localização atual da rota

  return (
    <>
      {location.pathname !== '/payment' && <Navbar toggleCart={toggleCart} />}
      <Routes>
        <Route path="/" element={<Home onAddToCart={addItemToCart} />} />
        <Route path="/item/:id" element={<ItemDetails onAddToCart={addItemToCart} />} />
        <Route path="/category/:categoryName" element={<CategoryPage onAddToCart={addItemToCart} />} />
        <Route path="/payment" element={<PaymentPage items={cartItems} onRemoveItem={removeItemFromCart} onUpdateQuantity={updateItemQuantity} />} />
      </Routes>
      <Cart items={cartItems} isOpen={isCartOpen} onClose={toggleCart} onRemoveItem={removeItemFromCart} onUpdateQuantity={updateItemQuantity} />
    </>
  );
};

export const MainApp = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const addItemToCart = (newItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === newItem.name);

    if (existingItemIndex >= 0) {
      const updateItems = [...cartItems];
      updateItems[existingItemIndex].quantity += 1;
      setCartItems(updateItems);
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }

    setCartOpen(true); // Abre a sacola após adicionar um item
  };

  const removeItemFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  const updateItemQuantity = (index, quantity) => {
    const updateItems = [...cartItems];
    updateItems[index].quantity = quantity;
    setCartItems(updateItems);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContent cartItems={cartItems} isCartOpen={isCartOpen} toggleCart={toggleCart} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} updateItemQuantity={updateItemQuantity} />
      </Router>
    </ThemeProvider>
  );
};

const Home = ({ onAddToCart }) => (
  <div>
    <Details />
    <Category />
    <RandomItemsSection onAddToCart={onAddToCart} numItems={6} />
    <Footer />
  </div>
);

Home.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired
};

AppContent.propTypes = {
  cartItems: PropTypes.array.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  updateItemQuantity: PropTypes.func.isRequired
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
