/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import CartContext from '../../context/CartProvider/cartContext';

const CartProduct = ({ product }) => {
  const theme = useTheme();

  const { colors } = theme;

  const { name, image, price, id, amount } = product;

  const cartContext = useContext(CartContext);

  const {
    decreaseItemAmount,
    increaseItemAmount,
    removeFromCart,
  } = cartContext;

  return (
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
        <p>{name}</p>
        <p>${price}</p>
        <button
          onClick={() => removeFromCart(id)}
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
        <button onClick={() => increaseItemAmount(id)}>
          <FaPlus />
        </button>
        <span
          css={{
            margin: '10px 0',
          }}
        >
          {amount}
        </span>
        <button onClick={() => decreaseItemAmount(id, amount)}>
          <FaMinus />
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
