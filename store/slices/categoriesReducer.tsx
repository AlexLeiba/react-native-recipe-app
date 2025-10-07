import { createSlice } from "@reduxjs/toolkit";

export type CategoryType = {
  name:
    | "My recipies"
    | "Favorites"
    | "Beef"
    | "Dessert"
    | "Chicken"
    | "Lamb"
    | "Seafood";
  image: any;
  id: number;
  selected: boolean;
};
const initialCategoriesData: CategoryType[] = [
  {
    name: "My recipies",
    image: require("../../assets/food-categories/fish.jpg"),
    id: 1,
    selected: false,
  },
  {
    name: "Favorites",
    image: require("../../assets/food-categories/favorites.png"),
    id: 2,
    selected: false,
  },
  {
    name: "Beef",
    image: require("../../assets/food-categories/beef.png"),
    id: 3,
    selected: false,
  },
  {
    name: "Dessert",
    image: require("../../assets/food-categories/dessert.webp"),
    id: 5,
    selected: false,
  },
  {
    name: "Chicken",
    image: require("../../assets/food-categories/chicken.png"),
    id: 4,
    selected: false,
  },

  {
    name: "Lamb",
    image: require("../../assets/food-categories/lamb.webp"),
    id: 6,
    selected: false,
  },
  {
    name: "Seafood",
    image: require("../../assets/food-categories/sea-food.webp"),
    id: 7,
    selected: false,
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesData,
  reducers: {
    selectCategory: (state, action: { payload: { categoryId: number } }) => {
      state.forEach((cat) => {
        return cat.id === action.payload.categoryId
          ? (cat.selected = true)
          : (cat.selected = false);
      });
    },
  },
});

export default categoriesSlice.reducer;

export const { selectCategory } = categoriesSlice.actions;
