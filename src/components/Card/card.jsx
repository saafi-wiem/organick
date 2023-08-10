import React from "react";
import "./Card.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/Cart-Slice";

function Card({product}) {
const dispatch = useDispatch()
    return (
        <div className="product-card" >
        <div className="product-cardbtns">
          <button className="product-cardbtns--category-button">
            {product?.category}
          </button>
          <button
          onClick={()=>{
            dispatch(addToCart(product))
          }}
          className="product-cardbtns--add-to-cart-button">
           +
          </button>
        </div>

        <img
          className="product-cardimage"
          src={product?.thumbnail}
          alt={product?.title}
        />
        <h3 className="product-cardname">{product?.name}</h3>

        <div className="product-cardfooter">
          <div className="product-cardprice">
            <span className="product-cardoriginal-price">
              ${product?.price?.toFixed(2)}
            </span>
            <span className="product-card__discount-price">
              ${product?.newPrice?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    ) 
}
export default Card;