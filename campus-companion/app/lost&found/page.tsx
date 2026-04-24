"use client";

import { useState } from "react";

export default function LostFoundPage() {
  const [message, setMessage] = useState("");

  return (
    <main className="container">
      <h1>Lost & Found</h1>

      <div className="card">
        <h2>Report Lost Item</h2>

        <input
          placeholder="Describe your item"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="button">Submit</button>
      </div>

      <div className="card">
        <h2>Contact</h2>
        <p><strong>Phone:</strong> 0800 123 456</p>
        <p><strong>Email:</strong> help@campus-demo.ac.uk</p>
      </div>
    </main>
  );
}