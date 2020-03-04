/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import CartContext from '../../context/CartProvider/cartContext';
import { AnimatePresence, motion } from 'framer-motion';

const CartMask = () => {
  const cartContext = useContext(CartContext);

  const { isCartOpen, toggleCart } = cartContext;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.button
          key='cartMask'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeIn' }}
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
        ></motion.button>
      )}
    </AnimatePresence>
  );
};

export default CartMask;
