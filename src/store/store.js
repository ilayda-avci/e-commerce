import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productSlice";
import clientReducer from "./clientSlice";
import shoppingCartReducer from "./shoppingCartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    client: clientReducer,
    shoppingCart: shoppingCartReducer,
  },
});