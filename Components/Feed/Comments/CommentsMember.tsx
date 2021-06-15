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

//last Id 구현

const SView = styled(flexRow_AlignCenter)`
  margin-bottom: 100px;
`;

const Text = styled.Text`
  color: black;
`;

const UserComments = styled(flexRow_AlignCenter)`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
`;

export default function CommentsMember({
  route: {
    params: { photoId, caption, comments, user, commentNumber },
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
          <Text>댓글이 없습니다.</Text>
        </View>
      ) : (
        <FlatList
          data={data?.seePhotoComments}
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => "" + item?.id}
          renderItem={({ item }) => {
            return (
              <View>
                <SView>
                  <Avatar uri={user.avatar || undefined} isMargin={true} />

                  <View>
                    <FatText>{user.username}</FatText>
                    <SplitText text={caption} />
                  </View>
                </SView>

                <UserComments>
                  <Avatar
                    uri={item?.user.avatar || undefined}
                    isMargin={true}
                  />

                  <FatText>{item?.user.username}</FatText>
                  <SplitText text={item?.payload} />
                </UserComments>
              </View>
            );
          }}
        />
      )}
    </ScreenContainer>
  );
}
