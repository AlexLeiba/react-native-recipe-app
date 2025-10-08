import React from "react";
import { StyleSheet, Switch } from "react-native";
import { ThemedView } from "../themed-view";
import { H3 } from "../typography/typography";

type Props = {
  values: boolean;
  label?: string;
  setFieldValue: () => void;
};

function SwitchComponent({ values, setFieldValue, label }: Props) {
  return (
    <ThemedView style={styles.container}>
      {label && <H3>{label}</H3>}
      <Switch value={values} onValueChange={setFieldValue} />
    </ThemedView>
  );
}

export default SwitchComponent;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    flex: 1,
    minWidth: 200,
  },
});
