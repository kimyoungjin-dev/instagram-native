import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function CreateAccount() {
  return (
    <Container>
      <Text>CreateAccount</Text>
    </Container>
  );
}
