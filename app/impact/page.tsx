import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImpactSection from "../components/ImpactSection";

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="bg-paper min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-bone border-b border-ink/10 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Measurable Delivery</span>
            <h1 className="mt-4 text-[48px] font-semibold leading-tight tracking-normal sm:text-6xl max-w-4xl text-ink">
              Our Impact
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-graphite/80 font-normal">
              Indicators and narratives documenting the transformation of conflict-prone borderlands into zones of dialogue, resilience, and cooperation.
            </p>
          </div>
        </section>

        {/* Impact Section Component */}
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
