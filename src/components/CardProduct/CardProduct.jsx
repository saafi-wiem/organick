import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardProduct.css";

function CardProduct({ product }) {
  const navigate = useNavigate();

  function handleNavigate() {
    return navigate(`/products/${product.id}`, { state: product });
  }
  return (
    <div className="card" onClick={handleNavigate}>
      <h3>{product.name}</h3>
      <img src={product.imgUrl} alt="" />
      <p className="price"> New Price: {product.newPrice} $</p>
      <p className="old-price"> Old Price : {product.oldPrice} $</p>
    </div>
  );
}

export default CardProduct;
