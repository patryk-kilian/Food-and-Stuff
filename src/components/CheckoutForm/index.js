/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useState } from 'react';
import { useTheme } from 'emotion-theming';
import CartContext from '../../context/CartProvider/cartContext';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StyledButton } from '../../styles/Button';
import FormField from './FormField';
import axios from 'axios';
import { FaCheckCircle } from 'react-icons/fa';
import { Fragment } from 'react';

const CheckoutForm = () => {
  const [isProcessing, setProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [isPaymentSucceed, setPaymentSucceed] = useState(false);

  const { totalPrice } = useContext(CartContext);

  const { colors } = useTheme();

  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError(null);
  };

  const paymentSucceed = () => {
    setPaymentSucceed(true);

    setTimeout(() => {
      setPaymentSucceed(false);
    }, 5000);
  };

  const handleCheckoutSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
    };

    setProcessing(true);

    try {
      if (!totalPrice) {
        setCheckoutError('You have no items to checkout');
        setProcessing(false);
        return;
      }

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

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessing(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessing(false);
        return;
      }

      setProcessing(false);
      paymentSucceed();
    } catch (err) {
      setCheckoutError('Sorry server problems');
      setProcessing(false);
    }
  };

  const cardFieldStyles = {
    base: {
      fontSize: '16px',
      color: '#383838',
      fontWeight: '700',
      iconColor: colors.primary,
    },
    invalid: {
      iconColor: colors.red,
      color: colors.red,
    },
    complete: {
      iconColor: colors.green,
    },
  };

  const cardFieldOptions = {
    iconStyle: 'solid',
    style: cardFieldStyles,
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleCheckoutSubmit}>
      <FormField
        name='name'
        label='Name'
        type='text'
        placeholder='John Doe'
        required
      />
      <FormField
        name='email'
        label='Email'
        type='email'
        placeholder='johndoe@example.com'
        required
      />
      <div
        css={{
          padding: '12px 0',
          borderBottom: `2px solid ${colors.primaryLight}`,
        }}
      >
        <CardElement
          options={cardFieldOptions}
          onChange={handleCardDetailsChange}
        />
      </div>
      <StyledButton
        color={colors.primaryLight}
        style={{
          marginTop: '1.1rem',
          maxWidth: '100%',
        }}
        type='submit'
        disabled={isProcessing || !stripe}
      >
        {isProcessing ? 'Processing...' : `Pay $${totalPrice}`}
      </StyledButton>
      <div
        css={{
          marginTop: '1.1rem',
          color: isPaymentSucceed ? colors.green : colors.red,
          fontWeight: '700',
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isPaymentSucceed ? checkoutError : null}
        {isPaymentSucceed && (
          <Fragment>
            <FaCheckCircle
              css={{
                marginRight: '10px',
              }}
            />{' '}
            Payment succeed
          </Fragment>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
