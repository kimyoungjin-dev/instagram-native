import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../Components/RootStack";
import Feed from "../Components/Pages/Feed";

const Tabs = createBottomTabNavigator<RootStackParamList>();

export default function LogInNav() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Feed" component={Feed} />
    </Tabs.Navigator>
  );
}
