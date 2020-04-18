import React from 'react';
import { Router } from '@reach/router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Home from './pages/Home';
import Food from './pages/Food';
import Clothes from './pages/Clothes';
import Stuff from './pages/Stuff';
import Checkout from './pages/Checkout';

import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
import CartMask from './components/Cart/CartMask';
import ScrollToTop from './components/ScrollToTop';
import Notifications from './components/Notifications';

import ProductsProvider from './context/ProductsProvider';
import CartProvider from './context/CartProvider';
import NotificationsProvider from './context/NotificationsProvider';
import Theme from './styles/Theme';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  return (
    <>
      <Theme>
        <ProductsProvider>
          <CartProvider>
            <NotificationsProvider>
              <Elements stripe={stripePromise}>
                <Header />
                <Notifications />
                <Router>
                  <ScrollToTop path='/'>
                    <Home path='/' />
                    <Food path='/food' />
                    <Clothes path='/clothes' />
                    <Stuff path='/stuff' />
                    <Checkout path='/checkout' />
                  </ScrollToTop>
                </Router>
                <Footer />
                <Cart />
                <CartMask />
              </Elements>
            </NotificationsProvider>
          </CartProvider>
        </ProductsProvider>
      </Theme>
    </>
  );
};

export default App;
