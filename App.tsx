import React, { useState } from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = () => setIsLoading(true);
  const preLoad = async () => {};

  return (
    <>
      {isLoading ? (
        <View>
          <Text>is Ready!</Text>
        </View>
      ) : (
        <AppLoading
          startAsync={preLoad}
          onError={() => console.warn}
          onFinish={onFinish}
        />
      )}
    </>
  );
}
