"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Store, 
  Package, 
  TrendingDown, 
  CreditCard, 
  Truck, 
  Share2,
  Home,
  ShieldCheck,
  IndianRupee,
  Users,
  Scan
} from "lucide-react";
import Link from "next/link";

export function BuiltForEveryoneSection() {
  const [activeTab, setActiveTab] = useState<"b2b" | "b2c">("b2b");

  return (
    <section id="built-for-everyone" className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#3F6DCE]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F27A2C]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3C8A] mb-4">
            BUILT FOR EVERYONE
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you&apos;re a professional or a homeowner, ARK has you covered
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl p-1.5 bg-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("b2b")}
              className={`px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                activeTab === "b2b"
                  ? "bg-gradient-to-r from-[#1B3C8A] to-[#3F6DCE] text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              ARK Partner (B2B)
            </button>
            <button
              onClick={() => setActiveTab("b2c")}
              className={`px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                activeTab === "b2c"
                  ? "bg-gradient-to-r from-[#F27A2C] to-[#C89B3C] text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              ARK Assured (B2C)
            </button>
          </div>
        </div>

        {/* B2B Content */}
        {activeTab === "b2b" && (
          <div className="animate-fadeIn">
            {/* Hero Card */}
            <div className="bg-gradient-to-br from-[#1B3C8A] to-[#0F275A] rounded-3xl p-8 md:p-10 mb-8 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#FDE7C0] mb-2">
                For Trade Professionals
              </p>
              <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Architects, Interior Designers, Carpenters & Builders
              </h3>
              <p className="text-lg text-slate-200 max-w-3xl">
                Transform your business with digital tools, better margins, and seamless material sourcing—all in one platform.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <FeatureCard
                icon={Store}
                title="Create Your Digital Storefront"
                description="Get a professional online profile that generates qualified leads automatically while you focus on your craft."
                color="blue"
              />
              <FeatureCard
                icon={Package}
                title="One Platform, Every Material"
                description="Stop juggling multiple suppliers. Access plywood, paints, adhesives, panels, electricals, and more from a single source."
                color="blue"
              />
              <FeatureCard
                icon={TrendingDown}
                title="Unbeatable B2B Pricing"
                description="Get materials at rates lower than retail, with margins that actually let you grow your business profitably."
                color="blue"
              />
              <FeatureCard
                icon={CreditCard}
                title="Credit When You Need It"
                description="Access flexible credit options through our NBFC partnerships. Focus on projects, not cash flow."
                color="blue"
              />
              <FeatureCard
                icon={Truck}
                title="Fast, Convenient Delivery"
                description="Same-day to next-day delivery on most orders. Your time is valuable; we respect that."
                color="blue"
              />
              <FeatureCard
                icon={Share2}
                title="Earn Through Referrals"
                description="Share your unique referral code with clients and earn commission on every order. Turn your network into income."
                color="blue"
              />
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="px-10 py-6 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #1B3C8A 0%, #3F6DCE 100%)",
                  color: "#FFFFFF",
                }}
                asChild
              >
                <Link href="#register-partner">Register as ARK Partner</Link>
              </Button>
            </div>
          </div>
        )}

        {/* B2C Content */}
        {activeTab === "b2c" && (
          <div className="animate-fadeIn">
            {/* Hero Card */}
            <div className="bg-gradient-to-br from-[#F27A2C] to-[#C89B3C] rounded-3xl p-8 md:p-10 mb-8 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#FFF5E1] mb-2">
                For Homeowners
              </p>
              <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Property Owners & DIY Enthusiasts
              </h3>
              <p className="text-lg text-white/90 max-w-3xl">
                Everything you need for your dream home—genuine products, best prices, and trusted professionals—all in one place.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <FeatureCard
                icon={Home}
                title="Every Product, Every Brand, One Platform"
                description="No more visiting 10 different shops. Find everything from foundation to finishing in one place."
                color="orange"
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Genuine Products, Guaranteed"
                description="Sleep easy knowing every product is sourced directly from authorized brands. Zero risk of duplicates or substandard materials."
                color="orange"
              />
              <FeatureCard
                icon={IndianRupee}
                title="Best Prices, No Haggling"
                description="By eliminating middlemen, we pass the savings directly to you. What you see is what you pay—the best price, period."
                color="orange"
              />
              <FeatureCard
                icon={Truck}
                title="Doorstep Delivery, Always"
                description="Heavy cement bags? Bulky plywood sheets? We deliver everything to your doorstep, carefully and on time."
                color="orange"
              />
              <FeatureCard
                icon={Users}
                title="Find Trusted Professionals Nearby"
                description="Need a carpenter? Interior designer? Builder? Access verified professionals through the app, complete with ratings and past work."
                color="orange"
              />
              <FeatureCard
                icon={Scan}
                title="Try Before You Buy"
                description="Book product samples to your home or visit our Experience Stores to touch, feel, and finalize your choices before committing."
                color="orange"
              />
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="px-10 py-6 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #F27A2C 0%, #C89B3C 100%)",
                  color: "#FFFFFF",
                }}
                asChild
              >
                <Link href="#shop">Start Shopping Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Feature Card Component
type FeatureCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: "blue" | "orange";
};

function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const gradientClass = color === "blue" 
    ? "from-[#1B3C8A] to-[#3F6DCE]" 
    : "from-[#F27A2C] to-[#C89B3C]";
  
  const borderColor = color === "blue" 
    ? "rgba(27,60,138,0.2)" 
    : "rgba(242,122,44,0.2)";

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:scale-[1.02]"
      style={{ borderColor }}
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} mb-4 shadow-md`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h4 className="font-headline text-lg font-bold text-[#1B3C8A] mb-3">
        {title}
      </h4>
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
