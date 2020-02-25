import React from "react";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    primary: "orangered",
    secondary: "blue"
  }
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
