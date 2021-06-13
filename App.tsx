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
import client, { isLoggedInVar } from "./Apollo";
import LogOutNav from "./Navigation/LogOutNav";
import LoginNav from "./Navigation/LoginNav";

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

  const light = Appearance.getColorScheme() === "light";
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  console.log(isLoggedIn);
  return (
    <>
      {isLoading ? (
        <AppLoading
          startAsync={preLoad}
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
