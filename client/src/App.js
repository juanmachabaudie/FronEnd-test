import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SearchedProducts from "./components/SearchedProducts";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={SearchBar} />
      <Route path="/items?search" component={SearchedProducts} />
      <Route path="/items/:id" component={ProductDetail} />
    </Fragment>
  );
};

export default App;
