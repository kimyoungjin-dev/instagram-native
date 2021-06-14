import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
`;

export default function Me() {
  return (
    <Container>
      <Text>Me</Text>
    </Container>
  );
}
