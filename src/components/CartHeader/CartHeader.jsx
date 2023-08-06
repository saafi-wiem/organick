import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";
import { useNavigate } from "react-router-dom";
function CartHeader() {
  const navigate = useNavigate();
  const { count } = useSelector((state) => state.cart);
  return (
    <div className="cart_header" onClick={() => navigate("/cart")}>
      <span>
        <img src={cartIcon} alt="" />
      </span>
      Cart ({count})
    </div>
  );
}

export default CartHeader;
