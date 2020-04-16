import React, { useState } from 'react';
import notificationsContext from './notificationsContext';

const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = (id) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications.filter(
        (notification) => id !== notification.id
      );

      return updatedNotifications;
    });
  };

  const triggerNotification = (notification) => {
    setNotifications([...notifications, notification]);

    setTimeout(() => {
      removeNotification(notification.id);
    }, 3000);
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
