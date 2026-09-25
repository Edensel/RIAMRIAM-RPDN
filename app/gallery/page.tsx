"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { X, ZoomIn, MapPin, Calendar, Tag, Download } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Peacebuilding" | "Women & Youth" | "Climate Resilience" | "Cross-Border Corridors" | "Community & Outreach";
  image: string;
  date: string;
  location: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Turkana Grassroots Peace Assembly",
    category: "Peacebuilding",
    image: "/images/turkana_peace_dialogue.png",
    date: "August 2026",
    location: "Lodwar Municipality, Turkana County",
    description: "Traditional kraal elders, youth leaders, and local authorities gathering under the historic peace acacia tree to resolve pasture management disputes."
  },
  {
    id: "2",
    title: "Ateker Cross-Border Coexistence Pact",
    category: "Cross-Border Corridors",
    image: "/images/hero_turkana.png",
    date: "October 2026",
    location: "Moroto Cluster (Kenya - Uganda)",
    description: "Turkana and Karimojong elders signing a historic dry-season grazing treaty, securing shared water points and peaceful borderland transit."
  },
  {
    id: "3",
    title: "Women Peace Circles: Champions of Community Reconciliation",
    category: "Women & Youth",
    image: "/images/story_women.png",
    date: "September 2026",
    location: "Lokichoggio, Turkana West",
    description: "Pastoralist women leaders undergoing advanced mediation and conflict prevention training, elevating women's voices in traditional kraal assemblies."
  },
  {
    id: "4",
    title: "Youth Peace Sports Brigade & Vocational Mentorship",
    category: "Women & Youth",
    image: "/images/story_youth.png",
    date: "July 2026",
    location: "Kapoeta Corridor (South Sudan Border)",
    description: "Uniting young pastoralists through cross-border peace football tournaments and micro-enterprise grants, offering sustainable alternatives to cattle rustling."
  },
  {
    id: "5",
    title: "Climate Resilience & Community Sand Dam Development",
    category: "Climate Resilience",
    image: "/images/story_climate.png",
    date: "May 2026",
    location: "Kerio Basin, Turkana County",
    description: "Constructing sand dams and dryland water harvesting infrastructure to relieve climate-induced resource stress and prevent water conflicts."
  },
  {
    id: "6",
    title: "Cross-Border Restitution & Animal Tracking Committee",
    category: "Peacebuilding",
    image: "/images/story_reconciliation.png",
    date: "June 2026",
    location: "Nyangatom - Turkana Borderland",
    description: "Joint elder and youth committees tracking lost livestock, preventing retaliatory raids, and restoring trust across international boundaries."
  },
  {
    id: "7",
    title: "Grassroots Peace Ambassadors: Field Advocacy & Mobilization",
    category: "Community & Outreach",
    image: "/images/gallery/merch_tshirt.png",
    date: "Field Operations 2026",
    location: "Lodwar & Regional Corridors",
    description: "Equipping local peace monitors and youth champions with official advocacy gear to lead peace caravans and facilitate kraal reconciliation."
  },
  {
    id: "8",
    title: "Sustainable Outreach Toolkits: Early Warning & Peace Dispatch",
    category: "Community & Outreach",
    image: "/images/gallery/merch_tote.png",
    date: "Field Operations 2026",
    location: "Turkana West Borderland",
    description: "Distributing eco-friendly field toolkits carrying early warning bulletins, civic education materials, and signed peace treaties to remote settlements."
  }
];

const categories = ["All", "Peacebuilding", "Women & Youth", "Climate Resilience", "Cross-Border Corridors", "Community & Outreach"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Header />
      
      <main className="bg-paper min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-bone border-b border-ink/10 py-20 lg:py-24">
          <div className="section-shell">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Visual Documentation</span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-ink max-w-4xl">
              Media &amp; Photo Gallery
            </h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-graphite/80 font-normal">
              Documenting peace dialogues, cross-border grazing treaties, women peace circles, youth sports brigades, and climate resilience projects across pastoral communities.
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16 lg:py-24">
          <div className="section-shell">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-ink/10 pb-6 mb-12">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-teal text-bone shadow-xs"
                        : "bg-bone text-graphite/80 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Photos Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setActiveLightbox(item)}
                  className="group relative flex flex-col rounded-2xl border border-ink/10 bg-paper overflow-hidden shadow-xs hover:shadow-soft transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-bone">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper/90 text-teal shadow-md transform group-hover:scale-110 transition-transform">
                        <ZoomIn className="h-6 w-6" />
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 rounded-md bg-ink/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-bone">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold text-ink leading-snug group-hover:text-teal transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-graphite/75 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-[11px] text-graphite/60 border-t border-ink/5 pt-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-clay" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="h-3.5 w-3.5 text-teal" />
                        {item.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20 text-graphite/60">
                <p className="text-lg">No photos found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
            onClick={() => setActiveLightbox(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-paper rounded-2xl overflow-hidden shadow-2xl border border-bone/20 text-ink"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-bone hover:bg-ink transition"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-[1.2fr_1fr]">
                {/* Image Container */}
                <div className="relative min-h-[320px] md:min-h-[480px] bg-black">
                  <Image
                    src={activeLightbox.image}
                    alt={activeLightbox.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Meta details */}
                <div className="p-8 flex flex-col justify-between bg-paper">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-md bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
                        <Tag className="h-3 w-3" />
                        {activeLightbox.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-ink leading-tight mb-4">
                      {activeLightbox.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-graphite/80 font-normal mb-6">
                      {activeLightbox.description}
                    </p>

                    <div className="space-y-3 border-t border-ink/10 pt-4 text-xs">
                      <div className="flex items-center gap-2 text-graphite/80">
                        <MapPin className="h-4 w-4 text-clay" />
                        <span className="font-semibold text-ink">Location:</span> {activeLightbox.location}
                      </div>
                      <div className="flex items-center gap-2 text-graphite/80">
                        <Calendar className="h-4 w-4 text-teal" />
                        <span className="font-semibold text-ink">Date:</span> {activeLightbox.date}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-ink/10 flex items-center justify-between">
                    <a
                      href={activeLightbox.image}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-teal px-4 py-2.5 text-xs font-semibold uppercase text-bone hover:bg-teal/90 transition"
                    >
                      <Download className="h-4 w-4" />
                      Download High-Res
                    </a>
                    <button
                      onClick={() => setActiveLightbox(null)}
                      className="text-xs font-semibold text-graphite hover:text-ink underline"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
