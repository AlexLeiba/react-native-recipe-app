import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MyFoodPage() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "green" }}>
      <View>
        <Text>MyFoodPage</Text>

        <Link href="/recipe/1">
          Go
          <TouchableOpacity>
            <Text>Open Modal</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default MyFoodPage;
