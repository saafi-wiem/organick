import React from "react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { addToCart } from "../../store/cartSlice";
import "./CardProduct.css";
import { useDispatch } from "react-redux";
import AddToCart from "../../assets/icons/add-to-cart.svg"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
=======
import { ReactComponent as AddToCart } from "../../assets/icons/add-to-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import "./CardProduct.css";
import { addToCart } from "../../store/slices/cartSlice";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
  const handleNavigate = () => {
    navigate(`/products/${product?.id}`, {
      state: { product: product },
    });
  };
<<<<<<< HEAD

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

=======
  const handleAdd = (event) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };
>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
  return (
    <div className="product-card" onClick={handleNavigate}>
      <div className="product-card__btns">
        <button className="product-card__btns--category-button">
          {product.category}
        </button>
        <button
<<<<<<< HEAD
          className="product-card__btns--add-to-cart-button"
          onClick={(event) => {
            event.stopPropagation()
            handleAddToCart()
          }}
        >
          <img src={AddToCart} />
=======
          onClick={handleAdd}
          className="product-card__btns--add-to-cart-button"
        >
          <AddToCart />
>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
        </button>
      </div>

      <img
        className="product-card__image"
        src={product.thumbnail}
        alt={product.name}
      />
      <h3 className="product-card__name">{product.name}</h3>

      <div className="product-card__footer">
        <div className="product-card__price">
          <span className="product-card__original-price">
            ${product?.oldPrice?.toFixed(2)}
          </span>
          <span className="product-card__discount-price">
            ${product?.newPrice?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
