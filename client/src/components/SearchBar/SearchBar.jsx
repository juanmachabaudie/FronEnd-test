import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_searchBar.scss";
import searchIcon from "../../assets/ic_Search.png";
import logo from "../../assets/Logo_ML.png";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [product, setProduct] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/items?search=${product}`);
  };

  return (
    <nav className="navbar">
      <div className="logoDiv">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="searchInput">
          <input
            className="searchField"
            onChange={handleChange}
            type="text"
            placeholder="Nunca dejes de buscar"
            value={product}
          />
          <button className="searchBtn" type="submit">
            <span>
              <img src={searchIcon} alt="search" />
            </span>
          </button>
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
