/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import ProductsContext from '../../context/ProductsProvider/productsContext';
import { PageHeading } from '../../styles/Typography';
import ProductsList from '../../components/ProductsList';
import Container from '../../components/Container';
import BackButton from '../../components/BackButton';

const Food = () => {
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter(
    product => product.category === 'food',
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
