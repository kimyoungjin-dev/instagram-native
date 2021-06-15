import React from "react";
import { SplitTextProps } from "./InterFace";
import { ColorText } from "../Shared/SharedStyles";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Text = styled.Text`
  color: ${(props) => props.theme.bgColor};
`;

export default function SplitText({ text }: SplitTextProps) {
  const { navigate } = useNavigation();

  return !text || text === "" ? null : (
    <Text>
      {text?.split(" ").map((word, index) =>
        /#[\w]+/.test(word) ? (
          <ColorText
            key={index}
            onPress={() =>
              navigate("Hashtag", {
                hashtag: word,
              })
            }
          >
            {word}{" "}
          </ColorText>
        ) : (
          <Text key={index}>{word} </Text>
        )
      )}
    </Text>
  );
}
