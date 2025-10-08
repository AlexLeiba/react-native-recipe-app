import { GoBackButton } from "@/components/headerButtons";
import { ThemedView } from "@/components/themed-view";
import { H1, H2 } from "@/components/typography/typography";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Button } from "@/components/ui/button";
import { DropDown } from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import SwitchComponent from "@/components/ui/switch";
import { CATEGORIES_DATA } from "@/constants/MockData";
import { newRecipeSchema } from "@/constants/schemas";
import { RootState } from "@/store/config";
import {
  deleteRecipe,
  editRecipe,
  RecipeType,
} from "@/store/slices/recipeReducer";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

const initialStateForm = {
  id: 0,
  title: "",
  description: "",
  image: "",
  ingredients: "",
  timeToCook: 0,
  servings: 0,
  calories: 0,
  temperature: 0,
  link: false,
  linkName: "",
  linkUrl: "",
  category: CATEGORIES_DATA[0],
};

function EditRecipePage() {
  const [recipeData, setRecipeData] = useState<RecipeType>(initialStateForm);
  console.log("🚀 ~ EditRecipePage ~ recipeData:", recipeData);
  const router = useRouter();
  const dispatch = useDispatch();
  const { recipeId } = useLocalSearchParams();

  const selectedRecipeData = useSelector((state: RootState) => state.newRecipe);

  useEffect(() => {
    const recipe = selectedRecipeData.find(
      (recipe) => recipe.id === Number(recipeId)
    );
    if (recipe) {
      setRecipeData(recipe);
    }
  }, [recipeId, selectedRecipeData]);

  function handleDelete() {
    dispatch(deleteRecipe(Number(recipeId)));
    router.push("/my-recipe-page");
  }

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
          <H1>Edit recipe</H1>
        </View>

        <Formik
          enableReinitialize
          initialValues={recipeData}
          validationSchema={newRecipeSchema}
          onSubmit={
            (values) => {
              dispatch(editRecipe({ ...values, id: Number(recipeId) }));
              router.push("/my-recipe-page");
            }

            // save to redux and redirect to my recipies
            // on my recipies page show the new recipe
          }
        >
          {({ values, errors, handleSubmit, handleChange, setFieldValue }) => {
            console.log("errr", errors);
            return (
              <View style={styles.formContainer}>
                <Input
                  label="Title *"
                  placeholder="Type here the title.."
                  handleChange={handleChange("title")}
                  value={values?.title || ""}
                  errorMessage={errors.title}
                />
                <Input
                  label="Description"
                  placeholder="Type here the description.."
                  handleChange={handleChange("description")}
                  value={values?.description}
                  errorMessage={errors.description}
                />
                <Input
                  label="Ingredients (Separate by comma) *"
                  placeholder="Separate the ingredients by comma."
                  handleChange={handleChange("ingredients")}
                  value={values?.ingredients as string}
                  errorMessage={errors.ingredients}
                />
                {values.category?.name && (
                  <DropDown
                    label="Category *"
                    values={values.category?.name}
                    handleChange={(categoryValue) =>
                      setFieldValue("category", categoryValue)
                    }
                  />
                )}

                {values.link && (
                  <View>
                    <SwitchComponent
                      values={values.link}
                      setFieldValue={() => setFieldValue("link", !values.link)}
                      label="Add a Link"
                    />

                    {values.link && values.linkName && values.linkUrl && (
                      <View style={styles.linkContainer}>
                        <Input
                          label="Link Name"
                          placeholder="Type here the link name.."
                          handleChange={handleChange("linkName")}
                          value={values?.linkName}
                          errorMessage={errors.link}
                        />
                        <Input
                          label="Link URL"
                          placeholder="Type here the link url.."
                          handleChange={handleChange("linkUrl")}
                          value={values?.linkUrl}
                          errorMessage={errors.link}
                        />
                      </View>
                    )}
                  </View>
                )}

                <View style={styles.cookingDetailsSection}>
                  <H2>Cooking details:</H2>

                  <View style={styles.cookingDetailsContainer}>
                    <Input
                      keyboardType="numeric"
                      label="Servings * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("servings")}
                      value={values?.servings.toString()}
                      errorMessage={errors.servings}
                    />
                    <Input
                      keyboardType="numeric"
                      label="Time of cooking * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("timeToCook")}
                      value={values?.timeToCook.toString()}
                      errorMessage={errors.timeToCook}
                    />
                    <Input
                      keyboardType="numeric"
                      label="Calories * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("calories")}
                      value={values?.calories.toString()}
                      errorMessage={errors.calories}
                    />
                    <Input
                      keyboardType="numeric"
                      label="Temperature * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("temperature")}
                      value={values?.temperature.toString()}
                      errorMessage={errors.temperature}
                    />
                  </View>
                </View>

                <Button
                  type="secondary"
                  title="Save"
                  handlePress={handleSubmit}
                />
                <Button
                  type="tertiary"
                  title="Delete Recipe"
                  handlePress={handleDelete}
                />
              </View>
            );
          }}
        </Formik>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "column",
    gap: 20,
  },
  cookingDetailsSection: {
    flexDirection: "column",
    gap: 20,
    marginTop: 30,
  },
  cookingDetailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    flexWrap: "wrap",
  },
  linkContainer: {
    flexDirection: "column",
    gap: 10,
  },
});

export default EditRecipePage;
