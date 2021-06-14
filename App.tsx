import React, { useState } from "react";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { Appearance, AppearanceProvider } from "react-native-appearance";
import AppLoading from "expo-app-loading";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Font from "expo-font";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./Components/styles/styles";
import ThemeManager from "./Components/styles/ThemeManaget";
import client, { isLoggedInVar, TOKEN, tokenVar } from "./Apollo";
import LogOutNav from "./Navigation/LogOutNav";
import LoginNav from "./Navigation/LoginNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const onFinish = () => setIsLoading(false);

  const preload = async () => {
    const token = await AsyncStorage.getItem(TOKEN);
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    return preloadAssets();
  };

  const preloadAssets = async () => {
    const fontsToLoad = [Ionicons.font, FontAwesome.font];
    const imageToLoad = [require("./assets/instagram_logo.png")];
    const fontPromise = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagePromise = imageToLoad.map((image) => Asset.loadAsync(image));
    await Promise.all([fontPromise, imagePromise]);
  };

  const light = Appearance.getColorScheme() === "light";
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <>
      {isLoading ? (
        <AppLoading
          startAsync={preload}
          onError={() => console.warn}
          onFinish={onFinish}
        />
      ) : (
        <ApolloProvider client={client}>
          <AppearanceProvider>
            <ThemeProvider theme={light ? lightTheme : darkTheme}>
              <ThemeManager>
                <NavigationContainer>
                  {isLoggedIn ? <LoginNav /> : <LogOutNav />}
                </NavigationContainer>
              </ThemeManager>
            </ThemeProvider>
          </AppearanceProvider>
        </ApolloProvider>
      )}
    </>
  );
}
