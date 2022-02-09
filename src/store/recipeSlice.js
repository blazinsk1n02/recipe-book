import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], loading: "idle" };

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
