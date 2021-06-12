import React from "react";
import styled from "styled-components/native";
import Logo from "../LoginShared/Logo";
import { defaultBox } from "../Shared/SharedStyles";
import SubmitBtn from "../LoginShared/SubmitBtn";
import { FontAwesome } from "@expo/vector-icons";
import MakeSignUpText from "../LoginShared/MakeSignUpText";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import { modeColor } from "../Shared/SharedFunction";

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

const Form = styled.View`
  width: 100%;
`;

const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.inputColor};
  border-radius: 4px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const Seperate = styled.View`
  width: 100%;
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Line = styled.View`
  background-color: ${(props) => props.theme.borderColor};
  height: 1px;
  width: 43%;
`;

const Or = styled.Text`
  color: ${(props) => props.theme.bgColor};
  margin: 0px 15px;
`;

const FaceBookLogin = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

const FaceBookLoginText = styled.Text`
  color: ${(props) => props.theme.faceBookLoginTextColor};
  margin-left: 10px;
  font-size: 17px;
`;

export default function Login() {
  return (
    <Container>
      <DarkModeSwitch />
      <Logo />

      <Form>
        <TextInput placeholder="userName" placeholderTextColor={modeColor()} />
        <TextInput placeholder="Password" placeholderTextColor={modeColor()} />
      </Form>

      <SubmitBtn text="로그인" />

      <Seperate>
        <Line></Line>
        <Or>또는</Or>
        <Line></Line>
      </Seperate>

      <FaceBookLogin>
        <FontAwesome name="facebook-square" color="blue" size={20} />
        <FaceBookLoginText>FaceBook으로 로그인</FaceBookLoginText>
      </FaceBookLogin>

      <MakeSignUpText
        link="SignUp"
        text="계정이 없으신가요?"
        colorText="가입하기"
      />
    </Container>
  );
}
