/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useTheme } from 'emotion-theming';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import CartContext from '../../context/CartProvider/cartContext';

const CheckoutProduct = ({ product }) => {
  const { colors } = useTheme();

  const { name, image, price, id, amount } = product;

  // const { decreaseItemAmount, increaseItemAmount, removeFromCart } = useContext(
  //   CartContext
  // );

  return (
    <li
      css={{
        display: 'grid',
        gridTemplateColumns: '100px 5fr 1fr 2fr',
        padding: '5px',
        alignItems: 'center',
        fontWeight: '700',
        '@media (max-width: 800px)': {
          gridTemplateColumns: '50px 2fr 1fr 1fr',
        },
      }}
    >
      <div>
        <img
          css={{
            maxWidth: '100px',
            width: '100%',
          }}
          src={image}
          alt={name}
        />
      </div>
      <p
        css={{
          paddingLeft: '1.25rem',
        }}
      >
        {name}
      </p>
      <p>
        <span>x</span> {amount}
      </p>
      <p>$ {price * amount}</p>
    </li>
  );
};

export default CheckoutProduct;
