import { MapPin, Eye, Hand, Palette, Users } from "lucide-react";

export function ExperienceStoresSection() {
  return (
    <section
      id="experience-stores"
      className="relative w-full py-20 md:py-28 overflow-hidden"
    >
      {/* Background: ARK theme */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #081634 0%, #0F275A 45%, #1B3C8A 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Soft accents */}
      <div
        className="absolute -top-24 -right-10 w-72 h-72 blur-3xl rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, #F27A2C 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -left-10 w-80 h-80 blur-3xl rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, #C89B3C 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Story + hero copy */}
          <div>
            <p className="inline-flex items-center rounded-full border px-4 py-1 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase mb-4"
              style={{
                borderColor: "rgba(242,122,44,0.4)",
                background: "rgba(242,122,44,0.1)",
                color: "#FDE7C0",
              }}
            >
              Experience Stores
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              See It. Touch It.{" "}
              <span className="bg-gradient-to-r from-[#F27A2C] via-[#C89B3C] to-[#D9A14A] bg-clip-text text-transparent">
                Trust It.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Building your dream home or office isn&apos;t about clicking &quot;Add to Cart.&quot; 
              It&apos;s about feeling the wood grain, seeing paint colors in natural light, 
              and understanding material quality firsthand.
            </p>

            {/* Why it matters block */}
            <div className="mt-8 rounded-3xl p-5 sm:p-6 shadow-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(8,22,52,0.85)",
              }}
            >
              <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-3">
                Why Experience Stores Matter
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Online convenience meets offline confidence. ARK Experience Stores bridge 
                the gap between digital catalogues and real-world decision making, so every 
                choice you make is informed, tactile, and future-proof.
              </p>
            </div>
          </div>

          {/* Right: Features + locations */}
          <div className="space-y-6">
            {/* What we offer */}
            <div className="rounded-3xl p-6 sm:p-7 shadow-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(15,39,90,0.9)",
              }}
            >
              <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-4">
                What We Offer
              </h3>
              <ul className="space-y-4 text-sm sm:text-base text-slate-100">
                <li className="flex gap-3">
                  <Eye className="h-5 w-5 text-[#FDE7C0] mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Curated Product Displays:</span>{" "}
                    Premium brands and products you can explore at your own pace.
                  </p>
                </li>
                <li className="flex gap-3">
                  <Users className="h-5 w-5 text-[#FDE7C0] mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Expert Consultation:</span>{" "}
                    Our team helps you make informed decisions based on your needs and budget.
                  </p>
                </li>
                <li className="flex gap-3">
                  <Hand className="h-5 w-5 text-[#FDE7C0] mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Sample Collection:</span>{" "}
                    Take samples home or order them for doorstep delivery in a few taps.
                  </p>
                </li>
                <li className="flex gap-3">
                  <Palette className="h-5 w-5 text-[#FDE7C0] mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Local Fulfillment Centers:</span>{" "}
                    Faster delivery because products are stocked close to where you build.
                  </p>
                </li>
              </ul>
            </div>

            {/* Coming soon locations */}
            <div className="rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col gap-4"
              style={{
                border: "1px solid rgba(242,122,44,0.5)",
                background: "linear-gradient(135deg, rgba(242,122,44,0.18), rgba(200,155,60,0.18))",
              }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#C89B3C]" />
                <h3 className="font-headline text-base sm:text-lg font-semibold text-white">
                  Coming Soon To
                </h3>
              </div>
              <p className="text-sm sm:text-base font-medium text-white">
                Kukatpally &nbsp;|&nbsp; LB Nagar &nbsp;|&nbsp; Uppal &nbsp;|&nbsp; Kokapet
              </p>
              <p className="text-xs sm:text-sm text-slate-200">
                Be the first to know when an ARK Experience Store opens near you. 
                Visit, explore, and then complete your purchase online with full confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
