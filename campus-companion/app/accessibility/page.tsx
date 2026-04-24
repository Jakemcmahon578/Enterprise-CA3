const accessibilityFeatures = [
  {
    title: "Keyboard navigation",
    description:
      "The app is designed so students can move through pages using the Tab key, Enter key, and Space key."
  },
  {
    title: "Clear colour contrast",
    description:
      "Text and buttons use strong contrast so information is easier to read."
  },
  {
    title: "Readable page structure",
    description:
      "Pages use headings, sections, labels, and clear content blocks to support screen reader users."
  },
  {
    title: "Reduced motion support",
    description:
      "Animations should be avoided or reduced for students who prefer less movement."
  }
];

export default function AccessibilityPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Accessibility</p>
        <h1>Accessibility settings</h1>
        <p>
          Review fictional accessibility options designed to make the Campus
          Companion app easier to use for more students.
        </p>
      </section>

      <section className="card" aria-labelledby="settings-heading">
        <h2 id="settings-heading">Display preferences</h2>

        <div>
          <label>
            <input type="checkbox" /> Increase text size
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" /> Use high contrast mode
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" /> Reduce animations
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" /> Show extra help text
          </label>
        </div>
      </section>

      <section aria-labelledby="accessibility-features-heading">
        <h2 id="accessibility-features-heading">Accessibility features</h2>

        <div className="eventGrid">
          {accessibilityFeatures.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card" aria-labelledby="wcag-heading">
        <h2 id="wcag-heading">WCAG AA checklist</h2>

        <ul>
          <li>Pages have one clear main heading.</li>
          <li>Links and buttons can be reached by keyboard.</li>
          <li>Form controls have visible labels.</li>
          <li>Text has strong colour contrast.</li>
          <li>Content does not rely on colour alone.</li>
        </ul>
      </section>
    </main>
  );
}