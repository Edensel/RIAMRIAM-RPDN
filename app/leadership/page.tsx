"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Briefcase, Award } from "lucide-react";

interface Leader {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  gradient: string;
  photo?: string;
  category: "board" | "secretariat" | "advisory";
  objectPosition?: string;
}

const leaders: Leader[] = [
  {
    name: "Peter Eripete",
    role: "Chairman",
    bio: "Distinguished public servant and national intelligence expert with extensive experience in conflict analysis, peace negotiation, security management, and cross-border peace initiatives.",
    tags: ["National Security", "Conflict Analysis", "Peace Negotiation"],
    gradient: "from-teal to-primary",
    photo: "/images/Mr. Peter Eripete.jpeg",
    category: "board"
  },
  {
    name: "David Ateyo",
    role: "Vice Chairman",
    bio: "Former teacher and founder of the original RIAMRIAM initiative with experience in NGO management, civic engagement, and peace education.",
    tags: ["Civic Engagement", "NGO Management", "Peace Education"],
    gradient: "from-warm to-primary",
    category: "board"
  },
  {
    name: "Rebecca Ekuwam",
    role: "Treasurer",
    bio: "Diplomat and peace advocate experienced in embassy service, community outreach, conflict resolution, resource mobilization, and women and youth empowerment initiatives.",
    tags: ["Diplomacy", "Conflict Resolution", "Women Empowerment"],
    gradient: "from-teal to-warm",
    photo: "/images/Rebecca Ekuwam.jpeg",
    category: "board"
  },
  {
    name: "A F Losikiria, HSC",
    role: "CEO / Secretary",
    bio: "Former Sub-County Administrator and former CEC Lands with experience in governance, land management, and institutional development. Currently serves as CEO of RPDN.",
    tags: ["Executive Leadership", "Public Administration", "Land Governance"],
    gradient: "from-teal to-primary",
    photo: "/images/Alexander .F. Losikiria.jpeg",
    category: "secretariat"
  },
  {
    name: "Christopher Eregae",
    role: "Vice Secretary",
    bio: "Teacher and community mobilizer experienced in grassroots coordination, youth engagement, and dialogue facilitation.",
    tags: ["Grassroots Mobilization", "Youth Engagement", "Dialogue Facilitation"],
    gradient: "from-warm to-primary",
    photo: "/images/Christopher Eregae.jpeg",
    category: "board"
  },
  {
    name: "Peter L Emuria",
    role: "Director",
    bio: "Community leader and governance advocate with expertise in dryland livelihoods, climate resilience, and local resource management in ASAL regions.",
    tags: ["ASAL Governance", "Climate Resilience", "Pastoral Livelihoods"],
    gradient: "from-teal to-warm",
    photo: "/images/Peter L Emuria.jpeg",
    category: "advisory",
    objectPosition: "object-top"
  },
  {
    name: "Jane Apetet Nashida",
    role: "Director",
    bio: "Community development practitioner and educator with expertise in peace and development, youth and women mentorship, and advocacy for vulnerable groups.",
    tags: ["Community Development", "Youth Mentorship", "Vulnerable Advocacy"],
    gradient: "from-warm to-teal",
    photo: "/images/Jane Apetet Nashida.jpeg",
    category: "advisory"
  },
  {
    name: "Seline Lociam",
    role: "Director",
    bio: "Community leader and women’s empowerment advocate experienced in grassroots mobilization, peacebuilding, resource mobilization, and resilience programs among pastoralist communities.",
    tags: ["Gender Inclusion", "Resource Mobilization", "Grassroots Peace"],
    gradient: "from-teal to-primary",
    photo: "/images/Seline Asimit Locham.jpeg",
    category: "advisory"
  },
  {
    name: "Joseph Jumapili Elim",
    role: "Director",
    bio: "Former CEO of RIAMRIAM, teacher, and missionary with expertise in faith-based leadership, peacebuilding, and community development.",
    tags: ["Faith-based Leadership", "Community Development", "Peacebuilding"],
    gradient: "from-primary to-teal",
    photo: "/images/Joseph Jumapili Elim.jpeg",
    category: "advisory"
  },
  {
    name: "Hon. Immanuel Isaac Ichor Imana",
    role: "Director",
    bio: "A seasoned peacebuilding expert, political advisor, and philanthropist experienced in conflict resolution, community mediation, humanitarian support, and youth and community empowerment initiatives.",
    tags: ["Conflict Resolution", "Community Mediation", "Humanitarian Support"],
    gradient: "from-warm to-primary",
    photo: "/images/Hon. Immanuel Isaac Ichor Imana.jpeg",
    category: "advisory"
  }
];

