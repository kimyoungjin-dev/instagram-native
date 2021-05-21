import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../Pages/Feed";
import Search from "../Pages/Search";
import Notification from "../Pages/Notification";
import Profile from "../Pages/Profile";
import { useTheme } from "../styles/ChangeMode";
import { Ionicons } from "@expo/vector-icons";
import Camera from "../Pages/Camera";
import Me from "../Pages/Me";
import SharedNav from "./SharedNav";

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
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={focused ? 27 : 25}
            />
          ),
        }}
      >
        {() => <SharedNav screenName="Feed" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="search" color={color} size={focused ? 27 : 25} />
          ),
        }}
      >
        {() => <SharedNav screenName="Search" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              color={color}
              size={focused ? 27 : 25}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Notification"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              color={color}
              size={focused ? 27 : 25}
            />
          ),
        }}
      >
        {() => <SharedNav screenName="Notification" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={focused ? 27 : 25}
            />
          ),
        }}
      >
        {() => <SharedNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
