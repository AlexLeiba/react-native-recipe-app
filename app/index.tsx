import Header from "@/components/Header/Header";
import { RecipeCard } from "@/components/HomePage/RecipeCard";
import { ThemedView } from "@/components/themed-view";
import { H1, H2, H3, Paragraph } from "@/components/typography/typography";
import { globalStyles } from "@/constants/stylesheets";
import { RootState } from "@/store/config";
import { CategoryType, selectCategory } from "@/store/slices/categoriesReducer";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const theme = useColorScheme() ?? "light";
  const categoriesData = useSelector((state: RootState) => state.categories);
  const hardcodedRecipeData = useSelector(
    (state: RootState) => state.hardcodedRecipes
  );
  const dispatch = useDispatch();

  const [category, setCategory] = React.useState<CategoryType>({
    name: "Beef",
    image: require("../assets/food-categories/beef.png"),
    id: 3,
    selected: true,
  });
  const router = useRouter();

  function handleSelectCategory(
    category: CategoryType["name"],
    categoryId: number
  ) {
    if (category === "My recipies") {
      return router.push("/my-recipe-page");
    }
    if (category === "Favorites") {
      return router.push("/favorites");
    } else {
      dispatch(selectCategory({ categoryId }));

      const selectedCategory = categoriesData.find(
        (cat) => cat.id === categoryId
      );

      selectedCategory && setCategory(selectedCategory);
    }
  }

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;

    setScrollY(yOffset);
  };

  return (
    <>
      <Header withSearch scrollOffset={scrollY} title={t("homePage.title")} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(event) => {
          handleScroll(event);
        }}
        style={{ paddingTop: 100, paddingBottom: 60 }}
      >
        <ThemedView style={{ marginBottom: 20 }}>
          <H1>
            Make your own food at <H1 style={{ color: "#fff236cf" }}>Home</H1>
          </H1>
        </ThemedView>

        {/* CATEGORIES SECTION */}
        <ThemedView style={globalStyles.spacer20}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            horizontal
            data={categoriesData}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => handleSelectCategory(item.name, item.id)}
                >
                  <ThemedView style={[globalStyles.alignCenter, {}]}>
                    <ThemedView
                      style={[
                        styles.categoryCard,
                        theme === "light"
                          ? { borderColor: "black" }
                          : { borderColor: "white" },
                        (item.name === "My recipies" ||
                          item.name === "Favorites") && {
                          borderColor: "#3ee06ccf",
                          borderWidth: 5,
                        },

                        category?.id === item.id && {
                          borderColor: "#ffb514e9",
                          borderWidth: 5,
                        },
                      ]}
                    >
                      <Image source={item.image} style={styles.avatar} />
                    </ThemedView>
                    <Paragraph>{item.name}</Paragraph>
                  </ThemedView>
                </TouchableOpacity>
              );
            }}
          />
        </ThemedView>

        {/*RECIPES SECTION */}
        <ThemedView style={[globalStyles.spacer40]}>
          <FlatList
            scrollEnabled={false}
            ListHeaderComponent={() => (
              <H2>
                Recipies{" "}
                <H3 style={{ color: "#fff236cf" }}>{category?.name}</H3>
              </H2>
            )}
            //
            columnWrapperStyle={{ marginTop: 30 }}
            numColumns={2}
            contentContainerStyle={{ gap: 5 }}
            data={
              category && category.name
                ? hardcodedRecipeData[category.name.toLowerCase()].data
                : hardcodedRecipeData["beef"].data //initial state data
            }
            renderItem={({ item }) => {
              return (
                <RecipeCard
                  id={item.details.id}
                  categoryName={category?.name.toLowerCase()}
                  image={item.image}
                  title={item.details.title}
                  name={item.details.title}
                  detailsTitle={item.details.title}
                />
              );
            }}
          />
        </ThemedView>
      </ScrollView>
    </>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  avatar: {
    height: 80,
    width: 80,
    objectFit: "cover",
  },
  helloChips: {
    width: 100,
    padding: 10,
    backgroundColor: "#cacaca",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryCard: {
    height: 80,
    width: 80,
    borderRadius: "100%",
    borderWidth: 2,
    borderStyle: "solid",

    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  recipeCard: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#6d6c6c",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 5,
  },
  recipeImage: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
});
