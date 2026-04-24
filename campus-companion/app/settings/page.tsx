"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light");
  const [textSize, setTextSize] = useState("normal");
  const [accentColour, setAccentColour] = useState("blue");
  const [spacing, setSpacing] = useState("normal");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.body.classList.remove(
      "theme-light",
      "theme-dark",
      "theme-contrast",
      "text-normal",
      "text-large",
      "text-extra-large",
      "accent-blue",
      "accent-green",
      "accent-purple",
      "accent-orange",
      "spacing-normal",
      "spacing-wide",
      "motion-reduced"
    );

    document.body.classList.add(
      `theme-${theme}`,
      `text-${textSize}`,
      `accent-${accentColour}`,
      `spacing-${spacing}`
    );

    if (reducedMotion) {
      document.body.classList.add("motion-reduced");
    }

    localStorage.setItem(
      "campusSettings",
      JSON.stringify({
        theme,
        textSize,
        accentColour,
        spacing,
        reducedMotion
      })
    );
  }, [theme, textSize, accentColour, spacing, reducedMotion]);

  useEffect(() => {
    const savedSettings = localStorage.getItem("campusSettings");

    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setTheme(parsed.theme ?? "light");
      setTextSize(parsed.textSize ?? "normal");
      setAccentColour(parsed.accentColour ?? "blue");
      setSpacing(parsed.spacing ?? "normal");
      setReducedMotion(parsed.reducedMotion ?? false);
    }
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">App Preferences</p>
        <h1>Settings</h1>
        <p>
          Change the app theme, text size, colour, spacing, and motion settings.
          These settings apply to the whole website.
        </p>
      </section>

      <section className="settingsGrid">
        <article className="card">
          <h2>Display settings</h2>

          <label htmlFor="theme">App mode</label>
          <select id="theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light mode</option>
            <option value="dark">Dark mode</option>
            <option value="contrast">High contrast mode</option>
          </select>

          <label htmlFor="text-size">Text size</label>
          <select
            id="text-size"
            value={textSize}
            onChange={(e) => setTextSize(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra large</option>
          </select>

          <label htmlFor="accent-colour">Accent colour</label>
          <select
            id="accent-colour"
            value={accentColour}
            onChange={(e) => setAccentColour(e.target.value)}
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>

          <label htmlFor="spacing">Page spacing</label>
          <select id="spacing" value={spacing} onChange={(e) => setSpacing(e.target.value)}>
            <option value="normal">Normal spacing</option>
            <option value="wide">Wide spacing</option>
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
            This preview uses the same settings as the rest of the app. Try
            changing the options and then visit Events, Canteen, or Campus Map.
          </p>
          <button type="button" className="button">
            Example button
          </button>
        </article>
      </section>
    </main>
  );
}