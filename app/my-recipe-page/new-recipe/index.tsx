import { ThemedView } from "@/components/themed-view";
import { H2 } from "@/components/typography/typography";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";

import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import { DropDown } from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import SwitchComponent from "@/components/ui/switch";
import { CATEGORIES_DATA } from "@/constants/MockData";
import { newRecipeSchema } from "@/constants/schemas";
import { newRecipe } from "@/store/slices/recipeReducer";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";

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
  category: CATEGORIES_DATA[0].name,
};

function NewRecipePage() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useColorScheme() ?? "light";

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;

    setScrollY(yOffset);
  };
  return (
    <>
      <Header
        withArrowBack
        backPath="/my-recipe-page"
        scrollOffset={scrollY}
        title="New recipe"
      />
      <ScrollView onScroll={handleScroll}>
        <ThemedView style={{ paddingTop: 100, paddingBottom: 60 }}>
          <Formik
            // enableReinitialize
            initialValues={initialStateForm}
            validationSchema={newRecipeSchema}
            onSubmit={
              (values) => {
                dispatch(
                  newRecipe({
                    ...values,
                    id: Date.now(),
                    ingredients: values.ingredients.split(","),
                    favorites: false,
                    category: CATEGORIES_DATA.find(
                      (cat) =>
                        cat.name.toLowerCase() === values.category.toLowerCase()
                    ),
                  })
                );
                router.push("/my-recipe-page");
              }

              // save to redux and redirect to my recipies
              // on my recipies page show the new recipe
            }
          >
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              setFieldValue,
            }) => {
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
                    value={values?.ingredients}
                    errorMessage={errors.ingredients}
                  />

                  <DropDown
                    options={CATEGORIES_DATA}
                    label="Category *"
                    value={values.category}
                    handleChange={(categoryValue) =>
                      setFieldValue("category", categoryValue)
                    }
                  />

                  <View>
                    <SwitchComponent
                      value={values.link}
                      handleChange={() => setFieldValue("link", !values.link)}
                      label="Add a Link"
                    />

                    {values.link && (
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
                        label="Calories"
                        placeholder="Type here the title.."
                        handleChange={handleChange("calories")}
                        value={values?.calories.toString()}
                        errorMessage={errors.calories}
                      />
                      <Input
                        keyboardType="numeric"
                        label="Temperature"
                        placeholder="Type here the title.."
                        handleChange={handleChange("temperature")}
                        value={values?.temperature.toString()}
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
    </>
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

export default NewRecipePage;
