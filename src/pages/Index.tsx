import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductSection from "@/components/ProductSection";
import DeveloperSection from "@/components/DeveloperSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnnouncementBar />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <HowItWorksSection />
      <DeveloperSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
