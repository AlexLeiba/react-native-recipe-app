import { useRouter } from "expo-router";
import { ArrowLeft, Heart } from "lucide-react-native";
import React from "react";
import { TouchableHighlight } from "react-native";

export const GoBackButton = () => {
  const router = useRouter();
  return (
    <TouchableHighlight
      onPress={() => router.push("/")}
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 2,
        borderRadius: "100%",
        backgroundColor: "black",
        padding: 10,
      }}
    >
      <ArrowLeft color={"white"} />
    </TouchableHighlight>
  );
};

export const FavoriteButton = () => {
  return (
    <TouchableHighlight
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 2,
        borderRadius: "100%",
        backgroundColor: "black",
        padding: 10,
      }}
    >
      <Heart color={"white"} />
    </TouchableHighlight>
  );
};
