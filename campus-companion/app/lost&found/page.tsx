"use client";

import { useState } from "react";

const lostItems = [
  {
    id: "item-001",
    item: "Black backpack",
    foundAt: "Library & Study Hub",
    date: "Monday 23 September",
    description: "Black backpack with a blue keyring attached."
  },
  {
    id: "item-002",
    item: "Water bottle",
    foundAt: "Sports Hall",
    date: "Tuesday 24 September",
    description: "Silver reusable bottle found near the archery area."
  },
  {
    id: "item-003",
    item: "Student notebook",
    foundAt: "Tech Building",
    date: "Wednesday 25 September",
    description: "Green notebook labelled Web Development."
  },
  {
    id: "item-004",
    item: "Wireless headphones",
    foundAt: "Canteen Lounge",
    date: "Thursday 26 September",
    description: "White wireless headphones in a small case."
  }
];

export default function LostFoundPage() {
  const [claimMessage, setClaimMessage] = useState("");

  function claimItem(itemName: string) {
    setClaimMessage(`Claim request started for: ${itemName}. Please contact the help desk.`);
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Student Support</p>
        <h1>Lost and found</h1>
        <p>
          View fictional items currently held by the campus lost and found team.
        </p>
      </section>

      <section className="card">
        <h2>Lost and found help line</h2>
        <p>
          <strong>Phone:</strong> 0800 918 224
        </p>
        <p>
          <strong>Email:</strong> lostfound@campuscompanion-demo.ac.uk
        </p>
        <p>
          <strong>Opening hours:</strong> Monday to Friday, 9:00am – 5:00pm
        </p>
      </section>

      {claimMessage && (
        <p className="successMessage" role="status">
          {claimMessage}
        </p>
      )}

      <section aria-labelledby="lost-items-heading">
        <h2 id="lost-items-heading">Items available to claim</h2>

        <div className="eventGrid">
          {lostItems.map((item) => (
            <article className="card" key={item.id}>
              <p className="category">Found item</p>
              <h3>{item.item}</h3>
              <p>
                <strong>Found at:</strong> {item.foundAt}
              </p>
              <p>
                <strong>Date found:</strong> {item.date}
              </p>
              <p>{item.description}</p>

              <button
                type="button"
                className="button"
                onClick={() => claimItem(item.item)}
              >
                Claim this item
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}