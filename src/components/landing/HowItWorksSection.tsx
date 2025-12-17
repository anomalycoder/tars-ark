"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, ArrowRight, ArrowDown } from "lucide-react";

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"b2b" | "b2c">("b2b");

  return (
    <section id="how-it-works" className="relative w-full py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#3F6DCE]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F27A2C]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3C8A] mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Two journeys. One seamless platform.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl p-1.5 bg-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("b2b")}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "b2b"
                  ? "bg-gradient-to-r from-[#1B3C8A] to-[#3F6DCE] text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Trade Professional (B2B)
            </button>
            <button
              onClick={() => setActiveTab("b2c")}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "b2c"
                  ? "bg-gradient-to-r from-[#F27A2C] to-[#C89B3C] text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Homeowner (B2C)
            </button>
          </div>
        </div>

        {/* B2B Flow */}
        {activeTab === "b2b" && (
          <div className="animate-fadeIn">
            {/* Persona Header */}
            <div className="bg-gradient-to-r from-[#1B3C8A] to-[#3F6DCE] rounded-3xl p-5 mb-8 text-white text-center shadow-xl">
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-1">Meet Vaishnavi - Interior Designer</h3>
              <p className="text-sm sm:text-base text-white/90">Juggling multiple projects and vendor relationships</p>
            </div>

            {/* Flow Row 1 */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <FlowCard
                number={1}
                title="Create Profile"
                description="Registers on ARK Partner App"
                imagePath="/images/3.png"
                color="blue"
              />
              <FlowArrow color="blue" />
              <FlowCard
                number={2}
                title="Get Lead"
                description="Client needs living room redesign"
                imagePath="/images/1.jpg"
                color="blue"
              />
              <FlowArrow color="blue" />
              <FlowCard
                number={3}
                title="Meet Client"
                description="Understands vision & budget"
                imagePath="/images/2.jpg"
                color="blue"
              />
            </div>

            {/* Down Arrow - RIGHT ALIGNED between card 3 and card 4 */}
            <div className="flex justify-center mb-4">
              <div className="w-56"></div> {/* Card 1 width */}
              <div className="w-8"></div> {/* Arrow gap */}
              <div className="w-56"></div> {/* Card 2 width */}
              <div className="w-8"></div> {/* Arrow gap */}
              <div className="w-28 flex justify-center"> {/* Half of card 3 */}
                <ArrowDown className="h-10 w-10 text-[#1B3C8A]" strokeWidth={3} />
              </div>
            </div>

            {/* Flow Row 2 */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <FlowCard
                number={4}
                title="Visit Store"
                description="ARK Experience Store visit"
                imagePath="/images/3.png"
                color="blue"
              />
              <FlowArrow color="blue" />
              <FlowCard
                number={5}
                title="Order Materials"
                description="Best B2B prices, one platform"
                imagePath="/images/1.jpg"
                color="blue"
              />
              <FlowArrow color="blue" />
              <FlowCard
                number={6}
                title="Fast Delivery"
                description="Project completed successfully"
                imagePath="/images/2.jpg"
                color="blue"
              />
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-[#1B3C8A]/10 to-[#3F6DCE]/10 rounded-2xl p-5 border-2 border-[#1B3C8A]/30 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#1B3C8A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline text-lg font-bold text-[#1B3C8A] mb-2">The Result</h4>
                  <p className="text-sm text-slate-700">
                    Vaishnavi focuses on design creativity, not vendor management. Better margins, saved time, happy clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* B2C Flow */}
        {activeTab === "b2c" && (
          <div className="animate-fadeIn">
            {/* Persona Header */}
            <div className="bg-gradient-to-r from-[#F27A2C] to-[#C89B3C] rounded-3xl p-5 mb-8 text-white text-center shadow-xl">
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-1">Meet Raju - Homeowner</h3>
              <p className="text-sm sm:text-base text-white/90">Wants to repaint but overwhelmed by choices</p>
            </div>

            {/* Flow Row 1 */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <FlowCard
                number={1}
                title="Download App"
                description="Opens ARK Assured app"
                imagePath="/images/2.jpg"
                color="orange"
              />
              <FlowArrow color="orange" />
              <FlowCard
                number={2}
                title="Order Samples"
                description="Paint samples to doorstep"
                imagePath="/images/3.png"
                color="orange"
              />
              <FlowArrow color="orange" />
              <FlowCard
                number={3}
                title="Find Painter"
                description="Verified painter with ratings"
                imagePath="/images/1.jpg"
                color="orange"
              />
            </div>

            {/* Down Arrow - RIGHT ALIGNED between card 3 and card 4 */}
            <div className="flex justify-center mb-4">
              <div className="w-56"></div> {/* Card 1 width */}
              <div className="w-8"></div> {/* Arrow gap */}
              <div className="w-56"></div> {/* Card 2 width */}
              <div className="w-8"></div> {/* Arrow gap */}
              <div className="w-28 flex justify-center"> {/* Half of card 3 */}
                <ArrowDown className="h-10 w-10 text-[#F27A2C]" strokeWidth={3} />
              </div>
            </div>

            {/* Flow Row 2 */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <FlowCard
                number={4}
                title="Get Code"
                description="Painter shares OTRC"
                imagePath="/images/2.jpg"
                color="orange"
              />
              <FlowArrow color="orange" />
              <FlowCard
                number={5}
                title="Place Order"
                description="Both get benefits!"
                imagePath="/images/3.png"
                color="orange"
              />
              <FlowArrow color="orange" />
              <FlowCard
                number={6}
                title="Delivery"
                description="Work completed beautifully"
                imagePath="/images/1.jpg"
                color="orange"
              />
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-[#F27A2C]/10 to-[#C89B3C]/10 rounded-2xl p-5 border-2 border-[#F27A2C]/30 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#F27A2C] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline text-lg font-bold text-[#F27A2C] mb-2">The Result</h4>
                  <p className="text-sm text-slate-700">
                    Raju gets genuine materials, trusted service, transparent pricing. Painter earns extra. Win-win-win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Flow Card Component
type FlowCardProps = {
  number: number;
  title: string;
  description: string;
  imagePath: string;
  color: "blue" | "orange";
};

function FlowCard({ number, title, description, imagePath, color }: FlowCardProps) {
  const bgGradient = color === "blue"
    ? "from-[#1B3C8A] to-[#3F6DCE]"
    : "from-[#F27A2C] to-[#C89B3C]";
  
  const borderColor = color === "blue"
    ? "rgba(27,60,138,0.2)"
    : "rgba(242,122,44,0.2)";

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 group hover:scale-105 w-56"
      style={{ borderColor }}
    >
      {/* Smaller Image */}
      <div className="relative h-24 w-full overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Number Badge */}
        <div className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br ${bgGradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
          {number}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-3">
        <h4 className="font-headline text-sm font-bold text-[#1B3C8A] mb-1">
          {title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// Flow Arrow Right
type FlowArrowProps = {
  color: "blue" | "orange";
};

function FlowArrow({ color }: FlowArrowProps) {
  const arrowColor = color === "blue" ? "#1B3C8A" : "#F27A2C";
  
  return (
    <div className="flex items-center">
      <ArrowRight className="h-8 w-8" style={{ color: arrowColor }} strokeWidth={3} />
    </div>
  );
}
