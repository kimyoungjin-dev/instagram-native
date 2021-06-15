import React, { useState } from "react";
import { View } from "react-native";
import { seeFeed_seeFeed } from "../../../__generated__/seeFeed";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface CommentsPick {
  commentNumber: seeFeed_seeFeed["commentNumber"];
  comments: seeFeed_seeFeed["comments"];
  user: seeFeed_seeFeed["user"];
  caption: seeFeed_seeFeed["caption"];
  photoId: seeFeed_seeFeed["id"];
}

const Text = styled.Text`
  color: gray;
`;

export default function Comments({
  commentNumber,
  comments,
  caption,
  user,
  photoId,
}: CommentsPick) {
  const [isShow] = useState(false);

  const { navigate } = useNavigation();
  return (
    <View>
      {isShow ? null : (
        <View>
          <Text
            onPress={() =>
              navigate("CommentsMember", {
                caption,
                comments,
                user,
                photoId,
                commentNumber,
              })
            }
          >
            댓글 {commentNumber}개 모두 보기
          </Text>
        </View>
      )}
    </View>
  );
}
