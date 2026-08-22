"use client";

import { useState } from "react";
import BrandIcon, { type BrandIconName } from "./brand-icon";

type RoomKey = "kitchen" | "bathrooms" | "bedrooms" | "living";
type ServiceKey = "routine" | "deep" | "move";

const rooms: Record<RoomKey, { title: string; icon: string; routine: string[]; deep: string[]; move: string[] }> = {
  kitchen: {
    title: "Kitchen",
    icon: "/icons/kitchen.png",
    routine: ["Countertops and backsplash wiped", "Sink and faucet cleaned", "Appliance exteriors wiped", "Microwave interior and exterior cleaned", "Cabinet fronts spot-cleaned", "Accessible surfaces dusted and wiped", "Floor vacuumed and mopped", "Trash emptied and liner replaced when available"],
    deep: ["Cabinet fronts fully wiped", "Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to buildup on accessible surfaces and fixtures"],
    move: ["Accessible shelving and surfaces cleaned in an empty kitchen", "Cabinet and drawer exteriors detailed", "Additional attention to edges, corners, doors, and trim"],
  },
  bathrooms: {
    title: "Bathrooms",
    icon: "/icons/bathroom.png",
    routine: ["Toilet cleaned and sanitized", "Tub and/or shower cleaned", "Sink, faucet, and vanity cleaned", "Mirrors cleaned", "Accessible fixtures and surfaces dusted and wiped", "Floor vacuumed and mopped", "Trash emptied and liner replaced when available"],
    deep: ["Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to soap residue and buildup", "Accessible bathroom fixtures and surfaces detailed"],
    move: ["Empty vanities and accessible surfaces cleaned", "Additional attention to edges, corners, doors, and trim", "Bathroom fixtures detailed for an empty-home reset"],
  },
  bedrooms: {
    title: "Bedrooms",
    icon: "/icons/bedroom.png",
    routine: ["Accessible surfaces dusted", "Furniture exteriors dusted", "Mirrors cleaned", "Bed neatly made when linens are already on the bed", "Floor vacuumed and/or mopped", "Trash emptied and liner replaced when available", "Light general straightening"],
    deep: ["Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to accessible ledges, edges, and buildup"],
    move: ["Accessible surfaces cleaned in empty rooms", "Baseboards, doors, frames, and trim detailed", "Floors and accessible edges thoroughly cleaned"],
  },
  living: {
    title: "Living Areas",
    icon: "/icons/services.png",
    routine: ["Accessible surfaces and furniture exteriors dusted", "Tables and reachable décor dusted", "Mirrors cleaned", "Floor vacuumed and/or mopped", "Trash emptied and liner replaced when available", "Light general straightening"],
    deep: ["Baseboards detailed", "Doors, frames, and switch plates detailed", "Additional attention to accessible ledges, edges, and buildup"],
    move: ["Accessible surfaces cleaned in empty living areas", "Baseboards, doors, frames, and trim detailed", "Floors and accessible edges thoroughly cleaned"],
  },
};

const serviceNames: Record<ServiceKey, string> = { routine: "Routine Clean", deep: "Deep Clean", move: "Move-In / Move-Out" };
const serviceIcons: Record<ServiceKey, BrandIconName> = { routine: "routine-clean", deep: "deep-clean", move: "move-in-out" };

export default function ServiceScope() {
  const [service, setService] = useState<ServiceKey>("routine");
  const [room, setRoom] = useState<RoomKey>("kitchen");
  const selected = rooms[room];
  const extras = service === "routine" ? [] : selected[service];

  return (
    <section className="scope-section" id="whats-included" aria-labelledby="scope-title">
      <div className="scope-heading">
        <p className="eyebrow">Exactly what your cleaning includes</p>
        <h2 id="scope-title">Clear scope. No guessing.</h2>
        <p>Choose a service, then a room. The checklist below is the service standard we use for customers and cleaning professionals.</p>
      </div>

      <div className="scope-service-tabs" role="tablist" aria-label="Cleaning service">
        {(Object.keys(serviceNames) as ServiceKey[]).map((key) => (
          <button key={key} type="button" className={`scope-service-tab ${service === key ? "active" : ""}`} onClick={() => setService(key)}><BrandIcon name={serviceIcons[key]} />{serviceNames[key]}</button>
        ))}
      </div>

      <div className="scope-room-tabs" aria-label="Choose a room">
        {(Object.keys(rooms) as RoomKey[]).map((key) => (
          <button key={key} type="button" className={room === key ? "active" : ""} onClick={() => setRoom(key)}>
            <img src={rooms[key].icon} alt="" aria-hidden="true" /><span>{rooms[key].title}</span>
          </button>
        ))}
      </div>

      <div className="scope-detail">
        <div className="scope-detail-title"><img src={selected.icon} alt="" /><div><span>{serviceNames[service]}</span><h3>{selected.title}</h3></div></div>
        {service !== "routine" && <p className="scope-plus"><strong>Everything in Routine Clean, plus:</strong></p>}
        <div className="scope-columns">
          <ul>{selected.routine.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
          {extras.length > 0 && <ul className="scope-extra">{extras.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul>}
        </div>
        {service === "move" && <p className="scope-note">Move-In / Move-Out Cleaning is designed for substantially empty properties. Inside refrigerators, ovens, cabinets, and drawers are included only when the applicable add-on or Deposit Ready Detail is confirmed.</p>}
      </div>

      <aside className="scope-boundaries">
        <div><strong>Service boundaries</strong><p>Only tasks listed for your confirmed service or purchased as an add-on are included. Marketing photographs and general descriptions do not expand the booked scope.</p></div>
        <div><strong>Interior + safely reachable only</strong><p>We do not perform exterior building cleaning or work requiring tall ladders, extension ladders, scaffolding, or unsafe elevated access.</p></div>
        <div><strong>Health + provider safety</strong><p>We do not clean pet cages or animal waste, biohazards, bodily fluids, active infestations, hazardous materials, or conditions that present a reasonable health, safety, security, or property-damage concern.</p></div>
        <div><strong>Cleaning professionals are dedicated to cleaning</strong><p>Children, dependent adults, elderly persons requiring care, and animals may not be left in a provider’s care or supervision. Providers may decline, pause, or stop service for legitimate safety, security, harassment, or working-condition concerns.</p></div>
      </aside>

      <div className="scope-change-policy">
        <h3>Need to add something after we arrive?</h3>
        <p>Life happens, and we will make every reasonable effort to accommodate additional needs. Cleaning professionals do not quote prices, provide estimates, negotiate charges, collect payment, or independently authorize added work. Request changes through the client app, client portal, or by calling Charleston Clean Routine. We will confirm any price adjustment and whether the request can be accommodated. Same-day additions cannot be guaranteed.</p>
        <a href="/service-policy">Read the complete Service Policy →</a>
      </div>
    </section>
  );
}
