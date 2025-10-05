import { FavoriteButton, GoBackButton } from "@/components/headerButtons";
import { ThemedView } from "@/components/themed-view";
import { H1, H2, H3, Paragraph } from "@/components/typography/typography";
import { RECIPIES, SelectedRecipeType } from "@/constants/MockData";
import { globalStyles } from "@/constants/stylesheets";
import { Colors } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Clock, Flame, FlameKindling, User2 } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native";

function RecipeDetailsPage() {
  const router = useRouter();
  const theme = useColorScheme() ?? "light";
  const { recipeId } = useLocalSearchParams();

  const [selectedRecipe, setSelectedRecipe] = useState<
    SelectedRecipeType | undefined
  >();

  useEffect(() => {
    if (typeof recipeId === "string") {
      const recipe =
        RECIPIES[recipeId.split("-")[1] as keyof typeof RECIPIES].data;

      const selectedRecipe = recipe.find(
        (recipeDetails) => recipeDetails.id === Number(recipeId.split("-")[0])
      );
      console.log("🚀 ~ RecipeDetailsPage ~ selectedRecipe:", selectedRecipe);

      if (selectedRecipe) {
        setSelectedRecipe(selectedRecipe);
      }
    }
  }, [recipeId]);

  if (!selectedRecipe) {
    return (
      <ThemedView>
        <Text>Recipe not found</Text>
      </ThemedView>
    );
  }
  return (
    <ScrollView>
      <View
        style={[
          {
            width: "100%",
            height: 500,
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 40,
            position: "relative",
          },
        ]}
      >
        <Image
          source={selectedRecipe?.image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            zIndex: 1,
          }}
        />
      </View>
      <GoBackButton />
      <FavoriteButton />
      <View style={[globalStyles.alignCenter, { gap: 10, marginBottom: 20 }]}>
        <H1>{selectedRecipe?.name}</H1>
        <H3 style={{ color: "gray" }}>{selectedRecipe?.details.subtitle}</H3>
      </View>

      <View style={{ flexDirection: "row", gap: 10, marginBottom: 60 }}>
        <DetailsCard
          icon={
            <Clock
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipe?.details.timeToCook}
        />
        <DetailsCard
          icon={
            <User2
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipe?.details.servings.toString() + " people"}
        />
        <DetailsCard
          icon={
            <Flame
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipe?.details.calories.toString() + " kcal"}
        />
        <DetailsCard
          icon={
            <FlameKindling
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipe?.details.temperature.toString() + " °C"}
        />
      </View>

      <FlatList
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponentStyle={{ marginBottom: 20 }}
        ListHeaderComponent={() => <H2>Ingredients</H2>}
        data={selectedRecipe?.details.ingredients}
        renderItem={({ item }) => <IngredientsCard title={item} />}
      />
    </ScrollView>
  );
}

const IngredientsCard = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#979711",
        borderRadius: 20,
        marginHorizontal: 15,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: "#ffffff",
          borderRadius: "100%",
        }}
      />
      <Paragraph>{title}</Paragraph>
    </View>
  );
};

const DetailsCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#bebebe",
        borderRadius: 20,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icon}

      <Paragraph style={{ color: "black" }}>{title}</Paragraph>
    </View>
  );
};

export default RecipeDetailsPage;
