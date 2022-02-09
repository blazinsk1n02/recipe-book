import { configureStore } from "@reduxjs/toolkit";

import recipesReducer from "./recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
