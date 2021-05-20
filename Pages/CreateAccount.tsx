import { useTheme } from "../styles/ChangeMode";
import React, { useRef } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import SwitchBox from "../Components/SwitchBox";

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.bgColor};
  width: 90%;
  text-align: center;
  margin-bottom: 10px;
  height: 40px;
  border-radius: 7px;
`;

export default function CreateAccount() {
  const theme = useTheme();

  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (nextOne: React.MutableRefObject<any>) => {
    nextOne?.current?.focus();
  };

  const LastInput = () => {
    Alert.alert("done!");
  };

  return (
    <AuthLayOut>
      <SwitchBox />
      <Input
        placeholder="First Name"
        returnKeyType="next"
        placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
        onSubmitEditing={() => onNext(lastNameRef)}
      />

      <Input
        ref={lastNameRef}
        placeholder="Last Name"
        returnKeyType="next"
        placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
        onSubmitEditing={() => onNext(usernameRef)}
      />

      <Input
        ref={usernameRef}
        placeholder="User Name"
        returnKeyType="next"
        placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
        onSubmitEditing={() => onNext(emailRef)}
      />

      <Input
        ref={passwordRef}
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry={true}
        placeholderTextColor={theme.mode === "dark" ? "black" : "white"}
        onSubmitEditing={LastInput}
      />
      <AuthButton onPress={() => null} disabled={true} text="CreateAccount" />
    </AuthLayOut>
  );
}
