import React, { useEffect } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { flexRow_AlignCenter } from "../../Shared/SharedStyles";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_user,
} from "../../../__generated__/seeFeed";
import useUser from "../../Hooks/useUser";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  createComment,
  createCommentVariables,
} from "../../../__generated__/createComment";
import { CREATE_COMMENT } from "../../Fragment";
import { gql, useMutation } from "@apollo/client";
import { modeColor } from "../../Shared/SharedFunction";

const Container = styled(flexRow_AlignCenter)``;

const Image = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  margin-right: 10px;
`;

const Form = styled.View`
  border: 1px solid black;
  padding: 6px;
  border-radius: 10px;
  width: 90%;
`;

interface WriteCommentsProps {
  userAvatar: seeFeed_seeFeed_user["avatar"];
  photoId: seeFeed_seeFeed["id"];
}

export default function WriteComments({
  userAvatar,
  photoId,
}: WriteCommentsProps) {
  const { register, handleSubmit, getValues, setValue } =
    useForm<createCommentVariables>();
  const { data: userData } = useUser();
  const [createComment] = useMutation<createComment, createCommentVariables>(
    CREATE_COMMENT,
    {
      update: (cache, result) => {
        const { payload } = getValues();
        setValue("payload", "");

        if (result.data?.createComment) {
          const {
            data: {
              createComment: { ok, id },
            },
          } = result;

          if (!ok) {
            return;
          }

          if (ok && userData?.me) {
            const newComments = {
              __typename: "Comment",
              id,
              payload,
              isMine: true,
              createdAt: Date.now(),
              user: {
                ...userData.me,
              },
            };
            const newCacheComments = cache.writeFragment({
              data: newComments,
              fragment: gql`
                fragment CacheCommentFragment on Comment {
                  id
                  payload
                  isMine
                  createdAt
                  user {
                    username
                    avatar
                  }
                }
              `,
            });
            cache.modify({
              id: `Photo:${photoId}`,
              fields: {
                comments(prev) {
                  return [...prev, newCacheComments];
                },
                commentNumber(prev) {
                  return prev + 1;
                },
              },
            });
          }
        }
      },
    }
  );

  useEffect(() => {
    register("payload");
  }, [register]);

  const onSubmit: SubmitHandler<createCommentVariables> = (data) => {
    const { payload } = data;

    createComment({
      variables: {
        payload,
        photoId,
      },
    });
  };
  return (
    <Container>
      <Image source={{ uri: userAvatar || undefined }} resizeMode="cover" />
      <Form>
        <TextInput
          placeholder="댓글달기"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setValue("payload", value)}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
      </Form>
    </Container>
  );
}
