/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useEffect } from 'react';
import CartContext from '../../context/CartProvider/cartContext';

const CheckoutPopup = () => {
  const { isCheckoutOpen, toggleCheckout } = useContext(CartContext);

  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [isCheckoutOpen]);

  return isCheckoutOpen ? (
    <div
      css={{
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,.7)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '510',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          background: '#fff',
          width: '800px',
          height: '500px',
          position: 'relative',
        }}
      >
        <button
          onClick={() => toggleCheckout()}
          css={{
            position: 'absolute',
            right: '20px',
            top: '20px',
            fontSize: '40px',
          }}
        >
          X
        </button>
        Checkout form goes here
      </div>
    </div>
  ) : null;
};

export default CheckoutPopup;
