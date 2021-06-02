import React from "react";
import { Link } from "react-router-dom";
import "./_card.scss";
import shippingIcon from "../../assets/ic_shipping@2x.png.png.png";

const Card = ({ product }) => {
  return (
    <div className="cardContainer">
      <Link className="thumbnail" to={`/items/${product.id}`}>
        <img src={product.picture} alt={product.title} />
      </Link>
      <div className="description">
        <Link className="link" to={`/items/${product.id}`}>
          <h2 className="cardTitle">{product.title}</h2>
        </Link>
        <div className="cardPrice">
          <h2 className="price">$ {product.price.amount}</h2>
          <span className="currency">{product.price.currency}</span>
        </div>
        {product.free_shipping ? (
          <span className="shipping">
            <img src={shippingIcon} alt="Envío Gratis" />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
