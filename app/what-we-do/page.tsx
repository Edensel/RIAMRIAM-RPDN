import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const programs = [
  {
    title: "Peacebuilding and Conflict Transformation",
    text: "Facilitating peace dialogues, establishing local kraal committees, coordinating early warning mechanisms, and promoting joint cross-border resource sharing agreements."
  },
  {
    title: "Governance, Policy Advocacy, and Civic Participation",
    text: "Conducting civic education, building county leadership capacity, advocating for marginalized pastoralist policies, and improving social accountability."
  },
  {
    title: "Sustainable Livelihoods, Resilience, and Economic Empowerment",
    text: "Strengthening climate-smart agriculture, pastoralist migration management, fisheries development at Lake Turkana, and supporting women's micro-enterprises."
  },
  {
    title: "Gender Equality, Women Empowerment, and Social Inclusion",
    text: "Advancing women's leadership in peace networks, preventing gender-based violence (GBV), and ensuring youth and persons with disabilities are integrated."
  },
  {
    title: "Humanitarian Response, Disaster Risk Reduction (DRR), and WASH",
    text: "Delivering emergency food and nutrition, constructing dryland water supply systems, establishing sanitation facilities, and enhancing local disaster preparedness."
  },
  {
    title: "Youth Development, Sports, and Social Transformation",
    text: "Engaging borderland youth through peace sports tournaments, leadership mentoring, vocational education, and countering recruitment into violent pathways."
  },
  {
    title: "Research, Documentation, and Learning",
    text: "Conducting community-based research on the climate-conflict nexus, documenting customary peace models, and enhancing institutional monitoring, evaluation, and learning."
  }
];

const pillars = [
  "Peacebuilding, Governance, and Social Cohesion",
  "Climate Resilience, Livelihoods, and Economic Empowerment",
  "Humanitarian Action, DRR, and Community Protection",
  "Youth and Women Empowerment, Inclusion, and Social Transformation",
  "Institutional Strengthening, Partnership, and Learning"
];

export default function WhatWeDo() {
  return (
    <>
      <Header />
      <main className="bg-paper min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-bone border-b border-ink/10 py-20 lg:py-28">
          <div className="section-shell">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Strategic Execution</span>
            <h1 className="mt-4 text-[48px] font-semibold leading-tight tracking-normal sm:text-6xl max-w-4xl text-ink">
              What We Do
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-graphite/80 font-normal">
              Integrated program areas and strategic pillars designed to enhance human dignity, foster resilience, and build long-term stability.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-clay">Our 7 Core Program Areas</span>
              <h2 className="mt-2 text-[32px] font-semibold text-ink leading-tight">
                Addressing root drivers of insecurity and economic vulnerability.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {programs.map((program, index) => (
                <article
                  key={program.title}
                  className="min-h-72 rounded-sm border border-ink/10 bg-bone p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-sm font-semibold text-clay">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-14 text-2xl font-semibold leading-tight text-ink">{program.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-graphite/72 font-normal">{program.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars Banner */}
        <section className="bg-forest py-20 text-bone lg:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">Strategic Pillars</span>
              <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-normal sm:text-5xl text-bone">
                Built for regional credibility and measurable delivery.
              </h2>
            </div>
            <div className="border-t border-bone/20">
              {pillars.map((pillar, index) => (
                <div key={pillar} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-bone/20 py-6">
                  <span className="font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-semibold leading-tight text-bone">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
