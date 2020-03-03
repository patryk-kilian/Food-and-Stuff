/**@jsx jsx */

import { jsx } from '@emotion/core';
import Product from './Product';

const ProductsList = ({ products }) => {
  return (
    <ul
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'center',
        margin: '50px 0',
        rowGap: '50px',
      }}
    >
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
