import React from "react";
import { TouchableOpacity } from "react-native";
import FindHahtag from "../Components/FindHahtag";
import {
  seeFeed_seeFeed_comments,
  seeFeed_seeFeed_comments_user,
  seeFeed_seeFeed_user,
} from "../__generated__/seeFeed";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

const Container = styled.View`
  flex-direction: row;
`;

const CommentUser = styled.Text`
  color: white;
  font-weight: bold;
`;

interface UpdatedProps {
  payload: seeFeed_seeFeed_comments["payload"];
  author: seeFeed_seeFeed_comments_user["username"];
  userId: seeFeed_seeFeed_user["id"];
}

export default function Comment({ author, payload, userId }: UpdatedProps) {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("Profile", {
      author,
      userId,
    });
  };

  return (
    <Container>
      <TouchableOpacity onPress={goToProfile}>
        <CommentUser>{author}</CommentUser>
      </TouchableOpacity>
      <FindHahtag caption={payload} />
    </Container>
  );
}
