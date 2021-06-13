import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { SubmitBtnProps } from "../Shared/InterFace";

const Login = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: blue;
  padding: 10px 0px;
  width: 100%;
  margin-bottom: 30px;
`;

const LoginText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export default function SubmitBtn({ text, onPress }: SubmitBtnProps) {
  return (
    <Login>
      <TouchableOpacity onPress={onPress}>
        <LoginText>{text}</LoginText>
      </TouchableOpacity>
    </Login>
  );
}
