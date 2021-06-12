import styled from "styled-components/native";
import { useTheme } from "../styles/ChangeMode";

export const defaultBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const modeColor = () => {
  const { mode } = useTheme();
  return mode === "light" ? "white" : "black";
};
