import React from "react";
import styled from "styled-components/native";

interface IProps {
  text: string;
}

const Container = styled.View`
  margin-bottom: 14px;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.silverColor};
  font-weight: 700;
`;

export default function Subtitle({ text }: IProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
