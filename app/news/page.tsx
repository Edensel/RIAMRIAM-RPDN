import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tag: string;
  image?: string;
}

const articles: Article[] = [
  {
    id: "cross-border-peace-dialogue",
    title: "Cross-Border Peace Dialogue Initiated at the Karamoja Cluster",
    excerpt: "Elders and youth peace ambassadors from Kenya and Uganda gathered in Moroto to discuss dry-season grazing pathways, joint resource sharing, and security monitoring protocols.",
    date: "October 14, 2026",
    author: "Peace Program Coordinator",
    tag: "Peacebuilding"
  },
  {
    id: "livelihoods-women-entrepreneurs",
    title: "Strengthening Livelihoods: Women Groups Receive Cooperative Grants",
    excerpt: "A new cohort of women peace circle representatives in Lodwar successfully completed entrepreneurship training and received start-up business capital to build economic resilience.",
    date: "September 28, 2026",
    author: "Livelihoods Specialist",
    tag: "Empowerment"
  },
  {
    id: "climate-smart-water-harvesting",
    title: "Climate Resilience: Community Water Infrastructure Finalized",
    excerpt: "RPDN engineers and local community committees completed the construction of three new water harvesting solutions and smart farming systems in drought-prone border kraals.",
    date: "August 12, 2026",
    author: "Resilience Director",
    tag: "Resilience"
  },
  {
    id: "youth-sports-peacebuilding-tournament",
    title: "Inter-clan Youth Peace Sports Tournament Concludes in Toposa",
    excerpt: "Over 200 young herders participated in soccer and cultural athletic tournaments at the Toposa corridor, promoting community dialogue and reducing animal rustling vulnerabilities.",
    date: "July 05, 2026",
    author: "Youth Coordinator",
    tag: "Youth Development"
  }
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="bg-bone min-h-screen text-ink">
        {/* Hero Section */}
        <section className="bg-forest border-b border-ink/10 py-20 lg:py-28 text-bone relative overflow-hidden">
          <div className="absolute inset-0 -z-30 bg-gradient-to-r from-ink/95 via-ink/80 to-primary/95" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="section-shell text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Updates &amp; Announcements</span>
            <h1 className="font-serif mt-4 text-[48px] font-semibold leading-tight tracking-normal sm:text-6xl max-w-4xl text-bone">
              News &amp; Media Hub
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bone/85 font-normal">
              Stay updated with recent operations, field dialogues, peace agreements, and community developments direct from our liaison and field offices.
            </p>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-20 lg:py-28 bg-paper">
          <div className="section-shell">
            <div className="grid gap-8 md:grid-cols-2">
              {articles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-bone hover:bg-bone/80 border border-ink/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-soft transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="rounded bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
                        {article.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-ink mb-3 text-left leading-tight hover:text-teal transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-graphite/75 text-left mb-6 font-normal">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="border-t border-ink/5 pt-4 flex items-center justify-between text-xs text-graphite/50 font-normal">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1 hidden sm:inline-flex">
                        <User className="h-3.5 w-3.5" />
                        {article.author}
                      </span>
                    </div>
                    <button className="flex items-center gap-1 font-semibold uppercase tracking-widest text-teal hover:underline hover:gap-1.5 transition-all text-[10px]">
                      Read More <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
