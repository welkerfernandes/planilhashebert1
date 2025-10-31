// src/pages/Index.tsx
import { Hero } from "@/components/Hero";
import { SpreadsheetsSection } from "@/components/SpreadsheetsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SpreadsheetsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
