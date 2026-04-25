"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("theme-light");
  const [accent, setAccent] = useState("accent-blue");
  const [textSize, setTextSize] = useState("text-normal");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.body.classList.remove(
      "theme-light",
      "theme-dark",
      "theme-contrast",
      "contrast-blue",
      "contrast-purple",
      "accent-blue",
      "accent-green",
      "accent-purple",
      "accent-orange",
      "text-normal",
      "text-large",
      "text-extra-large",
      "motion-reduced"
    );

    document.body.classList.add(theme, accent, textSize);

    if (reducedMotion) {
      document.body.classList.add("motion-reduced");
    }

    localStorage.setItem(
      "campusSettings",
      JSON.stringify({
        theme,
        accent,
        textSize,
        reducedMotion
      })
    );
  }, [theme, accent, textSize, reducedMotion]);

  useEffect(() => {
    const saved = localStorage.getItem("campusSettings");

    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme ?? "theme-light");
      setAccent(parsed.accent ?? "accent-blue");
      setTextSize(parsed.textSize ?? "text-normal");
      setReducedMotion(parsed.reducedMotion ?? false);
    }
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">App Preferences</p>
        <h1>Settings</h1>
        <p>
          Change the website theme, colour variation, text size, and motion settings.
        </p>
      </section>

      <section className="settingsGrid">
        <article className="card">
          <h2>Theme settings</h2>

          <label htmlFor="theme">Website mode</label>
          <select
            id="theme"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="theme-light">Light mode</option>
            <option value="theme-dark">Dark mode</option>
            <option value="theme-contrast">Black / yellow high contrast</option>
            <option value="contrast-blue">Blue high contrast</option>
            <option value="contrast-purple">Purple high contrast</option>
          </select>

          <label htmlFor="accent">Button and link colour</label>
          <select
            id="accent"
            value={accent}
            onChange={(event) => setAccent(event.target.value)}
          >
            <option value="accent-blue">Blue</option>
            <option value="accent-green">Green</option>
            <option value="accent-purple">Purple</option>
            <option value="accent-orange">Orange</option>
          </select>

          <label htmlFor="text-size">Text size</label>
          <select
            id="text-size"
            value={textSize}
            onChange={(event) => setTextSize(event.target.value)}
          >
            <option value="text-normal">Normal text</option>
            <option value="text-large">Large text</option>
            <option value="text-extra-large">Extra large text</option>
          </select>

          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={() => setReducedMotion(!reducedMotion)}
            />
            Reduce animations
          </label>
        </article>

        <article className="card">
          <h2>Live preview</h2>
          <p>
            These settings apply to the entire website. After changing them,
            navigate to other pages to see the effect.
          </p>

          <button type="button" className="button">
            Example button
          </button>
        </article>
      </section>
    </main>
  );
}