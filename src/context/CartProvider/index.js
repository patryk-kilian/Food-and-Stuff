import React, { useReducer } from 'react';
import CartContext from './cartContext';
import CartReducer from './cartReducer';
import { ADD_TO_CART } from './types';

const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = item => {
    const cartItem = state.cartItems.find(el => el.id === item.id);

    cartItem
      ? dispatch({
          type: ADD_TO_CART,
          payload: [
            ...state.cartItems,
            { ...cartItem, amount: cartItem.amount + 1 },
          ],
        })
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
