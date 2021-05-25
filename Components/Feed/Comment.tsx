import { useMutation } from "@apollo/client";
import React from "react";
import { Text, TouchableOpacity, View, ViewPropTypes } from "react-native";
import {
  deleteComment,
  deleteCommentVariables,
} from "../../__generated__/deleteComment";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_comments,
  seeFeed_seeFeed_user,
} from "../../__generated__/seeFeed";
import { DELETE_COMMENT } from "../Fragment";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import FindHahtag from "../FindHahtag";
import { FatText } from "../Shared/Shared";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Author = styled(FatText)`
  margin-right: 5;
`;

interface CommentsProps {
  commentId: seeFeed_seeFeed_comments["id"];
  photoId: seeFeed_seeFeed["id"];
  payload: seeFeed_seeFeed_comments["payload"];
  author: seeFeed_seeFeed_user["username"];
  isMine: seeFeed_seeFeed_comments["isMine"];
}

export default function Comment({
  photoId,
  commentId,
  payload,
  author,
  isMine,
}: CommentsProps) {
  const [deleteCommentMutation] = useMutation<
    deleteComment,
    deleteCommentVariables
  >(DELETE_COMMENT, {
    variables: {
      id: commentId,
    },

    update: (cache, result) => {
      if (result.data?.deleteComment.ok) {
        const {
          data: {
            deleteComment: { ok },
          },
        } = result;

        if (ok) {
          cache.evict({
            id: `Comment:${commentId}`,
          });

          cache.modify({
            id: `Photo:${photoId}`,
            fields: {
              commentNumber(prev) {
                return prev - 1;
              },
            },
          });
        }
      }
    },
  });

  const onDeleteClick = () => {
    deleteCommentMutation();
  };

  return (
    <Container>
      <Author>{author}</Author>
      <FindHahtag caption={payload} />
      {isMine ? (
        <TouchableOpacity onPress={onDeleteClick}>
          <Text style={{ color: "white", fontSize: 12 }}>삭제</Text>
        </TouchableOpacity>
      ) : null}
    </Container>
  );
}
