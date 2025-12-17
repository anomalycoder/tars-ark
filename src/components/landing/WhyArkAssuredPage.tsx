"use client";

export default function WhyArkAssuredPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Badge / Eyebrow */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center rounded-full bg-[#1B3C8A]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1B3C8A]">
            Why ARK Assured
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-center font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3C8A] mb-3">
          WHY ARK ASSURED STANDS OUT
        </h1>
        <p className="text-center text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          A new standard for building materials, for both trade professionals and homeowners.
        </p>

        {/* Subheading */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">
            We&apos;re Not Just Another Online Store
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            ARK Assured combines the trust of offline with the convenience of online in one unified platform.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Table header strip */}
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs sm:text-sm font-semibold">
            <div className="px-4 py-3 text-left">Feature</div>
            <div className="px-4 py-3 text-center bg-gradient-to-r from-[#1B3C8A] to-[#3F6DCE]">
              ARK Assured
            </div>
            <div className="px-4 py-3 text-center bg-slate-800">
              Others
            </div>
          </div>

          {/* Table body */}
          <div className="divide-y divide-slate-100 text-sm sm:text-base">
            <ComparisonRow
              feature="100% Genuine Products"
              ark="✅ Direct brand partnerships"
              others="❌ Third-party sellers"
            />
            <ComparisonRow
              feature="Best Market Prices"
              ark="✅ Zero middlemen"
              others="❌ Multiple markups"
            />
            <ComparisonRow
              feature="B2B + B2C Platform"
              ark="✅ Unified ecosystem"
              others="❌ Separate platforms"
            />
            <ComparisonRow
              feature="Trade Professional Network"
              ark="✅ Verified pros with lead generation"
              others="❌ Not available"
            />
            <ComparisonRow
              feature="Credit Access"
              ark="✅ NBFC partnerships"
              others="❌ Cash only"
            />
            <ComparisonRow
              feature="Doorstep Sampling"
              ark="✅ Try before you buy"
              others="❌ No sampling"
            />
            <ComparisonRow
              feature="Physical Experience Stores"
              ark="✅ Touch & feel products"
              others="❌ Online only"
            />
            <ComparisonRow
              feature="Referral Commissions"
              ark="✅ Earn by sharing"
              others="❌ No incentives"
            />
            <ComparisonRow
              feature="Hyperlocal Delivery"
              ark="✅ Same / next-day delivery"
              others="❌ 5–7 day wait"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-sm sm:text-base text-slate-600 mb-4">
            Whether you are a contractor, designer, or homeowner, ARK Assured is built to work the way you do.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1B3C8A] to-[#3F6DCE] text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
              Explore Platform
            </button>
            <button className="px-6 py-2.5 rounded-full border border-[#1B3C8A] text-[#1B3C8A] text-sm sm:text-base font-semibold hover:bg-[#1B3C8A]/5 transition-colors">
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

type ComparisonRowProps = {
  feature: string;
  ark: string;
  others: string;
};

function ComparisonRow({ feature, ark, others }: ComparisonRowProps) {
  return (
    <div className="grid grid-cols-3">
      <div className="px-4 py-3 text-left font-medium text-slate-800 bg-slate-50">
        {feature}
      </div>
      <div className="px-4 py-3 text-center text-emerald-700 font-semibold bg-emerald-50">
        {ark}
      </div>
      <div className="px-4 py-3 text-center text-slate-500 bg-white">
        {others}
      </div>
    </div>
  );
}
