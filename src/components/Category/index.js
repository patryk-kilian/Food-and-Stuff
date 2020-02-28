/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from '@reach/router';

const Category = ({ name }) => {
  const theme = useTheme();

  const { colors } = theme;

  return (
    <Link to={`/${name}`}>
      <div
        css={{
          background: colors.secondary,
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: colors.white,
          margin: '50px 0',
          borderRadius: '10px',
          transition: 'background .2s',
          ':hover': {
            background: colors.secondaryDarker,
          },
        }}
      >
        <h2
          css={{
            textTransform: 'uppercase',
          }}
        >
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default Category;
