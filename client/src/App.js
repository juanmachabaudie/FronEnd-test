import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchedProducts from "./components/SearchedProduct/SearchedProducts";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={SearchBar} />
      <Route exact path="/items" component={SearchedProducts} />
      <Route exact path="/items/:id" component={ProductDetail} />
    </Fragment>
  );
};

export default App;
