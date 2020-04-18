/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from '@reach/router';

const Category = ({ name = '' }) => {
  const { colors } = useTheme();

  return (
    <Link to={`/${name}`}>
      <div
        css={{
          background: colors.secondary,
          height: '6.25rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: colors.white,
          margin: '3.125rem 0',
          borderRadius: '0.625rem',
          transition: 'background .2s',
          ':hover': {
            background: colors.secondaryDarker,
          },
          '@media (max-width: 480px)': {
            margin: '0.625rem auto',
            height: '2.5rem',
            width: '80%',
            fontSize: '.8rem',
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
