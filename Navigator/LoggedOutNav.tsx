import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Pages/Welcome";
import Login from "../Pages/Login";
import CreateAccount from "../Pages/CreateAccount";
import { useTheme } from "../styles/ChangeMode";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: theme.mode === "dark" ? "white" : "black",
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
