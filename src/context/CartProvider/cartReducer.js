import { ADD_TO_CART } from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
