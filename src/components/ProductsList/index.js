/**@jsx jsx */

import { jsx } from '@emotion/core';
import Product from './Product';

const ProductsList = ({ products = [] }) => {
  return (
    <ul
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'center',
        margin: '3.125rem 0',
        rowGap: '3.125rem',
        '@media (max-width: 480px)': {
          gridTemplateColumns: '1fr',
          rowGap: '0.625rem',
          margin: '1.25rem 0',
        },
      }}
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
