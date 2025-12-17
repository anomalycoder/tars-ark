"use client";

export default function ReadyToExperiencePage() {
  return (
    <main className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Floating brand accent orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#3F6DCE]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F27A2C]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#C89B3C]/5 rounded-full blur-3xl"></div>

      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1B3C8A]">
            READY TO EXPERIENCE THE DIFFERENCE?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            One platform. Two journeys. Whether you are a trade professional or a homeowner, ARK Assured is built for you.
          </p>
        </div>

        {/* Two blocks: B2B + B2C */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* B2B Card */}
          <div className="rounded-3xl border-2 border-[#1B3C8A]/20 bg-white p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-[#1B3C8A]/40 transition-all duration-300 group">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#3F6DCE] mb-3">
                For B2B Partners
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#1B3C8A]">
                Stop Losing Margins to Middlemen
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Join 500+ trade professionals who are already growing with ARK Partner. Better prices, reliable supply, stronger digital presence, and access to credit—on one unified platform.
              </p>
            </div>
            <div className="mt-4">
              <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1B3C8A] to-[#3F6DCE] text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Register as Partner Now
              </button>
            </div>
          </div>

          {/* B2C Card */}
          <div className="rounded-3xl border-2 border-[#F27A2C]/20 bg-white p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-[#F27A2C]/40 transition-all duration-300 group">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#F27A2C] mb-3">
                For Homeowners
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#1B3C8A]">
                Build Your Dream with Confidence
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Join 2000+ customers who trust ARK Assured for genuine building materials at the best prices. Every product is guaranteed authentic, so your home is built on trust—not guesswork.
              </p>
            </div>
            <div className="mt-4">
              <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F27A2C] to-[#C89B3C] text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Start Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Small footer note */}
        <div className="text-center mt-10 text-xs sm:text-sm text-slate-500">
          ARK Assured is where brands, professionals, and homeowners meet with complete transparency and trust.
        </div>
      </section>
    </main>
  );
}
