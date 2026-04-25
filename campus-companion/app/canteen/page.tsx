"use client";

import { useState } from "react";
import { addNotification } from "@/lib/notifications";

const menu = [
  {
    day: "Monday",
    main: "Vegetable pasta bake",
    vegetarian: "Tomato and basil soup with bread roll",
    dessert: "Fruit yoghurt",
    price: "£3.50",
    allergens: "Contains gluten and milk"
  },
  {
    day: "Tuesday",
    main: "Chicken curry with rice",
    vegetarian: "Chickpea curry with rice",
    dessert: "Apple crumble",
    price: "£4.00",
    allergens: "May contain celery"
  },
  {
    day: "Wednesday",
    main: "Beef burger with potato wedges",
    vegetarian: "Bean burger with potato wedges",
    dessert: "Chocolate sponge",
    price: "£4.25",
    allergens: "Contains gluten and soya"
  },
  {
    day: "Thursday",
    main: "Jacket potato with tuna mayo",
    vegetarian: "Jacket potato with cheese and beans",
    dessert: "Fresh fruit pot",
    price: "£3.75",
    allergens: "Contains fish, egg, and milk"
  },
  {
    day: "Friday",
    main: "Fish fingers with chips",
    vegetarian: "Vegetable nuggets with chips",
    dessert: "Rice pudding",
    price: "£4.10",
    allergens: "Contains fish, gluten, and milk"
  }
];

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