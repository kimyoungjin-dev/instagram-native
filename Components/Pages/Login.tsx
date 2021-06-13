import React from "react";
import styled from "styled-components/native";
import Logo from "../LoginShared/Logo";
import { defaultBox } from "../Shared/SharedStyles";
import SubmitBtn from "../LoginShared/SubmitBtn";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import Form from "../LoginShared/Form";
import Seperate from "../LoginShared/Seperate";
import FaceBookLogin from "../LoginShared/FaceBookLogin";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import TextInput from "../LoginShared/TextInput";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

export default function Login() {
  return (
    <Container>
      <DarkModeSwitch />

      <Logo />

      <Form>
        <TextInput placeholderText="userName" />
        <TextInput placeholderText="Password" isPassword={true} />
      </Form>

      <SubmitBtn text="로그인" />

      <Seperate />

      <FaceBookLogin />

      <MakeSignUpText
        link="SignUp"
        text="계정이 없으신가요?"
        colorText="가입하기"
      />
    </Container>
  );
}
