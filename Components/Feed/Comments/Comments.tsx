import React, { useState } from "react";
import { View } from "react-native";
import { seeFeed_seeFeed } from "../../../__generated__/seeFeed";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface CommentsPick {
  commentNumber: seeFeed_seeFeed["commentNumber"];
  user: seeFeed_seeFeed["user"];
  caption: seeFeed_seeFeed["caption"];
  photoId: seeFeed_seeFeed["id"];
}

const Text = styled.Text`
  color: gray;
`;

export default function Comments({
  commentNumber,
  caption,
  user,
  photoId,
}: CommentsPick) {
  const [isShow] = useState(false);

  const goToCommentsMember = () => {
    navigate("CommentsMember", {
      caption,
      user,
      photoId,
      commentNumber,
    });
  };

  const { navigate } = useNavigation();
  return (
    <View style={{ marginBottom: 20 }}>
      {isShow ? null : (
        <View>
          <Text onPress={() => goToCommentsMember()}>
            댓글 {commentNumber}개 모두 보기
          </Text>
        </View>
      )}
    </View>
  );
}
