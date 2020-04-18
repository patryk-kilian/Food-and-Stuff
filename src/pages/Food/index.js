/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';

import ProductsList from '../../components/ProductsList';
import Container from '../../components/Container';
import BackButton from '../../components/BackButton';

import { PageHeading } from '../../styles/Typography';
import ProductsContext from '../../context/ProductsProvider/productsContext';

const Food = () => {
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter(
    (product) => product.category === 'food'
  );

  return (
    <Container>
      <BackButton />
      <PageHeading>Food</PageHeading>
      <ProductsList products={filteredProducts} />
    </Container>
  );
};

export default Food;
