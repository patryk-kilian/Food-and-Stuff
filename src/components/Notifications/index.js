/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

import Notification from './Notification';
import NotificationContext from '../../context/NotificationsProvider/notificationsContext';

const Notifications = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div
      css={{
        position: 'fixed',
        top: '1.625rem',
        transform: 'translateX(-50%)',
        zIndex: '99',
        pointerEvents: 'none',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '50rem',
        height: '7.25rem',
        overflowY: 'hidden',
        '@media (max-width: 500px)': {
          padding: '0 0.625rem',
        },
      }}
    >
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            removeNotification={removeNotification}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
