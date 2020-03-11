/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Container = ({ children }) => {
  const { container } = useTheme();

  return (
    <div
      css={{
        maxWidth: container.base,
        margin: '0 auto',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
