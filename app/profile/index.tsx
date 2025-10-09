import Header from "@/components/Header/Header";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

function ProfilePage() {
  const router = useRouter();
  //   const [scrollY, setScrollY] = useState(0);
  //
  //   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //     const yOffset = event.nativeEvent.contentOffset.y;
  //
  //     setScrollY(yOffset);
  //   };

  function handleEditProfile() {
    router.push("/profile/edit-profile");
  }

  function handleSettings() {
    router.push("/profile/settings");
  }

  function handleLogout() {}
  return (
    <>
      <Header withArrowBack backPath="/" scrollOffset={0} title="My Profile" />
      <ThemedView style={[{ paddingTop: 100 }, styles.container]}>
        <View style={{ flexDirection: "column", gap: 20 }}>
          <Button
            type="secondary"
            title="Edit Profile"
            handlePress={handleEditProfile}
          />
          <Button
            title="Settings"
            type="secondary"
            handlePress={handleSettings}
          />
        </View>

        <View style={{ marginBottom: 50 }}>
          <Button title="Log out" handlePress={handleLogout} />
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export default ProfilePage;
