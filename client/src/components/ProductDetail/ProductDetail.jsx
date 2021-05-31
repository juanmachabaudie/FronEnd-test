import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = (props) => {
  const [detail, setDetail] = useState({});
  const { id } = props.match.params;

  useEffect(async () => {
    const request = await axios.get(`http://localhost:3001/api/items/${id}`);
    setDetail(request.data.item);
  }, []);

  return (
    <div className="detailContainer">
      <div className="img">
        <img className="detailImg" src={detail.picture} alt={detail.title} />
      </div>
      <div>
        <h2 className="detailTitle">{detail.title}</h2>
        <h1 className="detailPrice">${detail.price.amount}</h1>
        <br />
        <button type="submit">Comprar</button>
      </div>
      <div>
        <h2 className="detailDescription">Descrpción del producto</h2>
        <p className="description">{detail.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
