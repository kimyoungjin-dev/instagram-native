import { useMutation } from "@apollo/client";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import {
  toggleLike,
  toggleLikeVariables,
} from "../../__generated__/toggleLike";
import { TOGGLE_LIKE_MUTATION } from "../Fragment";
import { FatText } from "../Shared/Shared";
import Comments from "./Comments";

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

const Likes = styled(FatText)`
  margin: 5px 0px;
`;

type PhotoPick = Pick<
  seeFeed_seeFeed,
  | "id"
  | "user"
  | "caption"
  | "file"
  | "isLiked"
  | "likes"
  | "commentNumber"
  | "comments"
>;

export default function Photo({
  id,
  user,
  caption,
  file,
  isLiked,
  likes,
  commentNumber,
  comments,
}: PhotoPick) {
  const [toggleLikeMutation] = useMutation<toggleLike, toggleLikeVariables>(
    TOGGLE_LIKE_MUTATION,
    {
      variables: {
        id,
      },
      update: (cache, result) => {
        if (result.data?.toggleLike.ok) {
          const {
            data: {
              toggleLike: { ok },
            },
          } = result;
          if (ok) {
            const photoId = `Photo:${id}`;
            cache.modify({
              id: photoId,
              fields: {
                isLiked(prev) {
                  return !prev;
                },
                likes(prev) {
                  return isLiked ? prev - 1 : prev + 1;
                },
              },
            });
          }
        }
      },
    }
  );

  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 450);
  const navigation = useNavigation();

  useEffect(() => {
    Image.getSize(file, (_, height) => {
      setImageHeight(height / 2);
    });
  }, [file]);

  const goToProfile = () => {
    navigation.navigate("Profile", {
      username: user.username,
      id: user.id,
    });
  };

  return (
    <Container style={{ borderBottomWidth: 0.3, borderBottomColor: "white" }}>
      <Header>
        <User onPress={goToProfile}>
          <UserAvatar
            resizeMode="cover"
            source={{ uri: user.avatar || undefined }}
          />
          <UserName>{user.username}</UserName>
        </User>

        <Icons>
          <TouchableOpacity>
            <FontAwesome name="plus-square-o" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome
              name="heart-o"
              size={24}
              color="white"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome
              name="envelope-o"
              size={28}
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
          <HeartMessage onPress={() => toggleLikeMutation()}>
            <Ionicons
              name={isLiked ? "ios-heart-circle" : "ios-heart-circle-outline"}
              size={28}
              color={isLiked ? "skyblue" : "white"}
            />
          </HeartMessage>

          <HeartMessage>
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

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Likes", {
              photoId: id,
            })
          }
        >
          <Likes>{likes === 1 ? "1 Likes" : `${likes} Likes`}</Likes>
        </TouchableOpacity>

        <Comments
          author={user.username}
          caption={caption}
          commentNumber={commentNumber}
          comments={comments}
          photoId={id}
        />
      </ExtraContainer>
    </Container>
  );
}
