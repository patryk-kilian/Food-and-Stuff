/**@jsx jsx */
import { jsx } from '@emotion/core';

import CartProduct from './CartProduct';

const CartProductsList = ({ products }) => {
  return (
    <ul
      css={{
        overflowY: 'scroll',
      }}
    >
      {products.length > 0 ? (
        products.map(product => (
          <CartProduct key={product.id} product={product} />
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </ul>
  );
};

export default CartProductsList;
