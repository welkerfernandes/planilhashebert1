import { SpreadsheetCard } from "./SpreadsheetCard";
import { 
  TrendingUp, 
  Wallet, 
  BarChart3, 
  FileText, 
  Droplets, 
  DollarSign 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SpreadsheetsSection = () => {
  const pessoaFisicaSpreadsheets = [
    {
      icon: TrendingUp,
      title: "Análise de Investimento em Renda Fixa",
      description: "Acompanhe seus investimentos em títulos de renda fixa e calcule rentabilidade"
    },
    {
      icon: Wallet,
      title: "Controle de Gastos Mensais",
      description: "Organize todas as suas despesas mensais e identifique oportunidades de economia"
    },
  ];

  const empresarioSpreadsheets = [
    {
      icon: BarChart3,
      title: "Balanço Patrimonial",
      description: "Visualize a situação patrimonial da sua empresa de forma clara e objetiva"
    },
    {
      icon: FileText,
      title: "DRE - Analítico e Sintético",
      description: "Demonstre o resultado do exercício com versões analítica e sintética"
    },
    {
      icon: Droplets,
      title: "Análise de Liquidez Financeira",
      description: "Avalie a capacidade de pagamento de curto prazo da sua empresa"
    },
    {
      icon: DollarSign,
      title: "Fluxo de Caixa",
      description: "Controle entradas e saídas de dinheiro e projete seu fluxo financeiro"
    },
  ];

  return (
    <section id="spreadsheets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planilhas Para Cada Necessidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o perfil que melhor se adequa às suas necessidades e acesse planilhas desenvolvidas especialmente para você
          </p>
        </div>

        <Tabs defaultValue="fisica" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="fisica" className="text-base">Pessoa Física</TabsTrigger>
            <TabsTrigger value="empresario" className="text-base">Empresário</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fisica" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pessoaFisicaSpreadsheets.map((spreadsheet, index) => (
                <SpreadsheetCard key={index} {...spreadsheet} category="fisica" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="empresario" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {empresarioSpreadsheets.map((spreadsheet, index) => (
                <SpreadsheetCard key={index} {...spreadsheet} category="empresario" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
