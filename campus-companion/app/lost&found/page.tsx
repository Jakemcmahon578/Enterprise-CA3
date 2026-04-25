"use client";

import { useState } from "react";
import { addNotification } from "../../lib/notifications";
const campusLocations = [
  "Tech Building",
  "Science Block",
  "Business Centre",
  "Arts Building",
  "Library & Study Hub",
  "Sports Hall",
  "Student Union",
  "Canteen Lounge"
];

const foundItems = [
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
  }
];

export default function LostFoundPage() {
  const [lostItemName, setLostItemName] = useState("");
  const [lostLocation, setLostLocation] = useState(campusLocations[0]);
  const [lostDescription, setLostDescription] = useState("");
  const [reportedItems, setReportedItems] = useState<
    {
      id: string;
      item: string;
      lostAt: string;
      description: string;
      status: "Not found yet" | "Found";
    }[]
  >([]);
  const [message, setMessage] = useState("");

  function submitLostItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      item: lostItemName,
      lostAt: lostLocation,
      description: lostDescription,
      status: "Not found yet" as const
    };

    setReportedItems([newItem, ...reportedItems]);

    addNotification({
      title: `Lost item reported: ${lostItemName}`,
      message: `${lostItemName} was reported lost at ${lostLocation}.`,
      type: "Lost & Found"
    });

    setMessage(`${lostItemName} was reported and added to Notifications.`);
    setLostItemName("");
    setLostDescription("");
    setLostLocation(campusLocations[0]);
  }

  function markAsFound(itemId: string, itemName: string) {
    const updated = reportedItems.map((item) =>
      item.id === itemId ? { ...item, status: "Found" as const } : item
    );

    setReportedItems(updated);

    addNotification({
      title: `Lost item found: ${itemName}`,
      message: `${itemName} has been marked as found. Please contact the Lost & Found desk.`,
      type: "Lost & Found"
    });

    setMessage(`${itemName} was marked as found and added to Notifications.`);
  }

  function claimFoundItem(itemName: string) {
    addNotification({
      title: `Claim request: ${itemName}`,
      message: `You started a claim request for ${itemName}. Please contact the Lost & Found help desk.`,
      type: "Lost & Found"
    });

    setMessage(`${itemName} claim was added to Notifications.`);
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Student Support</p>
        <h1>Lost and found</h1>
        <p>
          Report a lost item, choose where it was lost, and check fictional items
          currently available to claim.
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

      {message && (
        <p className="successMessage" role="status">
          {message}
        </p>
      )}

      <section className="card" aria-labelledby="report-lost-item-heading">
        <h2 id="report-lost-item-heading">Report a lost item</h2>

        <form onSubmit={submitLostItem}>
          <label htmlFor="lost-item-name">Item name</label>
          <input
            id="lost-item-name"
            type="text"
            value={lostItemName}
            onChange={(event) => setLostItemName(event.target.value)}
            placeholder="Example: Black wallet"
            required
          />

          <label htmlFor="lost-location">Where did you lose it?</label>
          <select
            id="lost-location"
            value={lostLocation}
            onChange={(event) => setLostLocation(event.target.value)}
            required
          >
            {campusLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          <label htmlFor="lost-description">Item description</label>
          <textarea
            id="lost-description"
            value={lostDescription}
            onChange={(event) => setLostDescription(event.target.value)}
            placeholder="Describe the item, colour, brand, or any unique details."
            required
          />

          <button type="submit" className="button">
            Report lost item
          </button>
        </form>
      </section>

      <section aria-labelledby="reported-items-heading">
        <h2 id="reported-items-heading">Your reported lost items</h2>

        {reportedItems.length === 0 && (
          <p role="status">You have not reported any lost items yet.</p>
        )}

        <div className="eventGrid">
          {reportedItems.map((item) => (
            <article className="card" key={item.id}>
              <p className="category">{item.status}</p>
              <h3>{item.item}</h3>

              <p>
                <strong>Lost at:</strong> {item.lostAt}
              </p>

              <p>{item.description}</p>

              {item.status !== "Found" && (
                <button
                  type="button"
                  className="button"
                  onClick={() => markAsFound(item.id, item.item)}
                >
                  Mark as found
                </button>
              )}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="found-items-heading">
        <h2 id="found-items-heading">Items currently available to claim</h2>

        <div className="eventGrid">
          {foundItems.map((item) => (
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
                onClick={() => claimFoundItem(item.item)}
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