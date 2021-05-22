import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import { UserFragment } from "../__generated__/UserFragment";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px;
  justify-content: space-between;
`;

const Column = styled.TouchableOpacity`
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
  background-color: blue;
  border-radius: 7px;
`;

const FollowText = styled.Text`
  color: ${(props) => props.theme.bgColor};
  font-weight: bold;
  font-size: 18px;
`;

type LikePick = Pick<
  UserFragment,
  "avatar" | "username" | "isFollowing" | "isMe" | "id"
>;

export default function UserRow({
  username,
  avatar,
  isFollowing,
  isMe,
  id,
}: LikePick) {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("Profile", {
      username,
      id,
    });
  };
  return (
    <Container>
      <Column onPress={goToProfile}>
        <Avatar source={{ uri: avatar || undefined }} />
        <UserName>{username}</UserName>
      </Column>
      {!isMe ? (
        <FollowBtn>
          <FollowText>{isFollowing ? "UnFollow" : "Follow"}</FollowText>
        </FollowBtn>
      ) : null}
    </Container>
  );
}
