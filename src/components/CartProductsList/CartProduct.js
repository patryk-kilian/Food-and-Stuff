/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import CartContext from '../../context/CartProvider/cartContext';

const CartProduct = ({ product = {} }) => {
  const { colors } = useTheme();

  const { name, image, price, id, amount } = product;

  const { decreaseItemAmount, increaseItemAmount, removeFromCart } = useContext(
    CartContext
  );

  return (
    <li
      css={{
        display: 'grid',
        gridTemplateColumns: '6.25rem 3fr 1fr',
        padding: '5px',
      }}
    >
      <div>
        <img
          css={{
            height: '6.25rem',
          }}
          src={image}
          alt=''
        />
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0.875rem 0 0.875rem 0.625rem',
        }}
      >
        <p
          css={{
            fontWeight: '500',
          }}
        >
          {name}
        </p>
        <p
          css={{
            fontWeight: '700',
            color: colors.secondary,
          }}
        >
          ${price}
        </p>
        <button
          onClick={() => removeFromCart(id)}
          css={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontWeight: '700',
            color: colors.primary,
          }}
        >
          remove&nbsp;
          <FaTrash />
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
        <button onClick={() => increaseItemAmount(id)}>
          <FaPlus
            css={{
              color: colors.primary,
            }}
          />
        </button>
        <span
          css={{
            margin: '0.625rem 0',
          }}
        >
          {amount}
        </span>
        <button onClick={() => decreaseItemAmount(id, amount)}>
          <FaMinus
            css={{
              color: colors.primary,
            }}
          />
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
