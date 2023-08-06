import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { removeFromCart } from "../../store/slices/cartSlice";
function Cart() {
  const { products, totalPrice } = useSelector((state) => state.cart);
  console.log(products);
  const dispatch = useDispatch();

  const handleRemove = (obj) => {
    dispatch(removeFromCart(obj));
  };

  if (products.length === 0) {
    return <h1>Your Cart is empty</h1>;
  }

  return (
    <div className="cart_page">
      <div className="cart_products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h1>Name :{product.title}</h1>
            <h4>price : {product.price}</h4>
            <button
              onClick={() =>
                handleRemove({ id: product.id, price: product.price })
              }
            >
              remove
            </button>
          </div>
        ))}
      </div>
      <h2>Total Price : {totalPrice}</h2>
    </div>
  );
}

export default Cart;
