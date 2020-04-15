import React, { useState } from 'react';
import notificationsContext from './notificationsContext';

const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => id !== notification.id
    );

    setNotifications([...updatedNotifications]);
  };

  const triggerNotification = (notification) => {
    setNotifications([...notifications, notification]);

    // removeNotification(notification.id);
  };

  return (
    <notificationsContext.Provider
      value={{ notifications, triggerNotification, removeNotification }}
    >
      {children}
    </notificationsContext.Provider>
  );
};

export default NotificationsProvider;
