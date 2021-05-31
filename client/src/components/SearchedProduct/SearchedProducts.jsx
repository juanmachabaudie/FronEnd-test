import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const SearchedProducts = () => {
  const [products, setProducts] = useState([]);
  const queryString = window.location.search.split("=")[1];
  useEffect(async () => {
    // const data = async () => {
    const request = await axios.get(`http://localhost:3001/api/items?q=${queryString}`);
    const back = request.data;
    setProducts(back.productsObj.items);
    // };
  }, [queryString]);

  return (
    <div>
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <Card product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchedProducts;
