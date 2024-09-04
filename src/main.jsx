import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import AppContent from './components/layouts/AppContent';
import { useCart } from './hooks/useCart';
import './components/Cart/styles'; // Importando a animação

export const MainApp = () => {
  const { cartItems, isCartOpen, toggleCart, addItemToCart, removeItemFromCart, updateItemQuantity } = useCart();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContent cartItems={cartItems} isCartOpen={isCartOpen} toggleCart={toggleCart} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} updateItemQuantity={updateItemQuantity} />
      </Router>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
