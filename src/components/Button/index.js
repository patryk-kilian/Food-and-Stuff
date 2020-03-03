/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Button = ({ text, icon, iconSize, className }) => {
  const theme = useTheme();

  const { colors } = theme;

  const Icon = icon;

  return (
    <button
      className={className}
      css={{
        maxWidth: '200px',
        width: '100%',
        border: `2px solid ${colors.primaryDarker}`,
        textTransform: 'uppercase',
        color: colors.primaryDarker,
        padding: '8px',
        fontSize: '1rem',
        fontWeight: '900',
        zIndex: '3',
        transition: 'all .3s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        ':hover': {
          background: colors.primaryDarker,
          color: '#fff',
        },
      }}
    >
      {text}
      {icon ? (
        <Icon
          css={{
            fontSize: iconSize,
            marginLeft: '5px',
          }}
        />
      ) : null}
    </button>
  );
};

export default Button;
