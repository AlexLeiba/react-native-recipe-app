import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { ThemedView } from "../themed-view";
import { H3, Paragraph } from "../typography/typography";

type InputProps = {
  handleChange: (text: string) => void;
  value: string;
  errorMessage?: string;
  label?: string;
} & TextInputProps;
export const Input = ({
  handleChange,
  value,
  errorMessage,
  label,
  ...rest
}: InputProps) => {
  return (
    <ThemedView style={styles.container}>
      {label && <H3>{label}</H3>}
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={value}
        onChangeText={handleChange}
        {...rest}
      />
      {errorMessage && (
        <Paragraph style={styles.errorMessage}>{errorMessage}</Paragraph>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
    flex: 1,
    minWidth: 200,
  },
  inputStyle: {
    padding: 10,
    backgroundColor: "#787878",
    borderRadius: 20,
    alignItems: "center",
    color: "white",
    width: "100%",
  },
  errorMessage: {
    color: "red",
  },
  alignVertical: {
    alignItems: "center",
  },
});
