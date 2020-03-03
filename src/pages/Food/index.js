/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { useNavigate } from '@reach/router';
import ProductsContext from '../../context/ProductsProvider/productsContext';
import { PageHeading } from '../../styles/Typography';
import ProductsList from '../../components/ProductsList';
import Container from '../../components/Container';

const Food = () => {
  const navigate = useNavigate();

  const productsContext = useContext(ProductsContext);

  const products = productsContext.products.filter(
    product => product.category === 'food',
  );

  return (
    <Container>
      <button onClick={() => navigate(-1)}>back</button>
      <PageHeading>Food</PageHeading>
      <ProductsList products={products} />
    </Container>
  );
};

export default Food;
