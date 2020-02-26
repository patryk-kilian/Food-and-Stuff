import React from "react";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    primary: "#fff",
    secondary: "#fff"
  }
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
