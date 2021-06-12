import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import Welcome from "../Components/Pages/Welcome";
import { RootStackParamList } from "../Components/RootStack";

const Stack = createStackNavigator<RootStackParamList>();

export default function LogOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
