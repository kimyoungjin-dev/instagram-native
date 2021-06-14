import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "./SharedStyles";
import { ActivityIndicator } from "react-native";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const Container = styled(defaultBox)``;

export default function ScreenContainer({ loading, children }: Props) {
  return <Container>{loading ? <ActivityIndicator /> : children}</Container>;
}
