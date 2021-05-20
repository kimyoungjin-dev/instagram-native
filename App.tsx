import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { Image } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import LoggedOutNav from "./Navigator/LoggedOutNav";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import ThemeManager from "./styles/ChangeMode";
import { AppearanceProvider } from "react-native-appearance";
import { ApolloProvider } from "@apollo/client";
import client from "./Components/Apollo";

const getImages = (images: any) =>
  images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const getFonts = (fonts: any) =>
  fonts.map((font: any) => [Font.loadAsync(font)]);

export default function App() {
  const [loading, setLoading] = useState(true);

  const loadAssets = async () => {
    const images = getImages([
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png",
      require("./assets/instagram_logo.png"),
    ]);
    const fonts = getFonts([Ionicons.font, FontAwesome.font]);
    await Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setLoading(false);

  if (loading) {
    <AppLoading
      startAsync={loadAssets}
      onError={console.warn}
      onFinish={onFinish}
    />;
  }

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <ThemeManager>
          <NavigationContainer>
            <LoggedOutNav />
          </NavigationContainer>
        </ThemeManager>
      </AppearanceProvider>
    </ApolloProvider>
  );
}
