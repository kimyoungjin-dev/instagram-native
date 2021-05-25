import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import {
  createComment,
  createCommentVariables,
} from "../../__generated__/createComment";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_user,
} from "../../__generated__/seeFeed";
import { CREAT_COMMENT_MUTATION, NEWCOMMENT } from "../Fragment";
import useMe from "../useMe";
import Comment from "./Comment";
import styled from "styled-components/native";
import FindHahtag from "../FindHahtag";
import { FatText } from "../Shared/Shared";

const TotalCommentCount = styled.Text`
  font-size: 18px;
  color: orange;
  margin-top: 7px;
  margin-bottom: 2px;
`;

interface CommentsProps {
  author: seeFeed_seeFeed_user["username"];
  caption: seeFeed_seeFeed["caption"];
  commentNumber: seeFeed_seeFeed["commentNumber"];
  comments: seeFeed_seeFeed["comments"];
  photoId: seeFeed_seeFeed["id"];
}

export default function Comments({
  author,
  caption,
  commentNumber,
  comments,
  photoId,
}: CommentsProps) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const { data: userData } = useMe();

  useEffect(() => {
    register("payload", {
      required: true,
    });
  }, [register]);

  const onSumit: SubmitHandler<createCommentVariables> = (data) => {
    const { payload } = data;
    if (loading) {
      return;
    } else {
      createCommentMutation({
        variables: {
          payload,
          photoId,
        },
      });
    }
  };

  const [createCommentMutation, { loading }] = useMutation<
    createComment,
    createCommentVariables
  >(CREAT_COMMENT_MUTATION, {
    update: (cache, result) => {
      const { payload } = getValues();
      // setValue("payload", "");
      if (result.data?.createComment.ok) {
        const {
          data: {
            createComment: { ok, id },
          },
        } = result;

        if (ok && userData?.me) {
          const newComment = {
            __typename: "Comment",
            id,
            user: {
              ...userData.me,
            },
            payload,
            isMine: true,
            createdAt: "" + Date.now(),
          };

          const newCacheComment = cache.writeFragment({
            data: newComment,
            fragment: NEWCOMMENT,
          });
          cache.modify({
            id: `Photo:${photoId}`,
            fields: {
              comments(prev) {
                return [...prev, newCacheComment];
              },
              commentNumber(prev) {
                return prev + 1;
              },
            },
          });
        }
      }
    },
  });

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <FatText>{author}</FatText>
        <FindHahtag caption={caption} />
      </View>

      <View>
        <TotalCommentCount>
          {commentNumber === 0 ? null : `${commentNumber} comments`}
        </TotalCommentCount>
      </View>

      {comments?.map((item) => (
        <Comment
          key={item?.id}
          photoId={photoId}
          commentId={item?.id!}
          payload={item?.payload!}
          author={author}
          isMine={item?.isMine!}
        />
      ))}

      <View style={{ marginTop: 10 }}>
        <TextInput
          style={{ color: "white" }}
          placeholder="Write Your Comments..."
          placeholderTextColor="tomato"
          onSubmitEditing={handleSubmit(onSumit)}
          onChangeText={(text) => setValue("payload", text)}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
