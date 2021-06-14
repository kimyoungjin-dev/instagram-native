import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { ProfileNavProps } from "../../Navigation/NavigationProps";
import { defaultBox } from "../Shared/SharedStyles";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
`;

export default function Profile({ navigation }: ProfileNavProps) {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
}
