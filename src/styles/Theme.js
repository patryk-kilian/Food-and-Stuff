import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const colors = {
  primary: '#fff',
};

const theme = {
  colors,
  container: {
    base: '75rem',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
