import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  ShieldAlert, 
  Sprout, 
  Users, 
  HeartHandshake, 
  Building2, 
  BookOpen, 
  Globe2, 
  Cpu,
  ArrowRight
} from "lucide-react";

interface Priority {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  focus: string[];
}

const priorities: Priority[] = [
  {
    num: "01",
    title: "Expanding Peacebuilding and Conflict Prevention Programs",
    desc: "Strengthening community-led peace systems, mediation mechanisms, and cross-border cooperation initiatives to address the root causes of conflict.",
    icon: <ShieldAlert className="h-6 w-6 text-warm" />,
    focus: [
      "Traditional peace councils",
      "SMS early warning dispatch",
      "Cross-border mediation dialogues",
      "Resource conflict resolution"
    ]
  },
  {
    num: "02",
    title: "Advancing Climate Resilience and Sustainable Livelihoods",
    desc: "Supporting vulnerable households to adapt to climate change through smart pastoral systems and diversified livelihood options.",
    icon: <Sprout className="h-6 w-6 text-warm" />,
    focus: [
      "Climate-smart agriculture",
      "Water harvesting infrastructure",
      "Alternative dryland livelihoods",
      "Pastoralist support services"
    ]
  },
  {
    num: "03",
    title: "Promoting Women's and Youth Leadership",
    desc: "Empowering youth and women through vocational training, entrepreneurship mentorship, and meaningful representation in governance structures.",
    icon: <Users className="h-6 w-6 text-warm" />,
    focus: [
      "Women mediation networks",
      "Youth peace sports brigades",
      "Business start-up grants",
      "Leadership capacity building"
    ]
  },
  {
    num: "04",
    title: "Strengthening Humanitarian Response and Community Resilience",
    desc: "Enhancing community emergency preparedness, disaster relief execution, and long-term socio-economic safety nets.",
    icon: <HeartHandshake className="h-6 w-6 text-warm" />,
    focus: [
      "Disaster preparedness planning",
      "Clean water & WASH programs",
      "Emergency livelihood recovery",
      "Vulnerable safety net designs"
    ]
  },
  {
    num: "05",
    title: "Building Institutional Sustainability",
    desc: "Reinforcing RPDN's internal compliance, governance structures, financial planning, and organizational delivery systems.",
    icon: <Building2 className="h-6 w-6 text-warm" />,
    focus: [
      "Fiduciary oversight & compliance",
      "Staff capacity building",
      "Multi-year donor strategies",
      "Transparent reporting models"
    ]
  },
  {
    num: "06",
    title: "Expanding Research, Advocacy, and Policy Influence",
    desc: "Conducting evidence-based policy research on land tenure, dryland governance, and cross-border security corridors.",
    icon: <BookOpen className="h-6 w-6 text-warm" />,
    focus: [
      "Policy brief publications",
      "Land governance research",
      "Advocacy for dryland herders",
      "Academic research partnerships"
    ]
  },
  {
    num: "07",
    title: "Deepening Regional and International Partnerships",
    desc: "Cultivating strategic collaborations with national county governments, international development partners, and academia.",
    icon: <Globe2 className="h-6 w-6 text-warm" />,
    focus: [
      "UN SDG alignment reporting",
      "Joint agency peace operations",
      "Liaison with national ministries",
      "Global network coalitions"
    ]
  },
  {
    num: "08",
    title: "Promoting Innovation and Digital Transformation",
    desc: "Integrating digital peace tools, remote herder alert systems, and modern technology into community-led programs.",
    icon: <Cpu className="h-6 w-6 text-warm" />,
    focus: [
      "SMS alert herder networks",
      "Geographic mapping of resources",
      "Digital civic education portals",
      "Modern program databases"
    ]
  }
];

export default function StrategicPrioritiesPage() {
  return (
    <>
      <Header />
      <main className="bg-bone min-h-screen text-ink">
        {/* Page Hero */}
        <section className="bg-forest border-b border-ink/10 py-20 lg:py-28 text-bone relative overflow-hidden">
          <div className="absolute inset-0 -z-30 bg-gradient-to-r from-ink/95 via-ink/80 to-primary/95" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="section-shell text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Strategic Direction 2026-2030</span>
            <h1 className="font-serif mt-4 text-[48px] font-semibold leading-tight tracking-normal sm:text-6xl max-w-4xl text-bone">
              Our Strategic Priorities
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bone/85 font-normal">
              Framed to meet the challenges and opportunities of the Ateker corridor. RPDN is guided by 8 core priorities that align dryland traditional governance with international development targets.
            </p>
          </div>
        </section>

        {/* Priorities Grid */}
        <section className="py-20 lg:py-28 bg-paper">
          <div className="section-shell">
            <div className="grid gap-8 sm:grid-cols-2">
              {priorities.map((item) => (
                <div 
                  key={item.num}
                  className="bg-bone hover:bg-bone/80 border border-ink/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-ink/5 pb-4 mb-6">
                      <span className="text-xs font-semibold text-clay uppercase tracking-widest">Priority {item.num}</span>
                      <div className="bg-primary p-2.5 rounded-xl border border-bone/10 shadow-inner">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-ink mb-3 text-left leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-graphite/75 text-left mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-clay mb-3 text-left">Priority Focus Areas</h4>
                    <div className="grid grid-cols-2 gap-2 text-left">
                      {item.focus.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-xs text-graphite/85 font-normal">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Call to Action */}
            <div className="mt-16 rounded-2xl bg-primary p-8 text-bone shadow-soft text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">Alignment with UN SDGs</span>
                <h3 className="font-serif text-2xl font-semibold mt-1">
                  Commitment to Regional &amp; Global Frameworks
                </h3>
                <p className="text-xs leading-relaxed text-bone/80 mt-2 font-normal">
                  Our strategic plan is optimized to feed directly into the Sustainable Development Goals (SDG 16 - Peace, SDG 13 - Climate Action, SDG 5 - Gender Equality), local county integrated development plans, and regional cross-border strategies.
                </p>
              </div>
              <a 
                href="/partnerships"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-warm px-6 py-4 text-xs font-semibold uppercase tracking-widest text-ink transition hover:scale-[1.02] active:scale-[0.98] shrink-0"
              >
                Inquire About Collaboration <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
