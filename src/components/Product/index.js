/**@jsx jsx */

import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { FaCartPlus } from 'react-icons/fa';

const Product = ({ product }) => {
  const theme = useTheme();

  const { name, image, price, bestseller } = product;

  const { colors } = theme;
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
          background: 'rgba(255,255,255, .6)',
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
        <button
          css={{
            maxWidth: '200px',
            width: '100%',
            border: `2px solid ${colors.primaryDarker}`,
            textTransform: 'uppercase',
            color: colors.primaryDarker,
            padding: '8px',
            fontSize: '1rem',
            fontWeight: '900',
            zIndex: '3',
            opacity: '0',
            transition: 'all .3s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            ':hover': {
              background: colors.primaryDarker,
              color: '#fff',
            },
          }}
        >
          Add to cart{' '}
          <FaCartPlus
            css={{
              fontSize: '1.2rem',
              marginLeft: '5px',
            }}
          />
        </button>
        <button
          css={{
            maxWidth: '200px',
            width: '100%',
            border: `2px solid ${colors.primaryDarker}`,
            textTransform: 'uppercase',
            color: colors.primaryDarker,
            padding: '8px',
            fontSize: '1rem',
            fontWeight: '900',
            zIndex: '3',
            opacity: '0',
            transition: 'all .3s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            marginTop: '10px',
            ':hover': {
              background: colors.primaryDarker,
              color: '#fff',
            },
          }}
        >
          Show product
        </button>
      </div>

      <img src={image} alt='' />
      <p
        css={{
          textTransform: 'uppercase',
          fontSize: '1.1rem',
        }}
      >
        {name}
      </p>
      <p
        css={{
          fontSize: '1.2rem',
          color: colors.secondary,
          fontWeight: '700',
        }}
      >
        ${price}
      </p>
      {bestseller ? (
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
      ) : null}
    </li>
  );
};

export default Product;
