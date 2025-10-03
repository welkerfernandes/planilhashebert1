import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

export const Hero = () => {
  const scrollToSpreadsheets = () => {
    document.getElementById("spreadsheets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Baixe Planilhas Financeiras{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Grátis
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Para Pessoas Físicas e Empresários – Controle total do seu dinheiro com apenas alguns cliques
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToSpreadsheets}
                className="text-lg group"
              >
                Baixar Agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg"
              >
                Como Funciona
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-muted-foreground">Planilhas</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">5★</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-20 rounded-full" />
            <img 
              src={heroImage} 
              alt="Planilhas financeiras modernas" 
              className="relative rounded-2xl shadow-glow w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
