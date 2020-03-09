/**@jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/core';
import Container from '../../components/Container';
import { PageHeading } from '../../styles/Typography';
import ProductsContext from '../../context/ProductsProvider/productsContext';
import BackButton from '../../components/BackButton';

const ProductDetails = ({ id }) => {
  const productsContext = useContext(ProductsContext);

  const product = productsContext.products.find(product => product.id === +id);

  const { name } = product;

  return (
    <Container>
      <BackButton />
      <PageHeading>{name}</PageHeading>
    </Container>
  );
};

export default ProductDetails;
