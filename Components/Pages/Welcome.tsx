import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../RootStack";
import styled from "styled-components/native";
import { defaultBox, modeColor } from "../Shared/SharedStyles";
import { TouchableOpacity } from "react-native";
import DarkModeSwitch from "../Shared/DarkModeSwitch";
import { useTheme } from "../styles/ChangeMode";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Container = styled(defaultBox)`
  background-color: ${(props) => props.theme.fontColor};
  padding: 0px 20px;
`;

const DarkModeBox = styled.View`
  position: absolute;
  top: 100px;
  right: 30px;
`;

const Logo = styled.Image`
  width: 100%;
  height: 120px;
`;

const Login = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: blue;
  padding: 10px 0px;
  width: 100%;
  margin-bottom: 30px;
`;

const LoginText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SignUp = styled.View`
  flex-direction: row;
`;

const SignUpText = styled.Text`
  color: ${(props) => props.theme.bgColor};
  margin-left: 8px;
  font-size: 16px;
`;

const FirstVisit = styled.Text`
  color: ${(props) => props.theme.bgColor};
`;

export default function Welcome({ navigation }: Props) {
  return (
    <Container>
      <DarkModeBox>
        <DarkModeSwitch />
      </DarkModeBox>

      <Logo
        resizeMode="center"
        source={require("../../assets/instagram_logo.png")}
        style={{ tintColor: modeColor() }}
      />

      <Login>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LoginText>로그인</LoginText>
        </TouchableOpacity>
      </Login>

      <SignUp>
        <FirstVisit>instagram에 처음 오셨나요?</FirstVisit>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <SignUpText>가입하기</SignUpText>
        </TouchableOpacity>
      </SignUp>
    </Container>
  );
}
