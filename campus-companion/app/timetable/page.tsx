"use client";

import { useState } from "react";
import { timetable } from "../../data/timetable";
import { addNotification } from "../../lib/notifications";

type Lesson = (typeof timetable)[number]["days"][number]["lessons"][number];

export default function TimetablePage() {
  const [selectedCourse, setSelectedCourse] = useState(timetable[0].course);
  const [savedMessage, setSavedMessage] = useState("");

  const selectedTimetable =
    timetable.find((timetable) => timetable.course === selectedCourse) ??
    timetable[0];

  function saveLesson(day: string, lesson: Lesson) {
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
          Choose a fictional course to view a Monday to Friday timetable with
          multiple classes per day.
        </p>
      </section>

      <section className="card timetableToolbar">
        <h2>Choose your course</h2>

        <label htmlFor="course-select">Course or subject</label>
        <select
          id="course-select"
          value={selectedCourse}
          onChange={(event) => {
            setSelectedCourse(event.target.value);
            setSavedMessage("");
          }}
        >
          {timetable.map((timetable) => (
            <option key={timetable.course} value={timetable.course}>
              {timetable.course}
            </option>
          ))}
        </select>
      </section>

      {savedMessage && (
        <p className="successMessage" role="status">
          {savedMessage}
        </p>
      )}

      <section aria-labelledby="weekly-timetable-heading">
        <h2 id="weekly-timetable-heading">
          {selectedTimetable.course} timetable
        </h2>

        <div className="timetableGrid">
          {selectedTimetable.days.map((day) => (
            <article className="dayCard" key={day.day}>
              <h3>{day.day}</h3>

              <div className="lessonList">
                {day.lessons.map((lesson) => (
                  <div
                    className="lessonItem"
                    key={`${day.day}-${lesson.time}-${lesson.module}`}
                  >
                    <div className="lessonTime">{lesson.time}</div>

                    <div className="lessonContent">
                      <h4>{lesson.module}</h4>

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
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}