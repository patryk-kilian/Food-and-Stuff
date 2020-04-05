/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import { FaTimes, FaCreditCard } from 'react-icons/fa';
import CartContext from '../../context/CartProvider/cartContext';
import CartProductsList from '../CartProductsList/index';
import { StyledButton } from '../../styles/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@reach/router';

const Cart = () => {
  const { colors } = useTheme();

  const {
    isCartOpen,
    toggleCart,
    cartItems,
    totalPrice,
    cartAmount,
    clearCart,
  } = useContext(CartContext);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [isCartOpen]);

  const ButtonLink = StyledButton.withComponent(Link);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.aside
          key='cart'
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: 400 }}
          transition={{ ease: 'easeIn' }}
          css={{
            maxWidth: '25rem',
            width: '100%',
            height: '100vh',
            zIndex: '501',
            position: 'fixed',
            top: '0',
            right: '0',
            background: colors.white,
            display: 'grid',
            gridTemplateRows: 'min-content 1fr min-content',
          }}
        >
          <header
            css={{
              background: colors.primary,
              height: '3rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <h3
              css={{
                color: colors.white,
                textTransform: 'uppercase',
              }}
            >
              Your cart&nbsp;<span>(&nbsp;{cartAmount}&nbsp;)</span>
            </h3>
            <button
              onClick={() => toggleCart()}
              css={{
                fontSize: '1.6rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: '20px',
                color: '#fff',
              }}
            >
              <FaTimes />
            </button>
          </header>
          <CartProductsList products={cartItems} />
          <div
            css={{
              paddingTop: '10px',
              paddingBottom: '4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p
              css={{
                textTransform: 'uppercase',
                fontSize: '1.5rem',
                fontWeight: '500',
                marginBottom: '10px',
              }}
            >
              total:{' '}
              <span
                css={{
                  color: colors.secondaryDarker,
                }}
              >
                ${totalPrice}
              </span>
            </p>
            <ButtonLink color={colors.primaryLight} to='/checkout'>
              checkout&nbsp;
              <FaCreditCard />
            </ButtonLink>
            <StyledButton
              onClick={() => clearCart()}
              color={colors.primaryLight}
              css={{
                marginTop: '10px',
              }}
            >
              clear cart
            </StyledButton>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Cart;
