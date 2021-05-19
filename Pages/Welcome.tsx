import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthProps } from "../utils/AuthParamList";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Logo = styled.Image`
  max-width: 50%;
`;

export default function Welcome({ navigation, route }: AuthProps<"Welcome">) {
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={require("../assets/instagram_logo.png")}
      />
    </Container>
  );
}
