/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useContext } from 'react';

import Container from '../../components/Container';
import BackButton from '../../components/BackButton';
import CheckoutForm from '../../components/CheckoutForm';
import CheckoutProductList from '../../components/CheckoutProductsList';

import CartContext from '../../context/CartProvider/cartContext';
import { PageHeading } from '../../styles/Typography';

const Checkout = () => {
  const { toggleCart, isCartOpen, cartAmount, cartItems } = useContext(
    CartContext
  );

  useEffect(() => {
    isCartOpen && toggleCart();
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <BackButton />
      <PageHeading>Checkout</PageHeading>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          margin: '3.125rem 0',
          '@media (max-width: 1200px)': {
            padding: '0 0.625rem',
          },
          '@media (max-width: 800px)': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        <div>
          <p
            css={{
              fontSize: '1.4rem',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            Your cart ({cartAmount} items)
          </p>
          <CheckoutProductList products={cartItems} />
        </div>
        <div>
          <CheckoutForm />
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
