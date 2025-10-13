import Header from "@/components/Header/Header";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { DropDown } from "@/components/ui/dropdown";
import SwitchComponent from "@/components/ui/switch";
import { LANGUAGES } from "@/constants/MockData";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";

function SettingsPage() {
  const router = useRouter();
  const theme = useColorScheme() ?? "light";
  const [language, setLanguage] = React.useState("en");
  const [notifications, setNotifications] = React.useState(false);

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
        title="Settings"
      />
      <ThemedView style={{ paddingTop: 100, gap: 20, height: "100%" }}>
        <View style={styles.container}>
          <View style={{ gap: 30 }}>
            <View style={{ flexDirection: "row", gap: 8, width: "100%" }}>
              <SwitchComponent
                value={notifications}
                label="Notifications"
                handleChange={setNotifications}
              />
            </View>

            <View style={{ flexDirection: "row", gap: 8, width: "100%" }}>
              <DropDown
                label="Language"
                options={LANGUAGES}
                handleChange={(categoryValue) => setLanguage(categoryValue)}
                value={language}
              />
            </View>
          </View>
          <View style={styles.button}>
            <Button type="secondary" title="Save" handlePress={handleSave} />
          </View>
        </View>
      </ThemedView>
    </>
  );
}

export default SettingsPage;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  button: {
    marginBottom: 30,
  },
});
