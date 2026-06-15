"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Target, Compass, Heart, Users, CheckCircle, Scale, Calendar, Award, AlertTriangle, CloudRain, ShieldAlert, Zap, Landmark } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2000",
    title: "Grassroots Foundation",
    description: "RIAMRIAM was established as a localized grassroots peace coalition to address escalating cross-border conflicts and cattle rustling within the Karamoja cluster of the Ateker corridor."
  },
  {
    year: "2012",
    title: "Landmark Accords",
    description: "Facilitated historic traditional resource-sharing treaties and inter-communal dialogue forums along the Kenya-Uganda border, establishing cultural conflict resolution protocols."
  },
  {
    year: "2020",
    title: "Integrated Resilience Framework",
    description: "Expanded institutional programming to address environmental conflict drivers, launching joint climate adaptation and sustainable pastoralist livelihoods initiatives."
  },
  {
    year: "2026",
    title: "Strategic Revitalization",
    description: "Re-engineered as the RIAMRIAM Peace and Development Network (RPDN), introducing a robust 3-tiered governance model to manage international partnerships and regional stability."
  }
];

interface ValueItem {
  title: string;
  desc: string;
  icon: any;
}

const values: ValueItem[] = [
  {
    title: "Peace and Non-Violence",
    desc: "We promote peaceful coexistence, dialogue, and non-violent approaches to conflict prevention, management, and resolution.",
    icon: Shield
  },
  {
    title: "Integrity and Accountability",
    desc: "We uphold the highest standards of professionalism, ethical conduct, transparency, and responsible stewardship of resources entrusted to us.",
    icon: Scale
  },
  {
    title: "Human Dignity and Respect",
    desc: "We believe that every individual deserves respect, protection, and equal opportunities regardless of gender, age, ethnicity, religion, or social status.",
    icon: Heart
  },
  {
    title: "Inclusivity and Equity",
    desc: "We are committed to ensuring that marginalized and vulnerable groups—including women, youth, persons with disabilities, and indigenous communities—actively participate in decision-making and development processes.",
    icon: Users
  },
  {
    title: "Community Ownership and Participation",
    desc: "We recognize communities as drivers of their own development and prioritize locally led solutions that foster ownership, sustainability, and resilience.",
    icon: CheckCircle
  },
  {
    title: "Good Governance and Transparency",
    desc: "We promote accountable leadership, citizen participation, institutional effectiveness, and transparent governance systems at all levels.",
    icon: Compass
  },
  {
    title: "Innovation and Continuous Learning",
    desc: "We embrace innovation, evidence-based programming, knowledge sharing, and adaptive learning to maximize impact and respond effectively to emerging challenges.",
    icon: Award
  },
  {
    title: "Gender Equality and Social Justice",
    desc: "We champion equal rights, opportunities, and meaningful participation for women and girls while addressing systemic barriers to inclusion and empowerment.",
    icon: Target
  },
  {
    title: "Partnership and Collaboration",
    desc: "We believe sustainable change is achieved through strategic partnerships and collective action involving communities, governments, civil society, development partners, and the private sector.",
    icon: Users
  }
];

const structuralDrivers = [
  {
    title: "Conflict and Insecurity",
    desc: "Cross-border raids involving Toposa, Nyangatom, Dassanach, and Karimojong communities; inter-county resource clashes; clan-based exclusion; and the emergence of armed youth gangs.",
    icon: ShieldAlert
  },
  {
    title: "Weak Peace Infrastructure",
    desc: "The erosion of traditional elders' authority, fragile or unmonitored cross-border grazing agreements, and inadequate institutional coordination mechanisms.",
    icon: Landmark
  },
  {
    title: "Climate Vulnerability",
    desc: "Recurrent droughts, severely degraded rangelands, severe water scarcity, and fisheries insecurity along the Lake Turkana basin driving pastoralist migrations.",
    icon: CloudRain
  },
  {
    title: "Youth Crisis",
    desc: "High youth unemployment rates, rising substance abuse, and criminal exploitation by political or commercial business interests seeking to incite violence.",
    icon: Zap
  },
  {
    title: "Institutional Weakness",
    desc: "Fragmented local stakeholder coordination, weak decentralized governance systems, and limited direct donor access for grassroots, community-led institutions.",
    icon: AlertTriangle
  }
];

