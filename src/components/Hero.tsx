// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/planilhas.png";
import banner1 from "@/assets/banner1.jpg"; // Importação mantida

export const Hero = () => {
  const scrollToSpreadsheets = () => {
    document
      .getElementById("spreadsheets")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const banner1Link = "https://pln.brtrk2.com/aff_c?offer_id=9055&aff_id=16469";

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      {/* Conteúdo Principal (Centralizado Verticalmente) */}
      <div className="container mx-auto px-4 py-20 relative z-10 flex-1 flex items-center">
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
              Para Pessoas Físicas e Empresários – Controle total do seu
              dinheiro com apenas alguns cliques
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
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">Planilhas</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  5★
                </div>
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

      {/* Banner 1 Abaixo do Conteúdo Principal */}
      <div className=" max-w-5xl mx-auto px-4 pb-10 relative z-10 flex justify-center">
        <a
          href={banner1Link}
          target="_blank"
          rel="noopener noreferrer"
          // Adicionado: w-full max-w-2xl para definir largura e a animação
          className="block w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-300 animate-floating-pulse"
        >
          <img
            src={banner1}
            // Removido width={500} e substituído por w-full para melhor responsividade
            alt="Peça Já o seu Cartão Carrefour e Aproveite Todos os Benefícios"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>
    </section>
  );
};
