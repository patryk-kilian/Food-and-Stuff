/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { FaTimes, FaCreditCard } from 'react-icons/fa';
import Button from '../Button';

const Cart = ({ children }) => {
  const theme = useTheme();

  const { colors } = theme;

  return (
    <aside
      css={{
        height: '3rem',
        maxWidth: '25rem',
        width: '100%',
        background: colors.primary,
        height: '100vh',
        zIndex: '501',
        position: 'fixed',
        top: '0',
        right: '0',
        background: colors.white,
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
      <ul
        css={{
          padding: '20px',
        }}
      >
        <li>
          <div>
            <img
              css={{
                height: '100px',
              }}
              src="//images.ctfassets.net/5w7hgh9abc3b/R7aTIc1EzkljeiQL5g7iV/cd995371d09dc82c6c5eb9238a34e36a/food4.png"
              alt=""
            />
            <div>
              <p>sdasd</p>
              <p>sdasd</p>
              <button>remove</button>
            </div>
            <div>
              <p>total: 9999</p>
              <Button icon={FaCreditCard} text="checkout" />
              <Button
                css={{
                  marginTop: '10px',
                }}
                text="clear cart"
              />
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Cart;
