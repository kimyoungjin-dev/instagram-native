import React, {
  createContext,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import { StatusBar } from "react-native";
import { Appearance } from "react-native-appearance";
import { ThemeProvider } from "styled-components/native";
import { dark, light } from "./styles";
import { defaultMode } from "./DefaultMode";

interface IProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode: SetStateAction<"light" | "dark" | "no-preference">) =>
    console.log(mode),
});

export const useTheme = () => React.useContext(ThemeContext);

const ManageThemeProvider = ({ children }: IProps) => {
  const [themeState, setThemeState] = useState(defaultMode);
  const setMode = (
    mode: SetStateAction<"light" | "dark" | "no-preference">
  ) => {
    setThemeState(mode);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      <ThemeProvider theme={themeState === "dark" ? dark : light}>
        <>
          <StatusBar
            barStyle={themeState === "dark" ? "light-content" : "dark-content"}
          />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({ children }: IProps) => (
  <ManageThemeProvider>{children}</ManageThemeProvider>
);

export default ThemeManager;
