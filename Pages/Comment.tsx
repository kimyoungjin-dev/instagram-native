import React from "react";
import { Text, TouchableOpacity } from "react-native";
import FindHahtag from "../Components/FindHahtag";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_comments,
  seeFeed_seeFeed_comments_user,
  seeFeed_seeFeed_user,
} from "../__generated__/seeFeed";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT_MUTATION } from "../Components/Fragment";
import {
  deleteComment,
  deleteCommentVariables,
} from "../__generated__/deleteComment";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CommentUser = styled.Text`
  color: white;
  font-weight: bold;
`;

const DelteCommentText = styled.Text`
  color: tomato;
  font-size: 12px;
`;

interface UpdatedProps {
  photoId?: seeFeed_seeFeed["id"];
  payload: seeFeed_seeFeed_comments["payload"];
  isMine?: seeFeed_seeFeed_comments["isMine"];
  author: seeFeed_seeFeed_comments_user["username"];
  commentId?: seeFeed_seeFeed_comments["id"];
  userId?: seeFeed_seeFeed_user["id"];
}

export default function Comment({
  author,
  payload,
  userId,
  commentId,
  isMine,
  photoId,
}: UpdatedProps) {
  const [deleteCommentMutation] = useMutation<
    deleteComment,
    deleteCommentVariables
  >(DELETE_COMMENT_MUTATION, {
    variables: {
      id: commentId!,
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

  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("Profile", {
      author,
      userId,
    });
  };

  const onDelete = () => {
    deleteCommentMutation();
  };

  return (
    <Container>
      <TouchableOpacity onPress={goToProfile}>
        <CommentUser>{author}</CommentUser>
      </TouchableOpacity>
      <FindHahtag caption={payload} />
      {isMine ? (
        <TouchableOpacity onPress={() => onDelete()}>
          <DelteCommentText>삭제</DelteCommentText>
        </TouchableOpacity>
      ) : null}
    </Container>
  );
}
