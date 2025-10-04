export const CATEGORIES = [
  {
    name: "My food",
    image: require("../assets/food-categories/fish.jpg"),
    id: 1,
  },
  {
    name: "My favorites",
    image: require("../assets/food-categories/favorites.png"),
    id: 2,
  },
  {
    name: "Beef",
    image: require("../assets/food-categories/beef.png"),
    id: 3,
  },
  {
    name: "Chicken",
    image: require("../assets/food-categories/chicken.png"),
    id: 4,
  },
  {
    name: "Dessert",
    image: require("../assets/food-categories/dessert.webp"),
    id: 5,
  },
  {
    name: "Lamb",
    image: require("../assets/food-categories/lamb.webp"),
    id: 6,
  },
  {
    name: "Seafood",
    image: require("../assets/food-categories/sea-food.webp"),
    id: 7,
  },
];

export type SelectedRecipeType = {
  name: string;
  image: any;
  id: number;
  categoryId: number;
  details: {
    image: any;
    title: string;
    subtitle: string;
    timeToCook: string;
    servings: number;
    calories: number;
    temperature: number;
    ingredients: string[];
  };
};

export type RecipeType = {
  name: string;
  image: any;
  id: number;
  categoryId: number;
  data?: {
    name: string;
    image: any;
    id: number;
    categoryId: number;
    details: {
      image: any;
      title: string;
      subtitle: string;
      timeToCook: string;
      servings: number;
      calories: number;
      temperature: number;
      ingredients: string[];
    };
  }[];
};
export const RECIPIES = {
  beef: {
    name: "Beef",
    image: require("../assets/food-categories/beef.png"),
    id: 10,
    categoryId: 3,
    data: [
      {
        name: "Beef",
        image: require("../assets/food-categories/beef.png"),
        id: 10,
        categoryId: 3,
        details: {
          image: require("../assets/food-categories/beef.png"),
          title: "Beef dish",
          subtitle: "Beef dish",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "1kg Beef",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Beef dish",
        image: require("../assets/food-categories/favorites.png"),
        id: 9,
        categoryId: 3,
        details: {
          image: require("../assets/food-categories/beef.png"),
          title: "Beef dish",
          subtitle: "Beef dish",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "1kg Beef",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Chicken",
        image: require("../assets/food-categories/chicken.png"),
        id: 11,
        categoryId: 3,
        details: {
          image: require("../assets/food-categories/beef.png"),
          title: "Beef dish",
          subtitle: "Beef dish",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "1kg Beef",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Dessert",
        image: require("../assets/food-categories/dessert.webp"),
        id: 12,
        categoryId: 3,
        details: {
          image: require("../assets/food-categories/beef.png"),
          title: "Beef dish",
          subtitle: "Beef dish",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "1kg Beef",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Lamb",
        image: require("../assets/food-categories/lamb.webp"),
        id: 13,
        categoryId: 3,
        details: {
          image: require("../assets/food-categories/beef.png"),
          title: "Beef dish",
          subtitle: "Beef dish",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "1kg Beef",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Seafood",
        image: require("../assets/food-categories/sea-food.webp"),
        id: 14,
        categoryId: 3,
        details: {
          image: require("../assets/food-categories/beef.png"),
          title: "Beef dish",
          subtitle: "Beef dish",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "1kg Beef",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
    ],
  },
  dessert: {
    name: "Dessert",
    data: [
      {
        name: "Dessert",
        image: require("../assets/food-categories/dessert.webp"),
        id: 12,
        categoryId: 5,
        details: {
          image: require("../assets/food-categories/dessert.webp"),
          title: "Dessert dish",
          subtitle: "Delicious Dessert",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "4 eggs",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Dessert dish",
        image: require("../assets/food-categories/favorites.png"),
        id: 9,
        categoryId: 5,
        details: {
          image: require("../assets/food-categories/dessert.webp"),
          title: "Dessert dish",
          subtitle: "Delicious Dessert",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "4 eggs",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Beef",
        image: require("../assets/food-categories/beef.png"),
        id: 10,
        categoryId: 5,
        details: {
          image: require("../assets/food-categories/dessert.webp"),
          title: "Dessert dish",
          subtitle: "Delicious Dessert",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "4 eggs",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Chicken",
        image: require("../assets/food-categories/chicken.png"),
        id: 11,
        categoryId: 5,
        details: {
          image: require("../assets/food-categories/dessert.webp"),
          title: "Dessert dish",
          subtitle: "Delicious Dessert",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "4 eggs",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Lamb",
        image: require("../assets/food-categories/lamb.webp"),
        id: 13,
        categoryId: 5,
        details: {
          image: require("../assets/food-categories/dessert.webp"),
          title: "Dessert dish",
          subtitle: "Delicious Dessert",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "4 eggs",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
      {
        name: "Seafood",
        image: require("../assets/food-categories/sea-food.webp"),
        id: 14,
        categoryId: 5,
        details: {
          image: require("../assets/food-categories/dessert.webp"),
          title: "Dessert dish",
          subtitle: "Delicious Dessert",
          timeToCook: "30 min",
          servings: 4,
          calories: 400,
          temperature: 100,
          ingredients: [
            "4 eggs",
            "2 tbs Plain Flour",
            "1 tbs Salt",
            "1 tbs Pepper",
            "1 tbs Olive Oil",
            "1 tbs Onion",
            "1 tbs Garlic",
            "1 tbs Tomato Sauce",
            "1 tbs Tomato",
            "1 tbs Basil",
            "1 tbs Parsley",
            "1 tbs Oregano",
            "1 tbs Sugar",
          ],
        },
      },
    ],
  },
};
