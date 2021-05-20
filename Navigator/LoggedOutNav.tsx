import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Pages/Welcome";
import Login from "../Pages/Login";
import CreateAccount from "../Pages/CreateAccount";
import { AuthParamList } from "../utils/AuthParamList";

const Stack = createStackNavigator<AuthParamList>();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
