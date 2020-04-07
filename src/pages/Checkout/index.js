/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useContext } from 'react';
import { useTheme } from 'emotion-theming';
import CartContext from '../../context/CartProvider/cartContext';
import { PageHeading } from '../../styles/Typography';
import Container from '../../components/Container';
import BackButton from '../../components/BackButton';
import CheckoutForm from '../../components/CheckoutForm';

const Checkout = () => {
  const { toggleCart, isCartOpen } = useContext(CartContext);

  const { colors } = useTheme();

  useEffect(() => {
    isCartOpen && toggleCart();
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <BackButton />
      <PageHeading>Checkout </PageHeading>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div>
          <h1>prods</h1>
        </div>
        <div>
          <CheckoutForm />
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
