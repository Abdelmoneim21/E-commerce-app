// store.js
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productReducer";
import { categoriesReducer } from "./categoriesReducer";
import { cartReducer } from "./Cart-slice";
// Use default import

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer, // This should now correctly point to productsSlice.reducer
  },
});
