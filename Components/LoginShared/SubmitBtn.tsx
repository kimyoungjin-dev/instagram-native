import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { SubmitBtnProps } from "../Shared/InterFace";

const Login = styled.TouchableOpacity<{ disabled: boolean }>`
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? "skyblue" : "blue")};
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

export default function SubmitBtn({
  disabled,
  loading,
  text,
  onPress,
}: SubmitBtnProps) {
  return (
    <Login disabled={disabled} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <LoginText>{text}</LoginText>
      )}
    </Login>
  );
}
