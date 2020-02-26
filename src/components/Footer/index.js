/**@jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const Footer = () => {
  const theme = useTheme();

  return (
    <div
      css={{
        background: theme.colors.secondary
      }}
    >
      <h1>footer</h1>
    </div>
  );
};

export default Footer;
