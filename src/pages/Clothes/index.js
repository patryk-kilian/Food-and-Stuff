/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { Link } from '@reach/router';
import ProductsContext from '../../context/ProductsProvider/productsContext';
import { PageHeading } from '../../styles/Typography';
import ProductsList from '../../components/ProductsList';
import Container from '../../components/Container';

const Clothes = () => {
  const productsContext = useContext(ProductsContext);

  const products = productsContext.products.filter(
    product => product.category === 'clothes'
  );

  return (
    <Container>
      <Link to='/'>Home</Link>
      <PageHeading text='Clothes' />
      <ProductsList products={products} />
    </Container>
  );
};

export default Clothes;
