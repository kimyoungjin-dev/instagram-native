import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../Components/RootStack";
import Search from "../Components/Pages/Search";
import Notifications from "../Components/Pages/Notifications";
import { Ionicons } from "@expo/vector-icons";
import {
  modeColor,
  reverseModeColor,
} from "../Components/Shared/SharedFunction";
import { View } from "react-native";
import Me from "../Components/Pages/Me";
import SharedStackNav from "../Navigation/SharedStackNav";
import Feed from "../Components/Pages/Feed";

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
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Feed" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Camera"
        component={View}
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
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Notifications" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={modeColor()}
            />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
