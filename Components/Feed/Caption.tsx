import React from "react";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import { FatText, flexRow_AlignCenter } from "../Shared/SharedStyles";
import styled from "styled-components/native";
import SplitText from "../Shared/SplitText";

const Container = styled(flexRow_AlignCenter)`
  margin: 10px 0px;
`;

const UserName = styled(FatText)`
  margin-right: 7px;
`;

type PickCaption = Pick<seeFeed_seeFeed, "caption" | "user">;

export default function Caption({ caption, user }: PickCaption) {
  return (
    <Container>
      <UserName>{user.username}</UserName>
      <SplitText text={caption} />
    </Container>
  );
}
