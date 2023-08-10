<<<<<<< HEAD
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";

function CartHeader() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cart.count);

=======
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";
import { useNavigate } from "react-router-dom";
function CartHeader() {
  const navigate = useNavigate();
  const { count } = useSelector((state) => state.cart);
>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
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
