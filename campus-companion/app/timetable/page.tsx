"use client";

import { useState } from "react";
import { timetable } from "../../data/timetable";
import { addNotification } from "../../lib/notifications";

export default function TimetablePage() {
  const [savedMessage, setSavedMessage] = useState("");

  function saveLesson(day: string, lesson: (typeof timetable)[number]["lessons"][number]) {
    addNotification({
      title: `Class reminder: ${lesson.module}`,
      message: `${lesson.module} is on ${day} at ${lesson.time} in ${lesson.room}.`,
      type: "Timetable"
    });

    setSavedMessage(`${lesson.module} was added to Notifications.`);
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Student Timetable</p>
        <h1>Weekly timetable</h1>
        <p>
          View a fictional first-year student timetable to help organise classes,
          study sessions, and project work.
        </p>
      </section>

      <section className="card">
        <h2>How this helps students</h2>
        <p>
          A clear timetable helps students manage their week, avoid missed
          lessons, and plan independent study time around lectures and workshops.
        </p>
      </section>

      {savedMessage && (
        <p className="successMessage" role="status">
          {savedMessage}
        </p>
      )}

      <section aria-labelledby="weekly-timetable-heading">
        <h2 id="weekly-timetable-heading">This week</h2>

        <div className="eventGrid">
          {timetable.map((day) => (
            <article className="card" key={day.day}>
              <h3>{day.day}</h3>

              {day.lessons.map((lesson) => (
                <div key={`${day.day}-${lesson.time}`}>
                  <p>
                    <strong>Time:</strong> {lesson.time}
                  </p>

                  <p>
                    <strong>Module:</strong> {lesson.module}
                  </p>

                  <p>
                    <strong>Room:</strong> {lesson.room}
                  </p>

                  <p>
                    <strong>Tutor:</strong> {lesson.tutor}
                  </p>

                  <p>{lesson.notes}</p>

                  <button
                    type="button"
                    className="button"
                    onClick={() => saveLesson(day.day, lesson)}
                  >
                    Add class reminder
                  </button>

                  <hr />
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}