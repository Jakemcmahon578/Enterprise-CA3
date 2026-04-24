"use client";

import { useState } from "react";

const defaultNotifications = [
  {
    id: 1,
    title: "Web Development class",
    message: "You have Web Development in Room B12 at 09:00.",
    type: "Timetable",
    read: false
  },
  {
    id: 2,
    title: "Archery Club reminder",
    message: "Archery Club Taster Session starts tomorrow at 15:00.",
    type: "Event",
    read: false
  },
  {
    id: 3,
    title: "Canteen menu updated",
    message: "Friday menu includes fish fingers and vegetarian nuggets.",
    type: "Canteen",
    read: true
  }
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(defaultNotifications);

  function markAsRead(id: number) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }

  function clearAll() {
    setNotifications([]);
  }

  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Reminders</p>
        <h1>Notifications</h1>
        <p>
          View fictional reminders for classes, society events, canteen updates,
          and student support.
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

        {notifications.length === 0 && (
          <p role="status">You have no notifications right now.</p>
        )}
      </section>
    </main>
  );
}