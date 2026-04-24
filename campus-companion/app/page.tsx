import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Companion</p>
        <h1>Your student life, simplified</h1>
        <p>
          A simple, accessible web app to help first-year students manage
          timetables, discover events, check canteen menus, and stay organised.
        </p>
      </section>

      <section aria-labelledby="features-heading">
        <h2 id="features-heading">Explore features</h2>

        <div className="eventGrid">
          <article className="card">
            <h3>Events & Societies</h3>
            <p>
              Discover fictional campus events, meet new people, and get involved.
            </p>
            <Link href="/events" className="button">
              View events
            </Link>
          </article>

          <article className="card">
            <h3>Timetable</h3>
            <p>
              Keep track of your weekly classes and stay organised.
            </p>
            <Link href="/timetable" className="button">
              View timetable
            </Link>
          </article>

          <article className="card">
            <h3>Canteen Menu</h3>
            <p>
              Check daily meals and allergen information before you eat.
            </p>
            <Link href="/canteen" className="button">
              View menu
            </Link>
          </article>

          <article className="card">
            <h3>Accessibility</h3>
            <p>
              Adjust settings to improve readability and usability.
            </p>
            <Link href="/accessibility" className="button">
              Accessibility settings
            </Link>
          </article>
        </div>
      </section>

      <section className="card" aria-labelledby="help-heading">
        <h2 id="help-heading">Need help?</h2>
        <p>
          This is a fictional student support system. In a real app, you would be
          able to submit helpdesk tickets or contact campus services.
        </p>

        <button className="button" type="button">
          Contact support (demo)
        </button>
      </section>
    </main>
  );
}