import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { LIKES_QUERY } from "../Components/Fragment";
import ViewContainer from "../Components/ViewContainer";
import {
  seePhotoLikes,
  seePhotoLikesVariables,
} from "../__generated__/seePhotoLikes";

//photo 아이디가 존재하지않는다면 skip! useQuery를 건너뛴다.
export default function Likes({ route }: any) {
  const { data, loading } = useQuery<seePhotoLikes, seePhotoLikesVariables>(
    LIKES_QUERY,
    {
      variables: {
        id: route?.params?.photoId,
      },
      skip: !route?.params?.photoId,
    }
  );

  // keyExtractor : 필수:string
  // data : query 명
  return (
    <ViewContainer loading={loading}>
      <FlatList
        style={{ width: "100%" }}
        data={data?.seePhotoLikes}
        keyExtractor={(item) => "" + item?.id}
        renderItem={({ item: user }) => (
          <View>
            <Text>{user?.username}</Text>
          </View>
        )}
      />
    </ViewContainer>
  );
}
