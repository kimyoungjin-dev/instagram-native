import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { LIKES_QUERY } from "../Components/Fragment";
import UserRow from "../Components/UserRow";
import ViewContainer from "../Components/ViewContainer";
import {
  seePhotoLikes,
  seePhotoLikesVariables,
} from "../__generated__/seePhotoLikes";

//photo 아이디가 존재하지않는다면 skip! useQuery를 건너뛴다.
export default function Likes({ route }: any) {
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery<
    seePhotoLikes,
    seePhotoLikesVariables
  >(LIKES_QUERY, {
    variables: {
      id: route?.params?.photoId,
    },
    skip: !route?.params?.photoId,
  });

  // keyExtractor : 필수:string
  // data : query 명

  const onRefreshing = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ViewContainer loading={loading}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshing}
            tintColor="white"
          />
        }
        refreshing={refreshing}
        onRefresh={onRefreshing}
        style={{ width: "100%" }}
        data={data?.seePhotoLikes}
        keyExtractor={(item) => "" + item?.id}
        renderItem={({ item: user }) => <UserRow {...user!} />}
      />
    </ViewContainer>
  );
}
