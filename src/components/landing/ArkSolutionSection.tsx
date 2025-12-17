import { CheckCircle2, ShieldCheck, Store, Truck, Users, IndianRupee } from "lucide-react";

export function ArkSolutionSection() {
  return (
    <section
      id="solution"
      className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Floating brand accents */}
      <div
        className="absolute top-20 right-10 w-72 h-72 blur-3xl rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #F27A2C 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 blur-3xl rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #C89B3C 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-18">
          <p className="inline-flex items-center rounded-full border border-[#F27A2C]/30 bg-[#F27A2C]/10 px-4 py-1 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#FDE7C0]">
            The ARK Assured Solution
          </p>
          <h2 className="mt-4 font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            One Platform. Complete Transparency.{" "}
            <span className="bg-gradient-to-r from-[#F27A2C] via-[#C89B3C] to-[#D9A14A] bg-clip-text text-transparent">
              Absolute Trust.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ARK eliminates the chaos of India&apos;s ₹160 billion building materials
            market with a direct brand-to-customer marketplace that guarantees
            genuineness, competitive pricing, and reliability at every step.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-14 items-start">
          {/* Left: Promise list */}
          <div className="rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <h3 className="font-headline text-xl sm:text-2xl font-semibold text-white mb-4">
              Our Promise
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-6">
              Every order, every interaction, and every partner on ARK is built
              around one core principle: <span className="font-semibold text-white">trust you can verify</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <SolutionItem
                icon={ShieldCheck}
                title="100% genuine products"
                desc="Only brand-sourced, verified materials. No duplicates. No grey market stock."
              />
              <SolutionItem
                icon={IndianRupee}
                title="Best market prices"
                desc="Middlemen removed. Transparent pricing so you know exactly what you pay for."
              />
              <SolutionItem
                icon={Truck}
                title="Fast, reliable delivery"
                desc="Doorstep delivery with tracked logistics tailored for bulky building materials."
              />
              <SolutionItem
                icon={Users}
                title="Verified professionals"
                desc="Access to vetted carpenters, designers, and contractors in your city."
              />
              <SolutionItem
                icon={CheckCircle2}
                title="Samples at home"
                desc="Order samples to your doorstep before locking in big-ticket decisions."
              />
              <SolutionItem
                icon={Store}
                title="Experience stores"
                desc="Touch, feel, and compare products offline—then order seamlessly on ARK."
              />
            </div>
          </div>

          {/* Right: Summary cards */}
          <div className="space-y-5">
            <div className="rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#F27A2C]/40 bg-gradient-to-br from-[#1B3C8A]/60 to-[#081634]/80 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] mb-3 text-[#FDE7C0]">
                Why it matters
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                ARK becomes the single source of truth for brands, homeowners, and
                professionals—so pricing, quality, and service are no longer a
                gamble but a guarantee.
              </p>
            </div>

            <div className="rounded-3xl p-5 sm:p-6 text-slate-200 text-sm sm:text-base leading-relaxed border border-white/10 bg-white/5 backdrop-blur">
              <p>
                Whether you&apos;re renovating a 2BHK, scaling a contractor business,
                or expanding a national brand, ARK ensures every rupee and every
                order moves through a transparent, digital-first pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Small internal component
type ItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

function SolutionItem({ icon: Icon, title, desc }: ItemProps) {
  return (
    <div className="flex gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F27A2C] to-[#C89B3C] shadow-lg">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h4 className="text-sm sm:text-[0.95rem] font-semibold text-white mb-1">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
