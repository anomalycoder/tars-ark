"use client";

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            OUR MISSION & VISION
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Rebuilding trust in India&apos;s building materials ecosystem through a hybrid, tech-enabled platform.
          </p>
        </div>

        {/* Mission Block */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="inline-block h-8 w-1 rounded-full bg-gradient-to-b from-[#F27A2C] to-[#C89B3C]" />
            Mission: Bringing Trust Back to Building Materials
          </h3>

          <div className="space-y-4">
            <MissionItem
              index={1}
              title="Eliminate Middlemen"
              text="Create a direct brand-to-customer supply chain that ensures genuine products, transparent pricing, and predictable margins."
            />
            <MissionItem
              index={2}
              title="Strengthen Brands"
              text="Offer localized warehousing, digital visibility, and modern distribution channels so brands can reach the right customers faster."
            />
            <MissionItem
              index={3}
              title="Empower B2B Professionals"
              text="Provide exclusive pricing, reliable supply, credit access, and a strong digital presence for contractors, painters, architects, and designers."
            />
            <MissionItem
              index={4}
              title="Protect End Customers"
              text="Guarantee original products, best-possible prices, fast delivery, and verified service professionals for every project."
            />
            <MissionItem
              index={5}
              title="Build a Hybrid Ecosystem"
              text="Combine large warehouses with premium experience centers to deliver convenience, reliability, and trust at every step."
            />
          </div>
        </div>

        {/* Vision Block */}
        <div className="bg-gradient-to-br from-[#1B3C8A] to-[#3F6DCE] border border-[#3F6DCE]/30 shadow-2xl rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center gap-2">
            <span className="inline-block h-8 w-1 rounded-full bg-white/50" />
            Vision: India&apos;s Seal of Trust
          </h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            To establish ARK Assured as India&apos;s most trusted ecosystem for building materials and interior solutions—an industry-wide seal of authenticity, transparency, and quality that redefines how India procures, experiences, and delivers building materials.
          </p>
        </div>
      </div>
    </section>
  );
}

type MissionItemProps = {
  index: number;
  title: string;
  text: string;
};

function MissionItem({ index, title, text }: MissionItemProps) {
  return (
    <div className="flex gap-3 items-start bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F27A2C] to-[#C89B3C] text-white flex items-center justify-center text-sm font-bold shadow-lg">
          {index}
        </div>
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
