/**@jsx jsx */
import { jsx } from '@emotion/core';

import CheckoutProduct from './CheckoutProduct';

const CheckoutProductsList = ({ products = [] }) => {
  return (
    <ul
      css={{
        padding: '1.25rem 3rem',
        '@media (max-width: 1000px)': {
          padding: '0.625rem',
        },
      }}
    >
      {products.map((product) => (
        <CheckoutProduct key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default CheckoutProductsList;
