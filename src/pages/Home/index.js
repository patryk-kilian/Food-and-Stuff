import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div>
      <h1>homepage</h1>
      <Link to="/food">Food</Link>
    </div>
  );
};

export default Home;
