/**@jsx jsx */
import { jsx } from '@emotion/core';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from '@reach/router';
import { useTheme } from 'emotion-theming';

const BackButton = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <button
      css={{
        position: 'absolute',
        top: '-20px',
        left: '20px',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#383838',
        fontWeight: 700,
        ':hover': {
          '& svg': {
            transform: 'scale(1.2)',
          },
        },
      }}
      onClick={() => navigate(-1)}
    >
      <FaArrowAltCircleLeft
        css={{
          color: theme.colors.secondaryDarker,
          transition: 'transform .3s',
        }}
      />
      &nbsp;back
    </button>
  );
};

export default BackButton;
