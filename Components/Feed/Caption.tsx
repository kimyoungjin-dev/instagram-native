import React from "react";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import { FatText, flexRow_AlignCenter } from "../Shared/SharedStyles";
import styled from "styled-components/native";
import SplitText from "../Shared/SplitText";
import { useNavigation } from "@react-navigation/native";

const Container = styled(flexRow_AlignCenter)`
  margin: 10px 0px;
`;

const UserName = styled(FatText)`
  margin-right: 7px;
`;

type PickCaption = Pick<seeFeed_seeFeed, "caption" | "user">;

export default function Caption({ caption, user }: PickCaption) {
  const { navigate } = useNavigation();

  const goToProfile = () => {
    navigate("Profile", {
      username: user.username,
    });
  };

  return (
    <Container>
      <UserName onPress={() => goToProfile()}>{user.username}</UserName>
      <SplitText text={caption} />
    </Container>
  );
}
