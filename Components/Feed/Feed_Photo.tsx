import React from "react";
import { useWindowDimensions, View } from "react-native";
import styled from "styled-components/native";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import Avatar from "../Shared/Avatar";
import { defaultBox, flexRow_AlignCenter } from "../Shared/SharedStyles";
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const Container = styled(defaultBox)`
  margin-bottom: 50px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

const UserAvatar_Name = styled(flexRow_AlignCenter)``;

const UserName = styled.Text`
  font-weight: bold;
  margin-left: 10px;
  font-size: 15px;
`;

const File = styled.Image`
  width: 100%;
  height: 100px;
`;

const InfoMation = styled.View`
  padding: 0px 20px;
  width: 100%;
`;

const Action = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
  justify-content: space-between;
`;

const LeftIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Caption = styled.View``;

const CaptionText = styled.Text``;

export default function Feed_Photo({
  id,
  user,
  caption,
  file,
  isLiked,
  likes,
}: seeFeed_seeFeed) {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <Header>
        <UserAvatar_Name>
          <Avatar uri={user.avatar} />
          <UserName>{user.username}</UserName>
        </UserAvatar_Name>
        <View>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </Header>

      <File
        source={{ uri: file || undefined }}
        style={{ width, height: height / 1.8 }}
      />
      <InfoMation>
        <Action>
          <LeftIcon>
            <Ionicons
              name="ios-heart-outline"
              color="black"
              size={30}
              style={{ marginRight: 15 }}
            />
            <AntDesign
              name="message1"
              color="black"
              size={24}
              style={{ marginRight: 15 }}
            />
            <Feather name="send" color="black" size={24} />
          </LeftIcon>

          <Feather name="bookmark" size={28} color="black" />
        </Action>

        <Caption>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </InfoMation>
    </Container>
  );
}
