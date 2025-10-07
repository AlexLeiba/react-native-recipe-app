import { FavoriteButton, GoBackButton } from "@/components/headerButtons";
import { ThemedView } from "@/components/themed-view";
import { H1, H2, Paragraph } from "@/components/typography/typography";
import { globalStyles } from "@/constants/stylesheets";
import { Colors } from "@/constants/theme";
import { RootState } from "@/store/config";
import { RecipeType } from "@/store/slices/recipeReducer";
import { useLocalSearchParams } from "expo-router";
import { Clock, Flame, FlameKindling, User2 } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  useColorScheme,
  View,
} from "react-native";
import { useSelector } from "react-redux";

function RecipeDetailsPage() {
  const { recipeId } = useLocalSearchParams();
  const theme = useColorScheme() ?? "light";
  const recipeData = useSelector((state: RootState) => state.newRecipe);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number>(0);

  const [selectedRecipeData, setSelectedRecipeData] = useState<RecipeType>();

  useEffect(() => {
    if (typeof recipeId === "string") {
      const recipeIdData = Number(recipeId);
      if (isNaN(recipeIdData)) return;

      setSelectedRecipeId(recipeIdData);
      const selectedRecipe = recipeData.find(
        (data) => data.id === Number(recipeId)
      );

      if (selectedRecipe) {
        setSelectedRecipeData({
          ...selectedRecipe,
          ingredients: selectedRecipe.ingredients,
        });
      }
    }
  }, [recipeId, recipeData]);

  if (!selectedRecipeData) {
    return (
      <ThemedView>
        <Paragraph>Recipe not found</Paragraph>
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
          source={{
            uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            zIndex: 1,
          }}
        />
      </View>

      <GoBackButton path="/my-recipe-page" />

      <FavoriteButton
        recipeData={selectedRecipeData}
        recipeCategoryName={"my-recipe-page"}
        recipeCategoryId={selectedRecipeId}
      />

      <View style={[globalStyles.alignCenter, { gap: 10, marginBottom: 20 }]}>
        <H1>{selectedRecipeData?.title}</H1>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginBottom: 60,
          marginHorizontal: 20,
        }}
      >
        <DetailsCard
          icon={
            <Clock
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipeData?.timeToCook.toString() + " min"}
        />
        <DetailsCard
          icon={
            <User2
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipeData?.servings.toString() + " people"}
        />
        <DetailsCard
          icon={
            <Flame
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipeData?.calories.toString() + " kcal"}
        />
        <DetailsCard
          icon={
            <FlameKindling
              color={theme === "light" ? Colors.dark.icon : Colors.light.icon}
            />
          }
          title={selectedRecipeData?.temperature.toString() + " °C"}
        />
      </View>

      <FlatList
        contentContainerStyle={{ gap: 10, marginBottom: 20 }}
        ListHeaderComponentStyle={{ marginBottom: 20 }}
        ListHeaderComponent={() => <H2>Ingredients</H2>}
        data={selectedRecipeData?.ingredients}
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
