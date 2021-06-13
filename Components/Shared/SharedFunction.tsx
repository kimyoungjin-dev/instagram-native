import { useRef } from "react";
import { useTheme } from "../styles/ChangeMode";

export const modeColor = () => {
  const { mode } = useTheme();
  return mode === "light" ? "black" : "white";
};

export const reverseModeColor = () => {
  const { mode } = useTheme();
  return mode === "light" ? "white" : "black";
};

export const onNext = (value: any) => {
  value?.current?.focus();
};
