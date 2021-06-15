import React, { useEffect, useState } from "react";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import styled from "styled-components/native";
import Avatar from "../Shared/Avatar";
import { useWindowDimensions } from "react-native";
import { Image } from "react-native";
import { FatText, flexRow_AlignCenter } from "../Shared/SharedStyles";
import { View } from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import Like from "./Like/Like";
import { modeColor } from "../Shared/SharedFunction";
import Caption from "./Caption";
import Comments from "../Feed/Comments/Comments";
import { useMutation } from "@apollo/client";
import { TOGGLE_LIKE } from "../Fragment";
import {
  toggleLike,
  toggleLikeVariables,
} from "../../__generated__/toggleLike";

const Container = styled.View`
  margin-bottom: 50px;
`;

const Header = styled(flexRow_AlignCenter)`
  justify-content: space-between;
  padding: 0px 10px;
`;

const UserInfo = styled(flexRow_AlignCenter)`
  padding: 10px;
`;

const Username = styled(FatText)`
  font-size: 17px;
  color: ${(props) => props.theme.bgColor};
  margin-left: 10px;
`;

const File = styled.Image`
  margin-bottom: 15px;
`;

const Contents = styled.View`
  padding: 0px 10px;
`;

const Icons = styled(flexRow_AlignCenter)`
  justify-content: space-between;
`;

const LeftIcons = styled(flexRow_AlignCenter)``;

export default function Feed_Photo({
  file,
  user,
  id,
  likes,
  commentNumber,
  comments,
  caption,
  isLiked,
}: seeFeed_seeFeed) {
  const [toggle_like_mutation] = useMutation<toggleLike, toggleLikeVariables>(
    TOGGLE_LIKE,
    {
      variables: {
        id,
      },

      update: (cache, result) => {
        if (result.data?.toggleLike) {
          const {
            data: {
              toggleLike: { ok },
            },
          } = result;
          if (!ok) {
            return null;
          }
          if (ok) {
            cache.modify({
              id: `Photo:${id}`,
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
  useEffect(() => {
    Image.getSize(file, (_, height) => {
      setImageHeight(height / 3);
    });
  }, [file]);

  return (
    <Container>
      <Header>
        <UserInfo>
          <Avatar uri={user.avatar} />
          <Username>{user.username}</Username>
        </UserInfo>

        <View>
          <Entypo name="dots-three-horizontal" size={24} color={modeColor()} />
        </View>
      </Header>
      <File
        style={{
          width,
          height: imageHeight,
        }}
        source={{ uri: file }}
      />
      <Contents>
        <Icons>
          <LeftIcons>
            <Ionicons
              onPress={() => toggle_like_mutation()}
              name={isLiked ? "heart" : "heart-outline"}
              size={30}
              color={isLiked ? "tomato" : "black"}
              style={{ marginRight: 20 }}
            />
            <MaterialCommunityIcons
              name={
                commentNumber > 1
                  ? "message-processing"
                  : "message-processing-outline"
              }
              size={30}
              color={modeColor()}
              style={{ marginRight: 20 }}
            />
            <Feather name="send" size={30} color={modeColor()} />
          </LeftIcons>

          <View>
            <Feather name="bookmark" size={30} color={modeColor()} />
          </View>
        </Icons>

        <Like photoId={id} likes={likes} />

        <Caption caption={caption} user={user} />

        <Comments
          commentNumber={commentNumber}
          comments={comments}
          user={user}
          caption={caption}
          photoId={id}
        />
      </Contents>
    </Container>
  );
}
