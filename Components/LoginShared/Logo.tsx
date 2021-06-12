import React from "react";
import styled from "styled-components/native";
import { modeColor } from "../Shared/SharedFunction";

const SLogo = styled.Image`
  width: 100%;
  height: 120px;
`;

export default function Logo() {
  return (
    <SLogo
      resizeMode="center"
      source={require("../../assets/instagram_logo.png")}
      style={{ tintColor: modeColor() }}
    />
  );
}
