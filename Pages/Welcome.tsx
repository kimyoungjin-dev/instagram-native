import React from "react";
import styled from "styled-components/native";
import SwitchBox from "../Components/SwitchBox";
import { AuthProps } from "../utils/AuthParamList";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const LogoBox = styled.View`
  margin-bottom: 50px;
`;

const Logo = styled.Text`
  font-size: 50px;
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.loginBtnColor};
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  padding: 10px 9px;
  border-radius: 5px;
  width: 90%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
`;

const LoginBtn = styled.TouchableOpacity`
  margin-top: 20px;
`;

const LoginText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;

export default function Welcome({ navigation }: AuthProps<"Welcome">) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <Container>
      <SwitchBox />
      <LogoBox>
        <Logo>Instagram</Logo>
      </LogoBox>

      <CreateAccount onPress={() => goToCreateAccount()} disabled={false}>
        <CreateAccountText>CreateAccount</CreateAccountText>
      </CreateAccount>

      <LoginBtn onPress={() => goToLogin()}>
        <LoginText>Log in</LoginText>
      </LoginBtn>
    </Container>
  );
}
