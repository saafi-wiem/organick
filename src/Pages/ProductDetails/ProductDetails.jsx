import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const product = location.state;
  return (
    <div
      style={{
        padding: "90px",
      }}
    >
      <h1>Name : {product.name}</h1>
      <h1>Description : {product.description}</h1>

      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default ProductDetails;
