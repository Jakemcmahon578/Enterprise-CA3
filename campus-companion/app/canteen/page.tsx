"use client";

import { useState } from "react";
import { menu } from "../../data/canteen";
import { addNotification } from "../../lib/notifications";

export default function CanteenPage() {
  const [savedMessage, setSavedMessage] = useState("");

  function saveMeal(day: string, meal: string) {
    addNotification({
      title: `Saved meal: ${meal}`,
      message: `${meal} on ${day} was saved to your reminders.`,
      type: "Canteen"
    });

    setSavedMessage(`${meal} was added to Notifications.`);
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Canteen</p>
        <h1>Canteen menu</h1>
        <p>
          Check fictional college meals, prices, vegetarian options, and allergen
          information before visiting the canteen.
        </p>
      </section>

      <section className="card">
        <h2>Food information</h2>
        <p>
          This menu is fictional and used only for the Campus Companion project.
          In a real app, allergen information should be checked carefully and
          updated by trained staff.
        </p>
      </section>

      {savedMessage && (
        <p className="successMessage" role="status">
          {savedMessage}
        </p>
      )}

      <section aria-labelledby="weekly-menu-heading">
        <h2 id="weekly-menu-heading">Weekly menu</h2>

        <div className="eventGrid">
          {menu.map((item) => (
            <article className="card" key={item.day}>
              <h3>{item.day}</h3>

              <p>
                <strong>Main meal:</strong> {item.main}
              </p>

              <p>
                <strong>Vegetarian option:</strong> {item.vegetarian}
              </p>

              <p>
                <strong>Dessert:</strong> {item.dessert}
              </p>

              <p>
                <strong>Price:</strong> {item.price}
              </p>

              <p className="accessibilityNote">
                <strong>Allergens:</strong> {item.allergens}
              </p>

              <button
                type="button"
                className="button"
                onClick={() => saveMeal(item.day, item.main)}
              >
                Save meal reminder
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}