import { ThemedView } from "@/components/themed-view";
import { H1, H2, H3, Paragraph } from "@/components/typography/typography";
import { CATEGORIES, RECIPIES } from "@/constants/MockData";
import { globalStyles } from "@/constants/stylesheets";
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

function HomePage() {
  const theme = useColorScheme() ?? "light";
  const [category, setCategory] = React.useState<typeof RECIPIES.beef>(
    RECIPIES.beef
  );
  const router = useRouter();

  function selectCategory(category: (typeof CATEGORIES)[0]["name"]) {
    if (category === "My food") {
      router.push("/my-food-page");
    }
    if (category === "My favorites") {
      router.push("/favorites");
    } else {
      const selectedRecipe =
        RECIPIES[category.toLowerCase() as keyof typeof RECIPIES];
      if (
        selectedRecipe &&
        "image" in selectedRecipe &&
        "id" in selectedRecipe &&
        "categoryId" in selectedRecipe
      ) {
        setCategory(selectedRecipe);
      }
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

      <ThemedView style={globalStyles.spacer20}>
        {/* Categories */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          horizontal
          data={CATEGORIES}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => selectCategory(item.name)}>
                <ThemedView style={[globalStyles.alignCenter, {}]}>
                  <ThemedView
                    style={[
                      styles.categoryCard,
                      theme === "light"
                        ? { borderColor: "black" }
                        : { borderColor: "white" },
                      (item.name === "My food" ||
                        item.name === "My favorites") && {
                        borderColor: "#3ee06ccf",
                        borderWidth: 3,
                      },

                      category.name.toLowerCase() ===
                        item.name.toLocaleLowerCase() && {
                        borderColor: "#ffb20ccf",
                        borderWidth: 3,
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

      {/* Recipies */}
      <ThemedView style={[globalStyles.spacer40]}>
        <FlatList
          ListHeaderComponentStyle={{ marginBottom: 20 }}
          ListHeaderComponent={() => <H2>Recipies</H2>}
          //
          columnWrapperStyle={{ marginTop: hp(2) }}
          numColumns={2}
          contentContainerStyle={{ gap: 5 }}
          data={category.data}
          renderItem={({ item, index }) => {
            return (
              <ThemedView
                style={[
                  { paddingHorizontal: 10, flex: 1, marginBottom: hp(1.5) },
                ]}
              >
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() =>
                    router.push(
                      `/recipe/${item.id + "-" + category.name.toLowerCase()}`
                    )
                  }
                >
                  <ThemedView
                    style={[
                      styles.recipeCard,
                      { height: index % 3 === 0 ? hp(25) : hp(30) },
                    ]}
                  >
                    <Image source={item.image} style={[styles.recipeImage]} />
                  </ThemedView>
                  <H3 numberOfLines={2}>{item.name}</H3>
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
    // height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});
