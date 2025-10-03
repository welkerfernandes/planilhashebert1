import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, LucideIcon } from "lucide-react";

interface SpreadsheetCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category: "fisica" | "empresario";
}

export const SpreadsheetCard = ({ icon: Icon, title, description, category }: SpreadsheetCardProps) => {
  const handleDownload = () => {
    // Aqui você implementaria a lógica de download real
    alert(`Download iniciado: ${title}`);
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          onClick={handleDownload}
        >
          <Download className="mr-2 w-4 h-4" />
          Baixar Planilha
        </Button>
      </CardContent>
    </Card>
  );
};
