/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { Link } from '@reach/router';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../context/CartProvider/cartContext';
import { useTheme } from 'emotion-theming';

const Header = () => {
  const { colors, container } = useTheme();

  const { cartAmount, toggleCart } = useContext(CartContext);

  return (
    <header
      css={{
        backgroundColor: colors.primary,
        padding: '0.625rem',
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
        <Link to='/'>
          <h1
            css={{
              fontFamily: 'Lobster',
              color: colors.secondaryDarker,
              fontSize: '2.2rem',
              '@media (max-width: 480px)': {
                fontSize: '1.5rem',
              },
            }}
          >
            Food&Stuff
          </h1>
        </Link>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '1rem',
          }}
        >
          <p
            css={{
              fontSize: '1.2rem',
              marginRight: '5px',
              fontWeight: '700',
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
                right: '-1rem',
                background: colors.secondary,
                color: colors.white,
                width: '1.625rem',
                height: '1.625rem',
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
