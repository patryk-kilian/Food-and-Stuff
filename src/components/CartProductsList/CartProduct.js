/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import CartContext from '../../context/CartProvider/cartContext';

const CartProduct = ({ product }) => {
  const { colors } = useTheme();

  const { name, image, price, id, amount } = product;

  const { decreaseItemAmount, increaseItemAmount, removeFromCart } = useContext(
    CartContext,
  );

  return (
    <li
      css={{
        display: 'grid',
        gridTemplateColumns: '100px 3fr 1fr',
        padding: '5px',
      }}
    >
      <div>
        <img
          css={{
            height: '100px',
          }}
          src={image}
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
            margin: '10px 0',
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
