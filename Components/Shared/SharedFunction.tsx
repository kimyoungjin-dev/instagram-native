import { useTheme } from "../styles/ChangeMode";

export const modeColor = () => {
  const { mode } = useTheme();
  return mode === "light" ? "white" : "black";
};
