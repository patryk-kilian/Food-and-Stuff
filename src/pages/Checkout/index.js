/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import CartContext from '../../context/CartProvider/cartContext';
import { PageHeading } from '../../styles/Typography';
import Container from '../../components/Container';
import BackButton from '../../components/BackButton';
import { CardElement } from '@stripe/react-stripe-js';
import { StyledButton } from '../../styles/Button';
import axios from 'axios';

const Checkout = () => {
  const { totalPrice, toggleCart, isCartOpen } = useContext(CartContext);

  const { colors } = useTheme();

  useEffect(() => {
    isCartOpen && toggleCart();
    //eslint-disable-next-line
  }, []);

  const handleCheckoutSubmit = async (ev) => {
    ev.preventDefault();

    const { data: clientSecret } = await axios.post('/api/payment_intents', {
      amount: totalPrice * 100,
    });

    console.log(clientSecret);
  };

  return (
    <Container>
      <BackButton />
      <PageHeading>Checkout </PageHeading>
      <form onSubmit={handleCheckoutSubmit}>
        <CardElement />
        <StyledButton color={colors.primaryLight} type='submit'>
          Pay ${totalPrice}
        </StyledButton>
      </form>
    </Container>
  );
};

export default Checkout;
