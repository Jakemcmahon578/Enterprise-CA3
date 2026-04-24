const buildings = [
  {
    id: "tech",
    name: "Tech Building",
    subjects: ["Web Development", "Programming", "Cyber Security"],
    entrance: "North Entrance",
    emergencyExit: "Rear East Exit",
    floors: 4,
    className: "building techBuilding"
  },
  {
    id: "science",
    name: "Science Block",
    subjects: ["Biology", "Chemistry", "Physics"],
    entrance: "East Entrance",
    emergencyExit: "South Lab Exit",
    floors: 3,
    className: "building scienceBuilding"
  },
  {
    id: "business",
    name: "Business Centre",
    subjects: ["Marketing", "Finance", "Management"],
    entrance: "Main Entrance",
    emergencyExit: "West Fire Exit",
    floors: 5,
    className: "building businessBuilding"
  },
  {
    id: "arts",
    name: "Arts Building",
    subjects: ["Graphic Design", "Media", "Photography"],
    entrance: "West Entrance",
    emergencyExit: "Studio Side Exit",
    floors: 2,
    className: "building artsBuilding"
  },
  {
    id: "library",
    name: "Library & Study Hub",
    subjects: ["Study Spaces", "Research", "Student Support"],
    entrance: "South Entrance",
    emergencyExit: "Quiet Zone Exit",
    floors: 3,
    className: "building libraryBuilding"
  }
];

export default function CampusMapPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Navigation</p>
        <h1>Campus map</h1>
        <p>
          Use this fictional map to find buildings, entrances, emergency exits,
          subjects, and connected footpaths.
        </p>
      </section>

      <section className="mapCanvas" aria-label="Visual campus map">
        <div className="mainPath">Main student footpath</div>

        {buildings.map((building) => (
          <article className={building.className} key={building.id}>
            <span className="entranceSign">Entrance</span>
            <span className="exitSign">Emergency exit</span>

            <h2>{building.name}</h2>
            <p>
              <strong>Floors:</strong> {building.floors}
            </p>
            <p>
              <strong>Main entrance:</strong> {building.entrance}
            </p>
            <p>
              <strong>Emergency exit:</strong> {building.emergencyExit}
            </p>
          </article>
        ))}
      </section>

      <section aria-labelledby="building-details-heading">
        <h2 id="building-details-heading">Building details</h2>

        <div className="eventGrid">
          {buildings.map((building) => (
            <article className="card" key={building.name}>
              <h3>{building.name}</h3>
              <p>
                <strong>Floors:</strong> {building.floors}
              </p>
              <p>
                <strong>Entrance:</strong> {building.entrance}
              </p>
              <p>
                <strong>Emergency exit:</strong> {building.emergencyExit}
              </p>
              <p>
                <strong>Subjects:</strong>
              </p>
              <ul>
                {building.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}