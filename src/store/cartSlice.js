import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk(
  "cart/getMeals",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://food-order-react-website-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: data[key].id,
          title: data[key].title,
          price: data[key].price,
          img: data[key].img,
        });
      }
      return loadedMeals;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { meals: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: {
    // Get Meals
    [getMeals.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMeals.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.meals = action.payload;
    },
    [getMeals.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default cartSlice.reducer;
