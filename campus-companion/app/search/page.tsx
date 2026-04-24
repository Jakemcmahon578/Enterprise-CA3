"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const searchableItems = [
  {
    title: "Archery Club Taster Session",
    category: "Events",
    description: "Beginner-friendly sports society event in the Sports Hall.",
    href: "/events"
  },
  {
    title: "Coding Society Workshop",
    category: "Events",
    description: "Learn HTML, CSS, and JavaScript basics.",
    href: "/events"
  },
  {
    title: "Web Development",
    category: "Timetable",
    description: "Monday class in Room B12.",
    href: "/timetable"
  },
  {
    title: "Database Systems",
    category: "Timetable",
    description: "Tuesday class in Computer Lab 3.",
    href: "/timetable"
  },
  {
    title: "Tech Building",
    category: "Campus Map",
    description: "Web Development, Programming, and Cyber Security.",
    href: "/campus-map"
  },
  {
    title: "Science Block",
    category: "Campus Map",
    description: "Biology, Chemistry, and Physics.",
    href: "/campus-map"
  },
  {
    title: "Vegetable pasta bake",
    category: "Canteen",
    description: "Monday fictional canteen main meal.",
    href: "/canteen"
  },
  {
    title: "Lost black backpack",
    category: "Lost and Found",
    description: "Found at Library & Study Hub.",
    href: "/lost-found"
  },
  {
    title: "Accessibility settings",
    category: "Accessibility",
    description: "Text size, contrast, reduced motion, and readability.",
    href: "/accessibility"
  }
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const searchTerm = query.toLowerCase();

    return searchableItems.filter((item) => {
      const text = `${item.title} ${item.category} ${item.description}`.toLowerCase();
      return text.includes(searchTerm);
    });
  }, [query]);

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Search</p>
        <h1>Search Campus Companion</h1>
        <p>
          Search across fictional events, timetable items, campus buildings,
          canteen meals, lost items, and accessibility features.
        </p>
      </section>

      <section className="card">
        <label htmlFor="site-search">Search the app</label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try archery, canteen, tech building..."
        />
      </section>

      <section aria-live="polite">
        <h2>Results</h2>

        {query.length === 0 && <p>Start typing to search the app.</p>}

        {query.length > 0 && (
          <p>
            Showing <strong>{results.length}</strong> result
            {results.length === 1 ? "" : "s"}.
          </p>
        )}

        <div className="eventGrid">
          {query.length > 0 &&
            results.map((item) => (
              <article className="card" key={`${item.category}-${item.title}`}>
                <p className="category">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <Link className="button" href={item.href}>
                  Open section
                </Link>
              </article>
            ))}
        </div>

        {query.length > 0 && results.length === 0 && (
          <p role="status">No results found. Try a different search term.</p>
        )}
      </section>
    </main>
  );
}