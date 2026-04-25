"use client";

import { useEffect, useState } from "react";
import {
  CampusNotification,
  getNotifications,
  saveNotifications
} from "../../lib/notifications";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<CampusNotification[]>([]);

  useEffect(() => {
    setNotifications(getNotifications());
  }, []);

  function markAsRead(id: string) {
    const updated = notifications.map((item) =>
      item.id === id ? { ...item, read: true } : item
    );

    setNotifications(updated);
    saveNotifications(updated);
  }

  function clearAll() {
    setNotifications([]);
    saveNotifications([]);
  }

  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Reminders</p>
        <h1>Notifications</h1>
        <p>
          Saved events, class reminders, canteen meals, and lost item updates
          appear here.
        </p>
      </section>

      <section className="card">
        <h2>Notification summary</h2>
        <p>
          You have <strong>{unreadCount}</strong> unread notification
          {unreadCount === 1 ? "" : "s"}.
        </p>

        <button type="button" className="button" onClick={clearAll}>
          Clear all notifications
        </button>
      </section>

      <section aria-labelledby="notification-list-heading">
        <h2 id="notification-list-heading">Your reminders</h2>

        {notifications.length === 0 && (
          <p role="status">You have no notifications yet.</p>
        )}

        <div className="eventGrid">
          {notifications.map((notification) => (
            <article
              className={`card ${notification.read ? "" : "unreadCard"}`}
              key={notification.id}
            >
              <p className="category">{notification.type}</p>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>

              <p>
                <strong>Status:</strong>{" "}
                {notification.read ? "Read" : "Unread"}
              </p>

              {!notification.read && (
                <button
                  type="button"
                  className="button"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as read
                </button>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}