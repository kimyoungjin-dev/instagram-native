import React, { useEffect } from "react";
import styled from "styled-components/native";
import Logo from "../LoginShared/Logo";
import Form from "../LoginShared/Form";
import SubmitBtn from "../LoginShared/SubmitBtn";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import KeyboardContainer from "../LoginShared/KeyboardContainer";
import { RouterName } from "../RouterName";
import {
  emailRef,
  firstNameRef,
  lastNameRef,
  modeColor,
  onNext,
  passwordRef,
} from "../Shared/SharedFunction";
import { useForm } from "react-hook-form";
import { TextInput } from "../LoginShared/Input";

const SignUpText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.bgColor};
`;

export default function SignUp() {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    register("username");
    register("firstName");
    register("lastName");
    register("email");
    register("password");
  }, [register]);

  return (
    <KeyboardContainer>
      <Logo />
      <SignUpText>인스타그램 계정 만들기</SignUpText>

      <Form>
        <TextInput
          placeholder="User Name"
          placeholderTextColor={modeColor()}
          onSubmitEditing={() => onNext(firstNameRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={firstNameRef}
          placeholder="First Name"
          placeholderTextColor={modeColor()}
          onSubmitEditing={() => onNext(lastNameRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor={modeColor()}
          onSubmitEditing={() => onNext(emailRef)}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={emailRef}
          placeholder="Email"
          placeholderTextColor={modeColor()}
          onSubmitEditing={() => onNext(passwordRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
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
