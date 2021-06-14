import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../Components/RootStack";
import Feed from "../Components/Pages/Feed";
import Search from "../Components/Pages/Search";
import Notifications from "../Components/Pages/Notifications";
import Profile from "../Components/Pages/Profile";
import { Ionicons } from "@expo/vector-icons";
import {
  modeColor,
  reverseModeColor,
} from "../Components/Shared/SharedFunction";
import Camera from "../Components/Pages/Camera";

const Tabs = createBottomTabNavigator<RootStackParamList>();

export default function LogInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: reverseModeColor(),
          borderTopColor: reverseModeColor(),
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              size={28}
              color={modeColor()}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
