import {
  MousePointerClick,
  UserCheck,
  Eye,
  Download,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Selecione Seu Perfil",
    description: "Escolha entre Pessoa Física ou Empresário",
  },
  {
    icon: Eye,
    title: "Visualize as Planilhas",
    description: "Veja todas as planilhas disponíveis para seu perfil",
  },
  {
    icon: Download,
    title: "Clique para Baixar",
    description: "Faça o download da planilha desejada",
  },
  {
    icon: CheckCircle2,
    title: "Comece a Usar",
    description:
      "Receba o arquivo Excel/Google Sheets e organize suas finanças",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 5 passos simples você já estará organizando suas finanças
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm shadow-elegant">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-card border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
