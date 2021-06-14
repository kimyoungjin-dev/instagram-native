import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import { Text, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "../Fragment";
import { seeFeed, seeFeedVariables } from "../../__generated__/seeFeed";
import { logUserOut } from "../../Apollo";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
`;

export default function Feed() {
  const { data } = useQuery<seeFeed, seeFeedVariables>(FEED_QUERY, {
    variables: {
      offset: 1,
    },
  });
  console.log(data);

  return (
    <Container>
      <Text>Feed</Text>
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </Container>
  );
}
