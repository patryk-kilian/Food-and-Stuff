/**@jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Notification = ({ notification, removeNotification }) => {
  const { message, id, type } = notification;

  const { colors } = useTheme();

  const notificationColors = {
    info: colors.primaryLight,
    success: colors.green,
  };

  const fadeIn = keyframes({
    from: {
      opacity: '0',
    },
    to: {
      opacity: '1',
    },
  });

  return (
    <div
      css={{
        maxWidth: '500px',
        width: '100%',
        height: '50px',
        position: 'fixed',
        top: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '99',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0,0,0,.15)',
        overflow: 'hidden',
        animationName: fadeIn,
        animationDuration: '.3s',
      }}
    >
      <p
        css={{
          color: notificationColors[type],
          fontWeight: '700',
        }}
      >
        {message}
      </p>
      <button
        onClick={() => removeNotification(id)}
        css={{
          position: 'absolute',
          right: '0',
          width: '40px',
          background: notificationColors[type],
          height: '100%',
          color: '#fff',
        }}
      >
        x
      </button>
    </div>
  );
};

export default Notification;
