import RecommendedEvents from "../../components/RecommendedEvents";

export default function RecommendationsPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">ML Feature</p>
        <h1>Recommended Events</h1>
        <p>
          These recommendations are based on fictional event interaction data
          using a logistic regression model.
        </p>
      </section>

      <RecommendedEvents />
    </main>
  );
}