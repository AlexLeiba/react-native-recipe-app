import Header from "@/components/Header/Header";
import { ThemedView } from "@/components/themed-view";
import { H3 } from "@/components/typography/typography";
import React from "react";

function SettingsPage() {
  return (
    <>
      <Header withArrowBack backPath="/" scrollOffset={0} title="Settings" />
      <ThemedView style={{ paddingTop: 100 }}>
        <H3>Settings</H3>
      </ThemedView>
    </>
  );
}

export default SettingsPage;
