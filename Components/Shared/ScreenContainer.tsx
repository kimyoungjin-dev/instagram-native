import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "./SharedStyles";
import { ActivityIndicator } from "react-native";
import { ScreenContainerProps } from "./InterFace";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

export default function ScreenContainer({
  loading,
  children,
}: ScreenContainerProps) {
  return <Container>{loading ? <ActivityIndicator /> : children}</Container>;
}
