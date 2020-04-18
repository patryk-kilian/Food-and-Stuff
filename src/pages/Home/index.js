/**@jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/core';

import Category from '../../components/Category';
import Container from '../../components/Container';
import ProductsList from '../../components/ProductsList';

import { PageHeading, PageSubheading } from '../../styles/Typography';
import ProductsContext from '../../context/ProductsProvider/productsContext';

const Home = () => {
  const { products } = useContext(ProductsContext);

  const bestsellers = products.filter((product) => product.bestseller === true);

  return (
    <Container>
      <PageHeading>Food and Stuff</PageHeading>
      <PageSubheading>Explore our categories</PageSubheading>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1.25rem',
          padding: '0 0.625rem',
          '@media (max-width: 480px)': {
            gridTemplateColumns: '1fr',
            gap: '0',
            padding: '1.25rem 0.625rem',
          },
        }}
      >
        <Category name='food' />
        <Category name='stuff' />
        <Category name='clothes' />
      </div>
      <PageSubheading>Bestsellers</PageSubheading>
      <ProductsList products={bestsellers} />
    </Container>
  );
};

export default Home;
