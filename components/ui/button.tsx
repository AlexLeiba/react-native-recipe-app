import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import { H3 } from "../typography/typography";

type ButtonProps = {
  handlePress: () => void;
  title: string;
  type?: "primary" | "secondary" | "tertiary";
} & TouchableHighlightProps;
export const Button = ({
  handlePress,
  title,
  type = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <TouchableHighlight onPress={handlePress} style={[styled[type]]} {...rest}>
      <H3 style={[{ color: styled[type].color, fontWeight: "bold" }]}>
        {title}
      </H3>
    </TouchableHighlight>
  );
};

const styled = StyleSheet.create({
  primary: {
    padding: 10,
    backgroundColor: "#787878",
    borderRadius: 20,
    alignItems: "center",
    color: "white",
    width: "100%",
  },
  secondary: {
    padding: 10,
    backgroundColor: "#f9bd3d",
    borderRadius: 20,
    alignItems: "center",
    color: "black",
    width: "100%",
  },
  tertiary: {
    padding: 10,
    backgroundColor: "#8d2111",
    borderRadius: 20,
    alignItems: "center",
    color: "white",
    width: "100%",
  },
});
