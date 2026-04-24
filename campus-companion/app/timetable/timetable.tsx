const timetable = [
  {
    day: "Monday",
    time: "09:00 - 10:30",
    module: "Web Development",
    room: "Room B12"
  },
  {
    day: "Tuesday",
    time: "11:00 - 12:30",
    module: "Database Systems",
    room: "Computer Lab 3"
  },
  {
    day: "Wednesday",
    time: "14:00 - 15:30",
    module: "Software Design",
    room: "Room A04"
  }
];

export default function TimetablePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Companion</p>
        <h1>Student timetable</h1>
        <p>A fictional weekly timetable for a first-year student.</p>
      </section>

      <section className="eventGrid" aria-label="Weekly timetable">
        {timetable.map((lesson) => (
          <article className="card" key={`${lesson.day}-${lesson.time}`}>
            <h2>{lesson.day}</h2>
            <p>
              <strong>Time:</strong> {lesson.time}
            </p>
            <p>
              <strong>Module:</strong> {lesson.module}
            </p>
            <p>
              <strong>Room:</strong> {lesson.room}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}