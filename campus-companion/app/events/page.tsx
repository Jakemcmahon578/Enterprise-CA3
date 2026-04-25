"use client";

import { useState } from "react";
import { addNotification } from "@/lib/notifications";

const events = [
  {
    title: "Archery Club Taster Session",
    category: "Sports Society",
    date: "Monday 23 September 2026",
    time: "15:00 - 17:00",
    location: "Sports Hall",
    description:
      "Try beginner-friendly archery with trained student volunteers. No experience is needed and all fictional equipment is provided.",
    accessibility:
      "Step-free access, seated participation available, quiet waiting area nearby."
  },
  {
    title: "Freshers Welcome Evening",
    category: "Social",
    date: "Tuesday 24 September 2026",
    time: "18:00 - 20:00",
    location: "Student Union",
    description:
      "Meet other first-year students, play icebreaker games, and learn about college support services.",
    accessibility:
      "Low-noise space available, clear signage, wheelchair-accessible venue."
  },
  {
    title: "Coding Society Workshop",
    category: "Academic Society",
    date: "Wednesday 25 September 2026",
    time: "14:00 - 16:00",
    location: "Computer Lab 2",
    description:
      "A beginner coding workshop covering HTML, CSS, and basic JavaScript through simple student projects.",
    accessibility:
      "Adjustable chairs, screen reader-friendly resources, keyboard-only tasks available."
  },
  {
    title: "Football Five-a-Side Trials",
    category: "Sports Society",
    date: "Thursday 26 September 2026",
    time: "16:30 - 18:30",
    location: "Outdoor Pitch",
    description:
      "A casual football session for students who want to join college sport or just meet new people.",
    accessibility:
      "Spectator seating available, accessible changing facilities nearby."
  },
  {
    title: "Board Games Café",
    category: "Social",
    date: "Friday 27 September 2026",
    time: "12:00 - 14:00",
    location: "Canteen Lounge",
    description:
      "Relax with fictional board games, puzzles, and free demo snacks while meeting classmates.",
    accessibility:
      "Quiet tables available, large-print game cards on request."
  },
  {
    title: "Wellbeing Walk",
    category: "Wellbeing",
    date: "Monday 30 September 2026",
    time: "10:30 - 11:30",
    location: "Campus Garden",
    description:
      "A gentle guided walk around campus for students who want a calm start to the week.",
    accessibility:
      "Short route option, step-free path, rest points included."
  }
];

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