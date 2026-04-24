// Example app usage: components/RecommendedEvents.tsx
// In the final app, these recommended events could come from the ML output.

type RecommendedEvent = {
  title: string;
  category: string;
  society: string;
  recommendationScore: number;
};

const recommendedEvents: RecommendedEvent[] = [
  {
    title: "Cybersecurity Intro",
    category: "Tech",
    society: "Cyber Society",
    recommendationScore: 0.91,
  },
  {
    title: "Web Development Bootcamp",
    category: "Tech",
    society: "Developer Society",
    recommendationScore: 0.87,
  },
  {
    title: "AI Workshop",
    category: "Tech",
    society: "Computing Society",
    recommendationScore: 0.84,
  },
];

export default function RecommendedEvents() {
  return (
    <section aria-labelledby="recommended-events-heading">
      <h2 id="recommended-events-heading">Recommended Events</h2>
      <ul>
        {recommendedEvents.map((event) => (
          <li key={event.title}>
            <strong>{event.title}</strong>
            <p>{event.category} · {event.society}</p>
            <p>Recommendation score: {(event.recommendationScore * 100).toFixed(0)}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
