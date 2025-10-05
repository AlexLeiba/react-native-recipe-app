import { GoBackButton } from "@/components/headerButtons";
import { ThemedView } from "@/components/themed-view";
import { H1, H2, H3 } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { RECIPIES } from "@/constants/MockData";
import { globalStyles } from "@/constants/stylesheets";
import { Link, useRouter } from "expo-router";
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

function MyFoodPage() {
  const theme = useColorScheme() ?? "light";
  const [category, setCategory] = React.useState<typeof RECIPIES.beef>(
    RECIPIES.beef
  );
  const router = useRouter();
  return (
    <ScrollView>
      <ThemedView>
        <GoBackButton />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
            marginBottom: 60,
          }}
        >
          <H1>My Recipies</H1>
        </View>

        <Link href="/new-recipe">
          <Button
            type="secondary"
            title="Add new recipe"
            handlePress={() => {}}
          />
        </Link>

        {/* Recipies */}
        <ThemedView style={[globalStyles.spacer40]}>
          {category.data.length === 0 && (
            <ThemedView style={[globalStyles.alignCenter]}>
              <H2>No recipies added yet</H2>
            </ThemedView>
          )}
          <FlatList
            ListHeaderComponentStyle={{ marginBottom: 10, marginTop: 10 }}
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
                    {
                      paddingHorizontal: 10,
                      flex: 1,
                      marginBottom: 20,
                      height: 200,
                    },
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
                    <ThemedView style={[styles.recipeCard]}>
                      <Image source={item.image} style={[styles.recipeImage]} />
                    </ThemedView>
                    <H3 numberOfLines={2}>{item.name}</H3>
                  </TouchableOpacity>
                </ThemedView>
              );
            }}
          />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

export default MyFoodPage;

const styles = StyleSheet.create({
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
