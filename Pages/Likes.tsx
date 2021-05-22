import { useQuery } from "@apollo/client";
import React from "react";
import { Text, View } from "react-native";
import { LIKES_QUERY } from "../Components/Fragment";
import {
  seePhotoLikes,
  seePhotoLikesVariables,
} from "../__generated__/seePhotoLikes";

export default function Likes({ route }: any) {
  const { data } = useQuery<seePhotoLikes, seePhotoLikesVariables>(
    LIKES_QUERY,
    {
      variables: {
        id: route?.params?.photoId,
      },
    }
  );
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Likes</Text>
    </View>
  );
}
