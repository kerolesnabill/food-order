import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { meals: [] },
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
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
