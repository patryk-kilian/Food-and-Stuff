/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../context/CartProvider/cartContext';

const Header = () => {
  const theme = useTheme();

  const { colors, container } = theme;

  const cartContext = useContext(CartContext);

  const { cartAmount, toggleCart } = cartContext;

  return (
    <header
      css={{
        backgroundColor: colors.primary,
        padding: '10px 0',
        color: colors.white,
        position: 'sticky',
        top: '0',
        width: '100%',
        zIndex: '10',
      }}
    >
      <div
        css={{
          maxWidth: container.base,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            fontSize: '40px',
          }}
        >
          FS
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <p
            css={{
              fontSize: '1.2rem',
              marginRight: '5px',
            }}
          >
            cart
          </p>
          <button
            onClick={() => toggleCart()}
            css={{
              position: 'relative',
            }}
          >
            <FaShoppingCart
              css={{
                color: colors.white,
                width: '2.5rem',
                height: '2.5rem',
              }}
            />
            <span
              css={{
                position: 'absolute',
                fontSize: '1.1rem',
                top: '-5px',
                right: '-15px',
                background: colors.secondary,
                color: colors.white,
                width: '25px',
                height: '25px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {cartAmount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
