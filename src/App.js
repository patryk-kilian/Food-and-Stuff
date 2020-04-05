import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Food from './pages/Food';
import Clothes from './pages/Clothes';
import Stuff from './pages/Stuff';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Theme from './styles/Theme';
import Cart from './components/Cart';
import CartMask from './components/Cart/CartMask';
import ProductsProvider from './context/ProductsProvider';
import CartProvider from './context/CartProvider';
import { Router } from '@reach/router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  return (
    <>
      <Theme>
        <ProductsProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <Header />
              <Router primary={false}>
                <Home path='/' />
                <Food path='/food' />
                <Clothes path='/clothes' />
                <Stuff path='/stuff' />
                <Checkout path='/checkout' />
                <ProductDetails path='/product/:id' />
              </Router>
              <Footer />
              <Cart />
              <CartMask />
            </Elements>
          </CartProvider>
        </ProductsProvider>
      </Theme>
    </>
  );
};

export default App;
