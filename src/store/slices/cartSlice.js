import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    count: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      state.products = [...state.products, newProduct];
      state.count += 1;
      state.totalPrice += newProduct.price;
    },
    removeFromCart(state, action) {
      const { id, price } = action.payload;
      state.products = state.products.filter((el) => el.id !== id);
      state.count -= 1;
      state.totalPrice -= price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
