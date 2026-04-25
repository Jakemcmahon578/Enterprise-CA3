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
  const [selectedId, setSelectedId] = useState("tech");

  const selected =
    buildings.find((b) => b.id === selectedId) ?? buildings[0];

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Campus Navigation</p>
        <h1>Interactive campus map</h1>
        <p>
          Click on a building to view its subjects, entrances, emergency exits,
          and number of floors. Paths show how to reach each entrance.
        </p>
      </section>

      <section className="mapWrapper" aria-labelledby="map-heading">
        <h2 id="map-heading">Campus layout</h2>

        <div className="campusMap" aria-label="Interactive campus map">
          {/* Main paths */}
          <div className="path horizontalPath">Main Footpath</div>
          <div className="path verticalPath">Central Path</div>

          {/* Connecting paths */}
          <div className="connector connectorTech" aria-hidden="true"></div>
          <div className="connector connectorScience" aria-hidden="true"></div>
          <div className="connector connectorBusiness" aria-hidden="true"></div>
          <div className="connector connectorArts" aria-hidden="true"></div>
          <div className="connector connectorLibrary" aria-hidden="true"></div>

          {/* Buildings */}
          {buildings.map((building) => (
            <button
              key={building.id}
              type="button"
              className={`mapBuilding ${building.positionClass} ${
                selectedId === building.id ? "selectedBuilding" : ""
              }`}
              onClick={() => setSelectedId(building.id)}
              aria-pressed={selectedId === building.id}
            >
              <div className="mapIcons" aria-hidden="true">
                <span className="mapIcon entranceIcon" title="Entrance">
                  🚪
                </span>
                <span className="mapIcon exitIcon" title="Emergency exit">
                  🧯
                </span>
              </div>

              <strong>{building.name}</strong>
              <span>{building.floors} floors</span>
            </button>
          ))}
        </div>

        <div className="mapLegend">
          <p>🚪 Entrance</p>
          <p>🧯 Emergency exit</p>
          <p>
            <span className="legendPath"></span> Footpath
          </p>
        </div>
      </section>

      <section className="card" aria-labelledby="details-heading">
        <h2 id="details-heading">{selected.name}</h2>

        <p>
          <strong>Floors:</strong> {selected.floors}
        </p>

        <p>
          <strong>Main entrance:</strong> {selected.entrance}
        </p>

        <p>
          <strong>Emergency exit:</strong> {selected.emergencyExit}
        </p>

        <p>
          <strong>Subjects:</strong>
        </p>

        <ul>
          {selected.subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}