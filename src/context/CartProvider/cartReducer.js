import { ADD_TO_CART, INCREASE_ITEM_AMOUNT, SET_CART_AMOUNT } from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case INCREASE_ITEM_AMOUNT:
      return {
        ...state,
        cartItems: action.payload,
      };
    case SET_CART_AMOUNT:
      return {
        ...state,
        cartAmount: action.payload,
      };
    default:
      return state;
  }
};
