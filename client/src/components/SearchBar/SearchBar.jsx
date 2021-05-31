import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_searchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div>
          <Link to={"/"}>
            <img
              className="imgScss"
              src="https://static.educacionit.com/common/assets/imagotype-mercado-libre-fill-color.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <input
            className="searchField"
            onChange={handleChange}
            type="text"
            value={product}
          />
          <Link to={`/items?search=${product}`}>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
