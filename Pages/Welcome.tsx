import React from "react";
import styled from "styled-components/native";
import AuthButton from "../Components/Auth/AuthButton";
import AuthLayOut from "../Components/Auth/AuthLayOut";
import SwitchBox from "../Components/SwitchBox";
import { AuthProps } from "../utils/AuthParamList";

const LoginBtn = styled.TouchableOpacity`
  margin-top: 20px;
`;

const LoginText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;

export default function Welcome({ navigation }: AuthProps<"Welcome">) {
  const goToLogin = () => navigation.navigate("Login");
  const goToCreateAccount = () => navigation.navigate("CreateAccount");

  return (
    <AuthLayOut>
      <SwitchBox />

      <AuthButton
        onPress={() => goToCreateAccount()}
        disabled={false}
        text="CreateAccount"
      />

      <LoginBtn onPress={() => goToLogin()}>
        <LoginText>Log in</LoginText>
      </LoginBtn>
    </AuthLayOut>
  );
}
