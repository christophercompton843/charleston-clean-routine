"use client";

import { useState } from "react";
import BrandIcon, { type BrandIconName } from "./brand-icon";
import "./visual-interactions.css";

type RoomKey = "kitchen" | "bathrooms" | "bedrooms" | "living";
type ServiceKey = "routine" | "deep" | "move";

const rooms: Record<RoomKey, { title: string; subtitle: string; icon: string; routine: string[]; deep: string[]; move: string[] }> = {
  kitchen: {
    title: "Kitchen",
    subtitle: "Surfaces, fixtures, appliances + floors",
    icon: "/icons/kitchen.png",
    routine: ["Countertops and backsplash wiped", "Sink and faucet cleaned", "Appliance exteriors wiped", "Microwave interior and exterior cleaned", "Cabinet fronts spot-cleaned", "Accessible surfaces dusted and wiped", "Floor vacuumed and mopped", "Trash emptied and liner replaced when available"],
    deep: ["Cabinet fronts fully wiped", "Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to buildup on accessible surfaces and fixtures"],
    move: ["Accessible shelving and surfaces cleaned in an empty kitchen", "Cabinet and drawer exteriors detailed", "Additional attention to edges, corners, doors, and trim"],
  },
  bathrooms: {
    title: "Bathrooms",
    subtitle: "Sanitation, fixtures, mirrors + floors",
    icon: "/icons/bathroom.png",
    routine: ["Toilet cleaned and sanitized", "Tub and/or shower cleaned", "Sink, faucet, and vanity cleaned", "Mirrors cleaned", "Accessible fixtures and surfaces dusted and wiped", "Floor vacuumed and mopped", "Trash emptied and liner replaced when available"],
    deep: ["Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to soap residue and buildup", "Accessible bathroom fixtures and surfaces detailed"],
    move: ["Empty vanities and accessible surfaces cleaned", "Additional attention to edges, corners, doors, and trim", "Bathroom fixtures detailed for an empty-home reset"],
  },
  bedrooms: {
    title: "Bedrooms",
    subtitle: "Surfaces, presentation + floors",
    icon: "/icons/bedroom.png",
    routine: ["Accessible surfaces dusted", "Furniture exteriors dusted", "Mirrors cleaned", "Bed neatly made when linens are already on the bed", "Floor vacuumed and/or mopped", "Trash emptied and liner replaced when available", "Light general straightening"],
    deep: ["Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to accessible ledges, edges, and buildup"],
    move: ["Accessible surfaces cleaned in empty rooms", "Baseboards, doors, frames, and trim detailed", "Floors and accessible edges thoroughly cleaned"],
  },
  living: {
    title: "Living Areas",
    subtitle: "Furniture, décor, surfaces + floors",
    icon: "/icons/services.png",
    routine: ["Accessible surfaces and furniture exteriors dusted", "Tables and reachable décor dusted", "Mirrors cleaned", "Floor vacuumed and/or mopped", "Trash emptied and liner replaced when available", "Light general straightening"],
    deep: ["Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to accessible ledges, edges, and buildup"],
    move: ["Accessible surfaces cleaned in empty living areas", "Baseboards, doors, frames, and trim detailed", "Floors and accessible edges thoroughly cleaned"],
  },
};

const serviceNames: Record<ServiceKey, string> = { routine: "Routine", deep: "Deep", move: "Move-In / Move-Out" };
const serviceIcons: Record<ServiceKey, BrandIconName> = { routine: "routine-clean", deep: "deep-clean", move: "move-in-out" };

const hotspots: Record<RoomKey, { x: string; y: string }> = {
  bedrooms: { x: "28%", y: "32%" },
  living: { x: "51%", y: "37%" },
  kitchen: { x: "46%", y: "62%" },
  bathrooms: { x: "75%", y: "58%" },
};

export default function ServiceScope() {
  const [service, setService] = useState<ServiceKey>("routine");
  const [room, setRoom] = useState<RoomKey>("kitchen");
  const selected = rooms[room];
  const extras = service === "routine" ? [] : selected[service];

  return (
    <section className="scope-section scope-explorer" id="whats-included" aria-labelledby="scope-title">
      <div className="scope-heading">
        <p className="eyebrow">The Details</p>
        <h2 id="scope-title">See exactly what happens in every room.</h2>
        <p>Select a service level and then select a room directly on the home. The scope changes with your selection so you can understand what is included before you book.</p>
      </div>

      <div className="scope-explorer-controls" aria-label="Choose a service level">
        <span>Service Levels</span>
        <div className="scope-service-tabs" role="tablist" aria-label="Cleaning service level">
          {(Object.keys(serviceNames) as ServiceKey[]).map((key) => (
            <button key={key} type="button" role="tab" aria-selected={service === key} className={`scope-service-tab ${service === key ? "active" : ""}`} onClick={() => setService(key)}>
              <BrandIcon name={serviceIcons[key]} />
              <span>{serviceNames[key]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="scope-explorer-shell detailed-floorplan-shell">
        <div className="detailed-floorplan" aria-label="Interactive furnished home floor plan. Select a room to view its cleaning scope.">
          <div className="floorplan-instruction"><span>Interactive home</span><strong>Select a room</strong></div>
          <img src="/ccr-interactive-floorplan.png" alt="Detailed furnished residential floor plan with bedrooms, bathrooms, living area, kitchen, laundry and outdoor space" />
          {(Object.keys(hotspots) as RoomKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className={`floorplan-hotspot ${room === key ? "active" : ""}`}
              style={{ left: hotspots[key].x, top: hotspots[key].y }}
              aria-pressed={room === key}
              aria-label={`View ${rooms[key].title} scope`}
              onClick={() => setRoom(key)}
            >
              <span className="hotspot-dot" />
              <span className="hotspot-label">{rooms[key].title}</span>
            </button>
          ))}
          <div className="floorplan-status"><span>Selected</span><strong>{selected.title}</strong><small>{serviceNames[service]} service</small></div>
        </div>

        <div className="scope-detail" aria-live="polite">
          <div className="scope-detail-title">
            <img src={selected.icon} alt="" />
            <div><span>{serviceNames[service]} · {selected.title}</span><h3>{selected.title}</h3><p>{selected.subtitle}</p></div>
          </div>

          {service === "routine" ? (
            <p className="scope-level-explainer"><strong>Routine maintains an established clean.</strong> These are the tasks included in this room with a Routine service.</p>
          ) : (
            <p className="scope-level-explainer"><strong>{service === "deep" ? "Deep includes everything in Routine, plus:" : "Move-In / Move-Out includes the Routine foundation, adapted for an empty-home transition, plus:"}</strong></p>
          )}

          <div className="scope-columns">
            <div><span className="scope-list-label">{service === "routine" ? "Included" : "Routine foundation"}</span><ul>{selected.routine.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></div>
            {extras.length > 0 && <div className="scope-extra"><span className="scope-list-label">{service === "deep" ? "Deep additions" : "Transition additions"}</span><ul>{extras.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul></div>}
          </div>

          {service === "move" && <p className="scope-note">Move-In / Move-Out is designed for substantially empty properties. Inside refrigerators, ovens, cabinets, and drawers are included only when the applicable add-on or Deposit Ready Detail is confirmed.</p>}
        </div>
      </div>

      <div className="scope-clarity-note">
        <div><span>Why we show this</span><strong>Clear expectations protect the experience.</strong></div>
        <p>Different services include different levels of detail. Showing the room-by-room scope before booking helps prevent assumptions and makes it easier to choose the service that actually fits your home.</p>
        <a href="/service-policy">Complete service boundaries →</a>
      </div>
    </section>
  );
}
