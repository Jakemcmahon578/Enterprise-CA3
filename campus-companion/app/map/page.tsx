const buildings = [
  {
    id: "tech",
    name: "Tech Building",
    subjects: ["Web Development", "Programming", "Cyber Security"],
    entrance: "North Entrance",
    emergencyExit: "East Fire Exit",
    floors: 4,
    className: "mapBuilding tech"
  },
  {
    id: "science",
    name: "Science Block",
    subjects: ["Biology", "Chemistry", "Physics"],
    entrance: "East Entrance",
    emergencyExit: "South Fire Exit",
    floors: 3,
    className: "mapBuilding science"
  },
  {
    id: "business",
    name: "Business Centre",
    subjects: ["Marketing", "Finance", "Management"],
    entrance: "Main Entrance",
    emergencyExit: "West Fire Exit",
    floors: 5,
    className: "mapBuilding business"
  },
  {
    id: "arts",
    name: "Arts Building",
    subjects: ["Graphic Design", "Media", "Photography"],
    entrance: "West Entrance",
    emergencyExit: "Studio Fire Exit",
    floors: 2,
    className: "mapBuilding arts"
  },
  {
    id: "library",
    name: "Library & Study Hub",
    subjects: ["Study Spaces", "Research", "Student Support"],
    entrance: "South Entrance",
    emergencyExit: "Quiet Zone Exit",
    floors: 3,
    className: "mapBuilding library"
  }
];

export default function CampusMapPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Navigation</p>
        <h1>Campus map</h1>
        <p>
          A fictional campus map showing buildings, paths, entrances, emergency
          exits, floors, and subjects.
        </p>
      </section>

      <section className="mapWrapper" aria-labelledby="map-heading">
        <h2 id="map-heading">Visual campus layout</h2>

        <div className="campusMap" aria-label="Campus map with buildings and paths">
          <div className="path horizontalPath">Main Footpath</div>
          <div className="path verticalPath">Central Path</div>

          {buildings.map((building) => (
            <article className={building.className} key={building.id}>
              <div className="mapIcons">
                <span className="mapIcon entranceIcon" title="Entrance">
                  🚪
                </span>
                <span className="mapIcon exitIcon" title="Emergency exit">
                  🧯
                </span>
              </div>

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
            </article>
          ))}
        </div>

        <div className="mapLegend" aria-label="Map key">
          <p>
            <span>🚪</span> Main entrance
          </p>
          <p>
            <span>🧯</span> Emergency exit
          </p>
          <p>
            <span className="legendPath"></span> Student footpath
          </p>
        </div>
      </section>

      <section aria-labelledby="building-details-heading">
        <h2 id="building-details-heading">Building subject details</h2>

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