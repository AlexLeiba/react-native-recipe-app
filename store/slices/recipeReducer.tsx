import { createSlice } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";

export type RecipeType = {
  id: number;
  title: string;
  description: string;
  image: string | ImageSourcePropType;
  ingredients: string | string[];
  timeToCook: number;
  servings: number;
  calories: number;
  temperature: number;
  favorites?: boolean;
  categoryName?: string;
  categoryId?: number;
};
export const recipeInitialState: RecipeType[] = [];

const newRecipeSlice = createSlice({
  name: "newRecipe",
  initialState: recipeInitialState,
  reducers: {
    newRecipe: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editRecipe: (state, action) => {
      const editedRecipe = state.find(
        (recipe) => recipe.id === action.payload.id
      );
      if (editedRecipe) {
        editedRecipe.title = action.payload.title;
        editedRecipe.description = action.payload.description;
        editedRecipe.image = action.payload.image;
        editedRecipe.ingredients = action.payload.ingredients;
        editedRecipe.timeToCook = action.payload.timeToCook;
        editedRecipe.servings = action.payload.servings;
        editedRecipe.calories = action.payload.calories;
        editedRecipe.temperature = action.payload.temperature;
      }
    },
    deleteRecipe: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload);
    },
    addToFavorites: (state, action) => {
      const recipe = state.find((recipe) => recipe.id === action.payload);

      if (recipe) {
        recipe.favorites = !recipe.favorites;
      }
    },
  },
});

export default newRecipeSlice.reducer;
export const { newRecipe, editRecipe, deleteRecipe, addToFavorites } =
  newRecipeSlice.actions;
