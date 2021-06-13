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
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT_MUTATION } from "../Fragment";
import {
  createAccount,
  createAccountVariables,
} from "../../__generated__/createAccount";
import { CreateAccountProps } from "../Shared/InterFace";
import ErrorMessage from "../LoginShared/ErrorMessage";

const SignUpText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.bgColor};
`;

export default function SignUp() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isValid },
    setError,
    watch,
  } = useForm<CreateAccountProps>({ mode: "onChange" });

  const [createAccount_Mutation, { loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATE_ACCOUNT_MUTATION, {
    onCompleted: (data) => {
      const {
        createAccount: { ok, error },
      } = data;
      if (!ok) {
        setError("result", {
          message: error || undefined,
        });
      }
    },
  });

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    register("username", {
      required: "Username is Required",
    });

    register("firstName", {
      required: "FirstName is Required",
    });

    register("lastName");

    register("email", {
      required: "Email is Required",
    });

    register("password", {
      required: "Password is Required",
    });
  }, [register]);

  const onSubmit = (data: any) => {
    createAccount_Mutation({
      variables: {
        ...data,
      },
    });
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
        <ErrorMessage text={errors.username?.message} />

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
        <ErrorMessage text={errors.firstName?.message} />

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
        <ErrorMessage text={errors.lastName?.message} />

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
        <ErrorMessage text={errors.email?.message} />

        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor={reverseModeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
          onChangeText={(value) => setValue("password", value)}
          onSubmitEditing={() => handleSubmit(onSubmit)}
        />
        <ErrorMessage text={errors.password?.message} />

        <SubmitBtn
          text="회원가입"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          disabled={
            !watch("username") ||
            !watch("firstName") ||
            !watch("email") ||
            !watch("password") ||
            loading
          }
        />
        <ErrorMessage text={errors.result?.message} />
      </Form>

      <MakeSignUpText
        link={RouterName.Login}
        text="계정이 있으신가요?"
        colorText="로그인"
      />
    </KeyboardContainer>
  );
}
