// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Category from './components/Category';
import { Details } from './pages/Details';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function MainApp() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar cartItems={cartItems} />
      <Details />
      <Category onAddToCart={addItemToCart} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainApp />
    </ThemeProvider>
  </React.StrictMode>
);
