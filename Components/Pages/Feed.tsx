import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import { Text } from "react-native";
import { FeedNavProps } from "../../Navigation/NavigationProps";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
`;

export default function Feed({ navigation }: FeedNavProps) {
  return (
    <Container>
      <Text>Feed</Text>
    </Container>
  );
}
