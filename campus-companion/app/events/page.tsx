"use client";

import { useState } from "react";
import { events } from "../../data/events";
import { addNotification } from "../../lib/notifications";

export default function EventsPage() {
  const [savedMessage, setSavedMessage] = useState("");

  function saveEvent(title: string, date: string, time: string) {
    addNotification({
      title: `Saved event: ${title}`,
      message: `${title} has been saved as a reminder for ${date} at ${time}.`,
      type: "Event"
    });

    setSavedMessage(`${title} was added to Notifications.`);
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">College Events</p>
        <h1>Events and societies</h1>
        <p>
          Discover fictional college events designed to help first-year students
          make friends, try new activities, join societies, and feel part of
          campus life.
        </p>
      </section>

      <section className="card">
        <h2>Why attend events?</h2>
        <p>
          College events help students build confidence, meet new people, learn
          skills, and take breaks from academic work.
        </p>
      </section>

      {savedMessage && (
        <p className="successMessage" role="status">
          {savedMessage}
        </p>
      )}

      <section aria-labelledby="events-list-heading">
        <h2 id="events-list-heading">Upcoming college events</h2>

        <div className="eventGrid">
          {events.map((event) => (
            <article className="card" key={event.title}>
              <p className="category">{event.category}</p>
              <h3>{event.title}</h3>

              <p>
                <strong>Date:</strong> {event.date}
              </p>

              <p>
                <strong>Time:</strong> {event.time}
              </p>

              <p>
                <strong>Location:</strong> {event.location}
              </p>

              <p>{event.description}</p>

              <p className="accessibilityNote">
                <strong>Accessibility:</strong> {event.accessibility}
              </p>

              <button
                type="button"
                className="button"
                onClick={() => saveEvent(event.title, event.date, event.time)}
              >
                Save event reminder
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}