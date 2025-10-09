import { ThemedView } from "@/components/themed-view";
import { H3 } from "@/components/typography/typography";
import React from "react";
import { Image } from "react-native";

export function Avatar() {
  const avatarUrl =
    "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80";
  return (
    <ThemedView style={{ paddingTop: 100 }}>
      <Image source={{ uri: avatarUrl }} />
      <H3>Settings</H3>
    </ThemedView>
  );
}
