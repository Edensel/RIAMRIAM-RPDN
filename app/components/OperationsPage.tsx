"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

interface CorridorItem {
  title: string;
  badge: string;
  desc: string;
  focusAreas: string[];
  lat: number;
  lng: number;
}

const items: CorridorItem[] = [
  {
    title: "Network Headquarters (Lodwar)",
    badge: "Headquarters",
    desc: "Located in Lodwar Municipality, Turkana County, Kenya. Serves as the central command hub for conflict monitoring, early warning dispatch, policy coordination, and partnership administration.",
    focusAreas: ["Operational Command", "SMS early warning dispatch", "Youth vulnerability programs", "Partnership coordination"],
    lat: 3.116,
    lng: 35.597
  },
  {
    title: "Turkana-West Pokot Corridor",
    badge: "Inter-County Corridor",
    desc: "Bridges peace dialogues, joint resource-sharing agreements, and cooperative development initiatives between Turkana and West Pokot counties.",
    focusAreas: ["Resource sharing treaties", "Boundary conflict mitigation", "Kraal leader dialogues", "Drought response coordination"],
    lat: 1.85,
    lng: 35.25
  },
  {
    title: "Turkana-Baringo Corridor",
    badge: "Inter-County Corridor",
    desc: "Facilitates peace building, livestock tracking, and community reconciliation dialogues along the volatile Turkana-Baringo border.",
    focusAreas: ["Livestock theft tracking", "Joint border dialogues", "Shared pasture security", "Grassroots outreach"],
    lat: 1.15,
    lng: 36.00
  },
  {
    title: "Turkana-Samburu Corridor",
    badge: "Inter-County Corridor",
    desc: "Strengthens collaborative grazing pacts, traditional elder dispute resolution, and secure commercial routes between Turkana and Samburu communities.",
    focusAreas: ["Grazing path agreements", "Elder dispute councils", "Trade route protection", "Cooperative marketing"],
    lat: 1.95,
    lng: 36.60
  },
  {
    title: "Turkana-Marsabit Corridor",
    badge: "Inter-County Corridor",
    desc: "Coordinates peace building and community resilience dialogues across the dryland migration routes connecting Turkana and Marsabit counties.",
    focusAreas: ["Dryland migration management", "Water security collaboration", "Inter-county youth sports", "Community warning systems"],
    lat: 2.75,
    lng: 36.90
  },
  {
    title: "Kenya-Uganda Corridor (Karamoja Cluster)",
    badge: "Cross-Border Corridor",
    desc: "Manages regional peace infrastructure, cross-border pastoral migration treaties, and joint border peace markets between Turkana and Karimojong herders.",
    focusAreas: ["Dry-season grazing treaties", "Joint border peace markets", "Shared borehole access", "Cross-border security patrols"],
    lat: 2.53,
    lng: 34.67
  },
  {
    title: "Kenya-South Sudan Corridor (Toposa Corridor)",
    badge: "Cross-Border Corridor",
    desc: "Promotes cross-border animal theft monitoring, trade route security, and youth vocational mentorship between Turkana and Toposa communities.",
    focusAreas: ["Animal tracking and recovery", "Cross-border trade pathways", "Youth peace sports brigades", "Reconciliation councils"],
    lat: 4.77,
    lng: 33.59
  },
  {
    title: "Kenya-Ethiopia Corridor (Nyangatom & Dassanach)",
    badge: "Cross-Border Corridor",
    desc: "Secures traditional grazing agreements, kraal conflict resolution courts, and environmental resource sharing in the Omo River basin.",
    focusAreas: ["Traditional grazing governance", "Kraal conflict resolution courts", "Omo basin cooperation", "Elder-led security coordination"],
    lat: 4.80,
    lng: 36.05
  }
];

