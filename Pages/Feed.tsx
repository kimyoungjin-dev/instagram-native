import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { FEED_QUERY } from "../Components/Fragment";
import ViewContainer from "../Components/ViewContainer";
import {
  seeFeed,
  seeFeedVariables,
  seeFeed_seeFeed,
} from "../__generated__/seeFeed";

//성공적인 로그인 => authLink.concat으로 백앤드로 토큰이 보내졌다는 의미이다.
export default function Feed({ navigation }: any) {
  const { data, loading } = useQuery<seeFeed, seeFeedVariables>(FEED_QUERY, {
    variables: {
      page: 1,
    },
  });

  //flatlist는 현재 화면에 보이는것만 랜더링을 한다.
  return (
    <ViewContainer loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo?.id}
        renderItem={({ item: photo }) => (
          <View>
            <Text>{photo?.caption}</Text>
          </View>
        )}
      />
    </ViewContainer>
  );
}
// (property) ListRenderItemInfo<seeFeed_seeFeed | null>.item: seeFeed_seeFeed | null
