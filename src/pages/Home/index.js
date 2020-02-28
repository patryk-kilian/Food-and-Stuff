/**@jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';
import { useTheme } from 'emotion-theming';
import Category from '../../components/Category';
import ProductsList from '../../components/ProductsList';
import ProductsContext from '../../context/ProductsProvider/productsContext';

const Home = () => {
  const theme = useTheme();
  const productsContext = useContext(ProductsContext);

  const bestsellers = productsContext.products.filter(
    product => product.bestseller === true
  );

  const { colors, container } = theme;

  return (
    <main
      css={{
        maxWidth: container.base,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1
        css={{
          fontSize: '3rem',
          marginTop: '2rem',
        }}
      >
        Food and Stuff
      </h1>
      <h2
        css={{
          fontSize: '2rem',
          textTransform: 'uppercase',
        }}
      >
        Explore our categories
      </h2>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '20px',
        }}
      >
        <Category name='food' />
        <Category name='stuff' />
        <Category name='clothes' />
      </div>
      <h2
        css={{
          fontSize: '2rem',
          textTransform: 'uppercase',
        }}
      >
        Bestsellers
      </h2>
      <ProductsList products={bestsellers} />
    </main>
  );
};

export default Home;
