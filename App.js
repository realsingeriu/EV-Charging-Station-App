import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./App/Screen/LoginScreen";
import { ClerkProvider } from "@clerk/clerk-expo";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretend-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
    "Pretend-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    "Pretend-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={
        "pk_test_bWF4aW11bS1tdXNrcmF0LTExLmNsZXJrLmFjY291bnRzLmRldiQ"
      }
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <LoginScreen />
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
