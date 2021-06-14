import { useQuery } from "@apollo/client";
import React from "react";
import { seeFeed_seeFeed } from "../../../__generated__/seeFeed";
import {
  seePhotoLikes,
  seePhotoLikesVariables,
} from "../../../__generated__/seePhotoLikes";
import { SEE_PHOTO_LIKES } from "../../Fragment";
import Avatar from "../../Shared/Avatar";
import styled from "styled-components/native";
import { FatText, flexRow_AlignCenter } from "../../Shared/SharedStyles";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

const TotalLikesUser = styled(flexRow_AlignCenter)`
  margin: 10px 0px;
`;

const SView = styled(flexRow_AlignCenter)``;

export interface LikeProps {
  likes: seeFeed_seeFeed["likes"];
  photoId: seeFeed_seeFeed["id"];
}

export default function Like({ likes, photoId }: LikeProps) {
  const navigation = useNavigation();
  const { data } = useQuery<seePhotoLikes, seePhotoLikesVariables>(
    SEE_PHOTO_LIKES,
    {
      variables: {
        id: photoId,
      },
    }
  );

  return (
    <>
      {data?.seePhotoLikes?.map((item, index) => {
        if (likes === 0) {
          return (
            <TotalLikesUser key={item?.id}>
              <Text>이사진의 첫번째 좋아요를 눌러보세요!</Text>
            </TotalLikesUser>
          );
        }
        if (likes === 1) {
          return (
            <TotalLikesUser key={item?.id}>
              <SView>
                <Avatar uri={item?.avatar} isMargin={true} />

                <SView>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                  >
                    <FatText>{item?.username}</FatText>
                  </TouchableOpacity>

                  <Text>님이 좋아요를 눌렀습니다.</Text>
                </SView>
              </SView>
            </TotalLikesUser>
          );
        }

        if (likes > 1) {
          return (
            index === 0 && (
              <TotalLikesUser key={item?.id}>
                <Avatar uri={item?.avatar} isMargin={true} />

                <SView>
                  <Text>
                    {item?.username}님 외에{" "}
                    <Text
                      onPress={() =>
                        navigation.navigate("LikesMember", {
                          photoId,
                        })
                      }
                    >
                      <FatText>{likes - 1}</FatText>
                    </Text>
                    명이 좋아요를 좋아합니다.
                  </Text>
                </SView>
              </TotalLikesUser>
            )
          );
        }
      })}
    </>
  );
}
