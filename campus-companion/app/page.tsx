export default function HomePage() {
  return (
    <>
      <main className="container">
        <section className="hero">
          <p className="eyebrow">Campus Companion</p>
          <h1>Your student life, simplified</h1>
          <p>
            Campus Companion is a fictional student support app designed to help
            first-year students stay organised, find college information, and
            access support in one place.
          </p>
        </section>

        <section className="card" aria-labelledby="about-heading">
          <h2 id="about-heading">About this app</h2>
          <p>
            This app includes student features such as events, timetables,
            canteen menus, a campus map, lost and found support, accessibility
            options, and app settings.
          </p>
          <p>
            All data used in this project is fictional and created for learning
            purposes only.
          </p>
        </section>

        <section className="card" aria-labelledby="support-heading">
          <h2 id="support-heading">Contact student support</h2>
          <p>
            If this were a real college app, students could use this section to
            contact support services for help with campus information, lost
            items, accessibility needs, or general questions.
          </p>

          <p>
            <strong>Phone:</strong> 0800 456 789
          </p>

          <p>
            <strong>Email:</strong> support@campuscompanion-demo.ac.uk
          </p>

          <p>
            <strong>Opening hours:</strong> Monday to Friday, 9:00am – 5:00pm
          </p>
        </section>
      </main>

      <footer className="siteFooter">
        <p>
          <strong>Campus Companion Support</strong>
        </p>
        <p>Phone: 0800 456 789</p>
        <p>Email: support@campuscompanion-demo.ac.uk</p>
        <p>Fictional student project — no real personal data used.</p>
      </footer>
    </>
  );
}