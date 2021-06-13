import React from "react";
import Logo from "../LoginShared/Logo";
import SubmitBtn from "../LoginShared/SubmitBtn";
import Form from "../LoginShared/Form";
import Seperate from "../LoginShared/Seperate";
import FaceBookLogin from "../LoginShared/FaceBookLogin";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import KeyboardContainer from "../LoginShared/KeyboardContainer";
import { RouterName } from "../RouterName";
import { modeColor, onNext, passwordRef } from "../Shared/SharedFunction";
import { TextInput } from "react-native";

export default function Login() {
  return (
    <KeyboardContainer>
      <Logo />

      <Form>
        <TextInput
          placeholder="UserName"
          placeholderTextColor={modeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
        />
        <TextInput
          ref={passwordRef}
          secureTextEntry={true}
          returnKeyType="done"
        />
      </Form>
      <SubmitBtn text="로그인" />
      <Seperate />
      <FaceBookLogin />
      <MakeSignUpText
        link={RouterName.SignUp}
        text="계정이 없으신가요?"
        colorText="가입하기"
      />
    </KeyboardContainer>
  );
}
