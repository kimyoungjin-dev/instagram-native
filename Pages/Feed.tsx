import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Alert, FlatList, RefreshControl } from "react-native";
import Photo from "../Components/Feed/Photo";
import { FEED_QUERY } from "../Components/Fragment";
import ViewContainer from "../Components/ViewContainer";
import { seeFeed, seeFeedVariables } from "../__generated__/seeFeed";

//성공적인 로그인 => authLink.concat으로 백앤드로 토큰이 보내졌다는 의미이다.
// offset의 초깃값 : skip 의 갯수이다
export default function Feed() {
  const { data, loading, refetch, fetchMore } = useQuery<
    seeFeed,
    seeFeedVariables
  >(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });

  //FlatList.showsVerticalScrollIndicator 스크롤바를 지워준다.

  //onEndReached : 스크롤이 화면 하단에 도착시 호출되는 함수
  //onEndReachedThreshold :number값을 받고, 어는시점에서 preload를 할지 정한다 (0:맨아래)
  //data?.seeFeed?.length = backend의 take (화면에 랜더링된 photo의 수)
  const [refreshing, setRefreshing] = useState(false);

  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <ViewContainer loading={loading}>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor="red"
            refreshing={refreshing}
            onRefresh={refresh}
          />
        }
        onEndReachedThreshold={1}
        onEndReached={() =>
          fetchMore({
            variables: {
              offset: data?.seeFeed?.length,
            },
          })
        }
        refreshing={refreshing}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo?.id}
        renderItem={({ item }) => <Photo {...item!} />}
      />
    </ViewContainer>
  );
}
// (property) ListRenderItemInfo<seeFeed_seeFeed | null>.item: seeFeed_seeFeed | null
