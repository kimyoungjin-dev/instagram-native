import React from "react";
import styled from "styled-components/native";
import { AvatarProps } from "./InterFace";

const Image = styled.Image<AvatarProps>`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-right: ${(props) => (props.isMargin ? "5px" : "0px")};
`;

export default function Avatar({ uri, isMargin }: AvatarProps) {
  return !uri || uri === "" ? null : (
    <Image source={{ uri }} isMargin={isMargin} />
  );
}
