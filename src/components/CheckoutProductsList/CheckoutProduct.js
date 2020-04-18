/**@jsx jsx */
import { jsx } from '@emotion/core';

const CheckoutProduct = ({ product = {} }) => {
  const { name, image, price, amount } = product;

  return (
    <li
      css={{
        display: 'grid',
        gridTemplateColumns: '6.25rem 5fr 1fr 2fr',
        padding: '5px',
        alignItems: 'center',
        fontWeight: '700',
        '@media (max-width: 800px)': {
          gridTemplateColumns: '3.125rem 2fr 1fr 1fr',
        },
      }}
    >
      <div>
        <img
          css={{
            maxWidth: '6.25rem',
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
