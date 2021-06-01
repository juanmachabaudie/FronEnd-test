import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./_searchedProducts.scss";

const SearchedProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const queryString = window.location.search.split("=")[1];
  useEffect(async () => {
    const request = await axios.get(`http://localhost:3001/api/items?q=${queryString}`);
    const back = request.data.productsObj;
    setProducts(back.items);
    setCategories(back.categories);
  }, [queryString]);

  return (
    <div className="searchBody">
      <div className="category">
        <p>{categories[0]}</p>
      </div>
      <div className="productsContainer">
        {products?.map((product) => {
          return (
            <div key={product.id}>
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchedProducts;
