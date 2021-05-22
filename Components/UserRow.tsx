import React from "react";
import styled from "styled-components/native";
import { UserFragment } from "../__generated__/UserFragment";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px;
`;

const Column = styled.View`
  align-items: center;
  margin-right: 10px;
`;

const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  margin-right: 10px;
  margin-bottom: 4px;
`;

const UserName = styled.Text`
  font-weight: 600;
  color: white;
  font-size: 17px;
`;

const FollowBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 7px;
`;

const FollowText = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  font-size: 18px;
`;

type LikePick = Pick<
  UserFragment,
  "avatar" | "username" | "isFollowing" | "isMe"
>;

export default function UserRow({
  username,
  avatar,
  isFollowing,
  isMe,
}: LikePick) {
  return (
    <Container>
      <Column>
        <Avatar source={{ uri: avatar || undefined }} />
        <UserName>{username}</UserName>
      </Column>
      <FollowBtn>
        <FollowText>{isFollowing ? "UnFollow" : "Follow"}</FollowText>
      </FollowBtn>
    </Container>
  );
}
