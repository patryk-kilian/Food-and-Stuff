import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Food from './pages/Food';
import Clothes from './pages/Clothes';
import Stuff from './pages/Stuff';
import Theme from './styles/Theme';
import Cart from './components/Cart';
import CartMask from './components/Cart/CartMask';
import ProductsProvider from './context/ProductsProvider';
import CartProvider from './context/CartProvider';
import { Router } from '@reach/router';

const App = () => {
  return (
    <div>
      <Theme>
        <ProductsProvider>
          <CartProvider>
            <Header />
            <Router>
              <Home path="/" />
              <Food path="/food" />
              <Clothes path="clothes" />
              <Stuff path="stuff/" />
            </Router>
            <Footer />
            <Cart />
            <CartMask />
          </CartProvider>
        </ProductsProvider>
      </Theme>
    </div>
  );
};

export default App;
