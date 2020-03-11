/**@jsx jsx */
// eslint-disable-next-line

import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Footer = () => {
  const { colors } = useTheme();

  return (
    <footer
      css={{
        background: colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <p
        css={{
          color: '#fff',
        }}
      >
        @Patryk Kilian 2020
      </p>
    </footer>
  );
};

export default Footer;
