/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const Header = () => {
  const theme = useTheme();

  return (
    <div
      css={{
        backgroundColor: theme.colors.primary
      }}
    >
      <h1>header</h1>
    </div>
  );
};

export default Header;
