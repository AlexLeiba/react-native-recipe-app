import { configureStore } from "@reduxjs/toolkit";

import newRecipeReducer from "./slices/recipeReducer";

export const store = configureStore({
  reducer: {
    newRecipe: newRecipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
