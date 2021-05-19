import React from "react";
import styled from "styled-components/native";
import SwitchBox from "../Components/SwitchBox";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Logo = styled.Text`
  font-size: 50px;
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
`;

const CreateAccount = styled.View`
  background-color: ${(props) => props.theme.loginBtnColor};
`;

const CreateAccountText = styled.Text`
  color: ${(props) => props.theme.fontColor};
`;

export default function Welcome() {
  return (
    <Container>
      <SwitchBox />
      <Logo>Instagram</Logo>
      <CreateAccount>
        <CreateAccountText>CreateAccount</CreateAccountText>
      </CreateAccount>
    </Container>
  );
}
