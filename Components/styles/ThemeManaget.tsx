import React from "react";
import { ChildrenProps } from "../Shared/InterFace";
import { ManageThemeProvider } from "./ChangeMode";

const ThemeManager = ({ children }: ChildrenProps) => (
  <ManageThemeProvider>{children}</ManageThemeProvider>
);

export default ThemeManager;
