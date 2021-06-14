import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.inputBgColor};
  border-radius: 4px;
  margin-bottom: 10px;
  padding-left: 10px;
  color: ${(props) => props.theme.fontColor};
`;
