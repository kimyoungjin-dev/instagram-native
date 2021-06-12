import React, { useState } from "react";
import { Switch, Text } from "react-native";
import { useTheme } from "../styles/ChangeMode";
import styled from "styled-components/native";

const SwitchBox = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.bgColor};
`;

const SwitchText = styled.Text`
  font-weight: bold;
  margin-right: 5px;
  color: ${(props) => props.theme.fontColor};
`;

export default function DarkModeSwitch() {
  const { setMode, mode } = useTheme();
  const onValueChange = (value: boolean) => setMode(value ? "dark" : "light");

  return (
    <SwitchBox>
      <SwitchText>{mode === "light" ? "다크모드" : "라이트모드"}</SwitchText>
      <Switch
        onValueChange={onValueChange}
        value={mode === "dark"}
        trackColor={{ false: "white", true: "black" }}
        thumbColor={mode === "light" ? "black" : "white"}
      />
    </SwitchBox>
  );
}
