import styled from "styled-components/native";

export const Input = styled.TextInput<{ lastOne?: boolean }>`
  background-color: ${(props) => props.theme.fontColor};
  color: gray;
  width: 90%;
  margin-bottom: ${(props) => (props.lastOne ? "15px" : "8px")};
  height: 45px;
  border-radius: 5px;
  padding: 13px 10px;
`;
