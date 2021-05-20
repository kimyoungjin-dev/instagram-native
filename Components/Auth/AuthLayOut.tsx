import React from "react";
import { Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../styles/ChangeMode";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const LogoBox = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 100px;
`;

interface Props {
  children: React.ReactNode;
}

export default function AuthLayOut({ children }: Props) {
  const theme = useTheme();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} style={{ flex: 1 }}>
      <Container>
        <LogoBox>
          <Logo
            style={{ tintColor: theme.mode === "dark" ? "white" : "black" }}
            source={require("../../assets/instagram_logo.png")}
            resizeMode="contain"
          />
        </LogoBox>
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
}
