import styled from "styled-components/native";

export const defaultBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const flexRow_AlignCenter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColorText = styled.Text`
  color: skyblue;
`;

export const FatText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
`;
