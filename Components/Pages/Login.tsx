import React from "react";
import styled from "styled-components/native";
import Logo from "../LoginShared/Logo";
import { defaultBox } from "../Shared/SharedStyles";
import SubmitBtn from "../LoginShared/SubmitBtn";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import { modeColor } from "../Shared/SharedFunction";
import Form from "../LoginShared/Form";
import { TextInput } from "../LoginShared/TextInput";
import Seperate from "../LoginShared/Seperate";
import FaceBookLogin from "../LoginShared/FaceBookLogin";
import MakeSignUpText from "../LoginShared/MakeSignUpText";

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
        <TextInput
          placeholder="userName"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={modeColor()}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
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
