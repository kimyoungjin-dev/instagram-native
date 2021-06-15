import React from "react";
import { useQuery } from "@apollo/client";
import {
  seeHashtag,
  seeHashtagVariables,
} from "../../../__generated__/seeHashtag";
import { HashtagScreenNavProps } from "../../../Navigation/NavigationProps";
import { SEE_HASH_TAGS } from "../../Fragment";
import ScreenContainer from "../../Shared/ScreenContainer";
import { View, FlatList, Text } from "react-native";
import styled from "styled-components/native";
import { FatText } from "../../Shared/SharedStyles";

const Header = styled.View`
  padding: 0px 30px;
  margin-top: 30px;
  flex-direction: row;
`;

const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 100px;
  margin-right: 100px;
`;

export default function Hashtag({
  route: {
    params: { hashtag },
  },
}: HashtagScreenNavProps) {
  const { data, loading } = useQuery<seeHashtag, seeHashtagVariables>(
    SEE_HASH_TAGS,

    {
      variables: {
        hashtag,
      },
    }
  );
  return (
    <ScreenContainer loading={loading}>
      <FlatList
        showsVerticalScrollIndicator={false} //모바일의 스크롤바를 가려줌
        style={{ width: "100%" }}
        data={[data?.seeHashtag]}
        keyExtractor={(item) => "" + item?.id}
        renderItem={({ item }) => {
          return (
            <>
              <Header>
                <View>
                  {item?.photos?.map((photo, index) => (
                    <View>
                      {index === 0 && (
                        <Image
                          source={{ uri: photo?.file }}
                          resizeMode="cover"
                        />
                      )}
                    </View>
                  ))}
                </View>

                <View>
                  <Text style={{ fontSize: 24, color: "gray" }}>
                    <FatText>{item?.totalPhotos}</FatText> 게시물
                  </Text>
                </View>
              </Header>
            </>
          );
        }}
      />
    </ScreenContainer>
  );
}
