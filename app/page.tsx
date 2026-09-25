import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OperationsPage from "./components/OperationsPage";
import ImpactSection from "./components/ImpactSection";

const programs = [
  {
    title: "Peacebuilding and Conflict Transformation",
    text: "Community dialogue, peace education, mediation, reconciliation, cross-border diplomacy, early warning systems, and anti-cattle rustling initiatives."
  },
  {
    title: "Governance and Civic Participation",
    text: "Civic education, leadership development, governance strengthening, policy advocacy, social accountability, and citizen participation."
  },
  {
    title: "Sustainable Livelihoods and Economic Empowerment",
    text: "Vocational skills development, entrepreneurship, climate-smart agriculture, pastoralist support, fisheries development, and women's economic empowerment."
  },
  {
    title: "Gender Equality and Social Inclusion",
    text: "Women's leadership development, prevention and response to gender-based violence, girls' empowerment, and disability inclusion programming."
  },
  {
    title: "Humanitarian Response and Resilience",
    text: "Emergency relief assistance, food security and nutrition programs, Water, sanitation, and hygiene (WASH), disaster preparedness, and community resilience."
  },
  {
    title: "Youth Development and Social Transformation",
    text: "Youth leadership and mentorship, sports for peace initiatives, skills development and employability, and countering violent extremism."
  },
  {
    title: "Research, Learning, and Institutional Development",
    text: "Applied research and policy analysis, community-based studies, Monitoring, Evaluation, Accountability, and Learning (MEAL), and organizational capacity strengthening."
  }
];

const pillars = [
  "Peacebuilding, Governance, and Social Cohesion",
  "Early Warning, Conflict Prevention, and Community Protection",
  "Youth Empowerment and Social Transformation",
  "Climate Resilience and Sustainable Livelihoods",
  "Institutional Strengthening and Strategic Partnerships"
];

const regions = [
  {
    label: "Primary focus",
    title: "Turkana County",
    text: "Intra-county tensions, resource governance, youth vulnerability, and social cohesion."
  },
  {
    label: "Inter-county corridors",
    title: "Turkana, West Pokot, Baringo, Samburu, Marsabit",
    text: "Dialogue platforms and resource-sharing mechanisms across conflict-affected communities."
  },
  {
    label: "Cross-border corridors",
    title: "Karamoja, Toposa, Nyangatom, Dassanach",
    text: "Regional peace infrastructure across Kenya, Uganda, South Sudan, and Ethiopia."
  }
];

const expandedStories = [
  {
    title: "Restoring Peace Through Community Reconciliation",
    desc: "In the borderlands of the Ateker corridor, recurring conflicts over grazing land and water resources long divided pastoralist communities. RIAMRIAM facilitated structured dialogue sessions, bringing together traditional elders, youth, and local leaders. Through intensive reconciliation meetings, the communities signed historic coexistence treaties and established joint resource monitoring committees. Today, former conflict zones are peaceful corridors of trade and shared grazing.",
    image: "/images/story_reconciliation.png"
  },
  {
    title: "Women as Champions of Peace",
    desc: "Pastoralist women have traditionally been excluded from formal peace negotiations despite bearing the brunt of violence. RPDN established Women Peace Circles, training local women in mediation, dispute resolution, and community leadership. These women now actively participate in traditional kraal assemblies and mediate local disputes before they escalate. Their advocacy has led to the inclusion of women's voices in regional border peace committees for the first time.",
    image: "/images/story_women.png"
  },
  {
    title: "Empowering Youth for Positive Change",
    desc: "Unemployment and social exclusion have historically driven borderland youth toward cattle rustling and radicalization. RPDN launched an integrated youth empowerment program combining vocational training, business mentorship, and peace sports tournaments. By providing starter grants for eco-enterprises and local shops, we have helped hundreds of youth transition into sustainable livelihoods. These young leaders now run peace advocacy clubs, actively steering their peers away from violence.",
    image: "/images/story_youth.png"
  },
  {
    title: "Building Climate Resilience Among Pastoral Communities",
    desc: "Severe droughts and environmental degradation increasingly threaten pastoralist livelihoods, driving resource conflicts. RPDN partnered with local communities to construct water-harvesting sand dams and establish climate-smart agricultural plots. We trained pastoral households in sustainable pasture management and diversified dryland income generation. These interventions have reduced the need for desperate migrations, helping communities build long-term resilience to climate shocks.",
    image: "/images/story_climate.png"
  }
];

