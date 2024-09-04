import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const addItemToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.name === newItem.name);

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });

    setCartOpen(true);
  };

  const removeItemFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const updateItemQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = quantity;
      return updatedItems;
    });
  };

  return {
    cartItems,
    isCartOpen,
    toggleCart,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity
  };
};
