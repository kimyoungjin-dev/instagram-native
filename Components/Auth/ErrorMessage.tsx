import React from "react";
import styled from "styled-components/native";

interface IProps {
  text: string;
}

const Text = styled.Text`
  color: tomato;
`;

export default function ErrorMessage({ text }: IProps) {
  return text === "" || !text ? null : <Text>{text}</Text>;
}
