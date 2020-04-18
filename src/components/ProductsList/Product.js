/**@jsx jsx */

import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaCartPlus } from 'react-icons/fa';
import { StyledButton } from '../../styles/Button';

import CartContext from '../../context/CartProvider/cartContext';
import NotificationContext from '../../context/NotificationsProvider/notificationsContext';
import {
  ADDED_TO_CART_MESSAGE,
  ALREADY_IN_CART_MESSAGE,
  SUCCESS,
  INFO,
} from '../../context/NotificationsProvider/notificationsConstants';

const Product = ({ product = {} }) => {
  const { colors } = useTheme();

  const { name, image, price, bestseller, id } = product;

  const { addToCart, cartItems } = useContext(CartContext);

  const cartProduct = cartItems.find((item) => item.id === id);

  const { triggerNotification } = useContext(NotificationContext);

  const handleAddToCartClick = () => {
    addToCart(product);

    cartProduct
      ? triggerNotification({
          id: Date.now() + Math.random(),
          message: ALREADY_IN_CART_MESSAGE,
          type: INFO,
        })
      : triggerNotification({
          id: Date.now() + Math.random(),
          message: ADDED_TO_CART_MESSAGE,
          type: SUCCESS,
        });
  };

  return (
    <li
      css={{
        position: 'relative',
        textAlign: 'center',
        padding: '0.625rem',
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
          '@media (max-width: 1100px)': {
            display: 'none',
          },
        },
        '@media (min-width: 1100px)': {
          ':hover': {
            '&::after': {
              opacity: '1',
            },
            '& button': {
              opacity: '1',
            },
            '& a': {
              opacity: '1',
            },
            '& img': {
              transform: 'scale(0.9) rotate(3deg)',
            },
          },
        },
      }}
    >
      <img
        css={{
          transition: 'transform .3s',
          '@media (max-width: 480px)': {
            width: '12.5rem',
          },
        }}
        src={image}
        alt={name}
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
          '@media (max-width: 1100px)': {
            position: 'static',
            transform: 'translate(0)',
          },
        }}
      >
        <StyledButton
          css={{
            opacity: '0',
            marginTop: '0.625rem',
            '@media (max-width: 1100px)': {
              opacity: '1',
            },
          }}
          color={colors.primaryDarker}
          onClick={handleAddToCartClick}
        >
          Add to cart&nbsp;
          <FaCartPlus />
        </StyledButton>
      </div>
      {bestseller && (
        <span
          css={{
            position: 'absolute',
            top: '2.5rem',
            right: '0',
            transform: 'rotate(30deg)',
            background: colors.primaryLight,
            color: colors.white,
            textTransform: 'uppercase',
            fontWeight: '700',
            padding: '5px 1.875rem',
          }}
        >
          bestseller
        </span>
      )}
    </li>
  );
};

export default Product;
