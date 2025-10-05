import { GoBackButton } from "@/components/headerButtons";
import { ThemedView } from "@/components/themed-view";
import { H1, H2 } from "@/components/typography/typography";
import { Formik } from "formik";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { Input } from "@/components/ui/input";
import { newRecipeSchema } from "@/constants/schemas";
import { newRecipe, recipeInitialState } from "@/store/slices/recipeReducer";
import { useDispatch } from "react-redux";

function NewRecipePage() {
  const dispatch = useDispatch();
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
          <H1>New recipe</H1>
        </View>

        <Formik
          // enableReinitialize
          initialValues={recipeInitialState}
          validationSchema={newRecipeSchema}
          onSubmit={
            (values) => {
              dispatch(newRecipe(values));
            }
            // save to redux and redirect to my recipies
            // on my recipies page show the new recipe
          }
        >
          {({ values, errors, handleSubmit, handleChange }) => {
            console.log("errr", errors);
            return (
              <View style={styles.formContainer}>
                <Input
                  label="Title *"
                  placeholder="Type here the title.."
                  handleChange={handleChange("title")}
                  value={values.title}
                  errorMessage={errors.title}
                />
                <Input
                  label="Description"
                  placeholder="Type here the description.."
                  handleChange={handleChange("description")}
                  value={values.description}
                  errorMessage={errors.description}
                />
                <Input
                  label="Ingredients (Separate by comma) *"
                  placeholder="Separate the ingredients by comma."
                  handleChange={handleChange("ingredients")}
                  value={values.ingredients}
                  errorMessage={errors.ingredients}
                />

                <ImageUploader
                  title="Upload an image"
                  handlePick={handleChange("image")}
                  image={values.image}
                />

                <View style={styles.cookingDetailsSection}>
                  <H2>Cooking details:</H2>

                  <View style={styles.cookingDetailsContainer}>
                    <Input
                      keyboardType="numeric"
                      label="Servings * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("servings")}
                      value={values.servings.toString()}
                      errorMessage={errors.servings}
                    />
                    <Input
                      keyboardType="numeric"
                      label="Time of cooking * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("timeToCook")}
                      value={values.timeToCook.toString()}
                      errorMessage={errors.timeToCook}
                    />
                    <Input
                      keyboardType="numeric"
                      label="Calories * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("calories")}
                      value={values.calories.toString()}
                      errorMessage={errors.calories}
                    />
                    <Input
                      keyboardType="numeric"
                      label="Temperature * "
                      placeholder="Type here the title.."
                      handleChange={handleChange("temperature")}
                      value={values.temperature.toString()}
                      errorMessage={errors.temperature}
                    />
                  </View>
                </View>

                <Button
                  type="secondary"
                  title="Submit"
                  handlePress={handleSubmit}
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
});

export default NewRecipePage;
