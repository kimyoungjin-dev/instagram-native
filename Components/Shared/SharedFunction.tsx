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

export const firstNameRef = useRef(null);
export const lastNameRef = useRef(null);
export const emailRef = useRef(null);
export const passwordRef = useRef(null);
