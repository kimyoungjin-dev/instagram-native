import React from "react";
import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  disabled: boolean;
  text: string;
}

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.loginBtnColor};
  text-align: center;
  padding: 10px 9px;
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  width: 90%;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
`;

export default function AuthButton({ onPress, disabled, text }: Props) {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
