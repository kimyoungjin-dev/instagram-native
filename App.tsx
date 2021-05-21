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
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar, tokenVar } from "./Components/Apollo";
import LoggedInNav from "./Navigator/LoggedInNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const onFinish = () => setLoading(false);

  const preloadAssets = async () => {
    const images = getImages([
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png",
      require("./assets/instagram_logo.png"),
    ]);
    const fonts = getFonts([Ionicons.font, FontAwesome.font]);
    return await Promise.all([...images, ...fonts]);
  };

  //AsyncStorage 으로 부터 token을 받아온다.
  const preload: any = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      tokenVar(token);
      isLoggedInVar(true);
    }

    return preloadAssets();
  };

  if (loading) {
    <AppLoading
      startAsync={preload()}
      onError={console.warn}
      onFinish={onFinish}
    />;
  }

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <ThemeManager>
          <NavigationContainer>
            {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
          </NavigationContainer>
        </ThemeManager>
      </AppearanceProvider>
    </ApolloProvider>
  );
}
