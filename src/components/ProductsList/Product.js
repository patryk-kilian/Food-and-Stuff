/**@jsx jsx */

import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaCartPlus } from 'react-icons/fa';
import { StyledButton } from '../../styles/Button';
import CartContext from '../../context/CartProvider/cartContext';

const Product = ({ product }) => {
  const theme = useTheme();

  const { name, image, price, bestseller, id } = product;

  const { colors } = theme;

  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;

  return (
    <li
      css={{
        position: 'relative',
        textAlign: 'center',
        '&::after': {
          content: `''`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          background: 'rgba(255,255,255, .8)',
          opacity: '0',
          transition: 'opacity .3s',
          zIndex: '2',
        },
        ':hover': {
          '&::after': {
            opacity: '1',
          },
          '& button': {
            opacity: '1',
          },
          '& img': {
            transform: 'scale(0.9) rotate(3deg)',
          },
        },
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          zIndex: '3',
          alignItems: 'center',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <StyledButton
          css={{
            opacity: '0',
          }}
          color={theme.colors.primaryDarker}
        >
          Show details
        </StyledButton>
        <StyledButton
          css={{
            opacity: '0',
            marginTop: '10px',
          }}
          color={theme.colors.primaryDarker}
          onClick={() => addToCart(product)}
        >
          Add to cart&nbsp;
          <FaCartPlus />
        </StyledButton>
      </div>

      <img
        css={{
          transition: 'transform .3s',
        }}
        src={image}
        alt=''
      />
      <p
        css={{
          textTransform: 'uppercase',
          fontSize: '1.1rem',
          fontWeight: '600',
        }}
      >
        {name}
      </p>
      <p
        css={{
          fontSize: '1.4rem',
          color: colors.secondary,
          fontWeight: '700',
        }}
      >
        ${price}
      </p>
      {bestseller && (
        <span
          css={{
            position: 'absolute',
            top: '40px',
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
      )}
    </li>
  );
};

export default Product;
