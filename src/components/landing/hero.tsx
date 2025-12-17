import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Handshake } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen isolate overflow-hidden pt-16"
    >
      {/* Background Pattern - COMPLETELY FIXED */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/hardware.jpg"
            alt="Hardware tools and equipment background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* ARK gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,60,138,0.92) 0%, rgba(15,39,90,0.92) 60%, rgba(8,22,52,0.92) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements - ARK colors */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse"
        style={{ backgroundColor: "rgba(242, 122, 44, 0.2)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-xl animate-pulse"
        style={{ backgroundColor: "rgba(63, 109, 206, 0.2)", animationDelay: "1s" }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-6 order-1 lg:order-1 lg:mt-16">
            <div className="space-y-4">
              {/* HEADLINE with Poppins (font-headline) */}
              <h1 className="font-headline text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                India&apos;s Most Trusted Marketplace for{" "}
                <span className="bg-gradient-to-r from-[#F27A2C] to-[#C89B3C] bg-clip-text text-transparent">
                  Genuine Building Materials
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-[#C89B3C] to-[#D9A14A] bg-clip-text text-transparent">
                  Interior Products
                </span>
              </h1>
              
              {/* SUBHEADLINE with Inter (font-body) */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
                Direct from brands to your doorstep. No middlemen. No duplicates. 
                Just quality you can trust.
              </p>
            </div>

            {/* CTA BUTTONS - POSITIONED LOWER with more top margin */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-6 mt-8">
              {/* Shop Now (B2C) - ARK Orange/Gold */}
              <Button
                size="lg"
                className="shadow-2xl backdrop-blur-md border-2 transition-all duration-300 font-semibold text-base hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #F27A2C 0%, #C89B3C 100%)",
                  borderColor: "#F27A2C",
                  color: "#FFFFFF",
                  boxShadow: "0 0 20px rgba(242,122,44,0.5)",
                }}
                asChild
              >
                <Link href="#shop" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Shop Now
                </Link>
              </Button>

              {/* Become a Partner (B2B) - Crystal Blue */}
              <Button
                size="lg"
                variant="ghost"
                className="bg-transparent border-2 hover:bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base"
                style={{
                  borderColor: "#3F6DCE",
                  color: "#FFFFFF",
                }}
                asChild
              >
                <Link href="#partner" className="flex items-center gap-2">
                  <Handshake className="h-4 w-4" />
                  Become a Partner
                </Link>
              </Button>
            </div>
          </div>

          {/* Images - diagonal triangle layout */}
          <div className="order-2 lg:order-2 mt-8 lg:mt-12 mb-12 lg:mb-6">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-0 lg:mr-8">
              <div className="grid grid-cols-2 gap-2 lg:gap-3">
                {/* Left column - two vertically stacked images */}
                <div className="flex flex-col gap-2 lg:gap-3">
                  {/* Top image */}
                  <div className="relative w-44 h-36 lg:w-52 lg:h-44">
                    <div className="relative h-full rounded-3xl overflow-visible shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                      <Image
                        src="/images/3.png"
                        alt="Modern hardware store with digital inventory management"
                        fill
                        sizes="(max-width: 768px) 176px, 208px"
                        className="object-cover object-center rounded-3xl"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                      {/* Authentic badge */}
                      <div
                        className="absolute -top-3 -right-3 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(8,22,52,0.95), rgba(27,60,138,0.9))",
                          border: "2px solid #F27A2C",
                        }}
                      >
                        <span className="text-[#F27A2C] text-xs font-semibold tracking-wide">
                          Authentic
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom image */}
                  <div className="relative w-44 h-36 lg:w-52 lg:h-44">
                    <div className="relative h-full rounded-3xl overflow-visible shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                      <Image
                        src="/images/2.jpg"
                        alt="Business analytics dashboard showing supply chain data"
                        fill
                        sizes="(max-width: 768px) 176px, 208px"
                        className="object-cover object-center rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                      {/* Convenient badge */}
                      <div
                        className="absolute -bottom-3 -left-3 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(8,22,52,0.95), rgba(27,60,138,0.9))",
                          border: "2px solid #D9A14A",
                        }}
                      >
                        <span className="text-[#D9A14A] text-xs font-semibold tracking-wide">
                          Convenient
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - single centered image */}
                <div className="relative w-56 h-52 lg:w-64 lg:h-64 mt-6 ml-4 lg:ml-8">
                  <div className="relative h-full rounded-xl overflow-visible shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src="/images/1.jpg"
                      alt="Construction materials and hardware delivery truck"
                      fill
                      sizes="(max-width: 768px) 224px, 256px"
                      className="object-cover object-center rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                    {/* Trusted badge */}
                    <div
                      className="absolute -top-3 -right-3 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg"
                      style={{
                          background:
                            "linear-gradient(135deg, rgba(8,22,52,0.95), rgba(27,60,138,0.9))",
                          border: "2px solid #C89B3C",
                        }}
                    >
                      <span className="text-[#C89B3C] text-xs font-semibold tracking-wide">
                        Trusted
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INCUBATED WITH Banner - VERY SLIM */}
      <div className="absolute bottom-0 left-0 right-0 w-full px-4 pb-3 z-10">
        <div
          className="backdrop-blur-lg rounded-xl px-6 shadow-xl"
          style={{
            background: "rgba(8,22,52,0.85)",
            border: "1px solid rgba(200,155,60,0.3)",
            padding: "0.5rem 1.5rem",
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-widest">
              INCUBATED WITH
            </span>
            <Image
              src="/images/t-hub-logo-1-1.png"
              alt="T-Hub Logo"
              width={80}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
