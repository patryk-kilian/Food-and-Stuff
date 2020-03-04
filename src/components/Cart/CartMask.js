/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import CartContext from '../../context/CartProvider/cartContext';

const CartMask = () => {
  const cartContext = useContext(CartContext);

  const { isCartOpen, toggleCart } = cartContext;

  return isCartOpen ? (
    <button
      onClick={() => toggleCart()}
      css={{
        width: '100%',
        height: '100%',
        zIndex: '500',
        background: 'rgba(0,0,0,.7)',
        position: 'fixed',
        top: '0',
        left: '0',
      }}
    ></button>
  ) : null;
};

export default CartMask;
