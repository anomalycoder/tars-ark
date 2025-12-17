"use client";

import { TrendingUp, MapPin, Target, Rocket } from "lucide-react";

export default function OurMarketPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1B3C8A]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#1B3C8A]">
            <TrendingUp className="h-4 w-4" />
            Market Opportunity
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-center font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3C8A] mb-4">
          OUR MARKET
        </h1>
        <p className="text-center text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
          We&apos;re entering one of India&apos;s largest and fastest-growing industries with a proven model and clear path to scale.
        </p>

        {/* Market Overview Card */}
        <div className="bg-gradient-to-br from-[#1B3C8A] to-[#3F6DCE] rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-8 w-8" />
            <h2 className="text-2xl sm:text-3xl font-bold">
              Transforming a ₹160 Billion Industry
            </h2>
          </div>
          <div className="h-1 w-24 bg-white/30 mb-6"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* TAM */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-white/90">
                Total Addressable Market - India
              </h3>
              <div className="text-4xl font-bold mb-3">₹160 Billion</div>
              <p className="text-sm text-white/80 leading-relaxed">
                Interior and building materials market with <strong>85% still unorganized or semi-organized</strong> [web:161]. Growing at <strong>8.4% CAGR through 2030</strong> [web:161].
              </p>
            </div>

            {/* Beachhead */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-white/90">
                Our Beachhead - Hyderabad
              </h3>
              <div className="text-4xl font-bold mb-3">₹6+ Billion</div>
              <p className="text-sm text-white/80 leading-relaxed">
                Market opportunity combining B2B and B2C segments in India&apos;s fastest-growing metro [web:159]. Residential construction supply grew <strong>4.5% YoY</strong> in Q4 2024 [web:162].
              </p>
            </div>
          </div>
        </div>

        {/* Expansion Roadmap */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="h-7 w-7 text-[#F27A2C]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              The Expansion Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <PhaseCard
              phase="Phase 1"
              title="Kukatpally"
              duration="8 months"
              description="Prove the model"
              icon="🎯"
              color="blue"
            />

            {/* Phase 2 */}
            <PhaseCard
              phase="Phase 2"
              title="All of Hyderabad"
              duration="6 months"
              description="Establish dominance"
              icon="🏙️"
              color="orange"
            />

            {/* Phase 3 */}
            <PhaseCard
              phase="Phase 3"
              title="Tier 2 Cities, then Bangalore & Mumbai"
              duration="Ongoing"
              description="Scale nationally"
              icon="🚀"
              color="gold"
            />
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-[#1B3C8A]" />
            Why Now? Why Hyderabad?
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Massive Unorganized Market</h4>
                <p className="text-slate-600">
                  85% of the ₹160B market is fragmented, giving us massive consolidation opportunity [web:161].
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Hyderabad&apos;s Rapid Growth</h4>
                <p className="text-slate-600">
                  Under-construction property prices rose 11.9% YoY in Q4 2024, signaling strong demand [web:162].
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Dual Market Advantage</h4>
                <p className="text-slate-600">
                  We serve both B2B trade professionals and B2C homeowners on one platform—no competitor does this.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Strong CAGR Tailwinds</h4>
                <p className="text-slate-600">
                  India&apos;s construction materials market is projected to grow at 5.89% CAGR through 2035 [web:155].
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4 text-sm sm:text-base">
            Join us as we redefine India&apos;s building materials ecosystem—one city at a time.
          </p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F27A2C] to-[#C89B3C] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
            See Our Growth Strategy
          </button>
        </div>
      </section>
    </main>
  );
}

type PhaseCardProps = {
  phase: string;
  title: string;
  duration: string;
  description: string;
  icon: string;
  color: "blue" | "orange" | "gold";
};

function PhaseCard({ phase, title, duration, description, icon, color }: PhaseCardProps) {
  const gradients = {
    blue: "from-[#1B3C8A] to-[#3F6DCE]",
    orange: "from-[#F27A2C] to-[#C89B3C]",
    gold: "from-[#C89B3C] to-[#D4AF37]",
  };

  const borderColors = {
    blue: "border-[#1B3C8A]/20",
    orange: "border-[#F27A2C]/20",
    gold: "border-[#C89B3C]/20",
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${borderColors[color]} hover:shadow-xl transition-shadow group`}
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${gradients[color]} text-white text-xs font-bold mb-3`}>
        {phase}
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">
        <span className="font-semibold">Duration:</span> {duration}
      </p>
      <p className="text-sm text-slate-700 font-medium italic">
        {description}
      </p>
    </div>
  );
}
