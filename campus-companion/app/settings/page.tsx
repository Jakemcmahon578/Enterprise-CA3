"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="container">
      <h1>Settings</h1>

      <div className="card">
        <h2>Display</h2>

        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Enable dark mode (demo)
        </label>
      </div>
    </main>
  );
}