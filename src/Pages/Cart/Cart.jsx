import React from "react";
<<<<<<< HEAD
import { useSelector , useDispatch } from "react-redux";
import { removedProduct } from "../../store/cartSlice";
import "./cart.css";
function Cart() {
  const { products , totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch ();
=======
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

>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
  return (
    <div className="cart_page">
      <div className="cart_products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h1>Name :{product.title}</h1>
            <h4>price : {product.price}</h4>
<<<<<<< HEAD
            <button onClick={()=> dispatch(removedProduct(product)) }>delete</button>
          </div>
        ))}
      </div>
      <h2>Total Price : {totalPrice} </h2>
=======
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
>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
    </div>
  );
}

<<<<<<< HEAD
export default Cart;
=======
export default Cart;
>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
