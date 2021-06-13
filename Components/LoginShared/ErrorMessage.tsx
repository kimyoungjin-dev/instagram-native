import React from "react";
import { ErrorMessageProps } from "../Shared/InterFace";
import styled from "styled-components/native";

const Text = styled.Text<ErrorMessageProps>`
  color: red;
  font-size: 12px;
  margin-top: ${(props) => (props.errorMargin ? "-20px" : "-10px")};
  margin-bottom: 10px;
`;

export default function ErrorMessage({
  text,
  errorMargin = false,
}: ErrorMessageProps) {
  return !text || text === "" ? null : (
    <Text errorMargin={errorMargin}>{text}</Text>
  );
}
