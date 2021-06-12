import React from "react";
import { View } from "react-native";
import { ChildrenProps } from "../Shared/InterFace";
import styled from "styled-components/native";

const SForm = styled.View`
  width: 100%;
`;

export default function Form({ children }: ChildrenProps) {
  return <SForm>{children}</SForm>;
}
