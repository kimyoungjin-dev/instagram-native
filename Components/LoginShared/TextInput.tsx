import React from "react";
import styled from "styled-components/native";
import { modeColor } from "../Shared/SharedFunction";

interface TextInputProps {
  placeholderText: string;
  isPassword?: boolean;
}

const STextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.inputColor};
  border-radius: 4px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export default function TextInput({
  placeholderText,
  isPassword,
}: TextInputProps) {
  return (
    <STextInput
      placeholder={placeholderText}
      placeholderTextColor={modeColor()}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={isPassword}
    />
  );
}
