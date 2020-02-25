import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Theme from "./styles/Theme";
import { Router } from "@reach/router";

const App = () => {
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
