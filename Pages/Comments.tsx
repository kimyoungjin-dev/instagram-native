import { gql, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { View } from "react-native";
import styled from "styled-components/native";
import { CREAT_COMMENT_MUTATION } from "../Components/Fragment";
import useMe from "../Components/useMe";
import {
  createComment,
  createCommentVariables,
} from "../__generated__/createComment";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_user,
} from "../__generated__/seeFeed";
import Comment from "./Comment";

interface UpdatedProps
  extends Pick<seeFeed_seeFeed, "comments" | "commentNumber" | "caption"> {
  author: seeFeed_seeFeed_user["username"];
  photoId: seeFeed_seeFeed["id"];
  userId: seeFeed_seeFeed_user["id"];
}

const CommentCount = styled.Text`
  color: orange;
  font-weight: bold;
  margin-top: 7px;
  margin-bottom: 1px;
`;

const Input = styled.TextInput`
  color: white;
`;

export default function Comments({
  photoId,
  author,
  caption,
  commentNumber,
  comments,
  userId,
}: UpdatedProps) {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { data: userData } = useMe();

  useEffect(() => {
    register("payload", {
      required: true,
    });
  }, [register]);

  const [createCommentMutation, { loading }] = useMutation<
    createComment,
    createCommentVariables
  >(CREAT_COMMENT_MUTATION, {
    update: (cache, result) => {
      const { payload } = getValues();
      // setvalue("payload", "")
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
            payload,
            isMine: true,
            createdAt: Date.now() + "",
            user: {
              ...userData?.me,
            },
          };
          const newCacheComment = cache.writeFragment({
            data: newComment,
            fragment: gql`
              fragment BSName on Comment {
                id
                user {
                  username
                  avatar
                }
                payload
                isMine
                createdAt
              }
            `,
          });

          cache.modify({
            id: `Photo:${photoId}`,
            fields: {
              comments(prev) {
                return [...prev, newCacheComment];
              },
              commentNumber(prev) {
                return [prev + 1];
              },
            },
          });
        }
      }
    },
  });

  const onSubmit: SubmitHandler<createCommentVariables> = (data) => {
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

  return (
    <View>
      <Comment author={author} payload={caption!} userId={userId} />
      <CommentCount>
        {commentNumber === 0 ? "" : `${commentNumber} Comments`}
      </CommentCount>

      {comments?.map((item) => (
        <Comment
          key={item?.id}
          userId={userId}
          commentId={item?.id}
          author={item?.user.username!}
          payload={item?.payload!}
          isMine={item?.isMine}
          photoId={photoId}
        />
      ))}

      <View>
        <Input
          onSubmitEditing={handleSubmit(onSubmit)}
          placeholder="Write Your Comments..."
          placeholderTextColor="white"
          autoCapitalize="none"
          onChangeText={(text) => {
            setValue("payload", text);
          }}
        />
      </View>
    </View>
  );
}
