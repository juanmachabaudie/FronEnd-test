import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={SearchBar} />
    </Fragment>
  );
};

export default App;
