import React from "react";
import { StringProps } from "./InterFace";
import { ColorText } from "../Shared/SharedStyles";
import styled from "styled-components/native";

const Text = styled.Text`
  color: ${(props) => props.theme.bgColor};
`;

export default function SplitText({ text }: StringProps) {
  return !text || text === "" ? null : (
    <Text>
      {text
        ?.split(" ")
        .map((word, index) =>
          /#[\w]+/.test(word) ? (
            <ColorText key={index}>{word} </ColorText>
          ) : (
            <Text key={index}>{word} </Text>
          )
        )}
    </Text>
  );
}
