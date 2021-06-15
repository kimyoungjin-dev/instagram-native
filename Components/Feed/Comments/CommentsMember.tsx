import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CommentsMemberNavProps } from "../../../Navigation/NavigationProps";
import { SEE_PHOTO_COMMENTS } from "../../Fragment";
import ScreenContainer from "../../Shared/ScreenContainer";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { FatText, flexRow_AlignCenter } from "../../Shared/SharedStyles";
import {
  seePhotoComments,
  seePhotoCommentsVariables,
} from "../../../__generated__/seePhotoComments";
import Avatar from "../../Shared/Avatar";
import SplitText from "../../Shared/SplitText";
import { AntDesign } from "@expo/vector-icons";

//last Id 구현

const Container = styled.View``;

const SView = styled(flexRow_AlignCenter)`
  margin: 30px 0px 100px 0px;
`;

const Text = styled.Text`
  color: black;
`;

const UserComments = styled(flexRow_AlignCenter)`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
  border-radius: 5px;
`;

const UserName = styled(FatText)`
  margin-right: 20px;
`;

const CommentIcon = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const CommentText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  margin-right: 6px;
`;

export default function CommentsMember({
  route: {
    params: { photoId, caption, user, commentNumber },
  },
}: CommentsMemberNavProps) {
  console.log(commentNumber);
  const [lastId, setLastId] = useState(0);
  const { data, loading } = useQuery<
    seePhotoComments,
    seePhotoCommentsVariables
  >(SEE_PHOTO_COMMENTS, {
    variables: {
      id: photoId,
      lastId,
    },
  });

  return (
    <ScreenContainer loading={loading}>
      {commentNumber === 0 ? (
        <View>
          <Text>댓글이 없습니다</Text>
        </View>
      ) : (
        <Container>
          <SView>
            <Avatar uri={user.avatar || undefined} isMargin={true} />
            <View>
              <FatText>{user.username}</FatText>
              <SplitText text={caption} />
            </View>
          </SView>

          <CommentIcon>
            <CommentText>댓글</CommentText>
            <AntDesign name="message1" size={20} color="black" />
          </CommentIcon>

          <FlatList
            data={data?.seePhotoComments}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => "" + item?.id}
            renderItem={({ item }) => {
              return (
                <View style={{ marginBottom: 20 }}>
                  <UserComments>
                    <Avatar
                      uri={item?.user.avatar || undefined}
                      isMargin={true}
                    />

                    <UserName>{item?.user.username}</UserName>
                    <SplitText text={item?.payload} />
                  </UserComments>
                </View>
              );
            }}
          />
        </Container>
      )}
    </ScreenContainer>
  );
}
