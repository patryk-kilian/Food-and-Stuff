import React, { useEffect, useContext } from "react";
import { Link } from "@reach/router";
import ProductsContext from "../../context/ProductsProvider/productsContext";
const Food = () => {
  const productsContext = useContext(ProductsContext);

  useEffect(() => {
    console.log(productsContext.products);
  });

  return (
    <div>
      <h1>FoodPage</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Food;
