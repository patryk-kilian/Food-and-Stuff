/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';

import ProductsList from '../../components/ProductsList';
import Container from '../../components/Container';
import BackButton from '../../components/BackButton';

import ProductsContext from '../../context/ProductsProvider/productsContext';
import { PageHeading } from '../../styles/Typography';

const Stuff = () => {
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter(
    (product) => product.category === 'stuff'
  );

  return (
    <Container>
      <BackButton />
      <PageHeading>Stuff</PageHeading>
      <ProductsList products={filteredProducts} />
    </Container>
  );
};

export default Stuff;
