import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import productsContext from './productsContext';

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });

    client
      .getEntries({
        content_type: 'product',
      })
      .then(response =>
        response.items.map(el => {
          const item = {
            ...el.fields,
            image: el.fields.image.fields.file.url,
            amount: 0,
          };
          return item;
        }),
      )
      .then(products => {
        setProducts(products);
      });
  }, []);

  return (
    <productsContext.Provider value={{ products }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
