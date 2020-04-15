/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import NotificationContext from '../../context/NotificationsProvider/notificationsContext';
import Notification from './Notification';

const Notifications = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div>
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
