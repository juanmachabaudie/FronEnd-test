import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_searchBar.scss";
import searchIcon from "../../assets/ic_Search.png";
import logo from "../../assets/Logo_ML.png";

const SearchBar = () => {
  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logoDiv">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="searchInput">
        <input
          className="searchField"
          onChange={handleChange}
          type="text"
          placeholder="Nunca dejes de buscar"
          value={product}
        />
        <Link className="searchBtn" to={`/items?search=${product}`}>
          <button type="submit"></button>
          <span>
            <img src={searchIcon} alt="search" />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default SearchBar;
