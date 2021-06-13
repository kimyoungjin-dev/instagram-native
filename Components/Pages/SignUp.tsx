import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import Logo from "../LoginShared/Logo";
import Form from "../LoginShared/Form";
import SubmitBtn from "../LoginShared/SubmitBtn";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import KeyboardContainer from "../LoginShared/KeyboardContainer";
import { RouterName } from "../RouterName";
import { useForm } from "react-hook-form";
import { reverseModeColor, onNext } from "../Shared/SharedFunction";
import { TextInput } from "../LoginShared/TextInput";

const SignUpText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.bgColor};
`;

export default function SignUp() {
  const { handleSubmit, register, setValue } = useForm();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
          placeholderTextColor={reverseModeColor()}
          onSubmitEditing={() => onNext(firstNameRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={firstNameRef}
          placeholder="First Name"
          placeholderTextColor={reverseModeColor()}
          onSubmitEditing={() => onNext(lastNameRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor={reverseModeColor()}
          onSubmitEditing={() => onNext(emailRef)}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={emailRef}
          placeholder="Email"
          placeholderTextColor={reverseModeColor()}
          onSubmitEditing={() => onNext(passwordRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor={reverseModeColor()}
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
