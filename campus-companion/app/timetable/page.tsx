"use client";

import { useState } from "react";
import { addNotification } from "@/lib/notifications";

const timetable = [
  {
    day: "Monday",
    lessons: [
      {
        time: "09:00 - 10:30",
        module: "Web Development",
        room: "Room B12",
        tutor: "Fictional Tutor A",
        notes: "Introduction to HTML, CSS, and accessible page structure."
      },
      {
        time: "13:00 - 14:30",
        module: "Study Skills",
        room: "Library Room 2",
        tutor: "Fictional Tutor B",
        notes: "Planning coursework, managing deadlines, and using the library."
      }
    ]
  },
  {
    day: "Tuesday",
    lessons: [
      {
        time: "10:00 - 11:30",
        module: "Database Systems",
        room: "Computer Lab 3",
        tutor: "Fictional Tutor C",
        notes: "Basic tables, records, and fictional student data examples."
      }
    ]
  },
  {
    day: "Wednesday",
    lessons: [
      {
        time: "14:00 - 15:30",
        module: "Software Design",
        room: "Room A04",
        tutor: "Fictional Tutor D",
        notes: "Planning app features using wireframes and user needs."
      }
    ]
  },
  {
    day: "Thursday",
    lessons: [
      {
        time: "09:30 - 11:00",
        module: "Programming Fundamentals",
        room: "Computer Lab 1",
        tutor: "Fictional Tutor E",
        notes: "TypeScript basics, variables, functions, and simple logic."
      }
    ]
  },
  {
    day: "Friday",
    lessons: [
      {
        time: "12:00 - 13:00",
        module: "Project Check-in",
        room: "Room C08",
        tutor: "Fictional Tutor F",
        notes: "Weekly progress review for the Campus Companion project."
      }
    ]
  }
];

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