import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";
import meals from "./features/mealsSlice";

export default configureStore({
  reducer: { meals, cart },
});
