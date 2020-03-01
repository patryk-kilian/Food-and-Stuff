/**@jsx jsx */
import { jsx } from '@emotion/core';

export const PageHeading = ({ text }) => (
  <h2
    css={{
      textAlign: 'center',
      fontSize: '3rem',
    }}
  >
    {text}
  </h2>
);
