"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Layers } from "lucide-react";

interface CorridorItem {
  title: string;
  badge: string;
  desc: string;
  focusAreas: string[];
  lat: number;
  lng: number;
  color: string;
  countyName: string;
}

const items: CorridorItem[] = [
  {
    title: "Network Headquarters (Lodwar)",
    badge: "Headquarters",
    countyName: "Turkana County (HQ)",
    color: "#005F73", // Deep Teal
    desc: "Located in Lodwar Municipality, Turkana County, Kenya. Serves as the central command hub for conflict monitoring, early warning dispatch, policy coordination, and partnership administration.",
    focusAreas: ["Operational Command", "SMS early warning dispatch", "Youth vulnerability programs", "Partnership coordination"],
    lat: 3.116,
    lng: 35.597
  },
  {
    title: "Turkana-West Pokot Corridor",
    badge: "Inter-County Corridor",
    countyName: "West Pokot & Turkana",
    color: "#7B2CBF", // Vibrant Purple
    desc: "Bridges peace dialogues, joint resource-sharing agreements, and cooperative development initiatives between Turkana and West Pokot counties.",
    focusAreas: ["Resource sharing treaties", "Boundary conflict mitigation", "Kraal leader dialogues", "Drought response coordination"],
    lat: 1.85,
    lng: 35.25
  },
  {
    title: "Turkana-Baringo Corridor",
    badge: "Inter-County Corridor",
    countyName: "Baringo & Turkana",
    color: "#CA6702", // Terracotta Clay
    desc: "Facilitates peace building, livestock tracking, and community reconciliation dialogues along the volatile Turkana-Baringo border.",
    focusAreas: ["Livestock theft tracking", "Joint border dialogues", "Shared pasture security", "Grassroots outreach"],
    lat: 1.15,
    lng: 36.00
  },
  {
    title: "Turkana-Samburu Corridor",
    badge: "Inter-County Corridor",
    countyName: "Samburu & Turkana",
    color: "#EE9B00", // Amber Gold
    desc: "Strengthens collaborative grazing pacts, traditional elder dispute resolution, and secure commercial routes between Turkana and Samburu communities.",
    focusAreas: ["Grazing path agreements", "Elder dispute councils", "Trade route protection", "Cooperative marketing"],
    lat: 1.95,
    lng: 36.60
  },
  {
    title: "Turkana-Marsabit Corridor",
    badge: "Inter-County Corridor",
    countyName: "Marsabit & Turkana",
    color: "#0A9396", // Cyan Turquoise
    desc: "Coordinates peace building and community resilience dialogues across the dryland migration routes connecting Turkana and Marsabit counties.",
    focusAreas: ["Dryland migration management", "Water security collaboration", "Inter-county youth sports", "Community warning systems"],
    lat: 2.75,
    lng: 36.90
  },
  {
    title: "Kenya-Uganda Corridor (Karamoja Cluster)",
    badge: "Cross-Border Corridor",
    countyName: "Kenya - Uganda Border",
    color: "#2B9348", // Emerald Forest
    desc: "Manages regional peace infrastructure, cross-border pastoral migration treaties, and joint border peace markets between Turkana and Karimojong herders.",
    focusAreas: ["Dry-season grazing treaties", "Joint border peace markets", "Shared borehole access", "Cross-border security patrols"],
    lat: 2.53,
    lng: 34.67
  },
  {
    title: "Kenya-South Sudan Corridor (Toposa Corridor)",
    badge: "Cross-Border Corridor",
    countyName: "Kenya - South Sudan Border",
    color: "#9B2226", // Crimson Red
    desc: "Promotes cross-border animal theft monitoring, trade route security, and youth vocational mentorship between Turkana and Toposa communities.",
    focusAreas: ["Animal tracking and recovery", "Cross-border trade pathways", "Youth peace sports brigades", "Reconciliation councils"],
    lat: 4.77,
    lng: 33.59
  },
  {
    title: "Kenya-Ethiopia Corridor (Nyangatom & Dassanach)",
    badge: "Cross-Border Corridor",
    countyName: "Kenya - Ethiopia Border",
    color: "#1D3557", // Deep Azure
    desc: "Secures traditional grazing agreements, kraal conflict resolution courts, and environmental resource sharing in the Omo River basin.",
    focusAreas: ["Traditional grazing governance", "Kraal conflict resolution courts", "Omo basin cooperation", "Elder-led security coordination"],
    lat: 4.80,
    lng: 36.05
  }
];

