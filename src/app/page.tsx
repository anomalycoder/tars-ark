import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { InfoSection } from "@/components/landing/info-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyArk } from "@/components/landing/why-ark";
import { CtaSection } from "@/components/landing/cta-section";
import { MissionVision } from "@/components/landing/mission-vision";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ArkSolutionSection } from "@/components/landing/ArkSolutionSection";
import { BuiltForEveryoneSection } from "@/components/landing/BuiltForEveryoneSection";
import { ExperienceStoresSection } from "@/components/landing/ExperienceStoresSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import WhyArkAssuredPage from "@/components/landing/WhyArkAssuredPage";
import OurMarketPage from "@/components/landing/OurMarketPage";
import MissionVisionSection from "@/components/landing/MissionVisionSection";
import ReadyToExperiencePage from "@/components/landing/ReadyToExperiencePage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        
        <Hero />
        <ProblemSection />
        <ArkSolutionSection />
        <BuiltForEveryoneSection />
        <ExperienceStoresSection />
        <HowItWorksSection />
        <WhyArkAssuredPage />
        <OurMarketPage  />
        <MissionVisionSection />
        <ReadyToExperiencePage />
      </main>
      <Footer />
    </div>
  );
}
