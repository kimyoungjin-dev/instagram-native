import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../RootStack";
import styled from "styled-components/native";
import DarkModeSwitch from "../Shared/DarkModeSwitch";

const Container = styled.View``;

type Props = StackScreenProps<RootStackParamList, "Welcome">;

export default function Welcome({ navigation }: Props) {
  return (
    <Container>
      <DarkModeSwitch />
    </Container>
  );
}
