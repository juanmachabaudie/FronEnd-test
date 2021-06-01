import React from "react";
import { Link } from "react-router-dom";
import "./_card.scss";

const Card = ({ product }) => {
  return (
    <div className="cardContainer">
      <Link className="thumbnail" to={`/items/${product.id}`}>
        <img src={product.picture} alt={product.title} />
      </Link>
      <div className="description">
        <h2 className="cardPrice">$ {product.price.amount}</h2>
        <Link className="link" to={`/items/${product.id}`}>
          <h2 className="cardTitle">{product.title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Card;
