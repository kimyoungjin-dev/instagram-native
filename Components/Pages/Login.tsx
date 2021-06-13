import React, { useRef } from "react";
import Logo from "../LoginShared/Logo";
import SubmitBtn from "../LoginShared/SubmitBtn";
import Form from "../LoginShared/Form";
import Seperate from "../LoginShared/Seperate";
import FaceBookLogin from "../LoginShared/FaceBookLogin";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import KeyboardContainer from "../LoginShared/KeyboardContainer";
import { RouterName } from "../RouterName";
import { modeColor, onNext, reverseModeColor } from "../Shared/SharedFunction";
import { TextInput } from "../LoginShared/TextInput";

export default function Login() {
  const passwordRef = useRef(null);

  return (
    <KeyboardContainer>
      <Logo />

      <Form>
        <TextInput
          placeholder="UserName"
          placeholderTextColor={reverseModeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={reverseModeColor()}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
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
