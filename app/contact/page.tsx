"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import { Mail, MapPin, ShieldAlert, Globe, Users } from "lucide-react";

export default function ContactRoute() {
  return (
    <>
      <Header />

      <main className="bg-paper min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-bone border-b border-ink/10 py-20 lg:py-28">
          <div className="section-shell">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Global Engagement</span>
            <h1 className="mt-4 text-[48px] font-semibold leading-tight tracking-normal max-w-4xl text-ink">
              Reach the RIAMRIAM Network
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-graphite/80 font-normal">
              We connect grassroots peacebuilders, international partners, and academic researchers to foster stability across East Africa. Get in touch with our specialists.
            </p>
          </div>
        </section>

        {/* Directory & Form Grid */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
              
              {/* Directory Left Column */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-[32px] font-semibold tracking-tight text-ink">Contact Details</h2>
                  <p className="mt-4 text-sm leading-relaxed text-graphite/76 font-normal">
                    Connect with the RIAMRIAM Peace and Development Network (RPDN) secretariat through our official communication channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Verified Contact Block */}
                  <div className="rounded-sm border border-ink/10 bg-bone p-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Physical Address</span>
                        <p className="mt-1 text-sm leading-relaxed text-ink font-normal">
                          Lodwar Municipality, Turkana County, Kenya
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Email</span>
                        <a href="mailto:info@riamriam.org" className="mt-1 block text-sm font-semibold text-teal hover:underline font-semibold">
                          info@riamriam.org
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Website</span>
                        <a href="https://www.riamriam.org" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-semibold text-teal hover:underline font-semibold">
                          www.riamriam.org
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Social Media</span>
                        <p className="mt-1 text-sm leading-relaxed text-ink font-normal">
                          @Riamriam on Facebook, X (Twitter), and LinkedIn
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fraud Notice */}
                <div className="rounded-sm border-l-4 border-clay bg-clay/5 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-clay">
                    <ShieldAlert className="h-5 w-5" />
                    <h3 className="text-xs font-semibold uppercase tracking-wider">Official Fraud Warning</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-graphite/86 font-normal">
                    RIAMRIAM Peace and Development Network (RPDN) does not charge application fees, processing fees, or any training fees at any point in its recruitment, procurement, or peace-building coordination processes. Report any suspicious billing requests claiming to represent RPDN to <a href="mailto:info@riamriam.org" className="font-semibold underline text-clay hover:text-clay/80">info@riamriam.org</a>.
                  </p>
                </div>
              </div>

              {/* Form Right Column */}
              <div className="space-y-4">
                <div className="border-b border-ink/10 pb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-clay">Secure Correspondence</span>
                  <h3 className="text-xl font-semibold text-ink">Send an Enquiry</h3>
                </div>
                <ContactPage />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
