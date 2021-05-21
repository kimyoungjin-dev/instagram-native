import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";

const Container = styled.View``;

const Header = styled.View``;

const UserAvatar = styled.Image``;

const UserName = styled.Text`
  color: white;
`;

const File = styled.Image``;

const Actions = styled.TouchableOpacity``;

const Action = styled.TouchableOpacity``;

const Caption = styled.View``;

const CaptionText = styled.Text`
  color: white;
`;

const Likes = styled.Text`
  color: white;
`;

type PhotoPick = Pick<
  seeFeed_seeFeed,
  "id" | "user" | "caption" | "file" | "isLiked" | "likes" | "commentNumber"
>;

export default function Photo({
  id,
  user,
  caption,
  file,
  isLiked,
  likes,
  commentNumber,
}: PhotoPick) {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <Header>
        <UserAvatar source={{ uri: user.avatar || undefined }} />
        <UserName>{user.username}</UserName>
      </Header>

      <File
        source={{ uri: file }}
        resizeMode="cover"
        style={{ width, height: height - 500 }}
      />

      <Actions>
        <Action />
        <Action />
      </Actions>

      <Likes>{likes === 1 ? "1 Likes" : `${likes} Likes`}</Likes>

      <Caption>
        <UserName>{user.username}</UserName>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Container>
  );
}
