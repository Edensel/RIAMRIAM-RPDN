"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Globe, Shield, Users, Landmark } from "lucide-react";
import { submitContactForm } from "../utils/api";

const partnershipPillars = [
  {
    icon: Globe,
    title: "Cross-Border Stabilization",
    text: "Establishment and coordination of cross-border peace councils, kraal committees, and dry-season grazing treaties to prevent conflicts before they escalate."
  },
  {
    icon: Shield,
    title: "Climate Resilience & Livelihoods",
    text: "Building economic stability through peace markets, dryland agriculture support, shared water resource management, and regional trade corridors."
  },
  {
    icon: Users,
    title: "Inclusive Empowerment",
    text: "Empowering pastoralist women peace networks and forming youth peace brigades as core community facilitators for conflict prevention."
  },
  {
    icon: Landmark,
    title: "Action Research & Policy",
    text: "Collaborating with global academic and policy institutions to generate data-driven insights on pastoralist security and cross-border dynamics."
  }
];

export default function PartnershipsPage() {
  const [step, setStep] = useState(1); // 1 = Contact Info, 2 = Partnership Context, 3 = Success
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    country: "",
    inquiryType: "Partnership",
    subject: "",
    message: "",
    website: "" // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setForm({
      name: "",
      organization: "",
      email: "",
      country: "",
      inquiryType: "Partnership",
      subject: "",
      message: "",
      website: ""
    });
    setError("");
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.country.trim()) {
      setError("Please fill out your name, email, and country.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.website) {
      // Honeypot field triggered
      setStep(3);
      return;
    }

    if (!form.subject.trim() || !form.message.trim()) {
      setError("Please fill out the subject and message.");
      return;
    }

    setLoading(true);

    try {
      await submitContactForm({
        full_name: form.name.trim(),
        email: form.email.trim(),
        subject: `${form.inquiryType}: ${form.subject.trim()}`,
        message: [
          form.organization.trim() && `Organization: ${form.organization.trim()}`,
          form.country.trim() && `Country: ${form.country.trim()}`,
          form.message.trim()
        ]
          .filter(Boolean)
          .join("\n\n")
      });
      setLoading(false);
      setStep(3);
      resetForm();
    } catch (err) {
      setLoading(false);
      setError("We could not send your message. Please email info@riamriam.org directly.");
    }
  };

  return (
    <>
      <Header />

      <main className="bg-paper min-h-screen text-ink">
        {/* Hero Section */}
        <section className="bg-bone border-b border-ink/10 py-20 lg:py-28">
          <div className="section-shell">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Collaborative Impact</span>
            <h1 className="mt-4 text-[48px] font-semibold leading-tight tracking-normal max-w-4xl text-ink">
              Strengthening regional peace infrastructure through global partnerships.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-graphite/80 font-normal">
              RIAMRIAM Peace and Development Network (RPDN) collaborates with international institutions, bilateral donors, research entities, and regional networks to foster stability, resilience, and sustainable development across the East African Ateker corridor.
            </p>
            <div className="mt-8">
              <a 
                href="/rpdn_profile.pdf"
                download
                className="inline-flex rounded-sm bg-teal px-6 py-4 text-xs font-semibold uppercase text-bone transition hover:scale-[1.02]"
              >
                Download Our Profile (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* Content & Form Grid */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
              
              {/* Institutional Details */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-[32px] font-semibold tracking-tight text-ink">Why Partner With RPDN?</h2>
                  <p className="mt-4 text-sm leading-relaxed text-graphite/76 font-normal">
                    Our unique grassroot-to-regional structure enables us to navigate complex cross-border socio-ecological systems, delivering impactful programs where they are needed most. We operate under strict transparency standards and coordinate directly with local kraal systems, national governments, and regional bodies like IGAD.
                  </p>
                </div>

                <div className="space-y-6">
                  {partnershipPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={pillar.title} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-graphite/70 font-normal">{pillar.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-sm border border-ink/10 bg-bone p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-clay">Global Alignment</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold uppercase text-forest">
                      UN SDG 16: Peace &amp; Justice
                    </span>
                    <span className="inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase text-teal">
                      UN SDG 17: Partnerships
                    </span>
                    <span className="inline-flex items-center rounded-full bg-warm/15 px-3 py-1 text-xs font-semibold uppercase text-ink">
                      Ateker Treaties Alignment
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="rounded-sm border border-ink/10 bg-bone p-6 shadow-soft sm:p-8 text-ink">
                {step === 1 && (
                  <form onSubmit={handleNextStep} className="space-y-5">
                    <div className="border-b border-ink/10 pb-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-clay">Step 1 of 2</span>
                      <h3 className="text-xl font-semibold text-ink">Contact Details</h3>
                    </div>

                    <div className="space-y-4">
                      <label className="block space-y-1.5">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Full Name</span>
                        <input
                          type="text"
                          required
                          minLength={2}
                          maxLength={120}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="block space-y-1.5">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Organization</span>
                        <input
                          type="text"
                          maxLength={140}
                          value={form.organization}
                          onChange={(e) => setForm({ ...form, organization: e.target.value })}
                          className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                          placeholder="Organization or community group"
                        />
                      </label>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block space-y-1.5">
                          <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Email</span>
                          <input
                            type="email"
                            required
                            maxLength={160}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                            placeholder="your@email.com"
                          />
                        </label>

                        <label className="block space-y-1.5">
                          <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Country</span>
                          <input
                            type="text"
                            required
                            maxLength={100}
                            value={form.country}
                            onChange={(e) => setForm({ ...form, country: e.target.value })}
                            className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                            placeholder="Kenya"
                          />
                        </label>
                      </div>
                    </div>

                    {error && (
                      <p className="rounded-md border border-clay/20 bg-clay/5 px-4 py-2 text-xs font-semibold text-clay">
                        {error}
                      </p>
                    )}

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-sm bg-teal px-5 py-3 text-xs font-semibold uppercase tracking-wider text-bone hover:bg-forest transition"
                      >
                        Next Step
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="border-b border-ink/10 pb-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-clay">Step 2 of 2</span>
                      <h3 className="text-xl font-semibold text-ink">Partnership Context</h3>
                    </div>

                    <div className="space-y-4">
                      <label className="block space-y-1.5">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Inquiry Type</span>
                        <select
                          required
                          value={form.inquiryType}
                          onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                          className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                        >
                          <option value="Partnership">Partnership</option>
                          <option value="Funding">Funding</option>
                          <option value="Media">Media</option>
                          <option value="General">General Inquiry</option>
                        </select>
                      </label>

                      <label className="block space-y-1.5">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Subject</span>
                        <input
                          type="text"
                          required
                          minLength={3}
                          maxLength={160}
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                          placeholder="What would you like to discuss?"
                        />
                      </label>

                      <label className="block space-y-1.5">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-clay">Message</span>
                        <textarea
                          required
                          rows={4}
                          minLength={10}
                          maxLength={2000}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full resize-none rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                          placeholder="Provide any details about your organization, location, and goals."
                        />
                      </label>
                    </div>

                    {error && (
                      <p className="rounded-md border border-clay/20 bg-clay/5 px-4 py-2 text-xs font-semibold text-clay">
                        {error}
                      </p>
                    )}

                    <div className="pt-2 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-graphite hover:bg-bone hover:text-ink transition"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 rounded-sm bg-teal px-5 py-3 text-xs font-semibold uppercase tracking-wider text-bone hover:bg-forest disabled:bg-teal/50 transition"
                      >
                        {loading ? (
                          <>
                            <span className="animate-spin">⟳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Submit Inquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div className="text-center py-6">
                    <CheckCircle2 className="h-14 w-14 text-teal mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-ink mb-2">Message Sent</h3>
                    <p className="text-sm text-graphite/70 max-w-md mx-auto mb-6 font-normal">
                      Thank you for reaching out. The RIAMRIAM team will review your partnership inquiry and contact you at the email address provided.
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="rounded-sm bg-teal px-5 py-3 text-xs font-semibold uppercase tracking-wider text-bone hover:bg-forest transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
