import React from "react";
import styled from "styled-components/native";

const SSeperate = styled.View`
  width: 100%;
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Line = styled.View`
  background-color: ${(props) => props.theme.borderColor};
  height: 1px;
  width: 43%;
`;

const Or = styled.Text`
  color: ${(props) => props.theme.bgColor};
  margin: 0px 15px;
`;

export default function Seperate() {
  return (
    <SSeperate>
      <Line></Line>
      <Or>또는</Or>
      <Line></Line>
    </SSeperate>
  );
}
