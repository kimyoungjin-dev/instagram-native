import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Pages/Profile";
import Photo from "../Pages/Photo";

const Stack = createStackNavigator();

export default function SharedNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