const governanceStructure = [
  {
    level: "01",
    id: "board" as const,
    title: "Board of Directors",
    desc: "Provides strategic guidance, fiduciary oversight, and policy formulation. Composed of prominent leaders from peacebuilding, governance, and development sectors.",
    icon: Shield,
    color: "text-clay border-clay/20 bg-clay/5"
  },
  {
    level: "02",
    id: "secretariat" as const,
    title: "Executive Secretariat",
    desc: "Headed by the CEO, manages the organization's administration, handles strategic partnerships, and oversees day-to-day operations.",
    icon: Briefcase,
    color: "text-teal border-teal/20 bg-teal/5"
  },
  {
    level: "03",
    id: "advisory" as const,
    title: "Advisory Council",
    desc: "A specialized panel of regional experts providing subject-matter counsel, monitoring and evaluation oversight, and strategic guidance to align projects with international standards.",
    icon: Award,
    color: "text-warm border-warm/20 bg-warm/5"
  }
];

function getInitials(name: string) {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function LeadershipPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "board" | "secretariat" | "advisory">("all");
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isGridExpanded, setIsGridExpanded] = useState<boolean>(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedLeader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedLeader]);

  const handleCategoryChange = (cat: "all" | "board" | "secretariat" | "advisory") => {
    setActiveCategory(cat);
    setIsGridExpanded(false);
  };

  const filteredLeaders = activeCategory === "all"
    ? leaders
    : leaders.filter((leader) => leader.category === activeCategory);

  const displayedLeaders = isGridExpanded ? filteredLeaders : filteredLeaders.slice(0, 8);
  const hasMoreLeaders = filteredLeaders.length > 8;

  return (
    <>
      <Header />

      <main className="bg-bone min-h-screen text-ink">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-forest py-20 text-bone lg:py-28">
          <div className="absolute inset-0 -z-30 bg-gradient-to-r from-ink/95 via-ink/80 to-primary/95" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          <div className="section-shell">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Governance &amp; Leadership</p>
            <h1 className="text-[48px] font-semibold leading-tight tracking-normal sm:text-6xl">
              Driving Peace Through
              <br />
              Institutional Integrity.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/85 font-normal">
              RIAMRIAM maintains a transparent, inclusive, and accountable governance structure, 
              pooling decades of public service, diplomatic, and grassroots experience across the Ateker corridor.
            </p>
          </div>
        </section>

        {/* Governance Structure Section */}
        <section className="py-20 lg:py-28 bg-paper border-b border-ink/10">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-clay">How We Function</p>
              <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl text-ink">
                Our 3-Tiered Governance Model
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/75 font-normal">
                Click any section below to filter and view the dedicated team members of that governance branch.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {governanceStructure.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeCategory === item.id;
                return (
                  <button 
                    key={item.level} 
                    onClick={() => handleCategoryChange(isActive ? "all" : item.id)}
                    className={`flex flex-col text-left justify-between rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:scale-[0.99] cursor-pointer ${
                      isActive 
                        ? "border-warm bg-bone ring-2 ring-warm/50 shadow-soft" 
                        : "border-ink/10 bg-bone/40 hover:bg-bone/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-graphite/40">{item.level}</span>
                        <div className={`p-2 rounded-lg border ${item.color.split(" ")[0]} ${item.color.split(" ")[1]} ${item.color.split(" ")[2]}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-lg font-semibold leading-tight text-ink">{item.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-graphite/70 font-normal">{item.desc}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-clay">
                      {isActive ? "Showing members ➔" : "Click to view members ➔"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founders and Leadership Section */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-clay">Our Leaders</p>
                <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl text-ink">
                  Founders &amp; Leadership Profiles
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite/75 font-normal">
                  Representing a unique alliance of seasoned intelligence directors, county administrators, community educators, 
                  and diplomatic advisors united for regional cohesion.
                </p>
              </div>

              {/* Reset filter button if active */}
              {activeCategory !== "all" && (
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="self-start md:self-auto rounded bg-clay/10 border border-clay/20 px-3 py-1.5 text-xs font-semibold text-clay transition hover:bg-clay/20 cursor-pointer"
                >
                  Clear Filter ×
                </button>
              )}
            </div>

            {/* Tab Bar Filters */}
            <div className="mt-10 flex flex-wrap gap-2 border-b border-ink/10 pb-4">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-primary text-bone shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                All Profiles ({leaders.length})
              </button>
              <button
                onClick={() => handleCategoryChange("board")}
                className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === "board"
                    ? "bg-clay text-bone shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                Board of Directors ({leaders.filter((l) => l.category === "board").length})
              </button>
              <button
                onClick={() => handleCategoryChange("secretariat")}
                className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === "secretariat"
                    ? "bg-teal text-bone shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                Executive Secretariat ({leaders.filter((l) => l.category === "secretariat").length})
              </button>
              <button
                onClick={() => handleCategoryChange("advisory")}
                className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === "advisory"
                    ? "bg-warm text-bone shadow"
                    : "bg-paper/40 text-graphite hover:bg-paper/80 border border-ink/5"
                }`}
              >
                Advisory Council ({leaders.filter((l) => l.category === "advisory").length})
              </button>
            </div>

            {/* Grid of Profile Cards */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedLeaders.map((leader) => (
                <div 
                  key={leader.name} 
                  onClick={() => setSelectedLeader(leader)}
                  className="group relative flex flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm transition-all duration-300 hover:shadow-soft hover:-translate-y-1 cursor-pointer hover:border-warm/30"
                >
                  <div>
                    {/* Header with Circular Avatar */}
                    <div className="flex items-center gap-4 border-b border-ink/5 pb-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full shadow-inner border border-ink/10 bg-bone">
                        {leader.photo ? (
                          <img
                            src={leader.photo}
                            alt={leader.name}
                            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${leader.objectPosition || "object-center"}`}
                          />
                        ) : (
                          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${leader.gradient} text-sm font-semibold text-bone`}>
                            {getInitials(leader.name)}
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <h3 className="font-serif text-base font-semibold leading-tight text-ink transition-colors group-hover:text-teal">
                          {leader.name}
                        </h3>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-clay/90">
                          {leader.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio - Left Aligned to fix spacing */}
                    <p className="mt-4 text-xs leading-relaxed text-graphite/75 text-left font-normal">
                      {leader.bio}
                    </p>

                    {/* Skill/Capability Badges in a single line */}
                    <div className="mt-4 pt-3 border-t border-ink/5 flex flex-row flex-nowrap items-center gap-1.5 overflow-hidden">
                      {leader.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="rounded bg-bone px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-wider text-teal/80 border border-teal/5 truncate max-w-[90px]"
                          title={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-4 flex items-center justify-end text-[9px] font-semibold uppercase tracking-wider text-teal group-hover:translate-x-0.5 transition-transform">
                    View Profile ➔
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Button */}
            {hasMoreLeaders && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setIsGridExpanded(!isGridExpanded)}
                  className="inline-flex items-center gap-2 rounded-lg border border-teal/20 bg-teal/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-teal transition hover:bg-teal/10 hover:border-teal/30 active:scale-[0.98] cursor-pointer"
                >
                  {isGridExpanded ? "Show Less ▲" : `Show More (${filteredLeaders.length - 8}) ▼`}
                </button>
              </div>
            )}

            {filteredLeaders.length === 0 && (
              <div className="mt-12 text-center py-16 bg-[#faf6ed]/20 rounded-xl border border-dashed border-ink/10">
                <p className="text-sm text-graphite/60 font-semibold">No leaders found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Institutional Capacity Callout */}
        <section className="bg-primary py-20 lg:py-28 text-bone">
          <div className="section-shell">
            <div className="rounded-2xl border border-bone/20 bg-ink/40 p-8 md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Institutional Capacity</span>
                <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
                  A credible, culturally grounded foundation.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone/80 font-normal">
                  Our founders collectively bring expertise in governance, peacebuilding, security, education, humanitarian action, 
                  diplomacy, and grassroots mobilization. RPDN operates with robust compliance, participatory decision-making, 
                  and conflict-sensitive frameworks to ensure regional legitimacy.
                </p>
              </div>
              <div className="mt-8 shrink-0 lg:mt-0">
                <a 
                  href="mailto:info@riamriam.org" 
                  className="inline-flex rounded-lg bg-warm px-6 py-4 text-xs font-semibold uppercase text-ink transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Collaborate with our board
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detailed View Modal */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setSelectedLeader(null)}
          />
          
          {/* Modal Box */}
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-paper border border-ink/15 shadow-2xl animate-in zoom-in-95 duration-200 ease-out z-10 max-h-[90vh] flex flex-col">
            {/* Scrollable container */}
            <div className="overflow-y-auto p-6 md:p-8">
              <button 
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-paper text-graphite hover:bg-ink/5 hover:text-ink transition border border-ink/10 shadow-sm cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid gap-6 md:grid-cols-[1.1fr_1.9fr] items-start pt-4 md:pt-0">
                {/* Passport Portrait on Modal */}
                <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto md:mx-0 overflow-hidden rounded-xl bg-bone border border-ink/10 shadow-md">
                  {selectedLeader.photo ? (
                    <img
                      src={selectedLeader.photo}
                      alt={selectedLeader.name}
                      className={`h-full w-full object-cover ${selectedLeader.objectPosition || "object-center"}`}
                    />
                  ) : (
                    <div className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${selectedLeader.gradient} text-bone`}>
                      <span className="font-serif text-4xl font-semibold">{getInitials(selectedLeader.name)}</span>
                      <span className="mt-2 text-[11px] uppercase tracking-wider font-semibold opacity-85">Photo Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="text-left flex flex-col h-full justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-clay">
                      {selectedLeader.role}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink mt-1">
                      {selectedLeader.name}
                    </h2>
                    
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal border border-teal/10">
                      {selectedLeader.category === "board" && "Board of Directors"}
                      {selectedLeader.category === "secretariat" && "Executive Secretariat"}
                      {selectedLeader.category === "advisory" && "Advisory Council"}
                    </div>

                    <div className="mt-6 border-t border-ink/5 pt-4">
                      <h4 className="text-[10px] font-semibold uppercase tracking-widest text-graphite/50 mb-2">Biography</h4>
                      {/* Clean left-aligned copy inside modal */}
                      <p className="text-sm leading-relaxed text-graphite text-left font-normal">
                        {selectedLeader.bio}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ink/5">
                    <h4 className="text-[10px] font-semibold uppercase tracking-widest text-graphite/50 mb-2">Expertise &amp; Tags</h4>
                    <div className="flex flex-row flex-nowrap gap-1.5 overflow-hidden">
                      {selectedLeader.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="rounded bg-bone px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-teal border border-teal/10 whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
