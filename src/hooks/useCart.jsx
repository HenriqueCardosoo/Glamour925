import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Recupera os itens do localStorage na inicialização
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const addItemToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.name === newItem.name);

      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        updatedItems = [...prevItems, { ...newItem, quantity: 1 }];
      }

      // Salva os itens atualizados no localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });

    setCartOpen(true);
  };

  const removeItemFromCart = (indexToRemove) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, index) => index !== indexToRemove);

      // Salva os itens atualizados no localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const updateItemQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = quantity;

      // Salva os itens atualizados no localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  useEffect(() => {
    // Sincroniza os itens do carrinho com o localStorage quando o estado do carrinho muda
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return {
    cartItems,
    isCartOpen,
    toggleCart,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity
  };
};
