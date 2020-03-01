/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Container = ({ children }) => {
  const theme = useTheme();

  const { container } = theme;
  return (
    <div
      css={{
        maxWidth: container.base,
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
