/**@jsx jsx */
// eslint-disable-next-line

import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      css={{
        background: theme.colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        bottom: '0',
      }}
    >
      <p
        css={{
          color: '#fff',
        }}
      >
        Patryk Kilian 2020
      </p>
    </footer>
  );
};

export default Footer;
