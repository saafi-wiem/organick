import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";

function CartHeader() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cart.count);

  return (
    <div className="cart_header" onClick={() => navigate("/cart")}>
      <span>
        <img src={cartIcon} alt="Cart" />
      </span>
      Cart ({count})
    </div>
  );
}

export default CartHeader;
