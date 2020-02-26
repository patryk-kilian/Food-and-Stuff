import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Theme from "./styles/Theme";
import { Router } from "@reach/router";
import { createClient } from "contentful";

const App = () => {
  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({
        content_type: "product"
      })
      .then(response =>
        response.items.map(el => {
          const item = {
            ...el.fields,
            image: el.fields.image.fields.file.url
          };
          return item;
        })
      )
      .then(items => console.log(items));
  });

  return (
    <div>
      <Theme>
        <Header />
        <Router>
          <Home path="/" />
          <Food path="/food" />
        </Router>
        <Footer />
      </Theme>
    </div>
  );
};

export default App;