export default function WhoWeAre() {
  const [activeIdentity, setActiveIdentity] = useState<"vision" | "mission" | "model">("vision");

  return (
    <>
      <Header />
      <main className="bg-bone min-h-screen text-ink">
        {/* Page Hero - Split Layout */}
        <section className="relative overflow-hidden bg-forest py-20 text-bone lg:py-28">
          <div className="absolute inset-0 -z-30 bg-gradient-to-r from-ink/95 via-ink/80 to-primary/95" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Who We Are
                </span>
                <h1 className="text-[48px] font-semibold leading-tight tracking-normal">
                  A Legitimate Voice
                  <br />
                  for Borderland Peace.
                </h1>
                <p className="mt-6 text-base leading-relaxed text-bone/85 font-normal">
                  RIAMRIAM Peace and Development Network (RPDN) is a community-driven Civil Society Organization 
                  operating across Kenya and the wider East African Ateker corridor. We bridge the gap between 
                  traditional conflict resolution systems and modern developmental governance to foster long-term 
                  stability and resilience among pastoralist communities.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="/partnerships" 
                    className="inline-flex rounded-sm bg-teal px-6 py-4 text-xs font-semibold uppercase text-bone transition hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Partner with RPDN
                  </a>
                  <a 
                    href="/rpdn_profile.pdf" 
                    download
                    className="inline-flex rounded-sm border border-bone/20 bg-bone/5 px-6 py-4 text-xs font-semibold uppercase text-bone transition hover:bg-bone hover:text-ink hover:scale-[1.02]"
                  >
                    Download Our Profile
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-bone/10 bg-ink/10 p-2 shadow-2xl">
                  <img
                    src="/images/hero_turkana.png"
                    alt="Turkana Peace Dialogue gathering under a large acacia tree at golden hour"
                    className="w-full h-[360px] object-cover rounded-xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-ink/85 border border-bone/10 p-4 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">Grassroots Legitimacy</p>
                    <p className="mt-1 text-[10px] leading-normal text-bone/80 font-normal">
                      Community members and traditional elders gathering under an acacia tree to establish mutual resource-sharing treaties along border corridors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section & Interactive Core Mandate */}
        <section className="py-20 lg:py-28 bg-paper border-b border-ink/10">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-clay">Background & Origin</p>
                <h2 className="text-3xl font-semibold text-ink leading-tight">
                  Meeting and meeting again for peace.
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-graphite/80 font-normal">
                  The name &ldquo;RiamRiam&rdquo; is drawn directly from Ateker cultural traditions. It translates to &ldquo;meeting and meeting again&rdquo;, 
                  symbolizing continuous dialogue, negotiation, and peaceful dispute resolution. Our motto, &ldquo;Building Peace. 
                  Empowering Communities. Transforming Lives,&rdquo; guides every intervention.
                </p>
              </div>

              {/* Interactive Vision / Mission Selector */}
              <div className="rounded-2xl border border-ink/10 bg-paper/40 p-6 md:p-8">
                <div className="flex gap-2 border-b border-ink/10 pb-4">
                  <button
                    onClick={() => setActiveIdentity("vision")}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                      activeIdentity === "vision" ? "bg-forest text-bone" : "bg-bone hover:bg-ink/5 text-graphite"
                    }`}
                  >
                    Our Vision
                  </button>
                  <button
                    onClick={() => setActiveIdentity("mission")}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                      activeIdentity === "mission" ? "bg-teal text-bone" : "bg-bone hover:bg-ink/5 text-graphite"
                    }`}
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => setActiveIdentity("model")}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                      activeIdentity === "model" ? "bg-clay text-bone" : "bg-bone hover:bg-ink/5 text-graphite"
                    }`}
                  >
                    The Model
                  </button>
                </div>

                <div className="mt-6 min-h-[120px]">
                  {activeIdentity === "vision" && (
                    <div>
                      <h3 className="text-lg font-semibold text-ink">A Prosperous East Africa</h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite/85 font-normal">
                        We envision a peaceful, resilient, inclusive, and prosperous East Africa where borderland 
                        communities live in dignity, coexist harmoniously, and enjoy equitable opportunities for sustainable 
                        and conflict-free development.
                      </p>
                    </div>
                  )}

                  {activeIdentity === "mission" && (
                    <div>
                      <h3 className="text-lg font-semibold text-ink">Locally Led Advocacy & Adaptation</h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite/85 font-normal">
                        Our mission is to advance sustainable peace, social cohesion, and community resilience through 
                        locally led peacebuilding, humanitarian action, inclusive governance, climate adaptation, and sustainable 
                        livelihood interventions that transform lives and strengthen vulnerable communities across the Ateker Corridor and beyond.
                      </p>
                    </div>
                  )}

                  {activeIdentity === "model" && (
                    <div>
                      <h3 className="text-lg font-semibold text-ink">Cultural and Modern Nexus</h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite/85 font-normal">
                        RPDN operates at the intersection of traditional kraal courts and formal public administration. By 
                        linking county governance with customary local protocols, we establish grazing patterns and security 
                        warning networks that are trusted by communities and verified by authorities.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Context Section */}
        <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
          <div className="section-shell">
            <div className="max-w-3xl mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-clay">Development Context</p>
              <h2 className="text-3xl font-semibold text-ink leading-tight sm:text-5xl">
                Key Structural Challenges
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/75 font-normal">
                Communities within RPDN&rsquo;s operational areas face interconnected social, environmental, and institutional drivers of vulnerability. We target five core structural drivers:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {structuralDrivers.map((driver) => {
                const Icon = driver.icon;
                return (
                  <div 
                    key={driver.title}
                    className="bg-paper border border-ink/10 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-soft transition-all duration-300"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/15 mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-ink leading-tight mb-3">
                        {driver.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-graphite/75 font-normal">
                        {driver.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-clay">Our Journey</p>
              <h2 className="text-3xl font-semibold text-ink leading-tight sm:text-5xl">
                A History of Regional Commitment
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/75 font-normal">
                Over more than two decades, RPDN has transitioned from a local peace initiative to a prominent regional network.
              </p>
            </div>

            {/* Timeline Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item) => (
                <div 
                  key={item.year} 
                  className="group relative flex flex-col justify-between rounded-xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay/10 text-clay border border-clay/15">
                        <Calendar className="h-4 w-4" />
                      </span>
                      <span className="font-serif text-2xl font-semibold text-clay">{item.year}</span>
                    </div>
                    <h3 className="mt-6 text-base font-semibold text-ink leading-tight group-hover:text-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-graphite/75 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 lg:py-28 bg-paper border-t border-ink/10">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-clay">Our Foundation</p>
              <h2 className="text-3xl font-semibold text-ink leading-tight sm:text-5xl">
                Core Institutional Values
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/75 font-normal">
                These principles guide our programmatic actions, coordinate our governance, and preserve trust among 
                the pastoralist communities we represent.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div 
                    key={val.title} 
                    className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-[#faf6ed]/20 p-6 transition-all duration-300 hover:shadow-soft"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/15">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-6 text-base font-semibold leading-tight text-ink">{val.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-graphite/75 font-normal">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* UN SDG Alignment section */}
        <section className="py-20 bg-forest text-bone">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Global Alignment</span>
              <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                Strategic Alignment with UN SDGs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-bone/80 font-normal">
                RPDN aligns its field operations, research projects, and peace-building models with the United Nations Sustainable Development Goals. By integrating local custom with global targets, we secure international credibility.
              </p>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-bone/10 bg-ink/20 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">SDG 16: Peace & Justice</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-bone/75 font-normal">
                    Establishing early warning systems, local peace committees, and inter-community border grazing councils.
                  </p>
                </div>
                <div className="rounded-xl border border-bone/10 bg-ink/20 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">SDG 13: Climate Action</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-bone/75 font-normal">
                    Developing dryland water systems, climate resilience frameworks, and resource-sharing structures.
                  </p>
                </div>
                <div className="rounded-xl border border-bone/10 bg-ink/20 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">SDG 5: Gender Equality</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-bone/75 font-normal">
                    Ensuring women peace champions are central to mediation networks and political oversight.
                  </p>
                </div>
                <div className="rounded-xl border border-bone/10 bg-ink/20 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">SDG 17: Partnerships</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-bone/75 font-normal">
                    Coordinating joint cross-border interventions with IGAD, UNDP, USAID, and regional governments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
