import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import Photo from "../Components/Feed/Photo";
import { FEED_QUERY } from "../Components/Fragment";
import ViewContainer from "../Components/ViewContainer";
import { seeFeed, seeFeedVariables } from "../__generated__/seeFeed";

//성공적인 로그인 => authLink.concat으로 백앤드로 토큰이 보내졌다는 의미이다.
export default function Feed() {
  const { data, loading, refetch } = useQuery<seeFeed, seeFeedVariables>(
    FEED_QUERY,
    {
      variables: {
        page: 1,
      },
    }
  );

  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const [refreshing, setRefreshing] = useState(false);

  //flatlist는 현재 화면에 보이는것만 랜더링을 한다.
  //FlatList.showsVerticalScrollIndicator 스크롤바를 지워준다.
  return (
    <ViewContainer loading={loading}>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor="white"
            refreshing={refreshing}
            onRefresh={refresh}
          />
        }
        style={{ width: "100%" }}
        data={data?.seeFeed}
        showsVerticalScrollIndicator={false}
        keyExtractor={(photo) => "" + photo?.id}
        renderItem={({ item: photo }) => <Photo key={photo?.id} {...photo!} />}
      />
    </ViewContainer>
  );
}
// (property) ListRenderItemInfo<seeFeed_seeFeed | null>.item: seeFeed_seeFeed | null
