import { GoBackButton } from "@/components/headerButtons";
import HeaderTitle from "@/components/headerTitle";
import { ThemedView } from "@/components/themed-view";
import { H2, H3 } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { globalStyles } from "@/constants/stylesheets";
import { RootState } from "@/store/config";
import { Link, useRouter } from "expo-router";
import { Edit } from "lucide-react-native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector } from "react-redux";

function MyRecipePage() {
  const myRecipiesData = useSelector((state: RootState) => {
    return state.newRecipe;
  });
  console.log("🚀 ~ MyRecipePage ~ state:", myRecipiesData);
  const theme = useColorScheme() ?? "light";

  const router = useRouter();

  return (
    <ScrollView>
      <ThemedView>
        <GoBackButton path="/" />

        <HeaderTitle title="My Recipies" />

        <Link href="/my-recipe-page/new-recipe">
          <Button
            type="secondary"
            title="Add new recipe"
            handlePress={() => {}}
          />
        </Link>

        {/* Recipies */}
        <ThemedView style={[globalStyles.spacer40]}>
          {myRecipiesData.length === 0 && (
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
            contentContainerStyle={{ gap: 5, minHeight: hp(70) }}
            data={myRecipiesData}
            renderItem={({ item, index }) => {
              return (
                <ThemedView
                  style={[
                    {
                      paddingHorizontal: 10,
                      flex: 1,
                      marginBottom: 20,
                      height: 200,
                      position: "relative",
                    },
                  ]}
                >
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      router.push(`/my-recipe-page/view/${item.id}`)
                    }
                  >
                    <ThemedView style={[styles.recipeCard]}>
                      <Image
                        source={item.category?.image}
                        style={[styles.recipeImage]}
                      />
                    </ThemedView>
                    <H3 numberOfLines={2}>{item.title}</H3>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 20,
                      backgroundColor: "black",
                      padding: 15,
                      borderRadius: "100%",
                    }}
                    // @ts-ignore
                    onPress={() =>
                      router.push(`/my-recipe-page/edit-recipe/${item.id}`)
                    }
                  >
                    <Edit color={"white"} />
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

export default MyRecipePage;

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
