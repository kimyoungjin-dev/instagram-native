import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";

const Container = styled.View``;

const Header = styled.View`
  padding: 20px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const User = styled.TouchableOpacity`
  align-items: center;
`;

const UserAvatar = styled.Image`
  margin-bottom: 5px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

const UserName = styled.Text`
  color: white;
  font-weight: bold;
`;

const Icons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const File = styled.Image``;

const ExtraContainer = styled.View`
  padding: 10px;
`;

const HeartMessageBox = styled.TouchableOpacity`
  flex-direction: row;
`;

const HeartMessage = styled.TouchableOpacity`
  margin-right: 8px;
`;

const Caption = styled.View`
  flex-direction: row;
`;

const CaptionText = styled.Text`
  color: white;
  margin-left: 8px;
`;

const Likes = styled.Text`
  color: white;
  margin: 5px 0px;
  font-weight: bold;
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
  const [imageHeight, setImageHeight] = useState(height - 450);
  const navigation = useNavigation();
  //이미지 파일의 출력 크기를 조정하는 방법
  useEffect(() => {
    Image.getSize(file, (_, height) => {
      setImageHeight(height / 3);
    });
  }, [file]);

  return (
    <Container style={{ borderBottomWidth: 0.3, borderBottomColor: "white" }}>
      <Header>
        <User onPress={() => navigation.navigate("Profile")}>
          <UserAvatar
            resizeMode="cover"
            source={{ uri: user.avatar || undefined }}
          />
          <UserName>{user.username}</UserName>
        </User>

        <Icons>
          <TouchableOpacity>
            <FontAwesome name="plus-square-o" size={33} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome
              name="heart-o"
              size={27}
              color="white"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome
              name="envelope-o"
              size={33}
              color="white"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        </Icons>
      </Header>

      <File
        source={{ uri: file }}
        resizeMode="cover"
        style={{ width, height: imageHeight }}
      />

      <ExtraContainer>
        <HeartMessageBox>
          <HeartMessage>
            <Ionicons
              name={likes > 0 ? "ios-heart-circle" : "ios-heart-circle-outline"}
              size={28}
              color={likes === 0 ? "white" : "skyblue"}
            />
          </HeartMessage>
          <HeartMessage onPress={() => navigation.navigate("Comments")}>
            <Ionicons
              name={
                commentNumber === 0
                  ? "chatbubble-outline"
                  : "chatbubble-ellipses-outline"
              }
              size={28}
              color="white"
            />
          </HeartMessage>
        </HeartMessageBox>

        <TouchableOpacity onPress={() => navigation.navigate("Likes")}>
          <Likes>{likes === 1 ? "1 Likes" : `${likes} Likes`}</Likes>
        </TouchableOpacity>

        <Caption>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <UserName>{user.username}</UserName>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </ExtraContainer>
    </Container>
  );
}
