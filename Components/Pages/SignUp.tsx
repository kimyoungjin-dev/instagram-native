import React, { useRef } from "react";
import styled from "styled-components/native";
import Logo from "../LoginShared/Logo";
import Form from "../LoginShared/Form";
import SubmitBtn from "../LoginShared/SubmitBtn";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import Input from "../LoginShared/Input";
import KeyboardContainer from "../LoginShared/KeyboardContainer";
import { RouterName } from "../RouterName";
import {
  emailRef,
  firstNameRef,
  lastNameRef,
  passwordRef,
} from "../Shared/SharedFunction";

const SignUpText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.bgColor};
`;

export default function SignUp() {
  return (
    <KeyboardContainer>
      <Logo />

      <SignUpText>인스타그램 계정 만들기</SignUpText>

      <Form>
        <Input placeholderText="User Name" nextRef={firstNameRef} />
        <Input
          placeholderText="First Name"
          refName={firstNameRef}
          nextRef={lastNameRef}
        />
        <Input
          placeholderText="Last Name"
          refName={lastNameRef}
          nextRef={emailRef}
        />
        <Input
          placeholderText="Email"
          isEmail={true}
          refName={emailRef}
          nextRef={passwordRef}
        />
        <Input
          placeholderText="Password"
          isPassword={true}
          isLast={true}
          refName={passwordRef}
        />
        <SubmitBtn text="가입" />
      </Form>

      <MakeSignUpText
        link={RouterName.Login}
        text="계정이 있으신가요?"
        colorText="로그인"
      />
    </KeyboardContainer>
  );
}
