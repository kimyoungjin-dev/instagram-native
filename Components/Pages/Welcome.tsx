import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import SubmitBtn from "../LoginShared/SubmitBtn";
import Logo from "../LoginShared/Logo";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import { WelcomeNavProps } from "../../Navigation/NavigationProps";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

export default function Welcome({ navigation }: WelcomeNavProps) {
  return (
    <Container>
      <DarkModeSwitch />
      <Logo />
      <SubmitBtn text="로그인" onPress={() => navigation.navigate("Login")} />
      <MakeSignUpText
        text="instagram에 처음오셨나요?"
        colorText="가입하기"
        link="SignUp"
      />
    </Container>
  );
}
