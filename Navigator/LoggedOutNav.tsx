import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Pages/Welcome";
import Login from "../Pages/Login";
import CreateAccount from "../Pages/CreateAccount";
import { AuthParamList } from "../utils/AuthParamList";

const Stack = createStackNavigator<AuthParamList>();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
