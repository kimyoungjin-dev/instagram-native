import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import Welcome from "../Components/Pages/Welcome";
import { RootStackParamList } from "../Components/RootStack";
import { darkTheme, lightTheme } from "../Components/styles/styles";
import { useTheme } from "../Components/styles/ChangeMode";

const Stack = createStackNavigator<RootStackParamList>();

export default function LogOutNav() {
  const { mode } = useTheme();
  const darkMode = mode === "light" ? lightTheme : darkTheme;
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: darkMode.fontColor,
        headerShown: false,
        headerStyle: {
          backgroundColor: darkMode.bgColor,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: "WelCome to instagram" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "로그인" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "회원가입" }}
      />
    </Stack.Navigator>
  );
}
