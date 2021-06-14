import { useQuery } from "@apollo/client";
import React from "react";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import {
  seePhotoLikes,
  seePhotoLikesVariables,
} from "../../__generated__/seePhotoLikes";
import { SEE_PHOTO_LIKES } from "../Fragment";
import Avatar from "../Shared/Avatar";
import styled from "styled-components/native";
import { FatText, flexRow_AlignCenter } from "../Shared/SharedStyles";

const TotalLikesUser = styled(flexRow_AlignCenter)`
  margin: 10px 0px;
`;

const LikesText = styled.Text`
  color: ${(props) => props.theme.bgColor};
`;

const User = styled(flexRow_AlignCenter)``;

interface LikeProps {
  likes: seeFeed_seeFeed["likes"];
  photoId: seeFeed_seeFeed["id"];
}

export default function Like({ likes, photoId }: LikeProps) {
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
              <LikesText>이사진의 첫번째 좋아요를 눌러보세요!</LikesText>
            </TotalLikesUser>
          );
        }
        if (likes === 1) {
          return (
            <TotalLikesUser key={item?.id}>
              <User>
                <Avatar uri={item?.avatar} isMargin={true} />
                <LikesText>
                  <FatText>{item?.username}</FatText>님이 좋아요를 눌렀습니다.
                </LikesText>
              </User>
            </TotalLikesUser>
          );
        }

        if (likes > 1) {
          return (
            index === 0 && (
              <TotalLikesUser key={item?.id}>
                <Avatar uri={item?.avatar} />
                <LikesText style={{ marginLeft: 5 }}>
                  <FatText>{item?.username}</FatText>님 외에{" "}
                  <FatText>{likes - 1}</FatText> 명이 좋아합니다.
                </LikesText>
              </TotalLikesUser>
            )
          );
        }
      })}
    </>
  );
}
