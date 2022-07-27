import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { meals: [], totalAmount: 0, totalCount: 0 },
  reducers: {
    add: (state, action) => {
      for (const meal in state.meals) {
        if (state.meals[meal].id === action.payload.id) return;
      }
      state.meals.push(action.payload);
    },
    remove: (state, action) => {
      state.meals = state.meals.filter((meal) => meal.id !== action.payload);
    },
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.meals.reduce(
        (cartTotal, cartMeals) => {
          const { price, amount } = cartMeals;
          const mealsTotal = price * amount;

          cartTotal.totalAmount += mealsTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
  },
});

export const { add, remove, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
