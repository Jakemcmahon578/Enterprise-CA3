import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Companion</p>
        <h1>Welcome to your student dashboard</h1>
        <p>
          A fictional first-year student app for timetables, events, maps, canteen menus,
          notifications, and support.
        </p>

        <Link className="button" href="/events">
          Browse events
        </Link>
      </section>
    </main>
  );
}