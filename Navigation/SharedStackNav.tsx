import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/RootStack";
import Photo from "../Components/Pages/Photo";
import Profile from "../Components/Pages/Profile";
import Feed from "../Components/Pages/Feed";
import Search from "../Components/Pages/Search";
import Notifications from "../Components/Pages/Notifications";
import Me from "../Components/Pages/Me";
import {
  modeColor,
  reverseModeColor,
} from "../Components/Shared/SharedFunction";
import { Image } from "react-native";
import LikesMember from "../Components/Feed/Like/LikesMember";

const Stack = createStackNavigator<RootStackParamList>();

export default function SharedStackNav({ screenName }: { screenName: string }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: modeColor(),
        headerStyle: {
          backgroundColor: reverseModeColor(),
          shadowOpacity: 0,
          borderBottomColor: modeColor(),
        },
      }}
    >
      {screenName === "Feed" && (
        <Stack.Screen
          name={"Feed"}
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                source={require("../assets/instagram_logo.png")}
                resizeMode="contain"
                style={{ width: 140, height: "100%", tintColor: modeColor() }}
              />
            ),
          }}
        />
      )}

      {screenName === "Search" && (
        <Stack.Screen component={Search} name="Search" />
      )}

      {screenName === "Notifications" && (
        <Stack.Screen component={Notifications} name="Notifications" />
      )}

      {screenName === "Me" && <Stack.Screen component={Me} name="Me" />}

      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="LikesMember"
        component={LikesMember}
        options={{ headerTitle: "좋아요", headerTintColor: modeColor() }}
      />
    </Stack.Navigator>
  );
}
