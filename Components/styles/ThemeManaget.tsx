import React from "react";
import { ChangeModeProps } from "../Shared/InterFace";
import { ManageThemeProvider } from "./ChangeMode";

const ThemeManager = ({ children }: ChangeModeProps) => (
  <ManageThemeProvider>{children}</ManageThemeProvider>
);

export default ThemeManager;
