import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { SubmitBtnProps } from "../Shared/InterFace";
import { useNavigation } from "@react-navigation/native";

const Login = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: blue;
  padding: 10px 0px;
  width: 100%;
  margin-bottom: 30px;
`;

const LoginText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export default function SubmitBtn({ text, routerName }: SubmitBtnProps) {
  const navigation = useNavigation();
  return (
    <Login>
      <TouchableOpacity onPress={() => navigation.navigate(`${routerName}`)}>
        <LoginText>{text}</LoginText>
      </TouchableOpacity>
    </Login>
  );
}
