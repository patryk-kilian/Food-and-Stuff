import React, { useReducer, useEffect } from 'react';
import CartContext from './cartContext';
import CartReducer from './cartReducer';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM_AMOUNT,
  DECREASE_ITEM_AMOUNT,
  SET_CART_AMOUNT,
  TOGGLE_CART,
} from './types';

const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    cartAmount: 0,
    isCartOpen: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    if (state.cartItems.length > 0) {
      const cartAmount = state.cartItems[0].amount;
      dispatch({
        type: SET_CART_AMOUNT,
        payload: cartAmount,
      });
    }
  }, [state.cartItems]);

  const toggleCart = () =>
    dispatch({
      type: TOGGLE_CART,
      payload: !state.isCartOpen,
    });

  const increaseItemAmount = id => {
    const newCart = state.cartItems.map(item => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    dispatch({
      type: INCREASE_ITEM_AMOUNT,
      payload: newCart,
    });
  };

  const decreaseItemAmount = (id, amount) => {
    if (amount === 1) {
      removeFromCart(id);
      return;
    } else {
      const newCart = state.cartItems.map(item => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });

      dispatch({
        type: DECREASE_ITEM_AMOUNT,
        payload: newCart,
      });
    }
  };

  const addToCart = item => {
    const cartItem = state.cartItems.find(el => el.id === item.id);

    cartItem
      ? increaseItemAmount(item.id)
      : dispatch({
          type: ADD_TO_CART,
          payload: [...state.cartItems, { ...item, amount: 1 }],
        });
  };

  const removeFromCart = id => {
    const newCart = state.cartItems.filter(item => item.id !== id);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: newCart,
    });
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        toggleCart,
        increaseItemAmount,
        decreaseItemAmount,
        cartItems: state.cartItems,
        cartAmount: state.cartAmount,
        isCartOpen: state.isCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
