import React from "react";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import { Text } from "react-native";
import {
  ColorText,
  FatText,
  flexRow_AlignCenter,
} from "../Shared/SharedStyles";
import styled from "styled-components/native";

const Container = styled(flexRow_AlignCenter)``;

const UserName = styled(FatText)`
  margin-right: 7px;
`;

const Payload = styled.Text`
  color: ${(props) => props.theme.bgColor};
`;

type PickCaption = Pick<seeFeed_seeFeed, "caption" | "user">;

export default function Caption({ caption, user }: PickCaption) {
  return (
    <Container>
      <UserName>{user.username}</UserName>
      <Text>
        {caption
          ?.split(" ")
          .map((word) =>
            /#[\w]+/.test(word) ? (
              <ColorText>{word} </ColorText>
            ) : (
              <Payload>{word} </Payload>
            )
          )}
      </Text>
    </Container>
  );
}
