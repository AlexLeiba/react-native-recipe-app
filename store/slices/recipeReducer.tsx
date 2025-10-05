import { createSlice } from "@reduxjs/toolkit";

export const recipeInitialState = {
  title: "",
  description: "",
  image: "",
  ingredients: "",
  timeToCook: 0,
  servings: 0,
  calories: 0,
  temperature: 0,
};

const newRecipeSlice = createSlice({
  name: "newRecipe",
  initialState: recipeInitialState,
  reducers: {
    newRecipe: (state, action) => {
      return (state = action.payload);
    },
    editRecipe: (state, action) => {
      return state;
    },
    deleteRecipe: (state, action) => {
      return state;
    },
  },
});

export default newRecipeSlice.reducer;
export const { newRecipe, editRecipe, deleteRecipe } = newRecipeSlice.actions;
