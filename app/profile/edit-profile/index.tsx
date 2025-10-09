import Header from "@/components/Header/Header";
import { ThemedView } from "@/components/themed-view";
import { H3 } from "@/components/typography/typography";
import { Input } from "@/components/ui/input";
import { Formik } from "formik";
import React from "react";

function EditProfile() {
  return (
    <>
      <Header
        withArrowBack
        backPath="/"
        scrollOffset={0}
        title="Edit Profile"
      />
      <ThemedView style={{ paddingTop: 100 }}>
        <H3>Profile edit</H3>

        <Formik initialValues={{}} onSubmit={() => {}}>
          {({ handleBlur, handleSubmit, values }) => {
            return (
              <>
                <Input label="Name" handleChange={() => {}} value="" />
                <Input
                  label="Password"
                  handleChange={() => {}}
                  value=""
                  secureTextEntry
                />
                <Input
                  label="Repeat password"
                  handleChange={() => {}}
                  value=""
                  secureTextEntry
                />
              </>
            );
          }}
        </Formik>
      </ThemedView>
    </>
  );
}

export default EditProfile;
