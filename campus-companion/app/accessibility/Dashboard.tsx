export default function AccessibilityPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Companion</p>
        <h1>Accessibility settings</h1>
        <p>
          Adjust fictional app settings to make the campus companion easier to use.
        </p>
      </section>

      <section className="card">
        <h2>Display options</h2>

        <label>
          <input type="checkbox" /> Increase text size
        </label>

        <label>
          <input type="checkbox" /> High contrast mode
        </label>

        <label>
          <input type="checkbox" /> Reduce animations
        </label>
      </section>
    </main>
  );
}