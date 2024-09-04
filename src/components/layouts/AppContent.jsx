// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Category from '../Category';
import ItemDetails from '../ItemDetails';
import Details from '../../pages/Details';
import CategoryPage from '../../pages/CategoryPage';
import PaymentPage from '../../pages/PaymentPage';
import Cart from '../Cart';
import RandomItemsSection from '../RandomItemsSection';
import Footer from '../Footer';
import PropTypes from 'prop-types';

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

const AppContent = ({ cartItems, isCartOpen, toggleCart, addItemToCart, removeItemFromCart, updateItemQuantity }) => {
  const location = useLocation(); // Obter a localização atual da rota

  return (
    <>
      {location.pathname !== '/payment' && <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} />}
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

AppContent.propTypes = {
  cartItems: PropTypes.array.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  updateItemQuantity: PropTypes.func.isRequired
};

export default AppContent;