const countryRegions = [
  {
    name: "Kenya",
    color: "#059669", // Emerald Green
    fillColor: "#059669",
    bounds: [[1.0, 34.0], [4.5, 34.0], [4.5, 38.0], [1.0, 38.0]],
    label: "Kenya (Regional Core)"
  },
  {
    name: "Uganda",
    color: "#D97706", // Amber Yellow
    fillColor: "#D97706",
    bounds: [[1.4, 33.5], [4.0, 33.5], [4.0, 34.8], [1.4, 34.8]],
    label: "Uganda (Karamoja)"
  },
  {
    name: "South Sudan",
    color: "#DC2626", // Crimson Red
    fillColor: "#DC2626",
    bounds: [[4.1, 32.5], [5.8, 32.5], [5.8, 35.0], [4.1, 35.0]],
    label: "South Sudan (Toposa)"
  },
  {
    name: "Ethiopia",
    color: "#2563EB", // Royal Azure Blue
    fillColor: "#2563EB",
    bounds: [[4.5, 35.2], [6.2, 35.2], [6.2, 37.5], [4.5, 37.5]],
    label: "Ethiopia (Omo Basin)"
  }
];

export default function OperationsPage() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [showLegend, setShowLegend] = useState(true);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const polylinesRef = useRef<any[]>([]);
  const overlaysRef = useRef<any[]>([]);

  // Load Leaflet dynamically on client side
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    if ((window as any).L) {
      setLeafletLoaded(true);
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    link.crossOrigin = "";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.onload = () => {
      setLeafletLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  // Initialize and update Map with custom colors per corridor & country
  useEffect(() => {
    if (!leafletLoaded) return;
    const L = (window as any).L;
    if (!L) return;

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

      // Render Country Region overlays with differing country colors
      countryRegions.forEach((country) => {
        const polygon = L.polygon(country.bounds, {
          color: country.color,
          weight: 2,
          dashArray: "5, 7",
          fillColor: country.fillColor,
          fillOpacity: 0.08,
          interactive: true
        }).addTo(mapRef.current);

        polygon.bindTooltip(`<b>${country.label}</b>`, {
          permanent: false,
          direction: "center",
          className: "country-map-tooltip"
        });
        overlaysRef.current.push(polygon);
      });
    }

    const map = mapRef.current;

    // Clear existing markers and corridor polylines
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];
    polylinesRef.current.forEach(p => p.remove());
    polylinesRef.current = [];

    const hqPos = [items[0].lat, items[0].lng];

    // Draw connecting corridor lines to HQ using each corridor's specific color
    items.forEach((item, idx) => {
      if (idx > 0) {
        const isSelected = idx === selectedIdx;
        const line = L.polyline([hqPos, [item.lat, item.lng]], {
          color: item.color,
          weight: isSelected ? 4 : 2,
          opacity: isSelected ? 0.95 : 0.55,
          dashArray: isSelected ? undefined : "6, 8"
        }).addTo(map);

        polylinesRef.current.push(line);
      }
    });

    // Create markers with specific color per inter-county corridor
    items.forEach((item, idx) => {
      const isSelected = idx === selectedIdx;
      
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="relative flex items-center justify-center">
            <span class="absolute inline-flex h-8 w-8 animate-ping rounded-full opacity-75" style="background-color: ${item.color}40;"></span>
            <div class="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-bone shadow-lg font-bold text-[10px] text-bone transition-transform duration-300 ${isSelected ? 'scale-125 ring-2 ring-offset-1 ring-ink' : ''}" style="background-color: ${item.color};">
              ${idx + 1}
            </div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([item.lat, item.lng], { icon: customIcon })
        .addTo(map)
        .on("click", () => {
          setSelectedIdx(idx);
        });
      
      marker.bindPopup(`
        <div style="font-family: var(--font-sans); padding: 2px;">
          <b style="color: ${item.color}; font-size: 13px;">${item.title}</b><br/>
          <span style="font-size: 11px; font-weight: 600; color: #4B5563;">${item.badge} • ${item.countyName}</span>
        </div>
      `);

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

          {/* List of Corridors with Specific Inter-county Colors */}
          <div className="mt-8 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {items.map((item, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={item.title}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left flex flex-col gap-3 rounded-xl border p-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-transparent bg-paper shadow-md -translate-y-0.5 ring-2"
                      : "border-ink/10 bg-paper text-ink hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                  style={{
                    borderColor: isActive ? item.color : undefined,
                    boxShadow: isActive ? `0 4px 20px -2px ${item.color}30` : undefined
                  }}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg text-white font-bold flex items-center justify-center h-8 w-8 text-xs shrink-0 shadow-xs"
                        style={{ backgroundColor: item.color }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-snug text-ink">
                          {item.title}
                        </p>
                        <p className="text-[11px] font-normal text-graphite/70">
                          {item.countyName}
                        </p>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center justify-center rounded-md px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider whitespace-nowrap text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Expanded focus details for active corridor */}
                  {isActive && (
                    <div className="mt-3 border-t border-ink/10 pt-3 text-left space-y-3 animate-in fade-in duration-200">
                      <p className="text-xs leading-relaxed text-graphite/90 font-sans font-normal">
                        {item.desc}
                      </p>
                      <div>
                        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-clay mb-1.5">Core Interventions</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.focusAreas.map(area => (
                            <div key={area} className="flex items-center gap-2 text-[11px] text-ink/85 font-sans font-normal">
                              <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
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
        <div className="w-full flex flex-col items-center sticky top-28">
          <div className="relative w-full rounded-2xl border border-ink/10 bg-paper shadow-soft overflow-hidden h-[500px] lg:h-[620px]">
            {!leafletLoaded ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-bone gap-3">
                <span className="animate-spin text-teal text-3xl">⟳</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-graphite/60">Loading Interactive Map...</span>
              </div>
            ) : (
              <>
                <div id="map-container" className="w-full h-full z-0" />
                
                {/* Floating Map Legend */}
                <div className="absolute top-3 right-3 z-10 bg-paper/95 backdrop-blur-md rounded-xl border border-ink/10 p-3 shadow-md text-ink max-w-[220px]">
                  <button 
                    onClick={() => setShowLegend(!showLegend)}
                    className="flex items-center justify-between w-full text-[11px] font-semibold uppercase tracking-wider text-graphite hover:text-ink gap-2"
                  >
                    <span className="flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-teal" />
                      Map Colors
                    </span>
                    <span className="text-[10px] text-clay">{showLegend ? "Hide" : "Show"}</span>
                  </button>

                  {showLegend && (
                    <div className="mt-2.5 pt-2 border-t border-ink/10 space-y-2 text-[10px] animate-in fade-in duration-200">
                      <div>
                        <p className="font-semibold text-clay text-[9px] uppercase tracking-wider mb-1">Countries</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {countryRegions.map(c => (
                            <div key={c.name} className="flex items-center gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-xs border border-ink/20 shrink-0" style={{ backgroundColor: c.color }} />
                              <span className="truncate text-graphite/90 font-medium">{c.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-1.5 border-t border-ink/10">
                        <p className="font-semibold text-clay text-[9px] uppercase tracking-wider mb-1">Inter-County Corridors</p>
                        <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                          {items.map((item, i) => (
                            <div key={item.title} className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                              <span className="truncate text-graphite/90 font-normal">{i + 1}. {item.countyName}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <p className="mt-3 text-[10px] text-graphite/60 text-center font-sans font-normal">
            Distinct colors highlight inter-county corridors &amp; country regions (Kenya, Uganda, S. Sudan, Ethiopia). Click markers to inspect details.
          </p>
        </div>

      </div>
    </section>
  );
}
