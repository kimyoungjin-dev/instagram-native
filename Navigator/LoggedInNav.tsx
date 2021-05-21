import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../Pages/Feed";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Feed" component={Feed} />
    </Tabs.Navigator>
  );
}
