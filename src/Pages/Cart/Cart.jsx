import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { removedProduct } from "../../store/cartSlice";
import "./cart.css";
function Cart() {
  const { products , totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch ();
  return (
    <div className="cart_page">
      <div className="cart_products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h1>Name :{product.title}</h1>
            <h4>price : {product.price}</h4>
            <button onClick={()=> dispatch(removedProduct(product)) }>delete</button>
          </div>
        ))}
      </div>
      <h2>Total Price : {totalPrice} </h2>
    </div>
  );
}

export default Cart;