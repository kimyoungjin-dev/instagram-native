import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/RootStack";
import Photo from "../Components/Pages/Photo";
import Profile from "../Components/Pages/Profile";
import Feed from "../Components/Pages/Feed";
import Search from "../Components/Pages/Search";
import Notifications from "../Components/Pages/Notifications";
import Me from "../Components/Pages/Me";

const Stack = createStackNavigator<RootStackParamList>();

export default function SharedStackNav({ screenName }: { screenName: string }) {
  return (
    <Stack.Navigator>
      {screenName === "Feed" ? (
        <Stack.Screen name={"Feed"} component={Feed} />
      ) : null}

      {screenName === "Search" ? (
        <Stack.Screen component={Search} name="Search" />
      ) : null}

      {screenName === "Notifications" ? (
        <Stack.Screen component={Notifications} name="Notifications" />
      ) : null}

      {screenName === "Me" ? <Stack.Screen component={Me} name="Me" /> : null}

      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
