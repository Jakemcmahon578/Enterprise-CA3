"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light");
  const [textSize, setTextSize] = useState("normal");
  const [accentColour, setAccentColour] = useState("blue");

  const previewClassName = `settingsPreview ${theme} ${textSize} ${accentColour}`;

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">App Preferences</p>
        <h1>Settings</h1>
        <p>
          Change fictional display settings to make the app easier to read and use.
        </p>
      </section>

      <section className="settingsGrid" aria-labelledby="settings-heading">
        <div className="card">
          <h2 id="settings-heading">Display settings</h2>

          <label htmlFor="theme">App mode</label>
          <select
            id="theme"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="light">Light mode</option>
            <option value="dark">Dark mode</option>
            <option value="contrast">High contrast</option>
          </select>

          <label htmlFor="text-size">Text size</label>
          <select
            id="text-size"
            value={textSize}
            onChange={(event) => setTextSize(event.target.value)}
          >
            <option value="normal">Normal text</option>
            <option value="large">Large text</option>
            <option value="extraLarge">Extra large text</option>
          </select>

          <label htmlFor="accent-colour">Accent colour</label>
          <select
            id="accent-colour"
            value={accentColour}
            onChange={(event) => setAccentColour(event.target.value)}
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </div>

        <div className={previewClassName}>
          <h2>Preview</h2>
          <p>
            This preview shows how text size, colour, and app mode could look for
            a student using the app.
          </p>
          <button type="button" className="button">
            Example button
          </button>
        </div>
      </section>
    </main>
  );
}