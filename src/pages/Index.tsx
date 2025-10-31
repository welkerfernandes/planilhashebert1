// src/pages/Index.tsx
import { Hero } from "@/components/Hero";
import { SpreadsheetsSection } from "@/components/SpreadsheetsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WelcomeModals } from "@/components/WelcomeModals"; // ADICIONADO

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SpreadsheetsSection />
      <CTASection />
      <Footer />
      {/* O novo componente de modais sequenciais é adicionado aqui */}
      <WelcomeModals />
    </div>
  );
};

export default Index;
