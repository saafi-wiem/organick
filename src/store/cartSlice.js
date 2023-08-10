import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    count: 0,
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const allProductsIds = state.products.map(product=>product.id)
      if(!allProductsIds.includes(newProduct.id)){
        state.products = [...state.products, newProduct];
      }
      state.count += 1;
      state.totalPrice += newProduct.price;
    },
    removedProduct: (state, action) => {
      const product  = action.payload;

        state.products = state.products.filter(item => item.id !== product.id);
        state.count -= 1;
        state.totalPrice -= product.price;
      
    },
  },
});

export const { addToCart, removedProduct } = cartSlice.actions;
export default cartSlice.reducer;
