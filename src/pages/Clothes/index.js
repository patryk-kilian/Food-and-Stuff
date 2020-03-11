/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import ProductsContext from '../../context/ProductsProvider/productsContext';
import { PageHeading } from '../../styles/Typography';
import ProductsList from '../../components/ProductsList';
import Container from '../../components/Container';
import BackButton from '../../components/BackButton';

const Clothes = () => {
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter(
    product => product.category === 'clothes',
  );

  return (
    <Container>
      <BackButton />
      <PageHeading>Clothes</PageHeading>
      <ProductsList products={filteredProducts} />
    </Container>
  );
};

export default Clothes;
