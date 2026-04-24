const menu = [
  {
    day: "Monday",
    main: "Vegetable pasta bake",
    vegetarian: "Tomato and basil soup",
    allergens: "Contains gluten, milk"
  },
  {
    day: "Tuesday",
    main: "Chicken curry with rice",
    vegetarian: "Chickpea curry with rice",
    allergens: "May contain celery"
  },
  {
    day: "Wednesday",
    main: "Beef burger and wedges",
    vegetarian: "Bean burger and wedges",
    allergens: "Contains gluten"
  }
];

export default function CanteenPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Companion</p>
        <h1>Canteen menu</h1>
        <p>View fictional meals available on campus this week.</p>
      </section>

      <section className="eventGrid" aria-label="Weekly canteen menu">
        {menu.map((item) => (
          <article className="card" key={item.day}>
            <h2>{item.day}</h2>
            <p>
              <strong>Main meal:</strong> {item.main}
            </p>
            <p>
              <strong>Vegetarian option:</strong> {item.vegetarian}
            </p>
            <p>
              <strong>Allergens:</strong> {item.allergens}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}