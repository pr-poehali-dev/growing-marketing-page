import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import AboutSpeakerSection from "@/components/AboutSpeakerSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import TicketPurchaseSection from "@/components/TicketPurchaseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProgramSection />
      <AboutSpeakerSection />
      <WhatYouGetSection />
      <TicketPurchaseSection />
      <Footer />
    </div>
  );
};

export default Index;