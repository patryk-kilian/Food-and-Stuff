/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { motion } from 'framer-motion';

const Notification = ({ notification, removeNotification }) => {
  const { message, id, type } = notification;

  const { colors } = useTheme();

  const notificationColors = {
    info: colors.primaryLight,
    success: colors.green,
  };

  return (
    <motion.div
      key={id}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      css={{
        position: 'relative',
        minHeight: '3.125rem',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.25rem',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0,0,0,.15)',
        overflow: 'hidden',
        marginTop: '6px',
        marginLeft: '1rem',
        marginRight: '1rem',
        maxWidth: '31.25rem',
        width: '100%',
        pointerEvents: 'auto',
        '@media (max-width: 480px)': {
          fontSize: '0.75rem',
        },
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
          width: '2.5rem',
          background: notificationColors[type],
          height: '100%',
          color: '#fff',
        }}
      >
        x
      </button>
    </motion.div>
  );
};

export default Notification;
