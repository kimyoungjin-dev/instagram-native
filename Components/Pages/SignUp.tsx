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
    register("username", {
      required: true,
    });
    register("firstName", {
      required: true,
    });
    register("lastName");
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
          onChangeText={(value) => setValue("username", value)}
        />

        <TextInput
          ref={firstNameRef}
          placeholder="First Name"
          placeholderTextColor={reverseModeColor()}
          onSubmitEditing={() => onNext(lastNameRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onChangeText={(value) => setValue("firstName", value)}
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
          onChangeText={(value) => setValue("lastName", value)}
        />

        <TextInput
          ref={emailRef}
          placeholder="Email"
          placeholderTextColor={reverseModeColor()}
          onSubmitEditing={() => onNext(passwordRef)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onChangeText={(value) => setValue("email", value)}
        />

        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor={reverseModeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
          onChangeText={(value) => setValue("passwords", value)}
          onSubmitEditing={() => handleSubmit(onSubmit)}
        />

        <SubmitBtn text="회원가입" onPress={handleSubmit(onSubmit)} />
      </Form>

      <MakeSignUpText
        link={RouterName.Login}
        text="계정이 있으신가요?"
        colorText="로그인"
      />
    </KeyboardContainer>
  );
}
