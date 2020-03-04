/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaTimes, FaCreditCard } from 'react-icons/fa';
import Button from '../Button';
import CartContext from '../../context/CartProvider/cartContext';
import CartProductsList from '../CartProductsList/index';

const Cart = () => {
  const theme = useTheme();

  const { colors } = theme;

  const cartContext = useContext(CartContext);

  const { isCartOpen, toggleCart, cartItems } = cartContext;

  return isCartOpen ? (
    <aside
      css={{
        maxWidth: '25rem',
        width: '100%',
        height: '100vh',
        zIndex: '501',
        position: 'fixed',
        top: '0',
        right: '0',
        background: colors.white,
        display: 'grid',
        gridTemplateRows: 'min-content 1fr min-content',
      }}
    >
      <header
        css={{
          background: colors.primary,
          height: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <h3
          css={{
            color: colors.white,
            textTransform: 'uppercase',
          }}
        >
          Your cart&nbsp;<span>(&nbsp;1&nbsp;)</span>
        </h3>
        <button
          onClick={() => toggleCart()}
          css={{
            fontSize: '1.6rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: '20px',
            color: '#fff',
          }}
        >
          <FaTimes />
        </button>
      </header>
      <CartProductsList products={cartItems} />
      <div
        css={{
          paddingBottom: '8rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p
          css={{
            textTransform: 'uppercase',
            fontSize: '1.5rem',
            fontWeight: '500',
            marginBottom: '10px',
          }}
        >
          total:{' '}
          <span
            css={{
              color: colors.secondaryDarker,
            }}
          >
            $9999
          </span>
        </p>
        <Button icon={FaCreditCard} text="checkout" />
        <Button
          css={{
            marginTop: '10px',
          }}
          text="clear cart"
        />
      </div>
    </aside>
  ) : null;
};

export default Cart;
