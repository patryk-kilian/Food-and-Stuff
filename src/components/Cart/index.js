/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import {
  FaTimes,
  FaCreditCard,
  FaTrash,
  FaPlus,
  FaMinus,
} from 'react-icons/fa';
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
          padding: '0 12px',
        }}
      >
        <li
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr',
          }}
        >
          <div>
            <img
              css={{
                height: '100px',
              }}
              src="//images.ctfassets.net/5w7hgh9abc3b/R7aTIc1EzkljeiQL5g7iV/cd995371d09dc82c6c5eb9238a34e36a/food4.png"
              alt=""
            />
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '14px 0 14px 10px',
            }}
          >
            <p>sdasd</p>
            <p>$999</p>
            <button
              css={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              remove <FaTrash />
            </button>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button>
              <FaPlus />
            </button>
            <span
              css={{
                margin: '10px 0',
              }}
            >
              1
            </span>
            <button>
              <FaMinus />
            </button>
          </div>
        </li>
        <li
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr',
            padding: '10px 0',
          }}
        >
          <div>
            <img
              css={{
                height: '100px',
              }}
              src="//images.ctfassets.net/5w7hgh9abc3b/R7aTIc1EzkljeiQL5g7iV/cd995371d09dc82c6c5eb9238a34e36a/food4.png"
              alt=""
            />
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '14px 0 14px 10px',
            }}
          >
            <p>sdasd</p>
            <p>$999</p>
            <button
              css={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              remove <FaTrash />
            </button>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button>
              <FaPlus />
            </button>
            <span
              css={{
                margin: '10px 0',
              }}
            >
              1
            </span>
            <button>
              <FaMinus />
            </button>
          </div>
        </li>
      </ul>
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
  );
};

export default Cart;
