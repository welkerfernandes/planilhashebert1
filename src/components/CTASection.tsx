// src/components/CTASection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Gift } from "lucide-react";
import banner2 from "@/assets/banner2.jpg"; // Adicionado: Importação da imagem

export const CTASection = () => {
  const scrollToSpreadsheets = () => {
    document
      .getElementById("spreadsheets")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const banner2Link = "https://pln.brtrk2.com/aff_c?offer_id=9056&aff_id=16469"; // Adicionado: Link de afiliação

  return (
    <>
      {" "}
      {/* Usando um fragmento para incluir o banner antes da seção */}
      {/* NOVO: Banner 2 Acima da Seção CTA (Centralizado e Flutuante) */}
      <div className="max-w-5xl mx-auto px-4 pt-10 relative z-10 flex justify-center">
        <center>
          <a
            href={banner2Link}
            target="_blank"
            rel="noopener noreferrer"
            // Animação e estilo para centralização
            className="block w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-300 animate-floating-pulse"
          >
            <img
              src={banner2}
              width={300}
              alt="Garanta Seu Cartão Atacadão On-line e em Poucos Minutos."
              className=" h-auto object-cover"
            />
          </a>
        </center>
      </div>
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-3xl shadow-elegant p-8 md:p-12 text-center border border-primary/10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Organize Suas Finanças e Tome Decisões Inteligentes
              </h2>

              <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up">
                Sem custo algum! Comece agora mesmo a controlar melhor seu
                dinheiro
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center gap-2 animate-fade-in-up">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Gift className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-semibold">100% Gratuito</p>
                </div>

                <div
                  className="flex flex-col items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-semibold">Download Instantâneo</p>
                </div>

                <div
                  className="flex flex-col items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-semibold">100% Seguro</p>
                </div>
              </div>

              <Button
                variant="cta"
                size="lg"
                onClick={scrollToSpreadsheets}
                className="text-lg animate-fade-in-up group"
                style={{ animationDelay: "300ms" }}
              >
                Baixar Minhas Planilhas Agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
