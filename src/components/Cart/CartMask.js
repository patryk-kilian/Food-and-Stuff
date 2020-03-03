/**@jsx jsx */
import { jsx } from '@emotion/core';

const CartMask = ({ children }) => {
  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        zIndex: '500',
        background: 'rgba(0,0,0,.7)',
        position: 'fixed',
        top: '0',
        left: '0',
      }}
    ></div>
  );
};

export default CartMask;
