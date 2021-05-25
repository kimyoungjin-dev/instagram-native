import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Pages/Profile";
import Photo from "../Pages/Photo";
import Feed from "../Pages/Feed";
import Search from "../Pages/Search";
import Notification from "../Pages/Notification";
import Me from "../Pages/Me";
import { Image } from "react-native";
import { useTheme } from "../styles/ChangeMode";
import Likes from "../Pages/Likes";
import Hashtag from "../Components/Feed/Hashtag";
import Comments from "../Components/Feed/Comments";

interface IProps {
  screenName: string;
}

const Stack = createStackNavigator();
//Stack Navigator의 맨앞의 화면은 props에 따라 달라지고, Profile,Photo 컴포넌트는 공유된다.

export default function SharedNav({ screenName }: IProps) {
  const theme = useTheme();
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  height: 60,
                  tintColor: theme.mode === "dark" ? "black" : "white",
                }}
                source={require("../assets/instagram_logo.png")}
                resizeMode="contain"
              />
            ),
          }}
        />
      ) : null}

      {screenName === "Search" ? (
        <Stack.Screen name="Search" component={Search} />
      ) : null}

      {screenName === "Notification" ? (
        <Stack.Screen name="Notification" component={Notification} />
      ) : null}

      {screenName === "Me" ? <Stack.Screen name="Me" component={Me} /> : null}

      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="Hashtag" component={Hashtag} />
    </Stack.Navigator>
  );
}
