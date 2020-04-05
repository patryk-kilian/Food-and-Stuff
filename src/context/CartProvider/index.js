import React, { useState, useEffect } from 'react';
import CartContext from './cartContext';

const getCartFromLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage);
  const [cartAmount, setCartAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  });

  useEffect(() => {
    const newCartAmount = cartItems.reduce(
      (total, item) => (total += item.amount),
      0
    );

    setCartAmount(newCartAmount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => (total += item.amount * item.price),
      0
    );

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const toggleCart = () => setCartOpen(!isCartOpen);

  const increaseItemAmount = (id) => {
    const newCart = cartItems.map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });

    setCartItems(newCart);
  };

  const decreaseItemAmount = (id, amount) => {
    if (amount === 1) {
      removeFromCart(id);
      return;
    } else {
      const newCart = cartItems.map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });

      setCartItems(newCart);
    }
  };

  const addToCart = (item) => {
    const cartItem = cartItems.find((el) => el.id === item.id);

    cartItem
      ? increaseItemAmount(item.id)
      : setCartItems([...cartItems, { ...item, amount: 1 }]);
  };

  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);

    setCartItems(newCart);
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        toggleCart,
        increaseItemAmount,
        decreaseItemAmount,
        clearCart,
        cartItems,
        cartAmount,
        isCartOpen,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
