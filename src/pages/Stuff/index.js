/**@jsx jsx */
import { jsx } from "@emotion/core";
import { useContext } from "react";
import { Link } from "@reach/router";
import ProductsContext from "../../context/ProductsProvider/productsContext";
import { PageHeading } from "../../styles/Typography";
import ProductsList from "../../components/ProductsList";
import Container from "../../components/Container";

const Stuff = () => {
  const productsContext = useContext(ProductsContext);

  const products = productsContext.products.filter(
    product => product.category === "stuff"
  );

  return (
    <Container>
      <Link to="/">Home</Link>
      <PageHeading>Stuff</PageHeading>
      <ProductsList products={products} />
    </Container>
  );
};

export default Stuff;
