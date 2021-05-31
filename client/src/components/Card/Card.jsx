import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  console.log(product);
  return (
    <div className="cardContainer">
      <Link to={`/items/${product.id}`}>
        <img className="thumbnail" src={product.picture} alt={product.title} />
      </Link>
      <div>
        <h2 className="cardPrice">${product.price.amount}</h2>
        <Link to={`/items/${product.id}`}>
          <h2 className="cardTitle">{product.title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Card;
