/**@jsx jsx */

import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { FaCartPlus } from 'react-icons/fa';
import Button from '../Button';

const Product = ({ product }) => {
  const theme = useTheme();

  const { name, image, price, bestseller, id } = product;

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
        <Button
          text="Show details"
          css={{
            opacity: 0,
          }}
        />
        <Button
          css={{
            marginTop: '10px',
            opacity: 0,
          }}
          iconSize="1.2rem"
          icon={FaCartPlus}
          text="Add to cart"
        />
      </div>

      <img src={image} alt="" />
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
