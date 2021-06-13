import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import Logo from "../LoginShared/Logo";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import Form from "../LoginShared/Form";
import SubmitBtn from "../LoginShared/SubmitBtn";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import TextInput from "../LoginShared/TextInput";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

const SignUpText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.bgColor};
`;

export default function SignUp() {
  return (
    <Container>
      <DarkModeSwitch />
      <Logo />
      <SignUpText>인스타그램 계정 만들기</SignUpText>
      <Form>
        <TextInput placeholderText="User Name" />
        <TextInput placeholderText="First Name" />
        <TextInput placeholderText="Last Name" />
        <TextInput placeholderText="Email" isEmail={true} />
        <TextInput placeholderText="Password" isPassword={true} isLast={true} />
        <SubmitBtn text="가입" />
      </Form>

      <MakeSignUpText
        link="Login"
        text="계정이 있으신가요?"
        colorText="로그인"
      />
    </Container>
  );
}
