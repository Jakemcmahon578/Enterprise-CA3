type RecommendedEvent = {
  title: string;
  category: string;
  society: string;
  recommendationScore: number;
  reason: string;
};

const recommendedEvents: RecommendedEvent[] = [
  {
    title: "Cybersecurity Intro",
    category: "Tech",
    society: "Cyber Society",
    recommendationScore: 0.91,
    reason: "Matched interests in technology, careers, and cybersecurity."
  },
  {
    title: "Web Development Bootcamp",
    category: "Tech",
    society: "Developer Society",
    recommendationScore: 0.87,
    reason: "Matched interests in coding, web development, and technology."
  },
  {
    title: "AI Workshop",
    category: "Tech",
    society: "Computing Society",
    recommendationScore: 0.84,
    reason: "Matched interests in AI, programming, and computing events."
  }
];

export default function RecommendedEvents() {
  return (
    <section aria-labelledby="recommended-events-heading">
      <div className="mlIntro card">
        <h2 id="recommended-events-heading">Recommended Events</h2>
        <p>
          This feature uses fictional event, user, and interaction data. A
          logistic regression model predicts which events a student is most
          likely to click, save, or attend.
        </p>
      </div>

      <div className="recommendationGrid">
        {recommendedEvents.map((event, index) => (
          <article className="recommendationCard" key={event.title}>
            <p className="category">Rank #{index + 1}</p>
            <h3>{event.title}</h3>

            <p>
              <strong>Category:</strong> {event.category}
            </p>

            <p>
              <strong>Society:</strong> {event.society}
            </p>

            <p>
              <strong>Why recommended:</strong> {event.reason}
            </p>

            <div className="scoreWrapper">
              <div className="scoreHeader">
                <strong>Recommendation score</strong>
                <span>{(event.recommendationScore * 100).toFixed(0)}%</span>
              </div>

              <div className="scoreBar" aria-hidden="true">
                <div
                  className="scoreFill"
                  style={{ width: `${event.recommendationScore * 100}%` }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mlDetailsGrid" aria-labelledby="ml-details-heading">
        <article className="card">
          <h2 id="ml-details-heading">Model used</h2>
          <p>
            Logistic regression was used to estimate whether a fictional student
            would be interested in an event.
          </p>
        </article>

        <article className="card">
          <h2>Training data</h2>
          <p>
            The model used fictional CSV files for users, events, and event
            interactions.
          </p>
        </article>

        <article className="card">
          <h2>Features</h2>
          <ul>
            <li>Event category</li>
            <li>Society</li>
            <li>Student course</li>
            <li>Interest overlap</li>
          </ul>
        </article>
      </section>
    </section>
  );
}