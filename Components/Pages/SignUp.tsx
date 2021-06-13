import React from "react";
import styled from "styled-components/native";
import { defaultBox } from "../Shared/SharedStyles";
import Logo from "../LoginShared/Logo";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import { TextInput } from "../LoginShared/TextInput";
import Form from "../LoginShared/Form";
import SubmitBtn from "../LoginShared/SubmitBtn";
import { modeColor } from "../Shared/SharedFunction";
import MakeSignUpText from "../LoginShared/MakeSignUpText";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

const SignUpText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
`;

export default function SignUp() {
  return (
    <Container>
      <DarkModeSwitch />
      <Logo />
      <SignUpText>인스타그램 계정 만들기</SignUpText>
      <Form>
        <TextInput
          placeholder="User Name"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="First Name"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

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
