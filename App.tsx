import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const preload = async () => {
    const fontToLoad = [Ionicons.font];
    const fontPromiss = fontToLoad.map((font: any) => Font.loadAsync(font));
    Promise.all(fontPromiss);
  };
  const onFinish = () => setLoading(false);

  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }

  return (
    <View>
      <Text>is ready</Text>
    </View>
  );
}
