import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/RootStack";
import Photo from "../Components/Pages/Photo";
import Profile from "../Components/Pages/Profile";
import Feed from "../Components/Pages/Feed";
import Search from "../Components/Pages/Search";
import Notifications from "../Components/Pages/Notifications";
import Me from "../Components/Pages/Me";
import { modeColor } from "../Components/Shared/SharedFunction";

const Stack = createStackNavigator<RootStackParamList>();

export default function SharedStackNav({ screenName }: { screenName: string }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: modeColor(),
        headerTransparent: true, //헤더를 지워준다.
      }}
    >
      {screenName === "Feed" && <Stack.Screen name={"Feed"} component={Feed} />}

      {screenName === "Search" && (
        <Stack.Screen component={Search} name="Search" />
      )}

      {screenName === "Notifications" && (
        <Stack.Screen component={Notifications} name="Notifications" />
      )}

      {screenName === "Me" && <Stack.Screen component={Me} name="Me" />}

      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
