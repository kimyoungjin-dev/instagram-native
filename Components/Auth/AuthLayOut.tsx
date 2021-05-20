import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const LogoBox = styled.View`
  margin-bottom: 50px;
`;

const Logo = styled.Text`
  font-size: 50px;
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
`;

interface Props {
  children: React.ReactNode;
}
export default function AuthLayOut({ children }: Props) {
  return (
    <Container>
      <LogoBox>
        <Logo>Instagram</Logo>
      </LogoBox>
      {children}
    </Container>
  );
}
