import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import { Text } from "react-native";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
`;

export default function Feed() {
  return (
    <Container>
      <Text>Feed</Text>
    </Container>
  );
}
