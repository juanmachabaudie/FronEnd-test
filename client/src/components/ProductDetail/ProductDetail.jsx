import React, { useEffect, useState } from "react";
import axios from "axios";
import "./_productDetail.scss";

const ProductDetail = (props) => {
  const [detail, setDetail] = useState({});
  const { id } = props.match.params;
  const [price, setPrice] = useState(0);

  useEffect(async () => {
    const request = await axios.get(`http://localhost:3001/api/items/${id}`);
    setDetail(request.data.item);
    setPrice(request.data.item.price.amount);
  }, []);

  return (
    <div className="detail">
      <div className="detailContainer">
        <div className="img">
          <img className="detailImg" src={detail.picture} alt={detail.title} />
        </div>
        <div className="characteristics">
          <p className="condition">{detail.condition}</p>
          <p className="sold">{detail.sold_quantity} Vendidos</p>
          <h3 className="detailTitle">{detail.title}</h3>
          <h2 className="detailPrice">${price}</h2>
          <button className="submitBtn" type="submit">
            Comprar
          </button>
        </div>
        <div className="description">
          <h2>Descripción</h2>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
