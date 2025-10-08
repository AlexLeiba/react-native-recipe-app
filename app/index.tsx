import { ThemedView } from "@/components/themed-view";
import { H1, H2, H3, Paragraph } from "@/components/typography/typography";
import { globalStyles } from "@/constants/stylesheets";
import { RootState } from "@/store/config";
import { CategoryType, selectCategory } from "@/store/slices/categoriesReducer";
import { useRouter } from "expo-router";
import { User } from "lucide-react-native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
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
  return (
    <ScrollView>
      <ThemedView style={{ marginBottom: 20 }}>
        <ThemedView
          style={[globalStyles.alignCenterSpaceBetween, globalStyles.spacer40]}
        >
          <View>
            <User
              style={styles.avatar}
              color={theme === "light" ? "black" : "white"}
            />
          </View>
          <View style={styles.helloChips}>
            <Paragraph style={{ color: "black" }}>Hello Alex</Paragraph>
          </View>
        </ThemedView>
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
          ListHeaderComponentStyle={{ marginBottom: 20 }}
          ListHeaderComponent={() => (
            <H2>
              Recipies <H3 style={{ color: "#fff236cf" }}>{category?.name}</H3>
            </H2>
          )}
          //
          columnWrapperStyle={{ marginTop: hp(2) }}
          numColumns={2}
          contentContainerStyle={{ gap: 5 }}
          data={
            category && category.name
              ? hardcodedRecipeData[category.name.toLowerCase()].data
              : hardcodedRecipeData["beef"].data //initial state data
          }
          renderItem={({ item, index }) => {
            return (
              <ThemedView
                style={[
                  {
                    paddingHorizontal: 10,
                    flex: 1,

                    marginBottom: hp(5),
                  },
                  { height: index % 3 === 0 ? 250 : 220 },
                ]}
              >
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() =>
                    router.push(
                      `/recipe/${
                        item.details.id + "-" + category?.name.toLowerCase()
                      }`
                    )
                  }
                >
                  <ThemedView
                    style={[
                      styles.recipeCard,
                      { height: "100%", width: "100%" },

                      // { height: index % 3 === 0 ? hp(25) : hp(30) },
                    ]}
                  >
                    <Image source={item.image} style={[styles.recipeImage]} />
                  </ThemedView>
                  <H3 numberOfLines={2}>{item.details.title}</H3>
                </TouchableOpacity>
              </ThemedView>
            );
          }}
        />
      </ThemedView>
    </ScrollView>
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
