/**@jsx jsx */

import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Product from '../Product';

const ProductsList = ({ products }) => {
  const theme = useTheme();

  const { colors } = theme;
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
