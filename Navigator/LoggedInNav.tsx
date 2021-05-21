import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../Pages/Feed";
import Search from "../Pages/Search";
import Notification from "../Pages/Notification";
import Profile from "../Pages/Profile";
import { useTheme } from "../styles/ChangeMode";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  const theme = useTheme();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        showLabel: false,
        style: {
          backgroundColor: theme.mode === "dark" ? "white" : "black",
          borderTopColor: theme.mode === "dark" ? "white" : "black",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home" color={color} size={focused ? 22 : 18} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="search" color={color} size={focused ? 22 : 18} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="heart" color={color} size={focused ? 22 : 18} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person" color={color} size={focused ? 22 : 18} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
