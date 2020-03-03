import React, { useReducer, useEffect } from 'react';
import CartContext from './cartContext';
import CartReducer from './cartReducer';
import { ADD_TO_CART, INCREASE_ITEM_AMOUNT, SET_CART_AMOUNT } from './types';

const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    cartAmount: 0,
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

  const addToCart = item => {
    const cartItem = state.cartItems.find(el => el.id === item.id);

    cartItem
      ? increaseItemAmount(item.id)
      : dispatch({
          type: ADD_TO_CART,
          payload: [...state.cartItems, { ...item, amount: 1 }],
        });
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems: state.cartItems,
        cartAmount: state.cartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
