import React, { MutableRefObject } from "react";
import { Alert, TextInput } from "react-native";
import styled from "styled-components/native";
import { reverseModeColor } from "../Shared/SharedFunction";

interface TextInputProps {
  refName?: React.Ref<TextInput>;
  nextRef?: MutableRefObject<null>;
  placeholderText: string;
  isPassword?: boolean;
  isLast?: boolean;
  isEmail?: boolean;
}

const STextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.silverWhiteColor};
  border-radius: 4px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export default function Input({
  placeholderText,
  isPassword = false,
  isLast = false,
  isEmail = false,
  nextRef,
  refName,
}: TextInputProps) {
  const onNext = (value: any) => {
    value?.current?.focus();
  };

  const onDone = () => {
    Alert.alert("finish");
  };

  return (
    <STextInput
      ref={refName}
      placeholder={placeholderText}
      placeholderTextColor={reverseModeColor()}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={isPassword}
      returnKeyType={isLast ? "done" : "next"}
      keyboardType={isEmail ? "email-address" : undefined}
      onSubmitEditing={() => {
        if (!isLast) {
          return onNext(nextRef);
        } else {
          return onDone();
        }
      }}
    />
  );
}
