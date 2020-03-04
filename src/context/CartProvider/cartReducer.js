import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM_AMOUNT,
  DECREASE_ITEM_AMOUNT,
  SET_CART_AMOUNT,
  SET_TOTAL_PRICE,
  TOGGLE_CART,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case INCREASE_ITEM_AMOUNT:
      return {
        ...state,
        cartItems: action.payload,
      };
    case DECREASE_ITEM_AMOUNT:
      return {
        ...state,
        cartItems: action.payload,
      };
    case SET_CART_AMOUNT:
      return {
        ...state,
        cartAmount: action.payload,
      };
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};
