/**@jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/core';
import Category from '../../components/Category';
import Container from '../../components/Container';
import ProductsList from '../../components/ProductsList';
import { PageHeading, PageSubheading } from '../../styles/Typography';
import ProductsContext from '../../context/ProductsProvider/productsContext';

const Home = () => {
  const productsContext = useContext(ProductsContext);

  const bestsellers = productsContext.products.filter(
    product => product.bestseller === true
  );

  return (
    <Container>
      <PageHeading>Food and Stuff</PageHeading>
      <PageSubheading>Explore our categories</PageSubheading>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '20px',
          padding: '0 10px',
          '@media (max-width: 480px)': {
            gridTemplateColumns: '1fr',
            gap: '0',
            padding: '20px 10px',
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
