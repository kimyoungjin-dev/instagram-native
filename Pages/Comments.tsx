import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_user,
} from "../__generated__/seeFeed";
import Comment from "./Comment";

interface UpdatedProps
  extends Pick<seeFeed_seeFeed, "comments" | "commentNumber" | "caption"> {
  author: seeFeed_seeFeed_user["username"];
  photoId: seeFeed_seeFeed["id"];
  userId: seeFeed_seeFeed_user["id"];
}

const CommentCount = styled.Text`
  color: orange;
  font-weight: bold;
  margin-top: 7px;
  margin-bottom: 1px;
`;

export default function Comments({
  photoId,
  author,
  caption,
  commentNumber,
  comments,
  userId,
}: UpdatedProps) {
  return (
    <View>
      <Comment author={author} payload={caption!} userId={userId} />
      <CommentCount>
        {commentNumber === 0 ? "" : `${commentNumber} Comments`}
      </CommentCount>

      {comments?.map((item) => (
        <Comment
          key={item?.id}
          author={item?.user.username!}
          payload={item?.payload!}
          userId={userId}
        />
      ))}
    </View>
  );
}
