import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const colors = {
  primary: '#2d4059',
  primaryLight: '#446086',
  primaryDarker: '#223042',
  secondary: '#f07b3f',
  secondaryDarker: '#ee651f',
  white: '#fff',
  green: '#83d13a',
  red: '#ff454f',
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
