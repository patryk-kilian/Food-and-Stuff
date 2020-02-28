/**@jsx jsx */

import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

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
      }}
    >
      {products.map(product => {
        return (
          <li
            css={{
              position: 'relative',
            }}
          >
            <img src={product.image} alt='' />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <span
              css={{
                position: 'absolute',
                top: '20px',
                right: '0',
                transform: 'rotate(30deg)',
                background: colors.primaryLight,
                color: colors.white,
                textTransform: 'uppercase',
                fontWeight: '700',
                padding: '5px 30px',
              }}
            >
              bestseller
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
