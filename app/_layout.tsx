import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store/config";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <SafeAreaProvider>
            <SafeAreaView
              style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: colorScheme === "dark" ? "black" : "white",
              }}
            >
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                  name="recipe/[recipeId]"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="favorites"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="my-recipe-page"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="new-recipe"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="edit-recipe/[recipeId]"
                  options={{ headerShown: false }}
                />
              </Stack>
              <StatusBar style="auto" />
            </SafeAreaView>
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
