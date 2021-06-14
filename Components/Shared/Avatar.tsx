import React from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 100px;
`;

export default function Avatar({ uri }: { uri: string | undefined | null }) {
  return !uri || uri === "" ? null : <Image source={{ uri }} />;
}
