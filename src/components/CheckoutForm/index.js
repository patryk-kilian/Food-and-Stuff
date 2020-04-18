/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useState, useRef, Fragment } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import FormField from './FormField';

import { StyledButton } from '../../styles/Button';
import { FaCheckCircle } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';
import { useTheme } from 'emotion-theming';

import CartContext from '../../context/CartProvider/cartContext';
import NotificationContext from '../../context/NotificationsProvider/notificationsContext';
import {
  PAYMENT_SUCCEED_MESSAGE,
  SUCCESS,
} from '../../context/NotificationsProvider/notificationsConstants';

const CheckoutForm = () => {
  const [isProcessing, setProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [isPaymentSucceed, setPaymentSucceed] = useState(false);

  const { triggerNotification } = useContext(NotificationContext);

  const { totalPrice, clearCart } = useContext(CartContext);

  const { colors } = useTheme();

  const stripe = useStripe();
  const elements = useElements();

  const formRef = useRef();

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError(null);
  };

  const paymentSucceed = () => {
    setPaymentSucceed(true);
    formRef.current.reset();
    clearCart();
    triggerNotification({
      id: Date.now() + Math.random(),
      message: PAYMENT_SUCCEED_MESSAGE,
      type: SUCCESS,
    });

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
      cardElement.clear();
    } catch (err) {
      setCheckoutError('Sorry server problems');
      setProcessing(false);
    }
  };

  const cardFieldStyles = {
    base: {
      fontSize: '1rem',
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
    <form onSubmit={handleCheckoutSubmit} ref={formRef}>
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
          padding: '0.75rem 0',
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
        {!isPaymentSucceed && checkoutError ? (
          <Fragment>
            <FaExclamationCircle
              css={{
                marginRight: '0.625rem',
              }}
            />
            {checkoutError}
          </Fragment>
        ) : null}
        {isPaymentSucceed && (
          <Fragment>
            <FaCheckCircle
              css={{
                marginRight: '0.625rem',
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
