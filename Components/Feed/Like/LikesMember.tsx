import { useQuery } from "@apollo/client";
import React from "react";
import { LikesMemberNavProps } from "../../../Navigation/NavigationProps";
import {
  seePhotoLikes,
  seePhotoLikesVariables,
  seePhotoLikes_seePhotoLikes,
} from "../../../__generated__/seePhotoLikes";
import { SEE_PHOTO_LIKES } from "../../Fragment";
import ScreenContainer from "../../Shared/ScreenContainer";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FatText, flexRow_AlignCenter } from "../../Shared/SharedStyles";
import { useNavigation } from "@react-navigation/native";

const Container = styled(flexRow_AlignCenter)`
  margin-bottom: 30px;
  margin-left: 15px;
`;

const Form = styled.View`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

const TextInput = styled.TextInput`
  background-color: gray;
  border-radius: 8px;
  height: 40px;
  padding-left: 15px;
`;

const Image = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  margin-right: 5px;
`;

//search bar 추가
//팔로윙 팔로우 구현
export default function LikesMember({
  route: {
    params: { photoId },
  },
}: LikesMemberNavProps) {
  const { data, loading } = useQuery<seePhotoLikes, seePhotoLikesVariables>(
    SEE_PHOTO_LIKES,
    {
      variables: {
        id: photoId,
      },
    }
  );

  const { navigate } = useNavigation();

  return (
    <ScreenContainer loading={loading}>
      <Form>
        <TextInput placeholder="검색" placeholderTextColor="white" />
      </Form>
      <FlatList
        data={data?.seePhotoLikes}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => "" + item?.id}
        renderItem={({ item }) => {
          return (
            <Container>
              <TouchableOpacity
                onPress={() =>
                  navigate("Profile", { username: item?.username })
                }
              >
                <Image source={{ uri: item?.avatar || undefined }} />
              </TouchableOpacity>

              <FatText
                onPress={() =>
                  navigate("Profile", {
                    username: item?.username,
                  })
                }
              >
                {item?.username}
              </FatText>
            </Container>
          );
        }}
      />
    </ScreenContainer>
  );
}
