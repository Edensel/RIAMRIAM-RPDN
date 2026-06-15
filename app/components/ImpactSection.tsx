"use client";

import React, { useState } from "react";
import { TrendingDown, TrendingUp, Users, Heart, ShieldCheck, Sprout, Quote, Landmark, HelpCircle, Activity } from "lucide-react";

interface Story {
  tabTitle: string;
  title: string;
  badge: string;
  icon: React.ReactNode;
  body: string;
  stat: string;
  statLabel: string;
}

export default function ImpactSection() {
  const [activeTab, setActiveTab] = useState(0);

  const contributions = [
    {
      title: "Strengthening community-led peacebuilding structures and dialogue mechanisms",
      icon: <ShieldCheck className="h-6 w-6 text-warm" />
    },
    {
      title: "Facilitating mediation, reconciliation, and conflict resolution initiatives",
      icon: <Users className="h-6 w-6 text-warm" />
    },
    {
      title: "Supporting women and youth participation in peace and leadership processes",
      icon: <Heart className="h-6 w-6 text-warm" />
    },
    {
      title: "Promoting social cohesion among communities affected by conflict and insecurity",
      icon: <Activity className="h-6 w-6 text-warm" />
    },
    {
      title: "Strengthening livelihood opportunities for vulnerable households",
      icon: <Sprout className="h-6 w-6 text-warm" />
    },
    {
      title: "Enhancing citizen engagement and participatory governance",
      icon: <Landmark className="h-6 w-6 text-warm" />
    },
    {
      title: "Building resilience to climate-related and humanitarian shocks",
      icon: <HelpCircle className="h-6 w-6 text-warm" />
    },
    {
      title: "Developing capacity of community peace actors, facilitators, and local leaders",
      icon: <TrendingUp className="h-6 w-6 text-warm" />
    },
    {
      title: "Promoting cross-border dialogue and cooperation among neighboring communities",
      icon: <Activity className="h-6 w-6 text-warm" />
    }
  ];

  const stories: Story[] = [
    {
      tabTitle: "Reconciliation",
      title: "Restoring Peace Through Community Reconciliation",
      badge: "Dialogue & Treaty",
      icon: <ShieldCheck className="h-10 w-10 text-teal" />,
      body: "RIAMRIAM facilitated dialogue and mediation processes between pastoralist communities affected by recurring conflict and mistrust. Through inclusive engagement involving elders, women, youth, and local leaders, communities reached peaceful coexistence agreements, strengthened relationships, and established local monitoring committees to prevent future clashes.",
      stat: "Established",
      statLabel: "Inter-communal agreements and monitoring systems"
    },
    {
      tabTitle: "Women Leadership",
      title: "Women as Champions of Peace",
      badge: "Empowerment & Inclusion",
      icon: <Heart className="h-10 w-10 text-teal" />,
      body: "Women supported through RIAMRIAM's leadership and peacebuilding initiatives have emerged as influential advocates for dialogue, mediation, and social cohesion. Their increased participation in traditional structures has strengthened community decision-making and contributed to more inclusive, lasting peace agreements.",
      stat: "Strengthened",
      statLabel: "Advocacy structures and dialogue councils"
    },
    {
      tabTitle: "Youth Pathways",
      title: "Empowering Youth for Positive Change",
      badge: "Alternative Livelihoods",
      icon: <Users className="h-10 w-10 text-teal" />,
      body: "Through entrepreneurship support, vocational training, and mentorship programs, young people have gained skills, confidence, and economic opportunities. This reduces their vulnerability to crime, cattle rustling, and violence while enabling them to become active contributors to community development and stability.",
      stat: "Enhanced",
      statLabel: "Employment programs and peace sports brigades"
    },
    {
      tabTitle: "Climate Resilience",
      title: "Building Climate Resilience Among Pastoralists",
      badge: "Resource Security",
      icon: <Sprout className="h-10 w-10 text-teal" />,
      body: "Pastoral households supported through resilience and livelihood initiatives have adopted improved livestock practices, diversified income sources, and built water harvesting solutions. This increases capacity to withstand droughts and environmental shocks, reducing resource-based conflicts.",
      stat: "Developed",
      statLabel: "Climate adaptation and livelihood assets"
    }
  ];

  return (
    <section id="impact" className="bg-bone py-20 lg:py-28 text-ink">
      <div className="section-shell">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Institutional Contributions</span>
          <h2 className="font-serif mt-4 text-3xl font-semibold leading-tight tracking-normal sm:text-5xl text-ink">
            Key Areas of Contribution &amp; Impact
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/80 font-normal">
            Guided by our 2026-2030 strategic framework, RPDN works at the intersection of conflict transformation, environmental governance, and community resilience.
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {contributions.map((item, index) => (
            <div 
              key={index} 
              className="bg-paper border border-ink/10 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-warm/10 p-3 rounded-lg border border-warm/10">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-ink leading-relaxed">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Case Studies Section */}
        <div className="border border-ink/10 bg-paper/40 rounded-2xl p-6 lg:p-10 shadow-soft">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[250px_1fr] items-start">
            
            {/* Tabs Left */}
            <div className="w-full flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-ink/10 pr-0 lg:pr-6">
              {stories.map((story, idx) => {
                const isActive = idx === activeTab;
                return (
                  <button
                    key={story.tabTitle}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                      isActive 
                        ? "bg-teal text-bone shadow-md"
                        : "bg-paper/40 text-ink hover:bg-paper/85"
                    }`}
                  >
                    {story.tabTitle}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Right */}
            <div className="flex-grow space-y-6 w-full">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-teal/10 p-2.5 rounded-xl shrink-0">
                    {stories[activeTab].icon}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-clay">
                      {stories[activeTab].badge}
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink mt-0.5 leading-tight">
                      {stories[activeTab].title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -left-2 -top-4 h-12 w-12 text-teal/5 opacity-40 select-none pointer-events-none" />
                <p className="text-sm lg:text-base leading-relaxed text-graphite/90 font-serif pl-6 italic">
                  {stories[activeTab].body}
                </p>
              </div>

              <div className="flex items-center gap-6 bg-paper/60 border border-ink/5 p-4 rounded-xl max-w-md mt-6">
                <div className="text-left">
                  <span className="block text-2xl font-semibold text-teal">{stories[activeTab].stat}</span>
                  <span className="block text-[9px] font-semibold uppercase text-clay mt-1">
                    {stories[activeTab].statLabel}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
