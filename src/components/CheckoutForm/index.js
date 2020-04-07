/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useState } from 'react';
import { useTheme } from 'emotion-theming';
import CartContext from '../../context/CartProvider/cartContext';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StyledButton } from '../../styles/Button';
import axios from 'axios';

const CheckoutForm = () => {
  const [isProcessing, setProcessingTo] = useState(false);

  const { totalPrice, toggleCart, isCartOpen } = useContext(CartContext);

  const { colors } = useTheme();

  const stripe = useStripe();
  const elements = useElements();

  const handleCheckoutSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
    };

    setProcessingTo(true);

    const { data } = await axios.post('/.netlify/functions/payment', {
      amount: totalPrice * 100,
    });

    const { clientSecret } = data;

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
    });

    const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    console.log(confirmedCardPayment);

    setProcessingTo(false);
  };

  return (
    <form onSubmit={handleCheckoutSubmit}>
      <div>
        <label htmlFor='Name'>Name</label>
        <input type='text' name='name' placeholder='John Doe' required />
      </div>
      <div>
        <label htmlFor='Email'>Email</label>
        <input
          name='email'
          type='email'
          placeholder='johndoe@gmail.com'
          required
        />
      </div>
      <CardElement />
      <StyledButton
        color={colors.primaryLight}
        type='submit'
        disabled={isProcessing || !stripe}
      >
        {isProcessing ? 'Processing...' : `Pay ${totalPrice}`}
      </StyledButton>
    </form>
  );
};

export default CheckoutForm;
