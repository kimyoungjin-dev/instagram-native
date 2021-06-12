import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Font from "expo-font";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import LogOutNav from "./Navigation/LogOutNav";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const onFinish = () => setIsLoading(false);
  const preLoad = async () => {
    //font
    const fontsToLoad = [Ionicons.font, FontAwesome.font];
    const fontPromise = fontsToLoad.map((font) => Font.loadAsync(font));
    //image
    const imageToLoad = [require("./assets/instagram_logo.png")];
    const imagePromise = imageToLoad.map((image) => Asset.loadAsync(image));
    //promiss
    await Promise.all([fontPromise, imagePromise]);
  };

  return (
    <>
      {isLoading ? (
        <AppLoading
          startAsync={preLoad}
          onError={() => console.warn}
          onFinish={onFinish}
        />
      ) : (
        <NavigationContainer>
          <LogOutNav />
        </NavigationContainer>
      )}
    </>
  );
}
