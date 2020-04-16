/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import NotificationContext from '../../context/NotificationsProvider/notificationsContext';
import Notification from './Notification';

const Notifications = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div
      css={{
        position: 'fixed',
        top: '25px',
        transform: 'translateX(-50%)',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        zIndex: '99',
        maxWidth: '500px',
        width: '100%',
        height: '115px',
        overflow: 'hidden',
      }}
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          removeNotification={removeNotification}
        />
      ))}
    </div>
  );
};

export default Notifications;
