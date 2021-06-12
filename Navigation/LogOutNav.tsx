import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import Welcome from "../Components/Pages/Welcome";
import { RootStackParamList } from "../Components/RootStack";
import { modeColor } from "../Components/Shared/SharedFunction";

const Stack = createStackNavigator<RootStackParamList>();

export default function LogOutNav() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0,
        },
        headerBackTitleVisible: false,
        headerTintColor: modeColor(),
        headerTitle: "",
        headerTransparent: true, //해더를 지워준다.
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: "WelCome to instagram",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "로그인",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "회원가입" }}
      />
    </Stack.Navigator>
  );
}
