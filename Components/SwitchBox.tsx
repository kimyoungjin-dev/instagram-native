import React from "react";
import styled from "styled-components/native";
import { Switch } from "react-native";
import { useTheme } from "../styles/ChangeMode";

const SSwitchBox = styled.View`
  position: absolute;
  top: 50px;
  right: 0px;
`;

const SwitchText = styled.Text`
  color: ${(props) => props.theme.fontColor};
`;

export default function SwitchBox() {
  const theme = useTheme();

  return (
    <SSwitchBox>
      <SwitchText>
        {theme.mode === "dark" ? "화이트모드" : "다크모드"}
      </SwitchText>
      <Switch
        trackColor={{ false: "#767577", true: "white" }}
        thumbColor={"gray"}
        ios_backgroundColor="#3e3e3e"
        value={theme.mode === "dark"}
        onValueChange={(value) => theme.setMode(value ? "dark" : "light")}
      />
    </SSwitchBox>
  );
}
