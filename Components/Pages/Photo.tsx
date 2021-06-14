import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import { Text } from "react-native";
import { PhotoNavProps } from "../../Navigation/NavigationProps";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
`;

export default function Photo({ navigation }: PhotoNavProps) {
  return (
    <Container>
      <Text>Photo</Text>
    </Container>
  );
}
