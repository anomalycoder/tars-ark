import { Building2, Users, Wrench, TrendingDown, AlertTriangle, CreditCard, Search } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#F27A2C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#3F6DCE]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3C8A] mb-4">
            THE PROBLEM WE SOLVE
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 max-w-3xl mx-auto leading-tight">
            The Building Materials Industry is Broken
          </p>
        </div>

        {/* Three Column Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* FOR BRANDS */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F27A2C]/30">
            {/* Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F27A2C] to-[#C89B3C] shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="font-headline text-2xl font-bold text-[#1B3C8A] mb-6">
              For Brands
            </h3>

            {/* Pain Points List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingDown className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  Your products pass through <span className="font-semibold text-[#1B3C8A]">4-5 middlemen</span> before reaching customers, inflating prices by <span className="font-semibold text-red-600">40-60%</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  Limited market reach and <span className="font-semibold text-[#1B3C8A]">zero visibility</span> into end-user demand
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F27A2C] to-[#C89B3C] rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* FOR HOMEOWNERS & CUSTOMERS */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#3F6DCE]/30">
            {/* Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3F6DCE] to-[#1B3C8A] shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="font-headline text-2xl font-bold text-[#1B3C8A] mb-6">
              For Homeowners & Customers
            </h3>

            {/* Pain Points List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingDown className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  Paying <span className="font-semibold text-red-600">inflated prices</span>, risking duplicate or low-grade materials
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  Visiting multiple shops with <span className="font-semibold text-[#1B3C8A]">no guarantees</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  Struggling to find reliable carpenters, designers, and builders you can <span className="font-semibold text-[#1B3C8A]">trust</span>
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3F6DCE] to-[#1B3C8A] rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* FOR TRADE PROFESSIONALS */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C89B3C]/30">
            {/* Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C89B3C] to-[#D9A14A] shadow-lg">
              <Wrench className="h-8 w-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="font-headline text-2xl font-bold text-[#1B3C8A] mb-6">
              For Trade Professionals
            </h3>

            {/* Pain Points List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingDown className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-red-600">Thin margins</span> eaten by middlemen
                </p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  Inconsistent supply <span className="font-semibold text-[#1B3C8A]">disrupting</span> your projects
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-[#1B3C8A]">Zero credit options</span> when you need them most
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  No digital presence to <span className="font-semibold text-[#1B3C8A]">generate new leads</span>
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C89B3C] to-[#D9A14A] rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Optional CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 font-medium">
            ARK eliminates these pain points by connecting everyone directly.
          </p>
        </div>
      </div>
    </section>
  );
}