const recentNews = [
  {
    title: "Cross-Border Peace Dialogue Initiated at the Karamoja Cluster",
    excerpt: "Elders and youth peace ambassadors from Kenya and Uganda gathered in Moroto to discuss dry-season grazing pathways, joint resource sharing, and security monitoring protocols.",
    date: "October 14, 2026",
    tag: "Peacebuilding"
  },
  {
    title: "Strengthening Livelihoods: Women Groups Receive Cooperative Grants",
    excerpt: "A new cohort of women peace circle representatives in Lodwar successfully completed entrepreneurship training and received start-up business capital to build economic resilience.",
    date: "September 28, 2026",
    tag: "Empowerment"
  }
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="home">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col justify-between overflow-hidden text-bone">
          {/* Background image & overlays */}
          <div className="absolute inset-0 -z-40">
            <Image
              src="/images/hero_turkana.png"
              alt="Turkana Peace Dialogue Gathering"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          {/* Dark overlay with color matching the branding (Deep Navy and Text tint) */}
          <div className="absolute inset-0 -z-30 bg-gradient-to-r from-ink/80 via-ink/75 to-primary/80" />
          
          {/* Hero Content in the Center */}
          <div className="section-shell flex flex-grow flex-col items-center justify-center py-20 text-center z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6 block">RIAMRIAM PEACE AND DEVELOPMENT NETWORK</span>
            <h1 className="font-serif text-[48px] font-semibold leading-[1.15] tracking-tight text-bone max-w-5xl">
              Building Peace. Empowering Communities. Transforming Lives.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-bone/90 font-sans mx-auto text-center">
              Strengthening peace infrastructure, social cohesion, and climate resilience across communities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/partnerships"
                className="w-full sm:w-auto text-center rounded-sm bg-teal px-8 py-4 text-xs font-semibold uppercase tracking-widest text-bone transition duration-200 hover:bg-teal/90 hover:scale-[1.02] shadow-md animate-fade-in"
              >
                Partner with us
              </Link>
              <Link
                href="/what-we-do"
                className="w-full sm:w-auto text-center rounded-sm border-2 border-bone/80 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-bone transition duration-200 hover:bg-bone hover:text-ink hover:scale-[1.02]"
              >
                Our Programs
              </Link>
            </div>
          </div>

          {/* Three Categories Footer */}
          <div className="grid border-t border-paper/10 bg-ink/40 text-center text-xs sm:text-sm font-semibold uppercase text-bone/90 sm:grid-cols-3 z-10">
            <span className="border-b border-paper/10 px-5 py-5 sm:border-b-0 sm:border-r border-paper/10 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> Peacebuilding &amp; Mediation
            </span>
            <span className="border-b border-paper/10 px-5 py-5 sm:border-b-0 sm:border-r border-paper/10 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> Climate Adaptation
            </span>
            <span className="px-5 py-5 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> Inclusive Governance
            </span>
          </div>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="bg-paper py-20 lg:py-28">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-clay">Who we are</p>
                <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl text-ink">
                  A regional peace network with local legitimacy.
                </h2>
              </div>
              <div className="space-y-6 text-base leading-relaxed text-graphite/78">
                <p>
                  RIAMRIAM Peace and Development Network (RPDN) is a community-driven Civil Society Organization 
                  and Community-Based Organization operating across Kenya and the wider East African Ateker corridor. 
                  Originally established in 2000 and revitalized in 2026, the network works to promote peace, 
                  social cohesion, resilience, and sustainable development among marginalized pastoral and borderland communities.
                </p>
                <p>
                  The name &ldquo;RiamRiam,&rdquo; drawn from Ateker cultural traditions, means &ldquo;meeting and meeting again,&rdquo; 
                  symbolizing continuous dialogue, reconciliation, cooperation, and peaceful coexistence. Guided by the motto, 
                  &ldquo;Building Peace. Empowering Communities. Transforming Lives,&rdquo; RPDN integrates traditional peace 
                  mechanisms with modern development approaches to address conflict, insecurity, poverty, climate vulnerability, and social exclusion.
                </p>
              </div>
            </div>

            {/* Vision, Mission, and Core Values Cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col justify-between rounded-xl bg-forest p-8 text-paper shadow-md border-t-4 border-gold">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Vision</h3>
                  <p className="mt-6 text-base font-normal leading-relaxed">
                    A peaceful, resilient, inclusive, and prosperous East Africa where communities live in dignity, coexist harmoniously, and enjoy equitable opportunities for sustainable development.
                  </p>
                </div>
                <span className="mt-8 block h-1 w-12 bg-gold/55" />
              </div>

              <div className="flex flex-col justify-between rounded-xl bg-teal p-8 text-paper shadow-md border-t-4 border-gold">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Mission</h3>
                  <p className="mt-6 text-base font-normal leading-relaxed">
                    To advance sustainable peace, social cohesion, and community resilience through locally led peacebuilding, humanitarian action, inclusive governance, climate adaptation, and sustainable livelihood interventions that transform lives and strengthen vulnerable communities across the Ateker Corridor and beyond.
                  </p>
                </div>
                <span className="mt-8 block h-1 w-12 bg-gold/55" />
              </div>

              <div className="flex flex-col justify-between rounded-xl bg-bone p-8 text-ink shadow-md border-t-4 border-clay border border-ink/5">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-clay">Core Values</h3>
                  <ul className="mt-6 grid grid-cols-1 gap-1.5 text-xs font-normal text-graphite/90">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Peace and Non-Violence
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Integrity and Accountability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Human Dignity and Respect
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Inclusivity and Equity
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Community Ownership &amp; Participation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Good Governance &amp; Transparency
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Innovation &amp; Continuous Learning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Gender Equality &amp; Social Justice
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" /> Partnership &amp; Collaboration
                    </li>
                  </ul>
                </div>
                <span className="mt-8 block h-1 w-12 bg-clay/55" />
              </div>
            </div>
          </div>
        </section>

        <ImpactSection />

        {/* What We Do */}
        <section id="what-we-do" className="bg-bone py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-clay">What we do</p>
              <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl">
                Integrated programs for peace, governance, resilience, and dignity.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {programs.map((program, index) => (
                <article
                  key={program.title}
                  className="min-h-72 rounded-sm border border-ink/10 bg-paper p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-sm font-semibold text-clay">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-14 text-xl font-semibold leading-tight">{program.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-graphite/72">{program.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="bg-forest py-20 text-paper lg:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-gold">Strategic pillars</p>
              <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl">
                Built for regional credibility and measurable delivery.
              </h2>
            </div>
            <div className="border-t border-paper/20">
              {pillars.map((pillar, index) => (
                <div key={pillar} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-paper/20 py-6">
                  <span className="font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-semibold leading-tight">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OperationsPage />

        {/* Stories of Change */}
        <section className="bg-bone py-20 lg:py-28">
          <div className="section-shell">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-clay">Stories of change</p>
              <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl text-ink">
                Local leadership turns dialogue into practical progress.
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {expandedStories.map((story) => (
                <article key={story.title} className="rounded-xl border border-ink/10 bg-paper overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-soft transition-all duration-300">
                  <div className="relative h-60 w-full">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-ink mb-4">{story.title}</h3>
                      <p className="text-sm leading-relaxed text-graphite/75">{story.desc}</p>
                    </div>
                    <span className="mt-6 block h-1.5 w-12 bg-gold" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="bg-paper py-20 lg:py-28 border-t border-ink/10">
          <div className="section-shell">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-clay">News & Updates</p>
                <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl text-ink">
                  Recent Activities & Field Updates
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite/75 font-normal">
                  Stay informed on our local peace dialogues, emergency responses, and climate resilience projects.
                </p>
              </div>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-sm bg-teal px-6 py-3 text-xs font-semibold uppercase tracking-wider text-bone hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition"
              >
                View all updates
              </Link>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {recentNews.map((article) => (
                <article
                  key={article.title}
                  className="bg-bone/40 border border-ink/10 rounded-xl p-6 flex flex-col justify-between hover:shadow-soft transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="rounded bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
                        {article.tag}
                      </span>
                      <span className="text-xs text-graphite/50 font-normal">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-ink mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-graphite/75 mb-6 font-normal">
                      {article.excerpt}
                    </p>
                  </div>
                  <Link
                    href="/news"
                    className="self-start text-[10px] font-semibold uppercase tracking-widest text-teal hover:underline"
                  >
                    Read More ➔
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships CTA */}
        <section className="bg-paper py-20">
          <div className="section-shell rounded-sm bg-teal p-8 text-paper shadow-soft lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-14">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-gold">Partnerships</p>
              <h2 className="text-3xl font-semibold leading-none tracking-normal sm:text-5xl">
                Partner with us to strengthen peace infrastructure across the Ateker corridor.
              </h2>
            </div>
            <Link
              href="/partnerships"
              className="mt-8 inline-flex rounded-sm bg-gold px-6 py-4 text-sm font-semibold uppercase text-ink transition hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98] lg:mt-0 shadow-sm"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
