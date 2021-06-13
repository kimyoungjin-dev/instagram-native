import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import { ChildrenProps } from "../Shared/InterFace";

const Container = styled.View`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
  align-items: center;
`;

export default function KeyboardContainer({ children }: ChildrenProps) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      <Container>
        <DarkModeSwitch />
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0}>
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
