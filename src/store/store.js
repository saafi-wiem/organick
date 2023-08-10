import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import cartReducer from "./cartSlice"; 

const store = configureStore({
reducer: {
    cart: cartReducer, 
},
});


=======
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

>>>>>>> 02cd354099eada86423d93b9f2f587f38d03ab7a
export default store;
