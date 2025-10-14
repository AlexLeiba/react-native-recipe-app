import { Avatar } from "@/components/Avatar/Avatar";
import Header from "@/components/Header/Header";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";

function EditProfile() {
  const router = useRouter();
  function handleSave() {
    // Save settings logic here
    router.back();
  }
  return (
    <>
      <Header
        withArrowBack
        backPath="/profile"
        scrollOffset={0}
        title="Edit Profile"
      />
      <ThemedView style={{ paddingTop: 100 }}>
        <Avatar />

        <Formik
          initialValues={{ name: "", password: "", repeatPassword: "" }}
          onSubmit={(values) => {
            console.log(values);
            handleSave();
          }}
        >
          {({ handleBlur, handleSubmit, values, handleChange }) => {
            return (
              <View style={styles.formContainer}>
                <View style={{ gap: 20 }}>
                  <Input
                    label="Name"
                    handleChange={handleChange("name")}
                    value={values.name}
                  />
                  <Input
                    label="Password"
                    handleChange={handleChange("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  <Input
                    label="Repeat password"
                    handleChange={handleChange("repeatPassword")}
                    value={values.repeatPassword}
                    secureTextEntry
                  />
                </View>

                <Button
                  title="Save"
                  type="secondary"
                  handlePress={handleSubmit}
                />
              </View>
            );
          }}
        </Formik>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "column",

    justifyContent: "space-between",
    height: "100%",
  },
});

export default EditProfile;
