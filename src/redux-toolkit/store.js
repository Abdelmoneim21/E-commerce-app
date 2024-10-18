// store.js
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productReducer";
import { categoriesReducer } from "./categoriesReducer";
import { cartReducer } from "./Cart-slice";
import { wishlistReducer } from "./wishlistSlice";

// Use default import

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