export default function OperationsPage() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // Load Leaflet dynamically on client side
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Check if Leaflet is already loaded
    if ((window as any).L) {
      setLeafletLoaded(true);
      return;
    }

    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    link.crossOrigin = "";
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.onload = () => {
      setLeafletLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
    };
  }, []);

  // Initialize and update Map
  useEffect(() => {
    if (!leafletLoaded) return;
    const L = (window as any).L;
    if (!L) return;

    // Create map if it doesn't exist
    if (!mapRef.current) {
      mapRef.current = L.map("map-container", {
        center: [3.0, 35.0],
        zoom: 7,
        zoomControl: true,
        scrollWheelZoom: false
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapRef.current);
    }

    const map = mapRef.current;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Create markers for each item
    items.forEach((item, idx) => {
      const isSelected = idx === selectedIdx;
      
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="relative flex items-center justify-center">
            <span class="absolute inline-flex h-8 w-8 animate-ping rounded-full ${isSelected ? 'bg-warm/40' : 'bg-teal/20'} opacity-75"></span>
            <div class="relative flex h-5 w-5 items-center justify-center rounded-full border border-bone shadow-md text-bone font-semibold text-[9px] ${isSelected ? 'bg-warm' : 'bg-teal'}">
              ${idx + 1}
            </div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const marker = L.marker([item.lat, item.lng], { icon: customIcon })
        .addTo(map)
        .on("click", () => {
          setSelectedIdx(idx);
        });
      
      marker.bindPopup(`<b style="font-family: var(--font-serif);">${item.title}</b><br/><span style="font-family: var(--font-sans); font-size: 11px;">${item.badge}</span>`);

      markersRef.current.push(marker);

      if (isSelected) {
        map.setView([item.lat, item.lng], idx === 0 ? 8.5 : 7.5, { animate: true, duration: 1 });
        marker.openPopup();
      }
    });

  }, [leafletLoaded, selectedIdx]);

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
  };

  return (
    <section id="where-we-work" className="border-y border-ink/10 bg-bone py-20 text-ink lg:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
        
        {/* Left Column: Corridor Selection & Details */}
        <div>
          <div className="max-w-[620px] text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Geographic Operations</span>
            <h2 className="font-serif mt-2 text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Regional Operations &amp; Cross-Border Corridors
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite/78 font-sans font-normal">
              RPDN establishes institutional infrastructure, dry-season peace corridors, and early warning dispatch systems across border clusters connecting Kenya, Uganda, South Sudan, and Ethiopia.
            </p>
          </div>

          {/* List of Corridors */}
          <div className="mt-8 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {items.map((item, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={item.title}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left flex flex-col gap-3 rounded-xl border p-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-transparent bg-teal text-bone shadow-soft -translate-y-0.5"
                      : "border-ink/10 bg-paper text-ink hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? "bg-paper/10 text-warm" : "bg-teal/5 text-teal"}`}>
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold leading-snug ${isActive ? "text-bone" : "text-ink"}`}>
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center justify-center rounded-md px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider whitespace-nowrap ${
                        isActive
                          ? "bg-paper/20 text-bone"
                          : "bg-clay/10 text-clay"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Expanded focus details for active corridor */}
                  {isActive && (
                    <div className="mt-3 border-t border-paper/10 pt-3 text-left space-y-3 animate-in fade-in duration-200">
                      <p className="text-xs leading-relaxed text-bone/90 font-sans font-normal">
                        {item.desc}
                      </p>
                      <div>
                        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-warm mb-1.5">Core Interventions</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.focusAreas.map(area => (
                            <div key={area} className="flex items-center gap-2 text-[11px] text-bone/85 font-sans font-normal">
                              <span className="h-1.5 w-1.5 rounded-full bg-warm shrink-0" />
                              <span>{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Map container */}
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full rounded-2xl border border-ink/10 bg-paper shadow-soft overflow-hidden h-[450px] lg:h-[600px]">
            {!leafletLoaded ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-bone gap-3">
                <span className="animate-spin text-teal text-3xl">⟳</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-graphite/60">Loading Interactive Map...</span>
              </div>
            ) : (
              <div id="map-container" className="w-full h-full z-0" />
            )}
          </div>
          <p className="mt-3 text-[10px] text-graphite/50 text-center font-sans font-normal">
            Map numbers indicate operational hubs. Click markers or sidebar items to inspect focus areas.
          </p>
        </div>

      </div>
    </section>
  );
}
