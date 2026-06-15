"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Welcome to the RIAMRIAM Peace and Development Network (RPDN) Registry. I am your institutional assistant. How can I assist you with our programs, board structure, or regional corridors today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickChips = [
    { label: "7 Core Programs", query: "What are your 7 Core Program Areas?" },
    { label: "Board & Founders", query: "Who is on the Board of Directors?" },
    { label: "Turkana Research Data", query: "What does research show about Turkana conflict and climate resilience?" },
    { label: "What does RIAMRIAM mean?", query: "What is the meaning and origin of RIAMRIAM?" },
    { label: "Where do you operate?", query: "What is your geographic scope?" },
    { label: "Partnership & SDGs", query: "How do we partner with you?" }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { sender: "user", text, timestamp }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const generateBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("program") || q.includes("what we do") || q.includes("core area")) {
      return `RPDN operates across 7 Core Program Areas defined in our official 2026 profile:

1. Peacebuilding and Conflict Transformation: Grassroots dialogues, kraal courts, cross-border diplomacy, and early warning systems.
2. Governance and Civic Participation: Civic education, leadership development, policy advocacy, and social accountability.
3. Sustainable Livelihoods & Economic Empowerment: Climate-smart agriculture, pastoralist support, and women's cooperatives.
4. Gender Equality and Social Inclusion: Promoting women leadership and addressing gender-based violence (GBV).
5. Humanitarian Response and Resilience: Emergency relief, WASH, and disaster preparedness.
6. Youth Development and Social Transformation: Countering violent extremism and supporting vocational pathways.
7. Research, Learning, and Institutional Development: Monitoring, evaluation, and policy analysis.`;
    }

    if (q.includes("board") || q.includes("director") || q.includes("founder") || q.includes("leadership") || q.includes("who is")) {
      return `RIAMRIAM's board represents a unique alliance of seasoned public administrators and diplomats. Our ranked leadership team is:

- Peter Eripete (Chairman)
- David Ateyo (Vice Chairman)
- Rebecca Ekuwam (Treasurer)
- A F Losikiria, HSC (CEO / Secretary)
- Christopher Eregae (Vice Secretary)
- Peter L Emuria (Director)
- Jane Apetet Nashida (Director)
- Seline Lociam (Director)
- Joseph Jumapili Elim (Director)
- Hon. Immanuel Isaac Ichor Imana (Director)`;
    }

    if (q.includes("turkana") || q.includes("research") || q.includes("data") || q.includes("climate") || q.includes("drought") || q.includes("accord") || q.includes("study") || q.includes("report")) {
      return `Turkana County Climate & Peacebuilding Research Data:

According to recent studies by UNDP, USAID (PEARL Project), FAO, and the Turkana County Government, climate change acts as a critical "threat multiplier" in the ASAL (Arid and Semi-Arid Lands) region:

1. The Climate-Conflict Nexus: Erratic rainfall and prolonged droughts deplete shared grazing resources and water. This forces pastoralists to migrate into new territories, disrupting traditional borders and escalating cattle raids and resource-sharing tensions along the Kenya-Uganda-Ethiopia borderlands.
2. Lokiriama Peace Accord: Signed in December 1973 between the Turkana of Kenya and the Karamojong of Uganda, it remains a model of grassroots cross-border agreements, facilitating shared grazing rights and dispute resolution without national intervention.
3. Sub-County Climate Change Adaptation Plans (CCAAP): Local planning frameworks highlight that adaptation must be gender-inclusive. Empowering women's peace circles and youth cooperatives builds community early warning systems.
4. Livelihood Diversification: UNDP and FAO recommend shifting away from pure pastoral dependency to integrated smart-agri practices, Lake Turkana fisheries cooperatives, and vocational business initiatives.

Sources: UNDP Regional Cross-Border Programme, USAID Northern Kenya Peace & Resilience Report, Turkana County Government CCAAP Framework.`;
    }

    if (q.includes("meaning") || q.includes("riam") || q.includes("origin")) {
      return `The name "RiamRiam" is derived from the cultural language of the Ateker corridor (covering parts of Kenya, Uganda, South Sudan, and Ethiopia). It translates to "meeting and meeting again", which encapsulates our core institutional philosophy of continuous dialogue, reconciliation, and cooperation. Our motto is: "Building Peace. Empowering Communities. Transforming Lives."`;
    }

    if (q.includes("where") || q.includes("geographic") || q.includes("region") || q.includes("scope") || q.includes("location")) {
      return `RPDN operates along the cross-border grazing and trading corridors of the East African Ateker region:

- Primary Hub: Lodwar Headquarters, Turkana County, Kenya.
- Inter-County Corridors: Turkana, West Pokot, Baringo, Samburu, and Marsabit.
- Cross-Border Corridors: Karamoja Cluster (Uganda), Toposa Corridor (South Sudan), and Nyangatom & Dassanach Corridors (Ethiopia).`;
    }

    if (q.includes("partner") || q.includes("sdg") || q.includes("collaborate") || q.includes("support")) {
      return `RPDN collaborates with international agencies, national governments, and NGOs. Our thematic pillars are aligned with United Nations Sustainable Development Goals (SDGs):

- SDG 5: Gender Equality (Women's leadership development)
- SDG 13: Climate Action (Climate-smart livelihoods and drought resilience)
- SDG 16: Peace, Justice, and Strong Institutions (Kraal governance and dialogue platforms)
- SDG 17: Partnerships for the Goals.

Please contact our desk directly at info@riamriam.org to initiate collaborations.`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
      return `You can reach our administrative secretariat through the following channels:

- Lodwar HQ: P.O. Box 246 - 30500, Lodwar, Turkana County, Kenya.
- Contact Email: info@riamriam.org
- Administrative Hotline: +254 792 618 189 / +254 796 563 344

Notice: Please report any fraudulent funding or representation requests to info@riamriam.org immediately.`;
    }

    if (q.includes("fraud") || q.includes("alert") || q.includes("scam")) {
      return `Official Security Warning: RIAMRIAM / RPDN operates under strict anti-bribery policies. We never ask for application processing fees, transport charges, or bidding deposits. All official communications originate from '@riamriam.org' email addresses. Please verify all requests by emailing info@riamriam.org immediately.`;
    }

    return `Thank you for your inquiry. RPDN is dedicated to regional stability and development across the Ateker corridor. 

To help me answer accurately, you can ask about:
- Our 7 Core Program Areas
- Board members & founders
- Turkana climate and conflict research data
- The meaning of "RIAMRIAM"
- Our geographic focus (Ateker corridor)
- How to partner or contact us`;
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-warm shadow-lg border border-warm/40 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-primary group cursor-pointer"
        aria-label="Open support chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="h-6 w-6 transition-transform group-hover:rotate-6" />
            <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-warm"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-96 flex-col rounded-2xl border border-ink/10 bg-paper shadow-2xl transition-all duration-300 animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-teal px-6 py-4 text-bone border-b border-warm/20">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warm/10 text-warm border border-warm/30">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold leading-tight text-bone flex items-center gap-1.5">
                  RPDN Assistant
                  <ShieldCheck className="h-4 w-4 text-warm" />
                </h3>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-warm/85">
                  Ateker Corridor Registry
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-bone/70 transition hover:bg-bone/10 hover:text-bone cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Info Banner */}
          <div className="bg-bone px-6 py-2.5 text-[10px] leading-relaxed text-graphite/85 border-b border-ink/5 flex items-center gap-2">
            <AlertTriangle className="h-3 w-3 text-clay shrink-0" />
            <span className="font-normal">Verify communications: all RPDN requests originate from @riamriam.org.</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-bone/20">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs leading-relaxed font-normal ${
                    msg.sender === "user"
                      ? "bg-clay text-bone rounded-tr-none"
                      : "bg-paper border border-ink/10 text-ink rounded-tl-none shadow-sm whitespace-pre-line"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="mt-1 text-[9px] font-semibold text-graphite/40 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="rounded-xl rounded-tl-none bg-paper border border-ink/5 px-4 py-3 text-xs shadow-sm">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-graphite/50" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-graphite/50 [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-graphite/50 [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="border-t border-ink/5 bg-bone/30 px-6 py-3 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0">
            {quickChips.map((chip, index) => (
              <button
                key={index}
                onClick={() => handleSend(chip.query)}
                className="shrink-0 rounded-full border border-ink/10 bg-paper px-3 py-1 text-[10px] font-semibold text-graphite transition hover:border-warm hover:text-warm active:scale-95 cursor-pointer"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-ink/10 bg-paper p-4 flex items-center gap-2.5 rounded-b-2xl">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
              placeholder="Ask a question..."
              className="flex-1 bg-bone rounded-lg px-4 py-2.5 text-xs text-ink outline-none border border-ink/5 focus:border-warm/50 font-normal"
            />
            <button
              onClick={() => handleSend(inputValue)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal text-warm transition hover:bg-primary active:scale-95 border border-warm/20 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
