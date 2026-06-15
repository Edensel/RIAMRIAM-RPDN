"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { submitContactForm } from "../utils/api";

interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  country: string;
  inquiryType: string;
  subject: string;
  message: string;
  website: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    organization: "",
    email: "",
    country: "",
    inquiryType: "Partnership",
    subject: "",
    message: "",
    website: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.website) {
      return; // Honeypot field triggered
    }

    // Input validation
    if (!form.name.trim() || !form.email.trim() || !form.country.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("All fields except Organization are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid email address.");
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
      setSuccess(true);
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
    } catch {
      setLoading(false);
      setError("We could not send the message through the website. Please email info@riamriam.org directly.");
    }
  };

  return (
    <div id="partner-form" className="rounded-lg border border-ink/10 bg-bone p-5 shadow-soft sm:p-8 text-ink">
      {success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="h-16 w-16 text-teal mb-4" />
          <h3 className="text-2xl font-semibold text-ink mb-2">Message Sent</h3>
          <p className="text-graphite/70 mb-6 font-normal text-sm">
            Thank you for reaching out. The RIAMRIAM team will review your message and respond from info@riamriam.org.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="rounded-sm bg-teal px-5 py-3 text-xs font-semibold uppercase tracking-wider text-bone hover:bg-forest transition"
          >
            Send Another Message
          </button>
        </div>
      ) : (
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
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Full Name">
              <input
                type="text"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                placeholder="Your name"
              />
            </FormField>

            <FormField label="Organization">
              <input
                type="text"
                maxLength={140}
                autoComplete="organization"
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                placeholder="Organization or community"
              />
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Email">
              <input
                type="email"
                required
                maxLength={160}
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                placeholder="your@email.com"
              />
            </FormField>

            <FormField label="Country">
              <input
                type="text"
                required
                maxLength={100}
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
                placeholder="Kenya"
              />
            </FormField>
          </div>

          <FormField label="Inquiry Type">
            <select
              required
              value={form.inquiryType}
              onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
              className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
            >
              <option value="Partnership">Partnership</option>
              <option value="Funding">Funding</option>
              <option value="Media">Media</option>
              <option value="General">General Inquiry</option>
            </select>
          </FormField>

          <FormField label="Subject">
            <input
              type="text"
              required
              minLength={3}
              maxLength={160}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
              placeholder="What would you like to discuss?"
            />
          </FormField>

          <FormField label="Message">
            <textarea
              required
              rows={6}
              minLength={10}
              maxLength={2000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-md border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-teal focus:outline-none"
              placeholder="Share the context, location, partnership idea, or support request."
            />
          </FormField>

          {error && (
            <p className="rounded-lg border border-clay/30 bg-clay/10 px-4 py-3 text-sm font-semibold text-clay">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-teal px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-bone transition hover:bg-forest disabled:bg-teal/50"
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">⟳</span>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-clay">{label}</span>
      {children}
    </label>
  );
}
