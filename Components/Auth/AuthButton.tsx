import React from "react";
import { ActivityIndicator, GestureResponderEvent } from "react-native";
import styled from "styled-components/native";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  disabled: boolean;
  text: string;
  loading?: boolean;
}

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.loginBtnColor};
  text-align: center;
  padding: 15px 9px;
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

export default function AuthButton({
  onPress,
  disabled,
  text,
  loading,
}: Props) {
  return (
    <Button onPress={onPress} disabled={disabled}>
      {loading ? <ActivityIndicator /> : <ButtonText>{text}</ButtonText>}
    </Button>
  );
}
