export default function CampusMapPage() {
  const buildings = [
    {
      name: "Tech Building",
      subjects: ["Web Development", "Programming", "Cyber Security"],
      entrance: "North Entrance"
    },
    {
      name: "Science Block",
      subjects: ["Biology", "Chemistry", "Physics"],
      entrance: "East Entrance"
    },
    {
      name: "Business Centre",
      subjects: ["Marketing", "Finance", "Management"],
      entrance: "Main Entrance"
    },
    {
      name: "Arts Building",
      subjects: ["Graphic Design", "Media", "Photography"],
      entrance: "West Entrance"
    },
    {
      name: "Library & Study Hub",
      subjects: ["Study Spaces", "Research", "Support"],
      entrance: "South Entrance"
    }
  ];

  return (
    <main className="container">
      <h1>Campus Map</h1>

      <div className="mapGrid">
        {buildings.map((b) => (
          <div className="mapCard" key={b.name}>
            <h2>{b.name}</h2>
            <p><strong>Entrance:</strong> {b.entrance}</p>

            <ul>
              {b.subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="pathway">Connected Footpath</div>
          </div>
        ))}
      </div>
    </main>
  );
}