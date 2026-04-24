"use client";

import { useState } from "react";

const buildings = [
  {
    id: "tech",
    name: "Tech Building",
    subjects: ["Web Development", "Programming", "Cyber Security"],
    entrance: "North Entrance",
    emergencyExit: "East Fire Exit",
    floors: 4,
    positionClass: "tech"
  },
  {
    id: "science",
    name: "Science Block",
    subjects: ["Biology", "Chemistry", "Physics"],
    entrance: "East Entrance",
    emergencyExit: "South Fire Exit",
    floors: 3,
    positionClass: "science"
  },
  {
    id: "business",
    name: "Business Centre",
    subjects: ["Marketing", "Finance", "Management"],
    entrance: "Main Entrance",
    emergencyExit: "West Fire Exit",
    floors: 5,
    positionClass: "business"
  },
  {
    id: "arts",
    name: "Arts Building",
    subjects: ["Graphic Design", "Media", "Photography"],
    entrance: "West Entrance",
    emergencyExit: "Studio Fire Exit",
    floors: 2,
    positionClass: "arts"
  },
  {
    id: "library",
    name: "Library & Study Hub",
    subjects: ["Study Spaces", "Research", "Student Support"],
    entrance: "South Entrance",
    emergencyExit: "Quiet Zone Exit",
    floors: 3,
    positionClass: "library"
  }
];

export default function CampusMapPage() {
  const [selectedBuildingId, setSelectedBuildingId] = useState("tech");

  const selectedBuilding =
    buildings.find((building) => building.id === selectedBuildingId) ??
    buildings[0];

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Navigation</p>
        <h1>Interactive campus map</h1>
        <p>
          Select a fictional campus building to view subjects, entrances,
          emergency exits, floors, and connected paths.
        </p>
      </section>

      <section className="mapWrapper" aria-labelledby="map-heading">
        <h2 id="map-heading">Campus layout</h2>

        <div className="campusMap" aria-label="Interactive fictional campus map">
          <div className="path horizontalPath">Main Footpath</div>
          <div className="path verticalPath">Central Path</div>

          {buildings.map((building) => (
            <button
              type="button"
              key={building.id}
              className={`mapBuilding ${building.positionClass} ${
                selectedBuildingId === building.id ? "selectedBuilding" : ""
              }`}
              onClick={() => setSelectedBuildingId(building.id)}
              aria-pressed={selectedBuildingId === building.id}
            >
              <span className="mapIcons" aria-hidden="true">
                <span className="mapIcon entranceIcon">🚪</span>
                <span className="mapIcon exitIcon">🧯</span>
              </span>

              <strong>{building.name}</strong>
              <span>{building.floors} floors</span>
            </button>
          ))}
        </div>

        <div className="mapLegend">
          <p>🚪 Main entrance</p>
          <p>🧯 Emergency exit</p>
          <p>
            <span className="legendPath"></span> Student footpath
          </p>
        </div>
      </section>

      <section className="card" aria-labelledby="selected-building-heading">
        <h2 id="selected-building-heading">{selectedBuilding.name}</h2>

        <p>
          <strong>Floors:</strong> {selectedBuilding.floors}
        </p>

        <p>
          <strong>Main entrance:</strong> {selectedBuilding.entrance}
        </p>

        <p>
          <strong>Emergency exit:</strong> {selectedBuilding.emergencyExit}
        </p>

        <p>
          <strong>Subjects in this building:</strong>
        </p>

        <ul>
          {selectedBuilding.subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}