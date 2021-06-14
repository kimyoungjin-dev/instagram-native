import React from "react";
import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "../Fragment";
import { seeFeed, seeFeedVariables } from "../../__generated__/seeFeed";
import ScreenContainer from "../Shared/ScreenContainer";
import Feed_Photo from "../Feed/Feed_Photo";

export default function Feed() {
  const { data, loading } = useQuery<seeFeed, seeFeedVariables>(FEED_QUERY, {
    variables: {
      offset: 1,
    },
  });

  return (
    <ScreenContainer loading={loading}>
      <FlatList
        showsVerticalScrollIndicator={false} //모바일의 스크롤바를 가려줌
        style={{ width: "100%" }}
        data={data?.seeFeed}
        keyExtractor={(item) => "" + item?.id}
        renderItem={({ item }) => {
          return <Feed_Photo {...item!} key={item?.id} />;
        }}
      />
    </ScreenContainer>
  );
}
