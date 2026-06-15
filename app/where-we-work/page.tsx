import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OperationsPage from "../components/OperationsPage";

export default function WhereWeWorkPage() {
  return (
    <>
      <Header />
      <main className="bg-paper min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-bone border-b border-ink/10 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Geographic Reach</span>
            <h1 className="mt-4 text-[48px] font-semibold leading-tight tracking-normal sm:text-6xl max-w-4xl text-ink">
              Where We Work
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-graphite/80 font-normal">
              Exploring our operations hubs, early warning dispatch coordinates, and cross-border grazing agreements in Kenya, Uganda, South Sudan, and Ethiopia.
            </p>
          </div>
        </section>

        {/* Operations Page Component */}
        <OperationsPage />
      </main>
      <Footer />
    </>
  );
}
